import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const deletesection = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const section = await prisma.section.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!section) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    try {
      const deletesection = await prisma.section.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Section deleted successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Section deleting error' }),
        { status: 400 }
      );
    }
  }
};
