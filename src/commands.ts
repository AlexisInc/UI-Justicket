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
      return feetchData(action.concert.contractAddress);
    },
    {
      successActionCreator: (res): FetchConcertNftCommit => {
        action.concert.priceTezos = res.price;
        return {
          type: 'FETCH_CONCERT_NFT_COMMIT',
          payload: res.nfts,
          concert: action.concert,
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

async function feetchData(element): Promise<any> {
  const contract = await tezos.contract.at(element);
  const storage: any = await contract.storage();
  const price = storage.ticket_price.toNumber() / 1000000;
  const tokens = storage.token_ids;
  const nfts = [];
  for (const tokenId in tokens) {
    nfts.push(tokenId);
  }
  return { nfts: nfts, price: price };
}
