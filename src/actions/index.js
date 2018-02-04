import { ADDTRANSACTION, TRANSACTIONERROR, TRANSACTIONMESSAGE } from '../constants';

/**
 * Accepts an object of payload which includes a price and description.
 * If either key is null, will create an error toast message.
 * Otherwise will add the object to our reducer, and send a success message.
 * @param {obj} payload 
 */
export const addTransaction = (payload) => {
  return (dispatch) => {
    if ( !payload.price && !payload.description ){
      return dispatch(toastMessage(TRANSACTIONERROR, "Add more info"))
    }
    const timeStamp = Date.now();
    dispatch({
      type: ADDTRANSACTION,
      payload: {
        ...payload,
        timeStamp
      }
    })
    dispatch(toastMessage(TRANSACTIONMESSAGE, "Saved!"))
  }
}

/**
 * Creates an error or message for a reducer
 * @param {string} actionType 
 * @param {string} message 
 */
export const createMessage = (actionType, message) => {
  return (dispatch) => {
    dispatch({
      type: actionType,
      payload: message
    })
  }
}

/**
 * Accepts and dispatches a message, then after timeout is up,
 * will destroy that message. Creating a "toast"
 * @param {string} type 
 * @param {string} payload 
 * @param {num} timeout 
 */
export const toastMessage = (type, payload, timeout) => {
  return (dispatch) => {
    dispatch({ type, payload })
    setTimeout( () => {
      dispatch({ type, payload: null })
    }, timeout || 1500);
  }
}