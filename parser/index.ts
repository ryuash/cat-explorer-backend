import 'dotenv/config';
import {
  initialReset,
  addBlocksToQueue,
  assignBlocksToWorkers,
} from './init';
import { pgInsertSql } from './utils';

// On start reset all block and tx that are `in_progress` back to incompete

// Start the cron jobs (so we don't need to deal with a web socket)

const start = async () => {
  // await initialReset();
  // await addBlocksToQueue();
  // assignBlocksToWorkers();
  pgInsertSql('./db/00-general.sql');
};

start();
