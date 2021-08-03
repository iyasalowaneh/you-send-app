import * as actionTypes from "../actions/types";

const initialState = {
    usersList:[],
    loading: true,
};
const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    
      case actionTypes.FETCH_USERS:
      //console.log(action.payload)
      return {
        ...state,
        usersList: action.payload,
        loading: false,

      };
    default:
      return state;
  }
};

export default roomReducer;
