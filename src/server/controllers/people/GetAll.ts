import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { PeopleProviders } from '../../database/providers/people';



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

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    const result = await PeopleProviders.getAll(req.query.page || 1, req.query.limit || 10, req.query.filter || '');
    const count = await PeopleProviders.count(req.query.filter);

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
