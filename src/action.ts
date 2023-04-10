import { Concert } from './model/concert';
import {
  CreateConcert,
  GetBillet,
  GetConcerts,
  IsAdminAction,
  NftOfConcert,
  PostConcert,
  PostConcertCommit,
  PostConcertRollback,
  WalletConnection,
  FetchDataConcert,
  FetchConcertCommit,
  FetchConcertsRequest,
  FetchConcertsRollback,
  FetchConcertNftCommit,
  FetchConcertNftRequest,
  FetchConcertNftRollback,
  Buy_nft,
} from './type/action.type';

export const createConcert = (concert: Concert): CreateConcert => ({
  type: 'CREATE_CONCERT',
  concert: concert,
});
export const postConcert = (concert: Concert): PostConcert => ({
  type: 'POST_CONCERT',
  method: 'POST',
  path: 'url/concert',
  concert: concert,
}); // TODO : Update this value !

export const postConcertCommit = (payload: Concert): PostConcertCommit => ({
  type: 'POST_CONCERT_COMMIT',
  payload,
});

export const postConcertRollback = (error: Error): PostConcertRollback => ({
  type: 'POST_CONCERT_ROLLBACK',
  error,
});

export const getConcerts = (): GetConcerts => ({ type: 'FETCH_CONCERTS' });
export const getBillet = (): GetBillet => ({ type: 'FETCH_BILLET' });

export const walletConnection = (
  address: string,
  balance: number,

  wallet
): WalletConnection => ({
  type: 'WALLET_CONNECTION',
  address,
  balance,
  wallet,
});
export const isAdminAction = (isAdmin: boolean): IsAdminAction => ({
  type: 'IS_ADMIN',
  isAdmin,
});

export const fetchDataConcert = (): FetchDataConcert => ({
  type: 'FETCH_DATA_CONCERT',
});

export const fetchConcertsRequest = (path: string): FetchConcertsRequest => ({
  type: 'FETCH_CONCERTS_REQUEST',
  method: 'GET',
  path: '',
});

export const fetchConcertCommit = (payload: any[]): FetchConcertCommit => ({
  type: 'FETCH_CONCERTS_COMMIT',
  payload,
});

export const fetchConcertsRollback = (error: Error): FetchConcertsRollback => ({
  type: 'FETCH_CONCERTS_ROLLBACK',
  error,
});

export const buy_nft = (nft_buyed, address): Buy_nft => ({
  type: 'BUY_NFT',
  nft_buyed: nft_buyed,
  concert_adress: address,
});

export const fetchConcertNftRequest = (
  address: string
): FetchConcertNftRequest => ({
  type: 'FETCH_CONCERT_NFT_REQUEST',
  method: 'GET',
  address: address,
});

export const fetchConcertNftCommit = (
  payload: any[],
  adress: string,
  price: number,
): FetchConcertNftCommit => ({
  type: 'FETCH_CONCERT_NFT_COMMIT',
  adress: adress,
  payload,
  price,
});

export const fetchConcertNftRollback = (
  error: Error
): FetchConcertNftRollback => ({
  type: 'FETCH_CONCERT_NFT_ROLLBACK',
  error,
});
