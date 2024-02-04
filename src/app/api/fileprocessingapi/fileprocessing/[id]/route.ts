import { Params } from '@/app/api/params';
import { deleteFileProcessing } from '../CRUD/deletefileprocessing';
import { getfileprocessingbyid } from '../CRUD/getfileprocessing';
import { updatefileprocessing } from '../CRUD/updatefileprocessing';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getfileprocessingbyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  return updatefileprocessing(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  return deleteFileProcessing(req, { params });
};
