import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const getfileprocessingtravelitinerary = async (req: Request) => {
  try {
    const fileprocessingtravelItinerary = await prisma.fileProcessingTravelItinerary.findMany({
      include: {
        fileprocessing: true, // Include data from the TagType model
        // Add other relations if needed
      },
    });
    return new NextResponse(JSON.stringify({ fileprocessingtravelItinerary }), {
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

export const getfileprocessingtravelitinerarybyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const fileprocessingtravelItinerary = await prisma.fileProcessingTravelItinerary.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!fileprocessingtravelItinerary) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ fileprocessingtravelItinerary }), {
      status: 200,
    });
  }
};

export const getfileprocessingtravelitinerarybycountryid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.countryid;
  const fileprocessingtravelItinerary = await prisma.fileProcessingTravelItinerary.findMany({
    where: {
      countryid: parseInt(id, 10),
    },
    orderBy: {
      id: 'asc', // or 'desc' for descending order
    },
  });
  if (!fileprocessingtravelItinerary) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ fileprocessingtravelItinerary }), {
      status: 200,
    });
  }
};
