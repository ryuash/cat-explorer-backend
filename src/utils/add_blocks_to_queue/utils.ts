import Big from 'big.js';
import * as R from 'ramda';
import config from '@parser/config';
import { db, pgp } from '@db';
import { QueueEarlierBlocks, QueueLaterBlocks } from './types';

/**
 * Queues blocks that exist before the earliest block height
 * in the database
 * @param param0
 */
export const queueEarlierBlocks = async ({
  nodeEarliestBlock,
  chain_id,
}: QueueEarlierBlocks) => {
  // Get earliest height in table
  const earliestBlockInTableQuery = await db.query(
    'SELECT height FROM block ORDER BY height ASC LIMIT 1',
  );
  const earliestBlockInTable = Big(R.pathOr(0, [0, 'height'], earliestBlockInTableQuery)).minus(1).toNumber();

  // If there are blocks from before our earliest parsed block we should parse them here
  if (earliestBlockInTable > nodeEarliestBlock) {
    const referenceBlockStart = earliestBlockInTable;
    let referenceBlockEnd = nodeEarliestBlock;

    if (referenceBlockStart - referenceBlockEnd > config.db.insertBatchLimit) {
      referenceBlockEnd = referenceBlockStart - config.db.insertBatchLimit;
    }

    const dataToBeInserted = [];
    const columnSet = new pgp.helpers.ColumnSet(
      ['height', 'chain_id'],
      { table: 'block' },
    );

    for (let i = referenceBlockStart; i >= referenceBlockEnd; i -= 1) {
      dataToBeInserted.push({
        height: i,
        chain_id,
      });
    }
    console.log(dataToBeInserted, 'early');
    // const query = pgp.helpers.insert(dataToBeInserted, columnSet);
    // await db.none(query);
  }
};

/**
 * Queues blocks that after before the latest block height
 * in the database
 * @param param0
 */
export const queueLaterBlocks = async ({
  nodeLatestBlock,
  nodeEarliestBlock,
  chain_id,
}: QueueLaterBlocks) => {
  // Get latest height in table
  const latestBlockInTableQuery = await db.query(
    'SELECT height FROM block ORDER BY height DESC LIMIT 1',
  );

  // +1 because we want the reference to start on that height
  // so it 0 we want to start at 1
  // but if a row exist then we want that row height + 1
  const latestBlockInTable = Big(R.pathOr(0, [0, 'height'], latestBlockInTableQuery)).add(1).toNumber();

  let referenceBlockStart = latestBlockInTable;
  let referenceBlockEnd = nodeLatestBlock;

  // Edge case in which the table is empty but the node provided does not start from height 1
  if (latestBlockInTable < nodeEarliestBlock) {
    referenceBlockStart = nodeEarliestBlock;
  }

  if (referenceBlockEnd - referenceBlockStart > config.db.insertBatchLimit) {
    referenceBlockEnd = referenceBlockStart + config.db.insertBatchLimit;
  }

  const dataToBeInserted = [];
  const columnSet = new pgp.helpers.ColumnSet(
    ['height', 'chain_id'],
    { table: 'block' },
  );

  for (let i = referenceBlockStart; i <= referenceBlockEnd; i += 1) {
    dataToBeInserted.push({
      height: i,
      chain_id,
    });
  }
  console.log(dataToBeInserted, 'after');
  // const query = pgp.helpers.insert(dataToBeInserted, columnSet);
  // await db.none(query);
};
