import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const postfileprocessingtravelitinerary = async (req: Request) => {
  const body = await req.json();
  const { title, description, countryid } = body;
  console.log(body);
  try {
    const newfileprocessingtravelitinerary = await prisma.fileProcessingTravelItinerary.create({
      data: { title, description, countryid },
    });
    return new NextResponse(
      JSON.stringify({ error: 'fileprocessing Travel Itinerary created successfully' }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: 'fileprocessing Travel Itinerary creating error' }),
      { status: 400 }
    );
  }
};
