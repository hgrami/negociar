import React, { useState } from 'react';
import { motion } from 'framer-motion';

import negotiationArtImage from '../../assets/conclusiones.jpg';

const ConclusionesContent: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const keyPoints = [
    "La negociación es una habilidad fundamental en los negocios y la vida personal.",
    "Los principios básicos incluyen separar personas de problemas y enfocarse en intereses.",
    "El análisis de la situación y la preparación son cruciales para el éxito.",
    "La MAPAN (Mejor Alternativa Posible a un Acuerdo Negociado) determina el poder de negociación.",
    "Las estrategias y tácticas deben adaptarse a cada situación específica.",
    "La práctica y la experiencia son esenciales para mejorar las habilidades de negociación."
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-white">
      
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 mb-6 md:mb-0"
        >
          <img 
            src={negotiationArtImage} 
            alt="El Arte de Negociar" 
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
        
        <div className="w-full md:w-1/2 md:pl-8">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-20 p-4 rounded-lg cursor-pointer mb-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActivePoint(activePoint === index ? null : index)}
            >
              <p className="text-sm">{point}</p>
              {activePoint === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-xs italic"
                >
                  Reflexión: Piensa en cómo puedes aplicar este punto en tu próxima negociación.
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center max-w-2xl"
      >
        Recuerda, la negociación efectiva es un arte que se perfecciona con la práctica. 
        Cada interacción es una oportunidad para aplicar estos principios y mejorar tus habilidades.
      </motion.p>
    </div>
  );
};

export default ConclusionesContent;