import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { SignalsReducer } from "../signals/reducers";

import thunk from "redux-thunk";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      signals: SignalsReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
