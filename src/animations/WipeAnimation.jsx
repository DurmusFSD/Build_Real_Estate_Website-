import { motion } from "framer-motion";
import React from "react";

function WipeAnimation({
  children,
  delay = 1,
  duration = 0.95,
  direction = "right",
}) {
  const initialWidth = { width: "0%" };
  const animatedWidth = { width: "100%" };

  const transformOrigin = direction === "right" ? "left" : "right";

  return (
    <motion.div
      initial={{ ...initialWidth, originX: transformOrigin }}
      animate={animatedWidth}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      {children}
    </motion.div>
  );
}

export default WipeAnimation;
