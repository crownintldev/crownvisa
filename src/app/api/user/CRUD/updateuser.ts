import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Params } from '../../params';
const prisma = new PrismaClient();

export const updateuser = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const user = await prisma.human.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!user) {
    return new NextResponse(JSON.stringify({ error: 'id not found' }), {
      status: 400,
    });
  } else {
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

      const updateuser = await prisma.human.update({
        where: {
          id: parseInt(id, 10),
        },
        data: { username, email, password, phonenumber },
      });
      return new NextResponse(
        JSON.stringify({ error: 'Country updated successfully' }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: 'Country updating error' }),
        { status: 400 }
      );
    }
  }
};
