import { EnumTableNames } from '../../EnumTableNames';
import { Knex } from '../../knex';
import { IPerson } from '../../models';



export const getAll = async (page: number, limit: number, filter: string): Promise<IPerson[] | Error> => {
    try {
        const result = await Knex(EnumTableNames.people)
            .select('*')
            .where('firstName' || 'lastName', 'like', `%${filter}%`)
            // If page = 1, will be item 0 times 10. (The first 10 items)
            .offset((page - 1) * limit)
            .limit(limit);

        return result;

    } catch (error) {
        console.log(error);
        return new Error('Error while retrieving inputs');
    }
};
