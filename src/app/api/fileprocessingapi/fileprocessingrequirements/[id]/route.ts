import { Params } from '@/app/api/params';
import { deletefileprocessingrequirements } from '../CRUD/deletefileprocessingrequirements';
import { getfileprocessingrequirementsbyid } from '../CRUD/getfileprocessingrequirements';
import { updatefileprocessingrequirements } from '../CRUD/updatefileprocessingrequirements';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getfileprocessingrequirementsbyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  return updatefileprocessingrequirements(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  return deletefileprocessingrequirements(req, { params });
};
