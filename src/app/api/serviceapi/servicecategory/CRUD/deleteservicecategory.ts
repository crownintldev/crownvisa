import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const deleteservicecategory = async (
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
    try {
      const deleteservicecategory = await prisma.serviceCategory.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Service Category deleted successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Service Category deleting error' }),
        { status: 400 }
      );
    }
  }
};
