import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const updatesection = async (
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
    const body = await req.json();
    const { title,description, serviceid } = body;
    console.log(body);
    try {
      const existingserviceid = await prisma.services.findUnique({
        where: {
          id: parseInt(serviceid, 10),
        },
      });

      if (!existingserviceid) {
        return new NextResponse(
          JSON.stringify({ error: 'ServiceId does not exists' }),
          {
            status: 400,
          }
        );
      }

      const updatesection = await prisma.section.update({
        where: {
          id: parseInt(id, 10),
        },
        data: {title, description, serviceid },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Section updated successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Section updating error' }),
        { status: 400 }
      );
    }
  }
};
