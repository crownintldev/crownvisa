import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const postbox = async (req: Request) => {
  const body = await req.json();
  const { image,title, description, serviceid } = body;
  console.log(body);
  try {
    const existingbox = await prisma.box.findFirst({
      where: { title: title },
    });
    if (existingbox) {
      return new NextResponse(
        JSON.stringify({ error: 'Box already exists' }),
        {
          status: 400,
        }
      );
    }
    const newbox = await prisma.box.create({
      data: {image, title, description, serviceid },
    });
    return new NextResponse(
      JSON.stringify({ error: 'Box created successfully' }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: 'Box creating error' }),
      { status: 400 }
    );
  }
};