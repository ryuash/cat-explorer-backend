import * as R from 'ramda';
import Big from 'big.js';
import { db } from 'parser/db';
import { handleBlock } from '..';

export const assignBlocksToWorkers = async () => {
  let shouldContinue = true;
  while (shouldContinue) {
    // find earliest incomplete block and assign to a worker
    const earliestIncompleteBlockQuery = await db.query(
      "SELECT height FROM block WHERE status = 'incomplete' ORDER BY height ASC LIMIT 1",
    );
    const earliestBlockInTable = Big(R.pathOr('0', [0, 'height'], earliestIncompleteBlockQuery)).toNumber();

    // update block to in-progress
    await db.query(
      `UPDATE block SET status = 'in_progress' WHERE height = ${earliestBlockInTable}`,
    );

    // pass to worker
    handleBlock(earliestBlockInTable);
    shouldContinue = false;
  }
};
