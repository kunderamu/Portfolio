import React from 'react';
import { motion } from 'framer-motion';

const MyAnimation = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity }}
    style={{
      width: 100,
      height: 100,
      borderRadius: '50%',
      backgroundColor: 'var(--accent)',
      margin: 'auto',
    }}
  />
);

export default MyAnimation;
