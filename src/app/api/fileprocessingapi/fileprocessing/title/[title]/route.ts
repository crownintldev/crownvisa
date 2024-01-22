import { Params } from '@/app/api/params';
import { getfileprocessingbytitle } from '../../CRUD/getfileprocessing';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getfileprocessingbytitle(req, { params });
};
