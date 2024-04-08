import { EnumTableNames } from '../../EnumTableNames';
import { Knex } from '../../knex';

export const deleteById = async (id: number): Promise<void | Error> => {
    try {
        const deletedRows = await Knex(EnumTableNames.cities)
            .where('id', '=', id)
            .del();

        // del() returns either 0 -error or 1- ok.
        if (deletedRows > 0) return;

        return new Error('No matching record found for the provided ID');

    } catch (error) {
        console.log(error);
        return Error('Error while deleting input');
    }
};
