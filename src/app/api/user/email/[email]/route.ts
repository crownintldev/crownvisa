import { Params } from '@/app/api/params';
import { getuserbyemail } from '../../CRUD/getuser';

export const GET = async (req: Request, { params }: { params: Params }) => {
  return getuserbyemail(req, { params });
};
