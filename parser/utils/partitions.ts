import { db } from 'parser/db';

export const createPartition = async (table: string, id: number) => {
  try {
    await db.query(
      `CREATE TABLE IF NOT EXISTS ${table}_${id} PARTITION OF ${table} FOR VALUES IN (${id})`,
    );
  } catch (error) {
    throw new Error(`Could not create partition for table: ${table} with id: ${id}`);
  }
};
