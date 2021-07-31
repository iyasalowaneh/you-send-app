import { combineReducers } from "redux";
import roomReducer from "./roomReducer";
import authReduser from "./authReduser";
import messagRreducer from "./meassgeReducer";
const rootReducer = combineReducers({
 
  usersReducer: authReduser,
  usersList: roomReducer,
messages:messagRreducer
});
export default rootReducer;
