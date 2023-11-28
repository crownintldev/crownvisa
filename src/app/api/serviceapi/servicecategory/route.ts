import { getservicecategory } from "./CRUD/getservicecategory";
import { postservicecategory } from "./CRUD/postservicecategory";

export const POST = async (req: Request) => {
    return postservicecategory(req);
};

export const GET = async (req: Request) => {
    return getservicecategory(req);
};