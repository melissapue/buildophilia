import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// fallback to direct cookie parsing via req.headers.get()
type MeResponseBody =
  | { error: string }
  | { user: { id: string; email: string; name: string | null } };

export async function GET(req: Request): Promise<NextResponse<MeResponseBody>> {
  try {
    // fallback
    const cookieHeader = req.headers.get('cookie') || '';
    const session = cookieHeader
      .split(';')
      .map((c) => c.trim())
      .find((c) => c.startsWith('session='))
      ?.split('=')[1];

    if (!session) {
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session },
      select: { id: true, email: true, name: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Something went wrong';
    console.error('❌ /api/me error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
