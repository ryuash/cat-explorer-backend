import 'dotenv/config';
import util from 'util';
import { baseClient } from '@grpc/client';
import { GetLatestBlockRequest } from '@proto/cosmos/base/tendermint/v1beta1/query_pb';
import {
  initialReset,
  addBlocksToQueue,
  assignBlocksToWorkers,
} from './init';

// On start reset all block and tx that are `in_progress` back to incompete

// Start the cron jobs (so we don't need to deal with a web socket)

const start = async () => {
  // prepare selected modules to a list [] modules
  // each module will have handle block/ handle tx/ handle msg etc
  // pass it in to assign blocks to workers

  // await initialReset();
  // await addBlocksToQueue();
  // assignBlocksToWorkers();

  // baseClient.getLatestBlock(new GetLatestBlockRequest(), (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   const showAll = result?.toObject();
  //   console.log(util.inspect(showAll, false, null, true /* enable colors */));
  // });
};

start();
