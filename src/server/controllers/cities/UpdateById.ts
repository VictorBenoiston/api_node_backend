import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';


interface IParamProps {
    id?: number;
}

interface IBodyProps {
    name: string;
    state: string,
}

export const updateByIdValidation = validation(getSchema => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3),
        state: yup.string().required().min(3)
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));


export const updateById = (req:Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.status(200).send(req.body);

};
