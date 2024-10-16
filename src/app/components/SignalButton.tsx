'use client'

import { motion } from 'framer-motion';
import React from 'react';

const BluetoothSignal: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.div
        className="relative flex justify-center items-center w-24 h-24 rounded-full bg-gray-800"
        whileHover="hover"
      >
        {/* Bluetooth Icon */}
        <motion.div className="text-white text-4xl">
          <i className="fas fa-bluetooth-b"></i> {/* Bluetooth icon */}
        </motion.div>

        {/* Signal Animation Layer 1 */}
        <motion.div
          className="absolute w-full h-full rounded-full bg-gray-500 opacity-20"
          variants={{
            hover: {
              scale: [1, 1.5, 2],
              opacity: [0.2, 0.1, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              },
            },
          }}
        ></motion.div>

        {/* Signal Animation Layer 2 */}
        <motion.div
          className="absolute w-full h-full rounded-full bg-gray-500 opacity-10"
          variants={{
            hover: {
              scale: [1, 1.8, 2.5],
              opacity: [0.15, 0.05, 0],
              transition: {
                duration: 1.8,
                repeat: Infinity,
                ease: "easeOut",
              },
            },
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default BluetoothSignal;
