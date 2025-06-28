import React from "react";
import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return (
    <motion.div
      style={style}
      drag
      dragConstraints={containerRef}
      className="absolute p-2 rounded-lg cursor-pointer bg-gradient-to-br from-royal via-royal to-lavender"
    >
      {text && (
        <p className="text-xs font-semibold text-center text-white">{text}</p>
      )}
      {image && (
        <img
          src={image}
          className="w-8 h-8 max-w-none"
          alt="tech-logo"
          draggable={false}
        />
      )}
    </motion.div>
  );
};

export default Card;
