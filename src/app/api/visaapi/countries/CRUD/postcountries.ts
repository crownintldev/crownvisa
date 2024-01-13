import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const postcountries = async (req: Request) => {
  const body = await req.json();
  console.log(body);
  const {
    countryflagurl,
    countrybgurl,
    title,
    details,
    tagId,
    overview,
    countryname,
  } = body;
  try {
    const existingcountry = await prisma.countries.findFirst({
      where: { title: title },
    });
    if (existingcountry) {
      return new NextResponse(
        JSON.stringify({ error: "country already exists" }),
        {
          status: 400,
        }
      );
    }
    const existingtagid = await prisma.tagType.findUnique({
      where: {
        id: parseInt(tagId, 10),
      },
    });
    if (!existingtagid) {
      return new NextResponse(
        JSON.stringify({ error: "tagId does not exists" }),
        {
          status: 400,
        }
      );
    }
    const newcountry = await prisma.countries.create({
      data: {
        title,
        details,
        tagId,
        overview,
        countryname,
        countryflagurl,
        countrybgurl,
      },
    });
    return new NextResponse(
      JSON.stringify({ error: "country created successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: "country creating error" }),
      { status: 400 }
    );
  }
};
