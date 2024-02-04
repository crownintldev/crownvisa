import { Params } from '../../params';
import { deleteuser } from '../CRUD/deleteuser';
import { getuserbyid } from '../CRUD/getuser';
import { updateuser } from '../CRUD/updateuser';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getuserbyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  return updateuser(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  return deleteuser(req, { params });
};
