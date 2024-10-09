import React from "react";
import { shallow } from "zustand/shallow";

import { type StoreState, useStore } from "../store";
import BasicNode from "../uiElements/BasicNode";
import Slider from "../uiElements/Slider";

const selector = (id: string) => (store: StoreState) => ({
  setGain: (e: React.ChangeEvent<HTMLInputElement>) =>
    store.updateNode(id, { gain: +e.target.value }),
});

function Amplifier({ id, data }) {
  const { setGain } = useStore(selector(id), shallow);

  return (
    <BasicNode name={"Amp"}>
      <Slider
        attributeName="Gain"
        min={0}
        max={2}
        step={0.1}
        value={data.gain}
        onChange={setGain}
      />
    </BasicNode>
  );
}

export default Amplifier;
