import { Request, Response } from 'express';
import * as yup from 'yup';

interface IPerson {
    name: string,
    CPF: string,
    age: number,
    marital_status: string,
    gender: string,
    employed: boolean
}

const person_body_validation: yup.ObjectSchema<IPerson> = yup.object().shape({
    name: yup.string().required(),
    CPF: yup.string().required().length(11),
    age: yup.number().required(),
    marital_status: yup.string().required(),
    gender: yup.string().required(),
    employed: yup.boolean().required()
});

export const create_person = async (req: Request<{}, {}, IPerson>, res: Response) => {
    let validatedDataPerson: IPerson | undefined = undefined;

    try {
        validatedDataPerson = await person_body_validation.validate(req.body);
        res.send(`${validatedDataPerson.name} was added as a Person!`);
    } catch (error){
        const yupError = error as yup.ValidationError;

        return res.status(400).send(`${yupError.name}: ${yupError.message}`);
    }

    res.status(201).json(validatedDataPerson);
};
