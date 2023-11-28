import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const postvisatype = async (req: Request) => {
  const body = await req.json();
  const { title } = body;
  console.log(body);
  try {
    const existingcountrytype = await prisma.tagType.findFirst({
      where: { title: title },
    });
    if (existingcountrytype) {
      return new NextResponse(
        JSON.stringify({ error: 'Country Type already exists' }),
        {
          status: 400,
        }
      );
    }
    const newcountrytype = await prisma.tagType.create({
      data: { title },
    });
    return new NextResponse(
      JSON.stringify({ error: 'Country Type created successfully' }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: 'Country Type creating error' }),
      { status: 400 }
    );
  }
};
