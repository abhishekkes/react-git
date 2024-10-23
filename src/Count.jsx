import React, { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(12);
   return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count}
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Count;
