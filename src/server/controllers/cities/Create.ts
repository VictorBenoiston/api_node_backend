import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { ICity } from '../../database/models';
import { CitiesProvider } from '../../database/providers/cities';


interface IBodyProps extends Omit<ICity, 'id'> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3).max(150),
        state: yup.string().required().min(3)
    }))
}));
 
export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    const result = await CitiesProvider.create(req.body);
    if (result instanceof Error){
        return res.status(500).json({
            errors: {
                default: result.message
            }
        });
    }

    res.status(201).json(result);
};
