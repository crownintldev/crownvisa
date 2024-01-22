import { getfileprocessingtravelitinerary } from './CRUD/getfileprocessingtravelitinerary';
import { postfileprocessingtravelitinerary } from './CRUD/postfileprocessingtravelitinerary';

export const POST = async (req: Request) => {
  return postfileprocessingtravelitinerary(req);
};

export const GET = async (req: Request) => {
  return getfileprocessingtravelitinerary(req);
};
