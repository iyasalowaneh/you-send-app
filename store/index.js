import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions";
import { fetchUsers } from "./actions/roomActions";
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer, // reducer function
  applyMiddleware(thunk)
);

store.dispatch(checkForToken());
store.dispatch(fetchUsers());

export default store;
