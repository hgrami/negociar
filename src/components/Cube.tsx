import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import './Cube.css';

interface CubeProps {
  color: string;
  icon: string;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  onClick: () => void;
}

const Cube: React.FC<CubeProps> = ({ color, icon, rotateX, rotateY, onClick }) => {
  return (
    <motion.div 
      className="cube-container" 
      onClick={onClick} 
      style={{ 
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="cube" style={{ '--cube-color': color } as React.CSSProperties}>
        <div className="face front">{icon}</div>
        <div className="face back">{icon}</div>
        <div className="face right">{icon}</div>
        <div className="face left">{icon}</div>
        <div className="face top">{icon}</div>
        <div className="face bottom">{icon}</div>
      </div>
    </motion.div>
  );
};

export default Cube;