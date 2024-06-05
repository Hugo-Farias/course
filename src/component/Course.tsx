import { useState } from "react";
import { motion } from "framer-motion";
import "./Course.scss";

const Course = function () {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>
        Counter:
        <motion.span
          key={count}
          initial={{ opacity: 0, y: -10 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animated state
          transition={{ duration: 0.1 }} // Transition configuration
        >
          {count}
        </motion.span>
      </h1>
      <div className="button-group">
        <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      </div>
    </div>
  );
};

export default Course;
