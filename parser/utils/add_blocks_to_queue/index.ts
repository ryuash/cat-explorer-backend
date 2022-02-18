import Big from 'big.js';
import { queueEarlierBlocks, queueLaterBlocks } from './utils';

// run a cron job
export const addBlocksToQueue = async () => {
  try {
    console.log('Adding Blocks to Queue: Start');
    // get latest block + earlier block using rpc status
    const nodeLatestBlock = Big('3').toNumber();
    const nodeEarliestBlock = Big('1').toNumber();
    const chain_id = 'unknown';

    await queueEarlierBlocks({
      nodeEarliestBlock,
      chain_id,
    });

    await queueLaterBlocks({
      nodeEarliestBlock,
      nodeLatestBlock,
      chain_id,
    });

    console.log('Adding Blocks to Queue: Done');
  } catch (error) {
    console.log('Adding Blocks to Queue: Error:');
    console.log(error);
  }
};
