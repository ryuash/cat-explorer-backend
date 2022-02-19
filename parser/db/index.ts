import 'dotenv/config';
import pgPromise from 'pg-promise';

export const pgp = pgPromise({
  capSQL: true,
});

// switch to another database for testing
const databaseUrl = process.env.NODE_ENV === 'test' ? process.env.PG_DATABASE_URL_TEST : process.env.PG_DATABASE_URL;

export const db = pgp(databaseUrl as string);

export const TABLES = {
  TRANSACTION: 'transaction',
};
