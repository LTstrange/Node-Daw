import React from "react";
import { shallow } from "zustand/shallow";
import * as Tone from "tone";

import { type StoreState, useStore } from "../store";
import BasicNode from "../uiElements/BasicNode";
import Slider from "../uiElements/Slider";
import Slot from "../uiElements/Slot";

const selector = (id: string) => (store: StoreState) => ({
  setFrequency: (e: React.ChangeEvent<HTMLInputElement>) =>
    store.updateNode(id, { frequency: +e.target.value }),
  setType: (e: React.ChangeEvent<HTMLSelectElement>) =>
    store.updateNode(id, { type: e.target.value }),
  play: store.play,
});

const synth = new Tone.Synth().toDestination();

function Osc({ id, data }) {
  const { setFrequency, setType, play } = useStore(selector(id), shallow);

  return (
    <BasicNode name="Osc" onPlay={() => play(id)}>
      <Slot type="output">
        <p className="text-xs font-bold text-right">Wave</p>
      </Slot>
      <Slider
        attributeName="Frequency"
        unit=" HZ"
        min={20}
        max={1000}
        value={data.frequency}
        onChange={setFrequency}
      />

      <label className="flex flex-col px-2 py-1 pb-2">
        <p className="text-xs font-bold mb-2">Waveform</p>
        <select className="nodrag" value={data.type} onChange={setType}>
          <option value="sine">sine</option>
          <option value="triangle">triangle</option>
          <option value="sawtooth">sawtooth</option>
          <option value="square">square</option>
        </select>
      </label>
    </BasicNode>
  );
}

export default Osc;
