import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('funcionario_credentials', table => {
        table.increments('id_funcionario_credentials').primary();
        table.string('funcionario_credentials_email').notNullable();
        table.string('funcionario_credentials_password').notNullable();        
        table.integer('id_funcionario').unsigned().notNullable()
        table.foreign('id_funcionario')
        .references('id_funcionario')
        .inTable('funcionarios')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('funcionario_credentials');
}