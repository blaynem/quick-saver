import uuidv4 from 'uuid/v4'

import { ADDTRANSACTION, CHANGE_SETTINGS, TRANSACTIONERROR, TRANSACTIONMESSAGE } from '../constants';

/**
 * Accepts an object of payload which includes a price and description.
 * If either key is null, will create an error toast message.
 * Otherwise will add the object to our reducer, and send a success message.
 * @param {obj} payload 
 */
export const addTransaction = (payload) => {
  return (dispatch) => {
    if ( !payload.price  ){
      return dispatch(toastMessage(TRANSACTIONERROR, "Needs price"))
    }
    const timeStamp = Date.now();
    dispatch({
      type: ADDTRANSACTION,
      payload: {
        ...payload,
        id: uuidv4(),
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

export const changeUserSettings = (payload) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_SETTINGS,
      payload
    })
  }
}