import { NextResponse } from 'next/server';

type LogoutResponseBody = { message: string };

export function POST(): NextResponse<LogoutResponseBody> {
  const response = NextResponse.json({ message: 'Logged out successfully' });

  response.cookies.set('session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
