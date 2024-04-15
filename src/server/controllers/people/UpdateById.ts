import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { ICity, IPerson } from '../../database/models';
import { PeopleProviders } from '../../database/providers/people';


interface IParamProps {
    id?: number;
}

interface IBodyProps extends Omit<IPerson, 'id'> {}

export const updateByIdValidation = validation(getSchema => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        email: yup.string().required().email(),
        cityId: yup.number().required().moreThan(0),
        firstName: yup.string().required().max(50).min(2),
        lastName: yup.string().required().max(50).min(2)
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));


export const updateById = async (req:Request<IParamProps, {}, IBodyProps >, res: Response) => {
    if (!req.params.id){
        return res.status(400).json({
            errors: {
                default: 'The id must be informed'
            }
        });
    }
    const result = await PeopleProviders.updateById(req.body, req.params.id);

    if (result instanceof Error){
        return res.status(500).json({
            errors: {
                default: result.message
            }
        });
    }


    res.status(200).send(req.body);

};
