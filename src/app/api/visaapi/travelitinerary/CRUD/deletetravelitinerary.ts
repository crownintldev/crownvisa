import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const deletetravelitinerary = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const travelItinerary = await prisma.travelItinerary.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!travelItinerary) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    try {
      const deletetravelItinerary = await prisma.travelItinerary.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Travel Itinerary deleted successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Travel Itinerary deleting error' }),
        { status: 400 }
      );
    }
  }
};
