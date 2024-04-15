import { EnumTableNames } from '../../EnumTableNames';
import { Knex } from '../../knex';
import { IPerson } from '../../models';

export const getById = async (id: number): Promise<IPerson | Error> => {
    try {
        const selectedRow = await Knex(EnumTableNames.people)
            // Return all the columns, but it could be specific ones.
            .select('*')
            .where('id', '=', id)
            .first();

        if (!selectedRow) return new Error('No matching record found for the provided ID');

        return selectedRow;

    } catch (error) {
        console.log(error);
        return Error('Error while selecting input');
    }
};
