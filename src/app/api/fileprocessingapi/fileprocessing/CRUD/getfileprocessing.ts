import { Params } from "@/app/api/params";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const getfileprocessing = async (req: Request) => {
  try {
    const fileprocessing = await prisma.fileProcessing.findMany({
      include: {
        fileprocessingRequirement: true,
        fileprocessingtravelitinerary: true,
        // Add other relations if needed
      },
    });
    return new NextResponse(JSON.stringify({ fileprocessing }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "An error occurred while fetching the data" }),
      {
        status: 400,
      }
    );
  }
};

export const getfileprocessingbyid = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const fileprocessing = await prisma.fileProcessing.findUnique({
    include: {
      fileprocessingRequirement: true,
      fileprocessingtravelitinerary: true,
      // Add other relations if needed
    },
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!fileprocessing) {
    return new NextResponse(JSON.stringify({ error: "id not found" }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ fileprocessing }), { status: 200 });
  }
};

export const getfileprocessingbytitle = async (
  req: Request,
  { params }: { params: Params }
) => {
  const title = params.title;
  const fileprocessing = await prisma.fileProcessing.findFirst({
    where: {
      title,
    },
  });
  if (!fileprocessing) {
    return new NextResponse(JSON.stringify({ error: "title not found" }), {
      status: 400,
    });
  } else {
    return new NextResponse(JSON.stringify({ fileprocessing }), { status: 200 });
  }
};
