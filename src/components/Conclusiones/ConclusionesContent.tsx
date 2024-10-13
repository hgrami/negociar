import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import negotiationArtImage from '../../assets/conclusiones.jpg';

const ConclusionesContent: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const keyPoints = [
    "La negociación es una habilidad fundamental en los negocios y la vida personal.",
    "Los principios básicos incluyen separar personas de problemas y enfocarse en intereses.",
    "El análisis de la situación y la preparación son cruciales para el éxito.",
    "La MAPAN (Mejor Alternativa Posible a un Acuerdo Negociado) determina el poder de negociación.",
    "Las estrategias y tácticas deben adaptarse a cada situación específica.",
    "La práctica y la experiencia son esenciales para mejorar las habilidades de negociación."
  ];

  const critique = {
    logical: [
      "El énfasis en la preparación y el análisis de la situación es crucial para cualquier negociación exitosa.",
      "La adaptabilidad de estrategias según la situación refleja la realidad de que no existe un enfoque único para todas las negociaciones.",
      "La importancia de la práctica y la experiencia reconoce que la negociación es una habilidad que se puede mejorar con el tiempo."
    ],
    questionable: [
      "El libro puede simplificar demasiado algunas situaciones complejas de negociación.",
      "No siempre es posible separar completamente a las personas de los problemas, especialmente en negociaciones con alta carga emocional.",
      "El concepto de MAPAN, aunque útil, puede ser difícil de determinar con precisión en situaciones del mundo real."
    ]
  };

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
            className="rounded-lg shadow-2xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
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
        className="text-center max-w-2xl mb-4"
      >
        Recuerda, la negociación efectiva es un arte que se perfecciona con la práctica. 
        Cada interacción es una oportunidad para aplicar estos principios y mejorar tus habilidades.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        onClick={() => setIsModalOpen(true)}
      >
        Ver Crítica del Libro
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white text-black p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">Crítica del Libro: El Arte de Negociar</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-green-600">Aspectos Lógicos:</h3>
                <ul className="list-disc pl-5">
                  {critique.logical.map((point, index) => (
                    <li key={index} className="mb-2">{point}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-red-600">Aspectos Cuestionables:</h3>
                <ul className="list-disc pl-5">
                  {critique.questionable.map((point, index) => (
                    <li key={index} className="mb-2">{point}</li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConclusionesContent;