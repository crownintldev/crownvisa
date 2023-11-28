import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const getvisatype = async (req: Request) => {
  try {
    const countrytype = await prisma.tagType.findMany({});
    return new NextResponse(JSON.stringify({ countrytype }), {
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

export const getvistypebyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const countrytype = await prisma.tagType.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!countrytype) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ countrytype }), { status: 200 });
  }
};
