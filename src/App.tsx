import React from "react";
import { ReactFlow, Background, MiniMap, Controls, Panel } from "@xyflow/react";
import { shallow } from "zustand/shallow";

import { useStore, type StoreState } from "./store";
import Oscillator from "./nodes/Oscillator";
import Out from "./nodes/Out";

const selector = (store: StoreState) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  onNodesDelete: store.removeNodes,
  addEdge: store.addEdge,
  onCreateNode: store.createNode,
});

const nodeTypes = {
  osc: Oscillator,
  out: Out,
};

function App() {
  const store = useStore(selector, shallow);

  return (
    <ReactFlow
      nodes={store.nodes}
      edges={store.edges}
      onNodesChange={store.onNodesChange}
      onEdgesChange={store.onEdgesChange}
      onConnect={store.addEdge}
      onNodesDelete={store.onNodesDelete}
      nodeTypes={nodeTypes}
      fitView
    >
      <Panel>
        <button onClick={() => store.onCreateNode("osc")}>Osc</button>
      </Panel>
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}

export default App;
