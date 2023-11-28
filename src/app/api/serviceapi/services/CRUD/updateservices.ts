import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const updateservices = async (
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
    const body = await req.json();
    console.log(body);
    const { title, metadata, categoryid } = body;
    try {
      const existingservicecategoryid = await prisma.serviceCategory.findUnique({
        where: {
          id: parseInt(categoryid, 10),
        },
      });

      if (!existingservicecategoryid) {
        return new NextResponse(
          JSON.stringify({ error: 'Service Category does not exists' }),
          {
            status: 400,
          }
        );
      }
      const updateservices = await prisma.services.update({
        where: {
          id: parseInt(id, 10),
        },
        data: { title, metadata, categoryid },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Service updated successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Service updating error' }),
        { status: 400 }
      );
    }
  }
};
