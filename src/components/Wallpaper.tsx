import React from 'react';
import { motion } from 'framer-motion';

export const Wallpaper: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, hsl(239 84% 67% / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(280 65% 65% / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(239 84% 67% / 0.2) 0%, transparent 50%),
            linear-gradient(135deg, hsl(220 25% 98%), hsl(220 20% 95%))
          `
        }}
      />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(239 84% 67%) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        initial={{ x: '10%', y: '20%' }}
      />
      
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(280 65% 65%) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        initial={{ x: '70%', y: '60%' }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(239 84% 67%) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        initial={{ x: '60%', y: '10%' }}
      />
    </div>
  );
};