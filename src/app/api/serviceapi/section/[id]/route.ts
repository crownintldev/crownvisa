import { Params } from "@/app/api/params";
import { getsectionbyid } from "../CRUD/getsection";
import { updatesection } from "../CRUD/updatesection";
import { deletesection } from "../CRUD/deletesection";

export const GET = async (req: Request, { params }: { params: Params }) => {
    return getsectionbyid(req, { params });
  };
  
  export const PUT = async (req: Request, { params }: { params: Params }) => {
    return updatesection(req, { params });
  };
  
  export const DELETE = async (req: Request, { params }: { params: Params }) => {
    return deletesection(req, { params });
  };