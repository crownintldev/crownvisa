import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const deletefileprocessingrequirements = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const fileprocessingRequirements = await prisma.fileProcessingRequirements.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!fileprocessingRequirements) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    try {
      const deletefileprocessingrequirement = await prisma.fileProcessingRequirements.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
      return new NextResponse(
        JSON.stringify({ error: 'fileprocessing Requirement deleted successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'fileprocessing Requirement deleting error' }),
        { status: 400 }
      );
    }
  }
};
