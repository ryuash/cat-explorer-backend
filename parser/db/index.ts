import 'dotenv/config';
import pgPromise from 'pg-promise';

export const pgp = pgPromise({
  capSQL: true,
});

export const db = pgp(process.env.PG_DATABASE_URL as string);

export const TABLES = {
  TRANSACTION: 'transaction',
};
