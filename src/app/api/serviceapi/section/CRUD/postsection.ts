import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const postsection = async (req: Request) => {
  const body = await req.json();
  const { title, description, serviceid } = body;
  console.log(body);
  try {
    const existingsection = await prisma.section.findFirst({
      where: { title: title },
    });
    if (existingsection) {
      return new NextResponse(
        JSON.stringify({ error: 'Section already exists' }),
        {
          status: 400,
        }
      );
    }
    const newsection = await prisma.section.create({
      data: { title, description, serviceid },
    });
    return new NextResponse(
      JSON.stringify({ error: 'Section created successfully' }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: 'Section creating error' }),
      { status: 400 }
    );
  }
};
