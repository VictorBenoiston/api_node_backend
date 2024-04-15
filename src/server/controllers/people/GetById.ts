import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { PeopleProviders } from '../../database/providers/people';


interface IParamProps {
    id?: number
}

export const getIdParamValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().moreThan(0).required()
    }))
}));

export const getById = async (req: Request<IParamProps>, res:Response) => {
    if (!req.params.id){
        return res.status(400).json({
            errors: {
                default: 'The id must be informed'
            }
        });
    }

    const result = await PeopleProviders.getById(req.params.id);
    if (result instanceof Error){
        return res.status(500).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(200).json({result});


    // return res.status(200).json({
    //     id: 1,
    //     name: 'Mossoro'
    // });
};
