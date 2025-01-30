import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function RunningCounter({ target = 100, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / ((duration * 1000) / 10);

    const interval = setInterval(() => {
      setCount((prev) =>
        prev + increment < target ? prev + increment : target
      );
    }, 10);
    if (count >= target) clearInterval(interval);
    return () => clearInterval(interval);
  }, [target, duration, count]);

  return (
    <motion.div
      animate={{ opacity: [0, 1, 0.5, 1] }}
      transition={{ duration: 1 }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: "700" }}>{Math.floor(count)}</h1>
    </motion.div>
  );
}

export default RunningCounter;
