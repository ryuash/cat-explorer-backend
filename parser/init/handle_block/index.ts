import axios from 'axios';
import * as R from 'ramda';
import {
  BLOCKS_DETAILS_RPC,
} from '@api';

// generic handle block that calls on other handle blocks
export const handleBlock = async (height: string) => {
  try {
    console.log(height, 'height');
    // get block data
    const { data: block } = await axios.get(BLOCKS_DETAILS_RPC, {
      params: {
        height,
      },
    });

    const hash = R.pathOr('', ['result', 'block_id', 'hash'], block);
    const numTx = R.pathOr([], ['result', 'block', 'data', 'txs'], block).length;
    const proposer = R.pathOr('', ['result', 'block', 'header', 'proposer_address'], block);
    console.log(block, 'block');
  } catch (error: any) {
    console.log(error, 'error in here');
  }
};
