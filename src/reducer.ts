import { Concert } from "./model/concert"
import { Actions } from "./type/action.type";
import { compose } from 'redux';
import { Loop, liftState } from 'redux-loop';





export type State = {
  concert : Concert[],
  billet : any,
    isAdmin : boolean,
    userAddress : string,
    userBalance : number
}

export const defaultState: State = {
  concert : [],
  billet : []

}


const reducer = (state: State | undefined, action: Actions)  => {
  if (!state) return defaultState; // mandatory by redux
  switch (action.type) {
    case 'CREATE_CONCERT':
      const newConcerts = state.concert;
      newConcerts.push(action.concert);
      return { ...state, concerts: newConcerts};
    case 'IS_ADMIN':
        return { ...state, isAdmin: action.isAdmin};
    case 'WALLET_CONNECTION':
        return { ...state, userAddress: action.address, userBalance: action.balance};



    default:
      return state
  }
}

export const billetSelector= (state: State) => {
  
  return state.billet;
};

export const balanceSelector= (state: State) => {
    return state.userBalance;
};

export const addressSelector= (state: State) => {
    return state.userAddress;
};

export const adminSelector= (state: State) => {
    return state.isAdmin;
};

export const concertSelector= (state: State) => {
  if (state.concert.length == 0)
    for (let i = 1; i < 9; i++) {
      state.concert.push(
        {
          title : "Titre  test " + i,
          artist: 'Artiste test ' + i,
          capacity: 10,
          date: undefined,
          place: '',
          priceTezos: 10
        }
      )
    }

  return state.concert;
};


export default compose(liftState, reducer);