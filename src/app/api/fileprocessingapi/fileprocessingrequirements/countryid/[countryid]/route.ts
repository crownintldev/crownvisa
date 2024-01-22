import { Params } from "@/app/api/params";
import { getfileprocessingrequirementsbycountryid } from "../../CRUD/getfileprocessingrequirements";

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getfileprocessingrequirementsbycountryid(req, { params });
};
