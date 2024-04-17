import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { IUser } from '../../database/models';
import { UsersProvider } from '../../database/providers/users';


interface IBodyProps extends Omit<IUser, 'id'> {}

export const signUpValidation = validation(getSchema => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        user: yup.string().required().min(255).min(3),
        email: yup.string().required().email().min(5),
        password: yup.string().required().min(6),
        firstName: yup.string().required().min(2),
        lastName: yup.string().required().min(2),
    }))
})); 

export const signUp = async (req: Request<{}, {}, IUser>, res: Response) => {
    const result = await UsersProvider.create(req.body);
    if (result instanceof Error) {
        return res.status(500).json({
            errors: {
                default: result.message
            }
        });
    }

    res.status(201).json(result);
};
