import { getservices } from "./CRUD/getservices";
import { postservices } from "./CRUD/postservices";

export const POST = async (req: Request) => {
    return postservices(req);
  };
  
  export const GET = async (req: Request) => {
    return getservices(req);
  };