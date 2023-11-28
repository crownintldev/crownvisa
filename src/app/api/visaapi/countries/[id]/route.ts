import { Params } from '@/app/api/params';
import { deleteCountry } from '../CRUD/deletecountries';
import { getcountriesbyid } from '../CRUD/getcountries';
import { updatecountries } from '../CRUD/updatecountries';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getcountriesbyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  return updatecountries(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  return deleteCountry(req, { params });
};
