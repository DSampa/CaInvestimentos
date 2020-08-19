import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('funcionarios', table => {
        table.increments('id_funcionario').primary();
        table.string('funcionario_firstname').notNullable();
        table.string('funcionario_lastname').notNullable();
        table.string('funcionario_surname').notNullable();
        table.string('funcionario_cpf').notNullable();
        table.string('funcionario_rg').notNullable();
        table.string('funcionario_avatar').notNullable();
        table.integer('funcionario_age').notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('funcionarios');
}