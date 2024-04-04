import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';


interface ICity {
    name: string
    state: string
    email: string
}

interface IFilter {
    filter?: string;
}


export const createValidation = validation((getSchema) => ({
    body: getSchema<ICity>(yup.object().shape({
        name: yup.string().required().min(3),
        state: yup.string().required().min(3),
        email: yup.string().email().required()
    })),
    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().required().min(3),
    }))
}));
 
export const create = async (req: Request<{}, {}, ICity>, res: Response) => {

    res.status(201).json(req.query);
};
