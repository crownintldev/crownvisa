import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const updateservicecategory = async (
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
    const body = await req.json();
    const { title } = body;
    console.log(body);
    try {
      const updateservicecategory = await prisma.serviceCategory.update({
        where: {
          id: parseInt(id, 10),
        },
        data: { title },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Service Category updated successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Service Category updating error' }),
        { status: 400 }
      );
    }
  }
};
