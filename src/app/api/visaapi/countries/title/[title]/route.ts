import { Params } from '@/app/api/params';
import { getcountriesbytitle } from '../../CRUD/getcountries';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getcountriesbytitle(req, { params });
};
