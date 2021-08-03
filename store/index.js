import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions";
import { fetchMessage } from "./actions/messageActions";
import { fetchUsers } from "./actions/roomActions";
import {fetchRoom} from "./actions/roomListActions"
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer, // reducer function
  applyMiddleware(thunk)
);

store.dispatch(checkForToken());
store.dispatch(fetchUsers());
store.dispatch(fetchMessage());
store.dispatch(fetchRoom());

export default store;
