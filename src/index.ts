import 'dotenv/config';
import { addBlocksToQueue } from './utils/add_blocks_to_queue';

// On start reset all block and tx that are `in_progress` back to incompete

// Start the cron jobs (so we don't need to deal with a web socket)

const start = async () => {
  await addBlocksToQueue();
};

start();
