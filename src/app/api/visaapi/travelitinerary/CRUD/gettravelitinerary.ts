import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const gettravelitinerary = async (req: Request) => {
  try {
    const travelItinerary = await prisma.travelItinerary.findMany({
      include: {
        countries: true, // Include data from the TagType model
        // Add other relations if needed
      },
    });
    return new NextResponse(JSON.stringify({ travelItinerary }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'An error occurred while fetching the data' }),
      {
        status: 400,
      }
    );
  }
};

export const gettravelitinerarybyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const travelItinerary = await prisma.travelItinerary.findMany({
    where: {
      countryid: parseInt(id, 10),
    },
    orderBy: {
      id: 'asc', // or 'desc' for descending order
    },
  });
  if (!travelItinerary) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ travelItinerary }), {
      status: 200,
    });
  }
};
