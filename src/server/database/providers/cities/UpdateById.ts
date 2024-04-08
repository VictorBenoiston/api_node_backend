import { EnumTableNames } from '../../EnumTableNames';
import { Knex } from '../../knex';
import { ICity } from '../../models';

export const updateById = async (newBody: Omit<ICity, 'id'>, id: number): Promise<void | Error> => {
    try {
        const selectedRow = await Knex(EnumTableNames.cities)
            .update(newBody)
            .where('id', '=', id);
            

        if (!selectedRow) return new Error('No matching record found for the provided ID');

        return;

    } catch (error) {
        console.log(error);
        return Error('Error while selecting input');
    }
};
