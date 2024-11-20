import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  // SELECT * FROM users WHERE email = 'emasd'
  const gameMap = await prisma.gameMap.findMany();
  return NextResponse.json(gameMap);
}