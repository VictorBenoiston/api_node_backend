import { Request, Response } from 'express';

export const updateReq = (req:Request, res: Response) => {
    const { id } = req.query;

    res.json(`The id is: ${id}`);
};
