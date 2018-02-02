import { ADDTRANSACTION } from '../constants';

export function addTransaction(payload) {
  return(dispatch) => {
    const timeStamp = Date.now();
    dispatch({
      type: ADDTRANSACTION,
      payload: {
        ...payload,
        timeStamp
      }
    })
  }
}