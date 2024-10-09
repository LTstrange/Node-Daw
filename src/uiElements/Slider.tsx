import React from "react";
import Slot from "./Slot";

/**
 * Slider Component
 *
 * @param attributeName - The name of the attribute to be displayed on the slider
 * @param unit - The unit to be displayed after the value (optional)
 * @param min - The minimum value for the slider
 * @param max - The maximum value for the slider
 * @param value - The current value of the slider
 * @param onChange - Function to call when value changes
 *
 * @returns
 */
function Slider({
  attributeName,
  unit = "",
  min,
  max,
  step = 1,
  value,
  onChange,
}: {
  attributeName: string;
  unit?: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  // Function to call when value changes
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Slot type="input">
      <div className="flex justify-between mb-2">
        <p className="text-xs font-bold">{attributeName}</p>
        <p className="text-right text-xs">{value.toString() + unit}</p>
      </div>
      <input
        className="nodrag appearance-none cursor-pointer bg-red-300 h-1 mb-2"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </Slot>
  );
}

export default Slider;
