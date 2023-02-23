import React, { useState, useEffect, useRef } from "react";

const Counter: React.FC = () => {
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [running]);

  const handleStartPause = () => {
    setRunning((prev) => !prev);
  };

  const handleReset = () => {
    setRunning(false);
    setCount(0);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleStartPause}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
