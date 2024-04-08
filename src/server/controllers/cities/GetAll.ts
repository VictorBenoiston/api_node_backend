import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { CitiesProvider } from '../../database/providers/cities';



interface IQueryProps {
    id?: number;
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        id: yup.number().optional().default(0),
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().optional()
    }))
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    const result = await CitiesProvider.getAll(req.query.page || 1, req.query.limit || 10, req.query.filter || '', Number(req.query.id));
    const count = await CitiesProvider.count(req.query.filter);

    if (result instanceof Error) {
        return res.status(500).json({
            errors: {
                default: result.message
            }
        });
    } else if (count instanceof Error) {
        return res.status(500).json({
            errors: { default: count.message }
        });
    }

    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', count);

    return res.status(200).json(result);
};
