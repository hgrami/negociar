import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface ScrollIndicatorProps {
  progress: MotionValue<number>;
  sections: { title: string }[];
  currentSection: number;
  onClick: (index: number) => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ progress, sections, currentSection, onClick }) => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-end">
      {sections.map((section, index) => (
        <div
          key={section.title}
          className="mb-2 flex items-center"
          onClick={() => onClick(index)}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            className="text-white text-sm mr-2 opacity-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: currentSection === index ? 1 : 0, x: currentSection === index ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {section.title}
          </motion.div>
          <motion.div
            className="w-3 h-3 rounded-full bg-white"
            initial={{ scale: 0.5 }}
            animate={{
              scale: currentSection === index ? 1.2 : 0.8,
              backgroundColor: currentSection === index ? "#ffffff" : "#a0a0a0"
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      ))}
      <motion.div
        className="absolute right-1.5 w-0.5 bg-white rounded"
        style={{
          height: `${(sections.length - 1) * 24}px`,
          originY: 0,
          scaleY: progress
        }}
      />
    </div>
  );
};

export default ScrollIndicator;