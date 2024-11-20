import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  // SELECT * FROM users WHERE email = 'emasd'
  const gameName = await prisma.gameName.findMany();
  return NextResponse.json(gameName);
}