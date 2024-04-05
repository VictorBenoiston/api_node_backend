import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';



interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().optional()
    }))
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res:Response) => {
    res.setHeader('access-control-expose-headers', 'x-total-count');
    // Mockando
    res.setHeader('x-total-count', 1);
    return res.status(200).json({
        id: 1,
        name: 'Mossoro'
    });
};
