import { EnumTableNames } from '../../EnumTableNames';
import { Knex } from '../../knex';

export const count = async (filter = ''): Promise<number | Error> => {
    try {
        const [{ count }] = await Knex(EnumTableNames.cities)
            .where('name', 'like', `%${filter}%`)
            .count <[{ count: number }]>('* as count');

        if (Number.isInteger(Number(count))) return Number(count);
    
        return new Error('Error consulting the total number of inputs');
    } catch (error){
        console.log(error);
        return new Error('Error consulting the total number of inputs');
    }
};
