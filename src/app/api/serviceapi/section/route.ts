import { getsection } from "./CRUD/getsection";
import { postsection } from "./CRUD/postsection";

export const POST = async (req: Request) => {
    return postsection(req);
  };
  
  export const GET = async (req: Request) => {
    return getsection(req);
  };