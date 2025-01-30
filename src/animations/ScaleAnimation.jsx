import { motion } from "framer-motion";
import React from "react";

function ScaleAnimation({ children, delay = 1, duration = 0.95 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1.09 }}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}

export default ScaleAnimation;
