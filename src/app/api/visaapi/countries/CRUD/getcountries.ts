import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const getcountries = async (req: Request) => {
  try {
    const countries = await prisma.countries.findMany({
      include: {
        tag: true, // Include data from the TagType model
        visaRequirement:true,
        travelitinerary:true,
        // Add other relations if needed
      },
    });
    return new NextResponse(JSON.stringify({ countries }), {
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

export const getcountriesbyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const country = await prisma.countries.findUnique({
    include: {
      tag: true, // Include data from the TagType model
      visaRequirement:true,
      travelitinerary:true,
      // Add other relations if needed
    },
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!country) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ country }), { status: 200 });
  }
};

export const getcountriesbytitle = async (
  req: Request,
  { params }: { params: Params }
) => {
  const title = params.title;
  const country = await prisma.countries.findFirst({
    where: {
      title,
    },
  });
  if (!country) {
    return new NextResponse(JSON.stringify({ error: 'title not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ country }), { status: 200 });
  }
};
