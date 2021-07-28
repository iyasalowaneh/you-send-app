import { combineReducers } from "redux";
import roomReducer from "./roomReducer";
import authReduser from "./authReduser"; //Rename to authReducer

const rootReducer = combineReducers({
  usersReducer: authReduser,
  usersList: roomReducer,
});

export default rootReducer;
