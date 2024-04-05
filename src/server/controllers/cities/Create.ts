import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';


interface ICity {
    name: string,
    state:string,
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICity>(yup.object().shape({
        name: yup.string().required().min(3),
        state: yup.string().required().min(3)
    }))
}));
 
export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    console.log(req.body);

    res.status(201).json(1);
};
