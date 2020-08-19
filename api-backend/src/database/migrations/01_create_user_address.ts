import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('funcionario_address', table => {
        table.increments('id_funcionario_address').primary();
        table.string('funcionario_street_name').notNullable();
        table.string('funcionario_district').notNullable();
        table.string('funcionario_street_complement').notNullable();
        table.string('funcionario_postal_code').notNullable();
        table.string('funcionario_street_number').notNullable();
        table.string('funcionario_city').notNullable();
        table.string('funcionario_state').notNullable();
        table.integer('id_funcionario').unsigned().notNullable()
        table.foreign('id_funcionario')
        .references('id_funcionario')
        .inTable('funcionarios')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('funcionario_address');
}