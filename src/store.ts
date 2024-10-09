import {
  applyNodeChanges,
  applyEdgeChanges,
  type Node,
  type Edge,
  type OnConnect,
  type OnNodesChange,
  type OnEdgesChange,
} from "@xyflow/react";
import { nanoid } from "nanoid";
import { create } from "zustand";
import { createAudioNode, play, updateAudioNode } from "./audio";

export interface StoreState {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  addEdge: OnConnect;
  updateNode: (id: string, data: any) => void;
  removeNodes: (nodes: { id: string }[]) => void;
  createNode: (type: string) => void;
  play: (id: string) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  nodes: [
    // {
    //   id: "a",
    //   type: "osc",
    //   data: { frequency: 200, label: "oscillator" },
    //   position: { x: 0, y: 0 },
    // },
  ],
  edges: [],

  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange(changes) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  addEdge(data) {
    const edge = { ...data, id: nanoid(6) };
    console.log("addEdge", edge);
    set({ edges: [edge, ...get().edges] });
  },

  updateNode(id: string, data: any) {
    updateAudioNode(id, data);
    set({
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      ),
    });
  },

  removeNodes(nodes) {
    for (const { id } of nodes) {
      continue;
    }
  },
  createNode(type: string) {
    const id = nanoid(6);

    switch (type) {
      case "osc": {
        const data = { frequency: 200, type: "sine" };
        const position = { x: 0, y: 0 };
        createAudioNode(id, type, data);

        set({
          nodes: [...get().nodes, { id, type, data, position }],
        });
        break;
      }
      case "amp": {
        const data = { gain: 0.5 };
        const position = { x: 0, y: 0 };

        set({
          nodes: [...get().nodes, { id, type, data, position }],
        });

        break;
      }
    }
  },
  play(id: string) {
    play(id);
  },
}));
