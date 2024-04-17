import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { UsersProvider } from '../../database/providers/users';
import { IUser } from '../../database/models';
import { PasswordCrypt } from '../../shared/services/PasswordCrypto';


interface IBodyProps extends Omit<IUser, 'id' | 'user' | 'firstName' | 'lastName'> { }


export const signInValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        email: yup.string().required().email().min(5),
        password: yup.string().required()
    }))
}));

export const signIn = async (req: Request<IBodyProps>, res: Response) => {
    const { email, password } = req.body;

    // Check for email at the db
    const result = await UsersProvider.getByEmail(email);
    if (result instanceof Error) {
        return res.status(401).json({
            errors: {
                default: 'Invalid email or password'
            }
        });
    }

    // Check fo matching passwords
    const passwordMatch = await PasswordCrypt.verifyPassword(password, result.password);

    if (!passwordMatch) {
        return res.status(401).json({
            errors: {
                default: 'Invalid email or password'
            }
        });
    } else {
        return res.status(200).json({ accessToken: 'test.test.test' });
    }
};
