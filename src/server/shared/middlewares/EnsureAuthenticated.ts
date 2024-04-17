import { RequestHandler } from 'express';



export const ensureAuthenticated: RequestHandler = async (req, res, next) => {
    const { authorization } = req.headers;


    if (!authorization){
        return res.status(401).json({
            errors: {
                default: 'Unauthorized'
            }
        });
    }

    console.log(authorization);

    const [type, token] = authorization.split(' ');

    console.log(type);

    // Validating the type of authentication
    if (type !== 'Bearer'){
        return res.status(401).json({
            errors: {
                default: 'Unauthorized'
            }
        });
    }

    // Ensuring the token
    if (token !== 'test.test.test'){
        return res.status(401).json({
            errors: {
                default: 'Unauthorized'
            }
        });
    }

    return next();
};
