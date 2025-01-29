import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Simple Counter</h1>
      <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="button-decrement" onClick={decrement}>
          Decrement
        </button>
        <button className="button-reset" onClick={reset}>
          Reset
        </button>
        <button className="button-increment" onClick={increment}>
          Increment
        </button>
      </div>
    </>
  );
}
export default Counter;
