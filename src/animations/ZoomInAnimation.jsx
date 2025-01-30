import { motion } from "framer-motion";
import React from "react";

function ZoomInAnimation({ src }) {
  return (
    <motion.div
      style={{ overflow: "hidden", height: "98vh", borderRadius: "30px" }}
    >
      <motion.img
        src={src}
        alt="image"
        initial={{ scale: 1 }}
        animate={{ scale: 1.3 }}
        transition={{ duration: 1 }}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      ></motion.img>
    </motion.div>
  );
}

export default ZoomInAnimation;
