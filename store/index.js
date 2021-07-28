import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForToken, fetchUsers } from "./actions/authActions";

import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer, // reducer function
  applyMiddleware(thunk)
);

store.dispatch(checkForToken());
store.dispatch(fetchUsers());

export default store;
