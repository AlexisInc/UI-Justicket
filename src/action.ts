import { Concert } from "./model/concert";
import { CreateConcert, GetBillet, PostConcert, PostConcertCommit, PostConcertRollback } from "./type/action.type";



export const createConert = (concert:Concert): CreateConcert => ({ type: 'CREATE_CONCERT' ,concert : concert });
export const postConcert = (concert:Concert): PostConcert => ({
    type: 'POST_CONCERT',
    method: 'POST',
    path: 'url/concert',
    concert : concert
  }); // TODO : Update this value !
  

  export const postConcertCommit = (payload: Concert): PostConcertCommit=> ({ type: 'POST_CONCERT_COMMIT', payload });

  export const postConcertRollback = (error: Error): PostConcertRollback=> ({ type: 'POST_CONCERT_ROLLBACK', error });
  export const getBillet= (): GetBillet=> ({ type: 'FETCH_BILLET' });
