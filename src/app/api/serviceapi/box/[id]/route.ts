import { Params } from "@/app/api/params";
import { deletebox } from "../CRUD/deletebox";
import { getboxbyid } from "../CRUD/getbox";
import { updatebox } from "../CRUD/updatebox";

export const GET = async (req: Request, { params }: { params: Params }) => {
    return getboxbyid(req, { params });
  };
  
  export const PUT = async (req: Request, { params }: { params: Params }) => {
    return updatebox(req, { params });
  };
  
  export const DELETE = async (req: Request, { params }: { params: Params }) => {
    return deletebox(req, { params });
  };