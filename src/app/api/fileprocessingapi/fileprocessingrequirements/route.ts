import { getfileprocessingrequirements } from './CRUD/getfileprocessingrequirements';
import { postfileprocessingrequirements } from './CRUD/postfileprocessingrequirements';

export const POST = async (req: Request) => {
  return postfileprocessingrequirements(req);
};

export const GET = async (req: Request) => {
  return getfileprocessingrequirements(req);
};
