import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const getvisarequirements = async (req: Request) => {
  try {
    const visaRequirements = await prisma.visaRequirements.findMany({
      include: {
        countries: true, // Include data from the TagType model
        // Add other relations if needed
      },
    });
    return new NextResponse(JSON.stringify({ visaRequirements }), {
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

export const getvisarequirementsbyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const visaRequirements = await prisma.visaRequirements.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!visaRequirements) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ visaRequirements }), {
      status: 200,
    });
  }
};

export const getvisarequirementsbycountryid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.countryid;
  const visaRequirements = await prisma.visaRequirements.findMany({
    where: {
      countryid: parseInt(id, 10),
    },
  });
  if (!visaRequirements) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ visaRequirements }), {
      status: 200,
    });
  }
};