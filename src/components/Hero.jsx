import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-section"
    >
      <h1>Your Name</h1>
      <p>Aspiring Software Developer</p>
    </motion.div>
  );
}

export default Hero;