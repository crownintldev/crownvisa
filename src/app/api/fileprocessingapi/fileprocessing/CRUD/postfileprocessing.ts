import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const postfileprocessing = async (req: Request) => {
  const body = await req.json();
  console.log(body);
  const { countryflagurl, countrybgurl, title, overview } = body;
  try {
    const existingfileprocessing = await prisma.fileProcessing.findFirst({
      where: { title: title },
    });
    if (existingfileprocessing) {
      return new NextResponse(
        JSON.stringify({ error: "file processing already exists" }),
        {
          status: 400,
        }
      );
    } else {
      const newfileprocessing = await prisma.fileProcessing.create({
        data: {
          title,
          overview,
          countryflagurl,
          countrybgurl,
        },
      });
      return new NextResponse(
        JSON.stringify({ error: "file processing created successfully" }),
        { status: 200 }
      );
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: "file processing creating error" }),
      { status: 400 }
    );
  }
};
