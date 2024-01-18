import { Params } from "@/app/api/params";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const updatecountries = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const country = await prisma.countries.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!country) {
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
      details,
      tagId,
      overview,
      countryname,
    } = body;
    try {
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
      const updatecountry = await prisma.countries.update({
        where: {
          id: parseInt(id, 10),
        },
        data: {
          countryflagurl,
          countrybgurl,
          title,
          details,
          tagId,
          overview,
          countryname,
        },
      });
      return new NextResponse(
        JSON.stringify({ error: "Country updated successfully" }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: "Country updating error" }),
        { status: 400 }
      );
    }
  }
};
