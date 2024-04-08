import * as create from './Create';
import * as getAll from './GetAll';
import * as deleteByID from './DeleteById';
import * as updateById from './UpdateById';
import * as getByID from './GetById';
import * as count from './Count';

export const CitiesProvider = {
    ...create,
    ...getAll,
    ...deleteByID,
    ...updateById,
    ...getByID,
    ...count
};
