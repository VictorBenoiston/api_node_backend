import { EnumTableNames } from '../../EnumTableNames';
import { IUser } from '../../models/User';
import { Knex } from '../../knex/';

export const getByEmail = async (email: string): Promise<IUser | Error> => {
    try {
        const selectedRow = await Knex(EnumTableNames.users)
            // Return all the columns, but it could be specific ones.
            .select('*')
            .where('email', '=', email)
            .first();

        if (!selectedRow) return new Error('No matching record found for the provided email');

        return selectedRow;

    } catch (error) {
        console.log(error);
        return Error('Error while selecting input');
    }
};
