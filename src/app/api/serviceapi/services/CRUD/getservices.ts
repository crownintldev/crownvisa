import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const getservices = async (req: Request) => {
  try {
    const services = await prisma.services.findMany({
      include: {
        category: true, // Include data from the TagType model
        // Add other relations if needed
      },
    });
    return new NextResponse(JSON.stringify({ services }), {
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

export const getservicesbyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const services = await prisma.services.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!services) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ services }), { status: 200 });
  }
};