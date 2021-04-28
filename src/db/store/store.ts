import * as knex from 'knex';
import dbFactory from '../dbFactory';

export default abstract class Store<Interface> {
  private tableName: string;
  private db: knex.Knex;

  constructor(table: string) {
    this.tableName = table;
    this.db = dbFactory();
  }

  async getById(id: number): Promise<Interface> {
    const [row] = await this.db(this.tableName).where({ id });

    return row;
  }

  async all(): Promise<Interface[]> {
    const rows = await this.db(this.tableName).select('*');

    return rows;
  }

  async insert(model: Partial<Interface>): Promise<Interface> {
    const [row] = await this.db(this.tableName).insert(model).returning('*');

    return row;
  }

  async where(query: Partial<Interface>): Promise<Interface> {
    const [row] = await this.db(this.tableName).where(query);

    return row;
  }
}
