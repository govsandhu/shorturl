import * as path from 'path';
import dbFactory from './dbFactory';

async function migrate(): Promise<void> {
  const db = dbFactory();
  const directory = path.join(__dirname, './migrations');

  try {
    await db.migrate.latest({ directory });
    console.log('Migrations completed successfully');

    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(-1);
  }
}

migrate();
