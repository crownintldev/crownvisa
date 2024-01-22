import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const updatefileprocessingrequirements = async (
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
    const body = await req.json();
    const { title,description, countryid } = body;
    console.log(body);
    try {
      const existingfileprocessingid = await prisma.fileProcessing.findUnique({
        where: {
          id: parseInt(countryid, 10),
        },
      });

      if (!existingfileprocessingid) {
        return new NextResponse(
          JSON.stringify({ error: 'countryId does not exists' }),
          {
            status: 400,
          }
        );
      }

      const updatefileprocessingrequirement = await prisma.fileProcessingRequirements.update({
        where: {
          id: parseInt(id, 10),
        },
        data: { title,description, countryid },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Visa Requirement successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Visa Requirement updating error' }),
        { status: 400 }
      );
    }
  }
};
