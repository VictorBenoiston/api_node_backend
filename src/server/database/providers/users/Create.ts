import { PasswordCrypt } from '../../../shared/services/PasswordCrypto';
import { EnumTableNames } from '../../EnumTableNames';
import { Knex } from '../../knex';
import { IUser } from '../../models/User';


export const create = async (user: Omit<IUser, 'id'>): Promise<number | Error> => {
    try {
        const hashedPassword = await PasswordCrypt.hashPassword(user.password);

        const [result] = await Knex(EnumTableNames.users).insert({ ...user, password: hashedPassword }).returning('id');

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
