import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { PeopleProviders } from '../../database/providers/people';


interface IParamProps {
    id?: number;
}

export const deleteByIdValidation = validation(getSchema => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));

export const deleteById = async (req:Request<IParamProps>, res: Response) => {

    // To prevent being undefined
    if (!req.params.id){
        return res.status(400).json({errors: {
            default: 'The id must be informed'
        }});
    }

    const result = await PeopleProviders.deleteById(req.params.id);

    if (result instanceof Error){
        return res.status(500).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(204).send();
};
