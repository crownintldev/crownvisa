import { Params } from "@/app/api/params";
import { getfileprocessingtravelitinerarybycountryid } from "../../CRUD/getfileprocessingtravelitinerary";

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getfileprocessingtravelitinerarybycountryid(req, { params });
};
