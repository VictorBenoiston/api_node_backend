import type { Knex } from 'knex';
import { EnumTableNames } from '../EnumTableNames';


export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(EnumTableNames.users, table => {
            table.bigIncrements('id').primary().index();
            table.string('user').checkLength('>', 3).notNullable();
            table.string('email').checkLength('>', 5).index().unique().notNullable();
            table.string('password').checkLength('>', 6).notNullable();
            table.string('firstName').checkLength('<=', 50).index().notNullable();
            table.string('lastName').checkLength('<=', 50).index().notNullable();

            table.comment('Table used to store user in our system');
        })
        .then(() => {
            console.log(`# Created table ${EnumTableNames.users}`);
        });
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(EnumTableNames.users)

        .then(() => {
            console.log(`# Rollback! Droped table ${EnumTableNames.users}`);
        });
}
