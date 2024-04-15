import * as create from './Create';
import * as update from './UpdateById';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from './UpdateById';
import * as deleteById from './DeleteById';


export const PeopleControllers = {
    ...create,
    ...update,
    ...getAll,
    ...getById,
    ...updateById,
    ...deleteById
};
