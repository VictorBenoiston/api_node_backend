import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';


interface IParamProps {
    id?: number
}

export const getIdParamValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().moreThan(0).required()
    }))
}));

export const getById = async (req: Request<IParamProps>, res:Response) => {
    // Mockando
    return res.status(200).json({
        id: 1,
        name: 'Mossoro'
    });
};
