import { getvisarequirementsbyid } from '../CRUD/getvisarequirements';
import { updatevisarequirements } from '../CRUD/updatevisarequirements';
import { deletevisarequirements } from '../CRUD/deletevisarequirements';
import { Params } from '@/app/api/params';

export const GET = async (req: Request, { params }: { params: Params }) => {
  getvisarequirementsbyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  updatevisarequirements(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  deletevisarequirements(req, { params });
};
