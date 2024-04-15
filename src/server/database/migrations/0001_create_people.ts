import type { Knex } from 'knex';
import { EnumTableNames } from '../EnumTableNames';


export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(EnumTableNames.people, table => {
            table.bigIncrements('id').primary().index();
            table.string('email', 150).checkLength('<=', 150).unique().notNullable();
            table.string('firstName', 50).checkLength('<=', 50).index().notNullable();
            table.string('lastName', 50).checkLength('<=', 50).index().notNullable();
            table.bigInteger('cityId').index().notNullable().references('id').inTable(EnumTableNames.cities).onUpdate('CASCADE').onDelete('RESTRICT');
            table.comment('Table used to store people in our system');
        })
        .then(() => {
            console.log(`# Created table ${EnumTableNames.people}`);
        });
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(EnumTableNames.people)

        .then(() => {
            console.log(`# Rollback! Droped table ${EnumTableNames.people}`);
        });
}
