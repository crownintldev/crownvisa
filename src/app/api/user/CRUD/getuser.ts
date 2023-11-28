import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Params } from '../../params';
const prisma = new PrismaClient();

export const getuser = async (req: Request) => {
  try {
    const users = await prisma.human.findMany({});
    return new NextResponse(JSON.stringify({ users }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'An error occurred while fetching the data' }),
      {
        status: 400,
      }
    );
  }
};

export const getuserbyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  if (id) {
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
      return new NextResponse(JSON.stringify({ user }), { status: 200 });
    }
  }
};

export const getuserbyemail = async (
  req: Request,
  { params }: { params: Params }
) => {
  const email = params.email;
  const user = await prisma.human.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return new NextResponse(JSON.stringify({ error: 'email not found' }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ user }), { status: 200 });
  }
};
