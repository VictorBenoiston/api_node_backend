import { EnumTableNames } from '../../EnumTableNames';
import { Knex } from '../../knex';
import { IPerson } from '../../models';


export const create = async (person: Omit<IPerson, 'id'>): Promise<number | Error> => {
    try {
        const [{ count }] = await Knex(EnumTableNames.cities)
            .where('id', '=', person.cityId)
            .count<[{ count: number }]>('* as count');
            // The count will return either 0 or 1, because the id is unique.

        if (count === 0) {
            return new Error('There was no city linked to the entry');
        }

        const [result] = await Knex(EnumTableNames.people).insert(person).returning('id');
        if (typeof result === 'object') {
            return result.id;
        } else if (typeof result === 'number') {
            return result;
        }

        return new Error('Error while registering input');
    } catch (error) {
        console.log(error);
        return new Error('Error while registering input');
    }
};
