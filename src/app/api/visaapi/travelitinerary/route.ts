import { gettravelitinerary } from './CRUD/gettravelitinerary';
import { posttravelitinerary } from './CRUD/posttravelitinerary';

export const POST = async (req: Request) => {
  return posttravelitinerary(req);
};

export const GET = async (req: Request) => {
  return gettravelitinerary(req);
};
