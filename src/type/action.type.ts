import { Concert } from "../model/concert";

export type CreateConcert = { type: 'CREATE_CONCERT', concert :Concert };

export type PostConcert = { type: 'POST_CONCERT'; method: 'POST'; path:string, concert: Concert};
export type PostConcertCommit = { type: 'POST_CONCERT_COMMIT'; payload: Concert }; // TODO : Update this type !
export type PostConcertRollback = { type: 'POST_CONCERT_ROLLBACK'; error: Error };
export type GetBillet= { type: 'FETCH_BILLET' };
export type WalletConnection= { type: 'WALLET_CONNECTION'; address:string, balance:number };
export type IsAdmin= { type: 'IS_ADMIN'; isAdmin:boolean };


export type Actions =
  | CreateConcert
  | PostConcert
  | PostConcertCommit
  | PostConcertRollback
  | GetBillet
  | WalletConnection
  | IsAdmin

  

  