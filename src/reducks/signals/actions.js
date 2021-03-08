export const FETCH_SIGNALS = "FETCH_SIGNALS";
export const fetchSignalsAction = (signals) => {
  return {
    type: "FETCH_SIGNALS",
    payload: signals,
  };
};

export const DELETE_SIGNAL = "DELETE_SIGNAL";
export const deleteSignalAction = (signals) => {
  return {
    type: "DELETE_SIGNAL",
    payload: signals,
  };
};
