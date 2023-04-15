import { Concert } from './model/concert';
import { Actions } from './type/action.type';
import { compose } from 'redux';
import { liftState, loop } from 'redux-loop';
// @ts-ignore
import {
  getConcerts,
  fetchContractOperations,
} from './service/concertService.ts';

// @ts-ignore
import { fetchConcertNftRequest } from './action.ts';
import { TezosToolkit } from '@taquito/taquito';
// @ts-ignore
import { cmdFetchNft } from './commands.ts';
import { BeaconWallet } from '@taquito/beacon-wallet';

export type State = {
  concert: Concert[];
  billet: any;
  isAdmin: boolean;
  userAddress: string;
  userBalance: number;
  concerts_nfts: concert_nft[];
  wallet?: BeaconWallet;
};

type concert_nft = {
  address: string;
  nft: any[];
  concert: Concert;
};

export const defaultState: State = {
  concert: [],
  billet: [],
  userAddress: '',
  userBalance: -1,
  isAdmin: true,
  concerts_nfts: [],
};

const reducer = (state: State | undefined, action: Actions) => {
  if (!state) return defaultState; // mandatory by redux
  switch (action.type) {
    case 'CREATE_CONCERT':
      const newConcerts = state.concert;
      newConcerts.push(action.concert);
      return { ...state, concerts: newConcerts };
    case 'IS_ADMIN':
      return { ...state, isAdmin: action.isAdmin };
    case 'WALLET_CONNECTION':
      return {
        ...state,
        userAddress: action.address,
        userBalance: action.balance,
        wallet: action.wallet,
      };

    case 'FETCH_CONCERT_NFT_COMMIT':
      const concerts = state.concerts_nfts.slice();
      const alreadyStored = concerts.find(
        (elt) => elt.concert.contractAddress === action.concert.contractAddress
      );
      if (alreadyStored == null) {
        concerts.push({
          address: action.concert.contractAddress,
          nft: action.payload,
          concert: action.concert,
        });
      }
      return { ...state, concerts_nfts: concerts };

    case 'FETCH_DATA_CONCERT':
      const concerts_mock = [
        {
          title: 'DAMSO SHOW',
          artist: 'THE DAMSO',
          capacity: '10',
          date: Date(),
          place: 'BERCY',
          priceTezos: 0.1,
          nft_vendus: [],
          contractAddress: 'KT1DtH9PQrV1vjcETUY2KPYQm9i6ufCGwbqq',
        },
      ];

      const cmds = concerts_mock.map((element) =>
        cmdFetchNft(fetchConcertNftRequest(element))
      );
      return cmds.reduce((state, cmd) => loop(state, cmd), state);

    case 'BUY_NFT':
      //le back devait nous founrir un endpoint pour persiste les nft_vendus
      // la persistance est faite grace au store mais si on recharge la page les données vont etre perdues
      let concerts_ = state.concerts_nfts.slice();
      const alreadyStored_ = concerts_.find(
        (elt) => elt.concert.contractAddress === action.concert_adress
      );
      alreadyStored_.concert.nft_vendus = alreadyStored_.concert.nft_vendus + 1;
      return { ...state, concerts_nfts: concerts_ };

    default:
      return state;
  }
};

export const billetSelector = (state: State) => {
  return state.billet;
};

export const balanceSelector = (state: State) => {
  return state.userBalance;
};

export const addressSelector = (state: State) => {
  return state.userAddress;
};

export const adminSelector = (state: State) => {
  return state.isAdmin;
};

export const nftSelector = (state: State) => {
  return state.concerts_nfts;
};

export const walletSelector = (state: State) => {
  return state.wallet;
};

export const concertSelector = (state: State) => {
  if (state.concert.length === 0) {
    getConcerts()
      .then((concerts) => {
        console.log(concerts);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return state.concert;
};

export default compose(liftState, reducer);
