import React from 'react';
import { motion } from 'framer-motion';
import principiosBasicosImage from '../../assets/principios_basicos.jpg'

interface Principle {
  id: string;
  content: string;
  description: string;
}

interface PrincipiosBasicosContentProps {
  principles: Principle[];
  onStartActivity: () => void;
}

const PrincipiosBasicosContent: React.FC<PrincipiosBasicosContentProps> = ({ principles, onStartActivity }) => {
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="md:w-2/3 md:pr-4">
          <p className="mb-4">Los principios básicos de la negociación son fundamentales para lograr acuerdos efectivos y mutuamente beneficiosos. Estos principios nos guían en el proceso de negociación, ayudándonos a mantener el enfoque en lo importante y a evitar obstáculos comunes.</p>
        </div>
        <motion.div 
          className="md:w-1/3 mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
            <img
                src={principiosBasicosImage}
                alt="Principios básicos de negociación"
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: '250px', objectFit: 'cover' }}
              />
        </motion.div>
      </div>
      
      <ul className="space-y-4 mb-6">
        {principles.map((principle, index) => (
          <motion.li 
            key={principle.id}
            className="bg-white bg-opacity-10 rounded-lg p-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="font-semibold">{principle.content}</h3>
            <p>{principle.description}</p>
          </motion.li>
        ))}
      </ul>

      <motion.button
        className="bg-white text-pink-700 font-bold py-2 px-4 rounded hover:bg-pink-100 transition duration-300"
        onClick={onStartActivity}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Iniciar Actividad Interactiva
      </motion.button>
    </div>
  );
};

export default PrincipiosBasicosContent;