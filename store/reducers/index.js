import { combineReducers } from "redux";
import roomReducer from "./roomReducer";
import authReduser from "./authReduser";
import messagRreducer from "./meassgeReducer";
import roomListReducer from "./roomListReducer";

const rootReducer = combineReducers({
 
  usersReducer: authReduser,
  usersList: roomReducer,
messages:messagRreducer,
rooms:roomListReducer

});
export default rootReducer;
