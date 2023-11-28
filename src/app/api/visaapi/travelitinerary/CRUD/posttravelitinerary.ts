import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const posttravelitinerary = async (req: Request) => {
  const body = await req.json();
  const { title, description, countryid } = body;
  console.log(body);
  try {
    const newtravelitinerary = await prisma.travelItinerary.create({
      data: { title, description, countryid },
    });
    return new NextResponse(
      JSON.stringify({ error: 'Travel Itinerary created successfully' }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: 'Travel Itinerary creating error' }),
      { status: 400 }
    );
  }
};
