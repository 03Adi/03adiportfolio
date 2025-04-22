import React from "react";
import { motion } from "framer-motion";

export default function ThisCantBeReached() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full bg-gradient-to-b from-gray-900 to-blue-900 flex flex-col items-center justify-center px-4"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Welcome to Aditya's Development Era 🚀
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-md mx-auto">
          Building the Future, One Line of Code at a Time 💻
        </p>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-16 h-1 bg-blue-500 mx-auto rounded"
        />
      </motion.div>
    </motion.div>
  );
}