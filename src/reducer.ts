import { Concert } from "./model/concert"
import { Actions } from "./type/action.type";
import { compose } from 'redux';
import { Loop, liftState } from 'redux-loop';





export type State = {
  concert : Concert[],
  billet : any,
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
    


    default:
      return state
  }
}

export const billetSelector= (state: State) => {
  
  return state.billet;
};

export const concerttSelector= (state: State) => {
  
  return state.concert;
};


export default compose(liftState, reducer);