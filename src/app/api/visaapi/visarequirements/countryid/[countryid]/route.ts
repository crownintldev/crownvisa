import { Params } from "@/app/api/params";
import { getvisarequirementsbycountryid } from "../../CRUD/getvisarequirements";

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getvisarequirementsbycountryid(req, { params });
};
