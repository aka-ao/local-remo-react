import * as Actions from "./actions";
import initialState from "../store/initialState";

export const SignalsReducer = (state = initialState.signals, action) => {
  switch (action.type) {
    case Actions.FETCH_SIGNALS:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.DELETE_SIGNAL:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
