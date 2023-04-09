import { TezosToolkit } from '@taquito/taquito';
import { Cmd } from 'redux-loop';

import {
  FetchConcertNftRequest,
  FetchConcertNftCommit,
} from './type/action.type.ts';

const tezos = new TezosToolkit('https://ghostnet.tezos.marigold.dev');

export const cmdFetchNft = (action: FetchConcertNftRequest) =>
  Cmd.run(
    () => {
      return feetchData(action.address);
    },
    {
      successActionCreator: (nfts): FetchConcertNftCommit => {
        return {
          type: 'FETCH_CONCERT_NFT_COMMIT',
          adress: action.address,
          payload: nfts,
        };
      },
      failActionCreator: (error) => {
        return {
          type: 'FETCH_CONCERT_NFT_ROLLBACK',
          error: error,
        };
      },
    }
  );

async function feetchData(element): Promise<any[]> {
  const contract = await tezos.contract.at(element);
  const storage: any = await contract.storage();
  console.log(storage);
  const tokens = storage.token_ids;
  const nfts = [];
  for (const tokenId in tokens) {
    nfts.push(tokenId);
  }
  return nfts;
}
