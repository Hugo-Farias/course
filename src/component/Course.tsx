import React, { useState } from "react";
import "./Course.scss";

const Course: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
};

export default Course;
