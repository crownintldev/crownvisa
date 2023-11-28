import { Params } from "@/app/api/params";
import { deleteservicecategory } from "../CRUD/deleteservicecategory";
import { getservicecategorybyid } from "../CRUD/getservicecategory";
import { updateservicecategory } from "../CRUD/updateservicecategory";

export const GET = async (req: Request, { params }: { params: Params }) => {
    return getservicecategorybyid(req, { params });
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
    return updateservicecategory(req, { params });
};

export const DELETE = async (req: Request, { params }: { params: Params }) => {
    return deleteservicecategory(req, { params });
};