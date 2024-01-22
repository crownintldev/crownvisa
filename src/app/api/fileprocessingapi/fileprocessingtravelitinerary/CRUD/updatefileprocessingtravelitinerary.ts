import { Params } from "@/app/api/params";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const updatefileprocessingtravelitinerary = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const fileprocessingtravelItinerary =
    await prisma.fileProcessingTravelItinerary.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });
  if (!fileprocessingtravelItinerary) {
    return new NextResponse(JSON.stringify({ error: "id not found" }), {
      status: 400,
    });
  } else {
    const body = await req.json();
    const { title, description, countryid } = body;
    console.log(body);
    try {
      const existingcountryid = await prisma.fileProcessing.findUnique({
        where: {
          id: parseInt(countryid, 10),
        },
      });

      if (!existingcountryid) {
        return new NextResponse(
          JSON.stringify({ error: "countryId does not exists" }),
          {
            status: 400,
          }
        );
      }

      const updatefileprocessingtravelItinerary = await prisma.fileProcessingTravelItinerary.update({
        where: {
          id: parseInt(id, 10),
        },
        data: {title, description, countryid },
      });
      return new NextResponse(
        JSON.stringify({ error: "fileprocessing Travel Itinerary successfully" }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: "fileprocessing Travel Itinerary updating error" }),
        { status: 400 }
      );
    }
  }
};
