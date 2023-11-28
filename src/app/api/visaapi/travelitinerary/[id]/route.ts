import { updatetravelitinerary } from '../CRUD/updatetravelitinerary';
import { gettravelitinerarybyid } from '../CRUD/gettravelitinerary';
import { deletetravelitinerary } from '../CRUD/deletetravelitinerary';
import { Params } from '@/app/api/params';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return gettravelitinerarybyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  return updatetravelitinerary(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  return deletetravelitinerary(req, { params });
};
