import { Params } from '@/app/api/params';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const updatebox = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const box = await prisma.box.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!box) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
    const body = await req.json();
    const {image, title,description, serviceid } = body;
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

      const updatebox = await prisma.box.update({
        where: {
          id: parseInt(id, 10),
        },
        data: {image,title, description, serviceid },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Box updated successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Box updating error' }),
        { status: 400 }
      );
    }
  }
};