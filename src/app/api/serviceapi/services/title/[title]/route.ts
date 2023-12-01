import { Params } from "@/app/api/params";
import { getservicesbytitle } from "../../CRUD/getservices";

export const GET = async (req: Request, { params }: { params: Params }) => {
    return getservicesbytitle(req, { params });
  };