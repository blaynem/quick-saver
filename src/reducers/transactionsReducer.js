import { ADDTRANSACTION, TRANSACTIONERROR, TRANSACTIONMESSAGE } from '../constants';

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
  message: null
}

export default transactionsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    // Adds a transaction
    case ADDTRANSACTION: 
      return {
        ...state,
        data: [
          ...state.data,
          action.payload
        ]
      }

    // Creates an error message
    case TRANSACTIONERROR:
      return {
        ...state,
        error: action.payload,
        message: null
      }
    
    // Creates a success message
    case TRANSACTIONMESSAGE:
      return {
        ...state,
        error: null,
        message: action.payload
      }
    
    default:
      return state;
  }
} 