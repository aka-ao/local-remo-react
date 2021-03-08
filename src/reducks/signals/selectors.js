import { createSelector } from "reselect";

const signalsSelector = (state) => state.signals;

export const getSignals = createSelector(
  [signalsSelector],
  (state) => state.list
);
