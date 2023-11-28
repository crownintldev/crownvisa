import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Params } from '../../params';
const prisma = new PrismaClient();

export const deleteuser = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const user = await prisma.human.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!user) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    try {
      const deleteuser = await prisma.human.delete({
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
