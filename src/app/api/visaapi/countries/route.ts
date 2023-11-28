import { getcountries } from './CRUD/getcountries';
import { postcountries } from './CRUD/postcountries';

export const POST = async (req: Request) => {
  return postcountries(req);
};

export const GET = async (req: Request) => {
  return getcountries(req);
};
