import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Initializing state using the useState hook
  const [count, setCount] = useState(0);

  // Event handler to update state
  const increment = () => {
    setCount(count + 1);
  };

  // useEffect hook to perform actions after re-render
  useEffect(() => {
    console.log('Component has re-rendered with count:', count);
    // Additional actions after re-render can be performed here
  }, [count]); // Dependency array ensures useEffect runs only when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;


   
