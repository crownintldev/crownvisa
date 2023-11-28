import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const getsection = async (req: Request) => {
  try {
    const section = await prisma.section.findMany({
      include: {
        services: true, // Include data from the TagType model
        // Add other relations if needed
      },
    });
    return new NextResponse(JSON.stringify({ section }), {
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

export const getsectionbyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const section = await prisma.section.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!section) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ section }), {
      status: 200,
    });
  }
};
