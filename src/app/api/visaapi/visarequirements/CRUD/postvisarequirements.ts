import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const postvisarequirements = async (req: Request) => {
  const body = await req.json();
  const { title, description, countryid } = body;
  console.log(body);
  try {
    const existingvisarequirement = await prisma.visaRequirements.findFirst({
      where: { title: title },
    });
    if (existingvisarequirement) {
      return new NextResponse(
        JSON.stringify({ error: 'Visa Requirement already exists' }),
        {
          status: 400,
        }
      );
    }
    const newvisarequirement = await prisma.visaRequirements.create({
      data: { title, description, countryid },
    });
    return new NextResponse(
      JSON.stringify({ error: 'Visa Requirement created successfully' }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: 'Visa Requirement creating error' }),
      { status: 400 }
    );
  }
};
