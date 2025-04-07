import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { parseFallbackText } from '../../../lib/parseFallback';

const prisma = new PrismaClient();

const formSchema = z.object({
  userId: z.string(),
  mood: z.string(),
  description: z.string(),
  audience: z.string(),
  tone: z.string(),
});

type GenerateResponseBody =
  | { error: string }
  | { message: string; result: Record<string, any> };

export async function POST(
  req: Request,
): Promise<NextResponse<GenerateResponseBody>> {
  try {
    const body = await req.json();
    const parsed = formSchema.safeParse(body);

    if (!parsed.success) {
      console.error('🧪 ZOD ERROR:', parsed.error.format());
      return NextResponse.json(
        { error: JSON.stringify(parsed.error.format()) },
        { status: 400 },
      );
    }

    const { userId, mood } = parsed.data;

    console.warn('⚠️ Skipping OpenAI — using fallback content!');

    const content = `
1. Hex & Co.
2. Turning chaos into clarity — one spell at a time.
3. Mystical, precise, bold
4. Born from a late-night idea and the need to express something real.
5. You turn fuzzy founder thoughts into bold clarity.
6. ritual, founders, transformation
    `.trim();

    const { brandName, tagline, tone, origin, powerStatement, keywords } =
      parseFallbackText(content);

    const result = await prisma.result.create({
      data: {
        userId,
        mood,
        brandName,
        tagline,
        tone,
        origin,
        powerStatement,
        keywords,
      },
    });

    console.log('✅ Result saved to DB:', result.id);

    return NextResponse.json({
      message: 'Generated and saved (fallback)',
      result,
    });
  } catch (error: unknown) {
    const message = (error as Error).message;
    console.error('❌ GENERATE ERROR:', message);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
