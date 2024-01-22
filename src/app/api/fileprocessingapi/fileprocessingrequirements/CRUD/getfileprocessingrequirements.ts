import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const getfileprocessingrequirements = async (req: Request) => {
  try {
    const fileprocessingRequirements = await prisma.fileProcessingRequirements.findMany({
      include: {
        fileprocessing: true, // Include data from the TagType model
        // Add other relations if needed
      },
    });
    return new NextResponse(JSON.stringify({ fileprocessingRequirements }), {
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

export const getfileprocessingrequirementsbyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const fileprocessingRequirements = await prisma.fileProcessingRequirements.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!fileprocessingRequirements) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ fileprocessingRequirements }), {
      status: 200,
    });
  }
};

export const getfileprocessingrequirementsbycountryid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.countryid;
  const fileprocessingRequirements = await prisma.fileProcessingRequirements.findMany({
    where: {
      countryid: parseInt(id, 10),
    },
  });
  if (!fileprocessingRequirements) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ fileprocessingRequirements }), {
      status: 200,
    });
  }
};