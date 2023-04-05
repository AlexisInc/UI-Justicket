import { Concert } from "./model/concert";
import {
    CreateConcert,
    GetBillet, GetConcerts,
    IsAdminAction,
    PostConcert,
    PostConcertCommit,
    PostConcertRollback,
    WalletConnection
} from "./type/action.type";

export const createConcert = (concert:Concert): CreateConcert => ({ type: 'CREATE_CONCERT' ,concert : concert });
export const postConcert = (concert:Concert): PostConcert => ({
    type: 'POST_CONCERT',
    method: 'POST',
    path: 'url/concert',
    concert : concert
  }); // TODO : Update this value !

export const postConcertCommit = (payload: Concert): PostConcertCommit=> ({ type: 'POST_CONCERT_COMMIT', payload });

export const postConcertRollback = (error: Error): PostConcertRollback=> ({ type: 'POST_CONCERT_ROLLBACK', error });

export const getConcerts = (): GetConcerts=> ({ type: 'FETCH_CONCERTS'});
export const getBillet= (): GetBillet=> ({ type: 'FETCH_BILLET' });

export const walletConnection = (address:string, balance:number): WalletConnection=> ({ type: 'WALLET_CONNECTION', address, balance });
export const isAdminAction= (isAdmin:boolean): IsAdminAction=> ({ type: 'IS_ADMIN', isAdmin });
