import { getfileprocessing } from './CRUD/getfileprocessing';
import { postfileprocessing } from './CRUD/postfileprocessing';

export const POST = async (req: Request) => {
  return postfileprocessing(req);
};

export const GET = async (req: Request) => {
  return getfileprocessing(req);
};
