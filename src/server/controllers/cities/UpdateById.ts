import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { ICity } from '../../database/models';
import { CitiesProvider } from '../../database/providers/cities';


interface IParamProps {
    id?: number;
}

interface IBodyProps extends Omit<ICity, 'id'> {}

export const updateByIdValidation = validation(getSchema => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3),
        state: yup.string().required().min(3)
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

    const result = await CitiesProvider.updateById(req.body, req.params.id);

    if (result instanceof Error){
        return res.status(500).json({
            errors: {
                default: result.message
            }
        });
    }


    res.status(200).send(req.body);

};
