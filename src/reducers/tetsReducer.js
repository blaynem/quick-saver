const INITIAL_STATE = {
  message: null,
  data: []
}

export default function dataReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case "TESTACTION": 
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
} 