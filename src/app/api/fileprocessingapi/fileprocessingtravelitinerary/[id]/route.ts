import { Params } from '@/app/api/params';
import { deletefileprocessingtravelitinerary } from '../CRUD/deletefileprocessingtravelitinerary';
import { getfileprocessingtravelitinerarybyid } from '../CRUD/getfileprocessingtravelitinerary';
import { updatefileprocessingtravelitinerary } from '../CRUD/updatefileprocessingtravelitinerary';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getfileprocessingtravelitinerarybyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  return updatefileprocessingtravelitinerary(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  return deletefileprocessingtravelitinerary(req, { params });
};
