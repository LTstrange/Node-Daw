import { Handle, type HandleType, Position } from "@xyflow/react";
import React from "react";

function Slot({ type, children }: { type: string; children: React.ReactNode }) {
  let handleType: HandleType;
  let position: Position;
  switch (type) {
    case "input": {
      handleType = "target";
      position = Position.Left;
      break;
    }
    case "output": {
      handleType = "source";
      position = Position.Right;
      break;
    }
    default: {
      throw new Error("Invalid slot type");
    }
  }
  return (
    <label className="flex flex-col px-2 py-1 relative">
      <Handle
        type={handleType}
        position={position}
        className="absolute size-2"
      />
      {children}
    </label>
  );
}

export default Slot;
