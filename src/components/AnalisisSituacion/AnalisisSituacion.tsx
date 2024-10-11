// AnalisisSituacion.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnalisisSituacionContent from './AnalisisSituacionContent';
import AnalisisSituacionActivity from './AnalisisSituacionActivity';

const AnalisisSituacion: React.FC = () => {
  const [showActivity, setShowActivity] = useState(false);

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 overflow-hidden">
      <AnimatePresence mode="wait">
        {!showActivity ? (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <AnalisisSituacionContent onStartActivity={() => setShowActivity(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="activity"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <AnalisisSituacionActivity onBackToContent={() => setShowActivity(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnalisisSituacion;