import { BeaconWallet } from '@taquito/beacon-wallet';
import { Concert } from '../model/concert';

export type CreateConcert = { type: 'CREATE_CONCERT'; concert: Concert };

export type PostConcert = {
  type: 'POST_CONCERT';
  method: 'POST';
  path: string;
  concert: Concert;
};
export type PostConcertCommit = {
  type: 'POST_CONCERT_COMMIT';
  payload: Concert;
}; // TODO : Update this type !
export type PostConcertRollback = {
  type: 'POST_CONCERT_ROLLBACK';
  error: Error;
};
export type GetConcerts = { type: 'FETCH_CONCERTS' };
export type GetBillet = { type: 'FETCH_BILLET' };
export type WalletConnection = {
  type: 'WALLET_CONNECTION';
  address: string;
  balance: number;
  wallet: BeaconWallet;
};
export type IsAdminAction = { type: 'IS_ADMIN'; isAdmin: boolean };
export type NftOfConcert = {
  type: 'NFT_CONCERT';
  concertAddress: string;
  nfts: any[];
};

export type FetchDataConcert = { type: 'FETCH_DATA_CONCERT' };

export type FetchConcertsRequest = {
  type: 'FETCH_CONCERTS_REQUEST';
  method: 'GET';
  path: string;
};
export type FetchConcertCommit = {
  type: 'FETCH_CONCERTS_COMMIT';
  payload: any[];
}; // TODO : Update this type !
export type FetchConcertsRollback = {
  type: 'FETCH_CONCERTS_ROLLBACK';
  error: Error;
};

export type FetchConcertNftRequest = {
  type: 'FETCH_CONCERT_NFT_REQUEST';
  method: 'GET';
  concert: Concert;
};

export type FetchConcertNftCommit = {
  type: 'FETCH_CONCERT_NFT_COMMIT';
  payload: any[];
  concert: Concert;
};

export type FetchConcertNftRollback = {
  type: 'FETCH_CONCERT_NFT_ROLLBACK';
  error: Error;
};

export type Buy_nft = {
  type: 'BUY_NFT';
  nft_buyed: any;
  concert_adress: string;
};

export type Actions =
  | CreateConcert
  | PostConcert
  | PostConcertCommit
  | PostConcertRollback
  | GetBillet
  | WalletConnection
  | IsAdminAction
  | NftOfConcert
  | FetchDataConcert
  | FetchConcertCommit
  | FetchConcertsRequest
  | FetchConcertsRollback
  | FetchConcertNftRequest
  | FetchConcertNftCommit
  | Buy_nft
  | FetchConcertNftRollback;
