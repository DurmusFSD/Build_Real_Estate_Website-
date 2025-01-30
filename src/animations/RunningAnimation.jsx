import { motion } from "framer-motion";
import React from "react";

function RunningAnimation({ text, duration }) {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div
        style={{ display: "inline-block" }}
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
      >
        <h1 style={{ color: "#fff", fontSize: "44px" }}>{text}</h1>
      </motion.div>
    </div>
  );
}

export default RunningAnimation;
