import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative min-h-screen hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1F]/80 to-[#0F0A1F]"></div>
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mx-auto max-w-4xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm mb-6">
            Transform Your Business with AI
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Built On Innovation,<br />Driven By Intelligence
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Empowering businesses through cutting-edge AI solutions, comprehensive training, and global partnerships.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600/80 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-blue-500/25 backdrop-blur-sm"
          >
            Start Your AI Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};