'use client'

import { motion } from 'framer-motion';
import React from 'react';

const GlowingText: React.FC = () => {
  const text = "MOODI".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      textShadow: "0 0 80px rgba(255, 165, 0), 0 0 40px rgba(255, 165, 0)",
      transition: { duration: 1.25 },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.map((char, index) => (
        <motion.span
          key={index}
          className="text-[321.91px] font-bold text-white"
          variants={letterVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default GlowingText;
