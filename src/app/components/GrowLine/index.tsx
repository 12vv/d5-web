import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const GlowLineMotion = () => {
  return (
    <>
      {/* <div className="gl_placeholder-glow">
        <p>This is a glowing placeholder</p>
      </div> */}
      <motion.div
        className="glow-line-motion"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </>
  );
};

export default GlowLineMotion;
