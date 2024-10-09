import React from "react";
import { shallow } from "zustand/shallow";

import { StoreState, useStore } from "../store";
import BasicNode from "../uiElements/BasicNode";
import Slot from "../uiElements/Slot";

// const selector = (store: StoreState) => ({
//   isRunning: store.isRunning,
//   toggleAudio: store.toggleAudio,
// });

function Output({ id: string, data }) {
  // const { isRunning, toggleAudio } = useStore(selector, shallow);

  return (
    <BasicNode name="Output">
      <Slot type="input">
        <p className="text-xs font-bold">Wave</p>
      </Slot>
    </BasicNode>
  );
}

export default Output;
