import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions";

import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer, // reducer function
  applyMiddleware(thunk)
);

store.dispatch(checkForToken());

export default store;
