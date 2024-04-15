import { EnumTableNames } from '../../EnumTableNames';
import { Knex } from '../../knex';
import { IPerson } from '../../models';

export const updateById = async (newBody: Omit<IPerson, 'id'>, id: number): Promise<void | Error> => {
    try {
        const [{ count }] = await Knex(EnumTableNames.cities)
            .where('id', '=', id)
            .count<[{ count: number }]>('* as count');
        
        if (count === 0){
            return new Error('There was no city linked to the entry');
        }

        const selectedRow = await Knex(EnumTableNames.people)
            .update(newBody)
            .where('id', '=', id);

        if (!selectedRow) return new Error('No matching record found for the provided ID');

        return;

    } catch (error) {
        console.log(error);
        return Error('Error while selecting input');
    }
};
