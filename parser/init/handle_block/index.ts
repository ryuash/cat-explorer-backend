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
    console.log(height, 'height');
    // get block data
    const { data: block } = await axios.get(BLOCKS_DETAILS_RPC, {
      params: {
        height: 2296676,
      },
    });

    const hash = R.pathOr('', ['result', 'block_id', 'hash'], block);
    const txs = R.pathOr([], ['result', 'block', 'data', 'txs'], block);
    const numTxs = txs.length;
    const proposerConsensus = hexToBech32(R.pathOr('', ['result', 'block', 'header', 'proposer_address'], block), config.prefix.consensus);

    // create partition table if not exist
    if (numTxs) {
      createPartition(TABLES.TRANSACTION, Math.floor(height / config.db.partitionBy));
    }

    // create the tx by hash
    // const queueTxs = txs.map(async (x) => {
    //   const txHash = shajs('sha256').update(Buffer.from(x, 'base64')).digest('hex').toUpperCase();

    //   await db.query(
    //     `INSERT INTO transaction (hash, height, partition_id)
    //     VALUES (1, 'A', 'X'), (2, 'B', 'Y'), (3, 'C', 'Z')
    //     ON CONFLICT (id) DO NOTHING`,
    //   );

    //   console.log(txHash, 'hash');
    // });

    // update block with the following and status complete
  } catch (error: any) {
    console.log(error, 'error in here');
  }
};
