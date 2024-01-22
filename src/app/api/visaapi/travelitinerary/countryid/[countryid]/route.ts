import { Params } from "@/app/api/params";
import { gettravelitinerarybycountryid } from "../../CRUD/gettravelitinerary";

export const GET = async (req: Request, { params }: { params: Params }) => {
  return gettravelitinerarybycountryid(req, { params });
};
