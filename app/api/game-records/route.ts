import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  // SELECT * FROM users WHERE email = 'emasd'
  const gameRecords = await prisma.gameRecords.findMany();
  return NextResponse.json(gameRecords);
}