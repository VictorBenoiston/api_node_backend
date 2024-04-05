import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';


interface IParamProps {
    id?: number;
}

export const deleteByIdValidation = validation(getSchema => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));


export const deleteById = (req:Request, res: Response) => {
    
    if (Number(req.params.id) === 99999) return res.status(404).json({
        errors: 'Internal Register not Found'
    });
        

    res.status(204).send(`Deleted id: ${req.params.id}`);
};
