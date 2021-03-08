import axios from "axios";
import { fetchSignalsAction, deleteSignalAction } from "./actions";
import { baseURL } from "../../remo";

export const fetchSignals = () => {
  return async (dispatch) => {
    axios
      .get(baseURL + "/all-signal")
      .then((res) => {
        dispatch(fetchSignalsAction(res.data));
      })
      .catch((error) => {
        console.log(error.message);
        alert("信号の取得に失敗しました。");
      });
  };
};

export const deleteSignal = (id) => {
  const url = baseURL + "/signal/" + id;
  console.log(url);
  return async (dispatch, getState) => {
    axios
      .delete(url)
      .then(() => {
        const signals = getState().signals.list;
        const newSignals = signals.filter((signal) => signal.id !== id);
        dispatch(deleteSignalAction(newSignals));
      })
      .catch((error) => {
        alert("削除に失敗しました。");
      });
  };
};
