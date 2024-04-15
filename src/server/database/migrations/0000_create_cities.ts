import type { Knex } from 'knex';
import { EnumTableNames } from '../EnumTableNames';


export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(EnumTableNames.cities, table => {
            table.bigIncrements('id').primary().index();
            table.string('name', 150).checkLength('<=', 150).index().notNullable();
            table.string('state', 150).checkLength('<=', 150).index().notNullable();

            table.comment('Table used to store cities in our system');

        })
        .then(() => {
            console.log(`# Create table ${EnumTableNames.cities}`);
        });
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(EnumTableNames.cities)

        .then(() => {
            console.log(`# Rollback! Droped table ${EnumTableNames.cities}`);
        });
}
