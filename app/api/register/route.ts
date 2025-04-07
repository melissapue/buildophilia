import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const prisma = new PrismaClient();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().optional(),
});

type RegisterResponseBody =
  | { error: string }
  | {
      message: string;
      user: { id: string; email: string; name: string | null };
    };

export async function POST(
  req: Request,
): Promise<NextResponse<RegisterResponseBody>> {
  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: JSON.stringify(parsed.error.format()) },
        { status: 400 },
      );
    }

    const { email, password, name } = parsed.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 },
      );
    }

    const passwordHash = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        name,
      },
    });

    console.log('✅ New user registered & logged in:', user.email);

    const response = NextResponse.json({
      message: 'User created and logged in',
      user: {
        id: user.id,
        email: user.email,
        name: user.name ?? null,
      },
    });

    response.cookies.set('session', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Internal server error';
    console.error('REGISTER ERROR:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
