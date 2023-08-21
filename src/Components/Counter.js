import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Regular function declaration - will be recreated on each render
  const increment = () => {
    setCount(count + 1);
  };

  // Using useCallback to memoize the function
  const incrementMemoized = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment (Regular)</button>
      <button onClick={incrementMemoized}>Increment (Memoized)</button>
    </div>
  );
}

export default Counter;
