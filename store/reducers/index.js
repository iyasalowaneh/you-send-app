import { combineReducers } from "redux";

import authReduser from "./authReduser";
const rootReducer = combineReducers({
 
  usersReducer: authReduser,
});
export default rootReducer;
