import 'dotenv/config';
import * as R from 'ramda';
import util, { promisify } from 'util';
import { baseClient, stakingClient } from '@grpc/client';
import { GetLatestBlockRequest } from '@proto/cosmos/base/tendermint/v1beta1/query_pb';
import { QueryValidatorDelegationsRequest } from '@proto/cosmos/staking/v1beta1/query_pb';
import { PageRequest } from '@proto/cosmos/base/query/v1beta1/pagination_pb';

const start = async () => {
  const test = new QueryValidatorDelegationsRequest();
  const pageRequest = new PageRequest();
  pageRequest.setLimit(10);
  test.setValidatorAddr('desmosvaloper1e4g9807ephy5t7zzt6vu0kw7tryqh9k3mreujc');
  test.setPagination(pageRequest);

  const clientgetProfile = (options: any) => new Promise((resolve, reject) => {
    stakingClient.validatorDelegations(options, (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response?.toObject());
    });
  });

  const emptyArr = Array(15).fill(0);

  const callShit = emptyArr.map(async (x, i) => {
    try {
      await clientgetProfile(test);
      console.log(`index: ${i} completed`);
    } catch (error) {
      console.log(`index ${i} error: ${error}`);
    }
  });

  const data = await Promise.allSettled(callShit);
};

start();
