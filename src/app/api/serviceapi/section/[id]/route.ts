import { Params } from "@/app/api/params";
import { deletesection } from "../CRUD/deletesection";
import { getsectionbyid } from "../CRUD/getsection";
import { updatesection } from "../CRUD/updatesection";

export const GET = async (req: Request, { params }: { params: Params }) => {
    return getsectionbyid(req, { params });
  };
  
  export const PUT = async (req: Request, { params }: { params: Params }) => {
    return updatesection(req, { params });
  };
  
  export const DELETE = async (req: Request, { params }: { params: Params }) => {
    return deletesection(req, { params });
  };