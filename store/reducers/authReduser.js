import * as actionTypes from "../actions/types";

const initialState = {
  users: null,
  loading: true,
  usersList:[]
};
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
      case actionTypes.FETCH_USERS:
      console.log(action.payload)
      return {
        ...state,
        usersList: action.payload,
        loading: false,

      };
    default:
      return state;
  }
};

export default authReduser;
