import { postuser } from './CRUD/postuser';
import { getuser } from './CRUD/getuser';

export const POST = async (req: Request) => {
  return postuser(req);
};

export const GET = async (req: Request) => {
  return getuser(req);
};
