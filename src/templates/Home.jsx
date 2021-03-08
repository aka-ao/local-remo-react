import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { PrimaryButton, SignalArea } from "../components/UIkit";
import { fetchSignals } from "../reducks/signals/operations";
import { getSignals } from "../reducks/signals/selectors";
import List from "@material-ui/core/List";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const signals = getSignals(selector);
  useEffect(() => {
    dispatch(fetchSignals());
  }, []);
  return (
    <section>
      <div className="c-section-wrapin">
        <h2 className="u-text__headline u-text-center">Home</h2>
        <List dense={true}>
          {signals.map((signal) => {
            return <SignalArea key={signal.id} signal={signal} />;
          })}
        </List>

        <div className="module-spacer--medium" />

        <div>
          <PrimaryButton
            label={"登録"}
            onClick={() => dispatch(push("/create"))}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
