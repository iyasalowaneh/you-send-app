import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import { checkForToken } from "./actions/authActions";
import { fetchUsers } from "./actions/roomActions";

const store = createStore(
  rootReducer, // reducer function
  applyMiddleware(thunk)
);

store.dispatch(checkForToken());
store.dispatch(fetchUsers());

export default store;
