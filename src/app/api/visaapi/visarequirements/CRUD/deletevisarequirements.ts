import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const deletevisarequirements = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const visaRequirements = await prisma.visaRequirements.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!visaRequirements) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    try {
      const deletevisarequirement = await prisma.visaRequirements.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Visa Requirement deleted successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Visa Requirement deleting error' }),
        { status: 400 }
      );
    }
  }
};
