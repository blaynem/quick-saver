import { ADDTRANSACTION } from '../constants';

const INITIAL_STATE = {
  message: null,
  loading: false,
  data: []
}

export default function transactionsReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case ADDTRANSACTION: 
      return {
        ...state,
        data: [
          ...state.data,
          action.payload
        ]
      }
    default:
      return state;
  }
} 