import { postvisatype } from './CRUD/postvisatype';
import { getvisatype } from './CRUD/getvisatype';

export const POST = async (req: Request) => {
  return postvisatype(req);
};

export const GET = async (req: Request) => {
  return getvisatype(req);
};
