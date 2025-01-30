import React from "react";
import { motion } from "framer-motion";

function AscendAnimation({ children, delay = 0.5, duration = 0.95 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay,ease:"easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default AscendAnimation;
