import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const deletefileprocessingtravelitinerary = async (
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
    try {
      const deletefileprocessingtravelItinerary = await prisma.fileProcessingTravelItinerary.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
      return new NextResponse(
        JSON.stringify({ error: 'fileprocessing Travel Itinerary deleted successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'fileprocessing Travel Itinerary deleting error' }),
        { status: 400 }
      );
    }
  }
};
