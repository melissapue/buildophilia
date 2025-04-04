import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const prisma = new PrismaClient();

const formSchema = z.object({
  userId: z.string(),
  mood: z.string(),
  description: z.string(),
  audience: z.string(),
  tone: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = formSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.format() },
        { status: 400 },
      );
    }

    const { userId, mood, description, audience, tone } = parsed.data;

    // 🧠 Construct your prompt
    const prompt = `
You are a brand strategist AI. Based on the info below, generate:

1. A bold brand name
2. A one-line tagline
3. A tone description
4. A short brand origin paragraph
5. A short power statement
6. 3–5 brand keywords

Input:
- Mood: ${mood}
- Description: ${description}
- Audience: ${audience}
- Tone: ${tone}
`;

    // 🔑 Your OpenAI key should be in .env
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing OpenAI API key' },
        { status: 500 },
      );
    }

    // 🧠 Call OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();

    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 },
      );
    }

    // 👀 You’ll want to parse this better later — for now, just return it
    const result = await prisma.result.create({
      data: {
        userId,
        mood,
        brandName: 'To Be Parsed', // You’ll parse from OpenAI later
        tagline: 'To Be Parsed',
        tone: 'To Be Parsed',
        origin: content,
        powerStatement: 'To Be Parsed',
        keywords: ['To', 'Be', 'Parsed'],
      },
    });

    return NextResponse.json({ message: 'Generated and saved', content });
  } catch (error) {
    console.error('GENERATE ERROR:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
