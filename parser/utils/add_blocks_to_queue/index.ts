// const axios = require('axios');
const R = require('ramda');
const Big = require('big.js');
const config = require('@parser/config');
const { db, pgp } = require('@db');

type QueueLaterBlocks = {
  nodeLatestBlock: number;
  nodeEarliestBlock: number;
  chain_id: string;
}

type QueueEarlierBlocks = {
  nodeEarliestBlock: number;
  chain_id: string;
}

const queueEarlierBlocks = async ({
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

const queueLaterBlocks = async ({
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

module.exports = async () => {
  try {
    console.log('Adding Blocks to Queue: Start');
    // get latest block + earlier block using rpc status
    const nodeLatestBlock = Big('28').toNumber();
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
