import { Params } from "@/app/api/params";
import { deleteservices } from "../CRUD/deleteservices";
import { getservicesbyid } from "../CRUD/getservices";
import { updateservices } from "../CRUD/updateservices";

export const GET = async (req: Request, { params }: { params: Params }) => {
    return getservicesbyid(req, { params });
  };
  
  export const PUT = async (req: Request, { params }: { params: Params }) => {
    return updateservices(req, { params });
  };
  
  export const DELETE = async (req: Request, { params }: { params: Params }) => {
    return deleteservices(req, { params });
  };