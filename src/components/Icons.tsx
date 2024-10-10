import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  color: string;
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export const HandshakeIcon: React.FC<IconProps> = ({ color }) => (
  <motion.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M20 50C20 50 25 40 35 40C45 40 45 60 55 60C65 60 65 40 75 40C85 40 90 50 90 50"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      variants={draw}
      custom={0}
    />
    <motion.path
      d="M20 60C20 60 25 50 35 50C45 50 45 70 55 70C65 70 65 50 75 50C85 50 90 60 90 60"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      variants={draw}
      custom={1}
    />
    <motion.circle cx="20" cy="50" r="5" fill={color} variants={draw} custom={2} />
    <motion.circle cx="90" cy="50" r="5" fill={color} variants={draw} custom={2} />
  </motion.svg>
);

export const PrinciplesIcon: React.FC<IconProps> = ({ color }) => (
  <motion.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.rect x="10" y="10" width="80" height="80" rx="5" stroke={color} strokeWidth="4" variants={draw} custom={0} />
    <motion.line x1="10" y1="50" x2="90" y2="50" stroke={color} strokeWidth="4" variants={draw} custom={1} />
    <motion.line x1="50" y1="10" x2="50" y2="90" stroke={color} strokeWidth="4" variants={draw} custom={1} />
    <motion.circle cx="50" cy="50" r="10" fill={color} variants={draw} custom={2} />
  </motion.svg>
);

export const AnalysisIcon: React.FC<IconProps> = ({ color }) => (
  <motion.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.circle cx="40" cy="40" r="30" stroke={color} strokeWidth="4" variants={draw} custom={0} />
    <motion.line x1="62" y1="62" x2="85" y2="85" stroke={color} strokeWidth="6" strokeLinecap="round" variants={draw} custom={1} />
    <motion.path d="M30 40 L40 50 L50 30" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" variants={draw} custom={2} />
  </motion.svg>
);

export const StrategyIcon: React.FC<IconProps> = ({ color }) => (
  <motion.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path d="M50 10L90 90H10L50 10Z" stroke={color} strokeWidth="4" variants={draw} custom={0} />
    <motion.path d="M50 30L70 70H30L50 30Z" stroke={color} strokeWidth="4" variants={draw} custom={1} />
    <motion.circle cx="50" cy="55" r="5" fill={color} variants={draw} custom={2} />
  </motion.svg>
);

export const ApplicationsIcon: React.FC<IconProps> = ({ color }) => (
  <motion.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M30 65a15 15 0 0 1 0-30M70 35a15 15 0 0 1 0 30"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      variants={draw}
      custom={0}
    />
    <motion.path
      d="M37 72.5a25 25 0 1 1 26 0"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      variants={draw}
      custom={1}
    />
    <motion.circle cx="50" cy="50" r="5" fill={color} variants={draw} custom={2} />
  </motion.svg>
);

export const ConclusionsIcon: React.FC<IconProps> = ({ color }) => (
  <motion.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M50 10C28 10 10 28 10 50C10 72 28 90 50 90C72 90 90 72 90 50"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      variants={draw}
      custom={0}
    />
    <motion.path
      d="M90 30L90 50L70 50"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={draw}
      custom={1}
    />
    <motion.path
      d="M40 50L45 55L60 40"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={draw}
      custom={2}
    />
  </motion.svg>
);