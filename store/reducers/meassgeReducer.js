// import slugify from "slugify";
import * as actionType from "../actions/types";
const initialState = {
  messages: [],
  loading: true,

};

const messagRreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_MESSAGE:
      return {
        ...state,
        messages: action.payload.messages,
        loading: false,

      };
      case actionType.ADD_MESSAGE:
        return {
          ...state,
          messages: [...state.messages, action.payload.newMessage],
          loading: false,

        };
    default:
      return state;
  }
};

export default messagRreducer;
