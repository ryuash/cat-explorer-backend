import axios from 'axios';
import * as R from 'ramda';
import shajs from 'sha.js';
import { BLOCKS_DETAILS_RPC } from '@api';
import { db, TABLES } from 'parser/db';
import config from '@config';
import { hexToBech32, createPartition } from '@utils';

// generic handle block that calls on other handle blocks
export const handleBlock = async (height: number) => {
  try {
    // get block data
    const { data: block } = await axios.get(BLOCKS_DETAILS_RPC, {
      params: {
        height,
      },
    });

    const hash = R.pathOr('', ['result', 'block_id', 'hash'], block);
    const txs = R.pathOr([], ['result', 'block', 'data', 'txs'], block);
    const numTxs = txs.length;
    const proposerConsensus = hexToBech32(R.pathOr('', ['result', 'block', 'header', 'proposer_address'], block), config.prefix.consensus);
    const partitionId = Math.floor(height / config.db.partitionBy);

    // create partition table if not exist
    if (numTxs) {
      await createPartition(TABLES.TRANSACTION, partitionId);
    }

    // create the tx by hash
    const queueTxs = txs.map(async (x) => {
      const txHash = shajs('sha256').update(Buffer.from(x, 'base64')).digest('hex').toUpperCase();

      await db.any(
        'INSERT INTO transaction (hash, height, partition_id) VALUES($1, $2, $3) ON CONFLICT DO NOTHING',
        [
          txHash,
          height,
          partitionId,
        ],
      );
    });

    await Promise.allSettled(queueTxs);

    // update block with the following and status complete
    await db.query(
      `UPDATE block SET status = 'complete', hash = $1, num_txs = $2, proposer = $3 WHERE height = ${height}`,
      [
        hash,
        numTxs,
        proposerConsensus,
      ],
    );
  } catch (error) {
    await db.query(
      `UPDATE block SET status = 'error' WHERE height = ${height}`,
    );
    // throw new Error(`Could not parse block height: ${height}`);
  }
};
