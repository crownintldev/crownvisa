import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const deleteCountry = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const country = await prisma.countries.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!country) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    try {
      const deletecountry = await prisma.countries.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Country deleted successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Country deleting error' }),
        { status: 400 }
      );
    }
  }
};
