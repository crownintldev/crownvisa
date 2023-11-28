import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const getservicecategory = async (req: Request) => {
  try {
    const visacategory = await prisma.serviceCategory.findMany({});
    return new NextResponse(JSON.stringify({ visacategory }), {
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

export const getservicecategorybyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const servicecategory = await prisma.serviceCategory.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!servicecategory) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ servicecategory }), { status: 200 });
  }
};
