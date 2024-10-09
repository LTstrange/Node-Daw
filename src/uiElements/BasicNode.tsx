import React from "react";

/**
 * Basic UI Frame of Node.
 *
 * @param name - The name of the node
 * @param onPlay - Optional callback function when play button is clicked
 * @returns
 */
function BasicNode({
  name,
  onPlay,
  children,
}: {
  name: string;
  onPlay?: () => void;
  children: React.ReactNode;
}) {
  const splited_child = React.Children.toArray(children).reduce(
    (prev, curr, index) => [
      prev,
      <hr key={`divider-${index}`} className="border-gray-20 mx-2" />,
      curr,
    ]
  );
  return (
    <div className="rounded-md bg-white shadow-xl">
      <div
        className="
        rounded-t-md px-2 py-1 bg-pink-500 text-white text-sm 
        flex justify-between space-x-5 relative"
      >
        <span className="font-bold">{name}</span>
        {onPlay && (
          <button
            className="cursor-pointer active:text-pink-700"
            onClick={onPlay}
          >
            ▶
          </button>
        )}
      </div>

      {splited_child}
    </div>
  );
}

export default BasicNode;
