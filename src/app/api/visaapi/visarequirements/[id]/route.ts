import { Params } from '@/app/api/params';
import { deletevisarequirements } from '../CRUD/deletevisarequirements';
import { getvisarequirementsbyid } from '../CRUD/getvisarequirements';
import { updatevisarequirements } from '../CRUD/updatevisarequirements';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getvisarequirementsbyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  return updatevisarequirements(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  return deletevisarequirements(req, { params });
};
