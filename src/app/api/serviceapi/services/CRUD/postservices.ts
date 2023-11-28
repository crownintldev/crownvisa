import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const postservices = async (req: Request) => {
  const body = await req.json();
  console.log(body);
  const { title, metadata, categoryid } = body;
  try {
    const existingservices = await prisma.services.findFirst({
      where: { title: title },
    });
    if (existingservices) {
      return new NextResponse(
        JSON.stringify({ error: 'Service already exists' }),
        {
          status: 400,
        }
      );
    }
    const existingservicecategoryid = await prisma.serviceCategory.findUnique({
      where: {
        id: parseInt(categoryid, 10),
      },
    });
    if (!existingservicecategoryid) {
      return new NextResponse(
        JSON.stringify({ error: 'serviceId does not exists' }),
        {
          status: 400,
        }
      );
    }
    const newservices = await prisma.services.create({
      data: { title, metadata, categoryid },
    });
    return new NextResponse(
      JSON.stringify({ error: 'Services created successfully' }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: 'Services creating error' }),
      { status: 400 }
    );
  }
};
