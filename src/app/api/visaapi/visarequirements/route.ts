import { getvisarequirements } from './CRUD/getvisarequirements';
import { postvisarequirements } from './CRUD/postvisarequirements';

export const POST = async (req: Request) => {
  return postvisarequirements(req);
};

export const GET = async (req: Request) => {
  return getvisarequirements(req);
};
