import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { IPerson } from '../../database/models';
import { PeopleProviders } from '../../database/providers/people';


interface IBodyProps extends Omit<IPerson, 'id'> { }

export const createValidation = validation(getSchema => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        email: yup.string().required().email(),
        cityId: yup.number().required().moreThan(0),
        firstName: yup.string().required().max(50).min(2),
        lastName: yup.string().required().max(50).min(2)
    }))
})); 

export const create = async (req: Request<{}, {}, IPerson>, res: Response) => {
    const result = await PeopleProviders.create(req.body);
    if (result instanceof Error) {
        return res.status(500).json({
            errors: {
                default: result.message
            }
        });
    }

    res.status(201).json(result);
};
