import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const updatevisarequirements = async (
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
    const body = await req.json();
    const { description, countryid } = body;
    console.log(body);
    try {
      const existingcountryid = await prisma.countries.findUnique({
        where: {
          id: parseInt(countryid, 10),
        },
      });

      if (!existingcountryid) {
        return new NextResponse(
          JSON.stringify({ error: 'countryId does not exists' }),
          {
            status: 400,
          }
        );
      }

      const updatevisarequirement = await prisma.visaRequirements.update({
        where: {
          id: parseInt(id, 10),
        },
        data: { description, countryid },
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
