import { Params } from '@/app/api/params';
import { deletetravelitinerary } from '../CRUD/deletetravelitinerary';
import { gettravelitinerarybyid } from '../CRUD/gettravelitinerary';
import { updatetravelitinerary } from '../CRUD/updatetravelitinerary';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return gettravelitinerarybyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  return updatetravelitinerary(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  return deletetravelitinerary(req, { params });
};
