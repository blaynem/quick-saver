import { ADDTRANSACTION, TRANSACTIONERROR, TRANSACTIONMESSAGE } from '../constants';

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
  message: null,
  totals: {
    allTransactions: 0
  }
}

const calculateNewTotal = (transArr) => {
  return transArr.reduce( (acc, curr) => {
    return parseFloat(curr.price) + acc
  }, 0);
}

export default transactionsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    // Adds a transaction
    case ADDTRANSACTION:
      const newAddTransData = [
        ...state.data,
        action.payload
      ]
      return {
        ...state,
        data: newAddTransData,
        totals: {
          ...state.totals,
          allTransactions: calculateNewTotal(newAddTransData)
        }
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