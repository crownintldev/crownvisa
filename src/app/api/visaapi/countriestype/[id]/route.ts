import { updatevisatype } from '../CRUD/updatevisatype';
import { deletevisatype } from '../CRUD/deletevisatype';
import { getvistypebyid } from '../CRUD/getvisatype';
import { Params } from '@/app/api/params';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getvistypebyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  return updatevisatype(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  return deletevisatype(req, { params });
};
