import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const deleteservices = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const services = await prisma.services.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!services) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    try {
      const deleteservices = await prisma.services.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Service deleted successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Service deleting error' }),
        { status: 400 }
      );
    }
  }
};
