// import { assert } from "tone/build/esm/core/util/Debug";
import { nanoid } from "nanoid";
import * as Tone from "tone";

const nodes: Map<string, any> = new Map();

await Tone.start();

export function play(id: string) {
  if (!nodes.has(id)) {
    throw new Error("Audio node not found");
  }
  const node = nodes.get(id);
  node.toDestination().start();

  setTimeout(() => {
    node.disconnect(Tone.getDestination());
  }, 500);
}

export function createAudioNode(id: string, type: string, data: any) {
  switch (type) {
    case "osc": {
      const oscillator = new Tone.Oscillator(data.frequency, data.type);
      nodes.set(id, oscillator);
      break;
    }
    default:
      throw new Error("Unsupported audio node type");
  }
}

export function updateAudioNode(id: string, data: any) {
  if (!nodes.has(id)) {
    throw new Error("Audio node not found");
  }
  const node = nodes.get(id);
  node.set(data);
}
