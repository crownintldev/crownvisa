import { getbox } from "./CRUD/getbox";
import { postbox } from "./CRUD/postbox";

export const POST = async (req: Request) => {
    return postbox(req);
  };
  
  export const GET = async (req: Request) => {
    return getbox(req);
  };