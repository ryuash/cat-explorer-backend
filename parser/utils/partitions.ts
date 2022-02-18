import { db } from 'parser/db';

export const createPartition = async (table: string, id: number) => {
  try {
    await db.query(
      'CREATE TABLE IF NOT EXISTS %v_%d PARTITION OF %v FOR VALUES IN (%d)',
      [table, id, table, id],
    );
  } catch {
    console.error(`Could not create partition for table: ${table} with id: ${id}`);
  }
};
