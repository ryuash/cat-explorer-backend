import { pgInsertSql } from '@tests/utils';

export const setupTables = async () => {
  // await pgInsertSql('db/delete_all_tables.sql');
  await pgInsertSql('db/00-general.sql');
};

export const tearDownData = async () => {
  await pgInsertSql('db/delete_all_data.sql');
};

export const tearDownTables = async () => {
  await pgInsertSql('db/delete_all_tables.sql');
};
