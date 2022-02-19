import { QueryFile } from 'pg-promise';
import { db } from '@db';
import { resolve } from 'path';

// Helper for linking to external query files:
export const pgInsertSql = async (file: string) => {
  const fullPath = resolve(file);
  const query = new QueryFile(fullPath, { minify: true });
  await db.none(query);
};
