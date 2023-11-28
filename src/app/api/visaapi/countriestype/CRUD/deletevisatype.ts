import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const deletevisatype = async (
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
    try {
      const deletecountrytype = await prisma.tagType.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Country Type deleted successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Country Type deleting error' }),
        { status: 400 }
      );
    }
  }
};
