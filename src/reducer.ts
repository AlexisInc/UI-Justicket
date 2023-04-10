import { Concert } from './model/concert';
import { Actions } from './type/action.type';
import { compose } from 'redux';
import { liftState, loop } from 'redux-loop';
// @ts-ignore
import { getConcerts } from './service/concertService.ts';

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
  price?:number;
};

export const defaultState: State = {
  concert: [],
  billet: [],
  userAddress: '',
  userBalance: -1,
  isAdmin: false,
  concerts_nfts: [],
};
const tezos = new TezosToolkit('https://ghostnet.tezos.marigold.dev');

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
      console.log(state);
      console.log(action.wallet);
      return {
        ...state,
        userAddress: action.address,
        userBalance: action.balance,
        wallet: action.wallet,
      };

    case 'FETCH_CONCERT_NFT_COMMIT':
      const concerts = state.concerts_nfts;
      const alreadyStored = concerts.find(
        (elt) => elt.address === action.adress
      );
      if (alreadyStored == null) {
        concerts.push({ address: action.adress, nft: action.payload, price: action.price});
      }
      return { ...state, concerts_nfts: concerts };

    case 'FETCH_DATA_CONCERT':
      //mock
      const concertsAddress = ['KT1CYtT39PBcs3pEp66U76ET9PbtfdqDZGkJ'];
      const cmds = concertsAddress.map((element) =>
        cmdFetchNft(fetchConcertNftRequest(element))
      );
      return cmds.reduce((state, cmd) => loop(state, cmd), state);

    case 'BUY_NFT':
      /*
      let concerts_ = state.concerts_nfts;
      const alreadyStored_ = concerts_.find(
        (elt) => elt.address === action.concert_adress
      );
      alreadyStored_.nft = alreadyStored_.nft.filter(
        (nft) => nft != action.nft_buyed
      );
      concerts_ = concerts
        .filter((elt) => elt.address === action.concert_adress)
        .concat([alreadyStored_]);
        */
      return state;

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

export const nftSelector = (state: State): concert_nft[] => {
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
