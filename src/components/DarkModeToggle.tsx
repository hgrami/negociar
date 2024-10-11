// DarkModeToggle.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <motion.button
      className={`fixed bottom-4 left-4 p-2 rounded-full z-50 ${
        isDarkMode ? 'bg-yellow-400' : 'bg-gray-800'
      }`}
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? '🌞' : '🌙'}
    </motion.button>
  );
};

export default DarkModeToggle;