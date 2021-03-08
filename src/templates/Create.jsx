import { PrimaryButton, TextInput } from "../components/UIkit";
import { useDispatch } from "react-redux";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { push } from "connected-react-router";
import { baseURL } from "../remo";

const Create = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const [signal, setSignal] = useState(null);

  const fetchSignal = () => {
    axios
      .get(baseURL + "/signal")
      .then((res) => {
        setSignal(res.data);
        console.log(signal);
        alert("信号取得に成功しました。");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "信号取得に失敗しました。Remoに再度赤外線を当ててから実行してください。"
        );
      });
  };

  const postSignal = (data) => {
    if (name) {
      const url = baseURL + "/signal/" + name;
      console.log(url);
      axios.post(url, data).then((res) => {
        console.log(res);
        alert("信号を登録しました。");
        dispatch(push("/"));
      });
    } else {
      alert("名前を入力してください");
    }
  };

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">家電登録</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={true}
        label={"家電名を入力"}
        multiline={false}
        onChange={inputName}
        required={true}
        rows={1}
        value={name}
        type={"text"}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton label={"信号取得"} onClick={() => fetchSignal()} />
        <PrimaryButton label={"登録"} onClick={() => postSignal(signal)} />
      </div>
    </div>
  );
};

export default Create;
