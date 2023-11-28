import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const postuser = async (req: Request) => {
  const body = await req.json();
  const { username, email, password, phonenumber } = body;
  console.log(body);
  try {
    const existingUser = await prisma.human.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ error: 'User already exists' }),
        {
          status: 400,
        }
      );
    }
    const newUser = await prisma.human.create({
      data: { username, email, password, phonenumber },
    });
    return new NextResponse(
      JSON.stringify({ error: 'User created successfully' }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ error: 'User creating error' }), {
      status: 400,
    });
  }
};
