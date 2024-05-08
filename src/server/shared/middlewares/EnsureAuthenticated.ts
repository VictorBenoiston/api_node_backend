import { RequestHandler } from 'express';
import { JWTService } from '../services';

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
    const jwtData = JWTService.verify(token);
    if (jwtData === 'JWT_SECRET_NOT_FOUND'){
        return res.status(500).json({
            errors: {
                default: 'Error while verifying token'
            }
        });
    } else if (jwtData === 'INVALID_TOKEN'){
        return res.status(401).json({
            errors: {
                default: 'Unauthorized'
            }
        });
    }

    console.log(jwtData);
    req.headers.idUser = jwtData.uid.toString();

    return next();
};
