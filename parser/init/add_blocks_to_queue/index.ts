import Big from 'big.js';
import * as R from 'ramda';
import axios from 'axios';
import { NODE_STATUS } from '@api';
import { queueEarlierBlocks, queueLaterBlocks } from './utils';

// run a cron job
export const addBlocksToQueue = async () => {
  try {
    console.log('Adding Blocks to Queue: Start');
    // get latest block + earlier block using rpc status
    const { data: nodeData } = await axios.get(NODE_STATUS);

    const chain_id = R.pathOr('unknown', ['result', 'node_info', 'network'], nodeData);

    const nodeLatestBlock = Big(
      R.pathOr('1', ['result', 'sync_info', 'latest_block_height'], nodeData),
    ).toNumber();

    const nodeEarliestBlock = Big(
      R.pathOr('1', ['result', 'sync_info', 'earliest_block_height'], nodeData),
    ).toNumber();

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
