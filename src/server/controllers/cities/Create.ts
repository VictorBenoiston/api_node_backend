import { Request, Response } from 'express';


interface ICity {
    name: string
    state: string
}


export const create = (req: Request<{}, {}, ICity>, res: Response) => {
    const { name, state }: ICity = req.body;

    
};
