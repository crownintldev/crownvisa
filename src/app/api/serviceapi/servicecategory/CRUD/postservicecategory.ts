import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const postservicecategory = async (req: Request) => {
  const body = await req.json();
  const { title } = body;
  console.log(body);
  try {
    const existingservicecategory = await prisma.serviceCategory.findFirst({
      where: { title: title },
    });
    if (existingservicecategory) {
      return new NextResponse(
        JSON.stringify({ error: 'Service Category already exists' }),
        {
          status: 400,
        }
      );
    }
    const newservicecategory = await prisma.serviceCategory.create({
      data: { title },
    });
    return new NextResponse(
      JSON.stringify({ error: 'Service Category created successfully' }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: 'Service Category creating error' }),
      { status: 400 }
    );
  }
};