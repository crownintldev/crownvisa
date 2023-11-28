import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const updatevisatype = async (
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
    const body = await req.json();
    const { title } = body;
    console.log(body);
    try {
      const updatecountrytype = await prisma.tagType.update({
        where: {
          id: parseInt(id, 10),
        },
        data: { title },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Country Type updated successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Country Type updating error' }),
        { status: 400 }
      );
    }
  }
};
