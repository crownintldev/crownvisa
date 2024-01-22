import { Params } from "@/app/api/params";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const updatefileprocessing = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const fileprocessing = await prisma.fileProcessing.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!fileprocessing) {
    return new NextResponse(JSON.stringify({ error: "id not found" }), {
      status: 400,
    });
  } else {
    const body = await req.json();
    console.log(body);
    const {
      countryflagurl,
      countrybgurl,
      title,
      overview
    } = body;
    try {
      const updatefileprocessing = await prisma.fileProcessing.update({
        where: {
          id: parseInt(id, 10),
        },
        data: {
          countryflagurl,
          countrybgurl,
          title,
          overview
        },
      });
      return new NextResponse(
        JSON.stringify({ error: "file processing updated successfully" }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: "file processing updating error" }),
        { status: 400 }
      );
    }
  }
};
