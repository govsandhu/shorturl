import * as knex from 'knex';

exports.up = async (knex: knex.Knex): Promise<void> => {
  return await knex.schema.createTable('urls', (t) => {
    t.increments('id');
    t.string('short_url').notNullable();
    t.string('long_url').notNullable();
  });
};

exports.down = () => {
  throw new Error('Rollback migrations are not supported');
};
