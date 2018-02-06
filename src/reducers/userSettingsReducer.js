import { CHANGE_SETTINGS } from '../constants'

const INITIAL_STATE = {
  monthlyBudget: 500
}

export default userSettings = ( state = INITIAL_STATE, action) => {
  switch( action.type ){
    case CHANGE_SETTINGS:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}