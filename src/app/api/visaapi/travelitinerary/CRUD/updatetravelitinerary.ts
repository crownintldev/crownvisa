import { Params } from "@/app/api/params";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const updatetravelitinerary = async (
  req: Request,
  { params }: { params: Params }
) => {
  const id = params.id;
  const travelItinerary = await prisma.travelItinerary.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (!travelItinerary) {
    return new NextResponse(JSON.stringify({ error: "id not found" }), {
      status: 400,
    });
  } else {
    const body = await req.json();
    const { title, description, countryid } = body;
    console.log(body);
    try {
      const existingcountryid = await prisma.countries.findUnique({
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

      const updatetravelItinerary = await prisma.travelItinerary.update({
        where: {
          id: parseInt(id, 10),
        },
        data: { title, description, countryid },
      });
      return new NextResponse(
        JSON.stringify({ error: "Travel Itineraryt successfully" }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ error: "Travel Itinerary updating error" }),
        { status: 400 }
      );
    }
  }
};
