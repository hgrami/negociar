// AnalisisSituacionContent.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface AnalisisSituacionContentProps {
  onStartActivity: () => void;
}

const AnalisisSituacionContent: React.FC<AnalisisSituacionContentProps> = ({ onStartActivity }) => {
  const steps = [
    { title: "Identificar las partes involucradas", description: "Determina quiénes son los actores principales y secundarios en la negociación.", icon: "👥" },
    { title: "Definir los intereses", description: "Identifica los objetivos, necesidades y motivaciones de cada parte.", icon: "🎯" },
    { title: "Evaluar el contexto", description: "Analiza el entorno, las circunstancias y los factores externos que pueden influir.", icon: "🌍" },
    { title: "Considerar alternativas", description: "Explora las opciones disponibles y la MAPAN (Mejor Alternativa Posible a un Acuerdo Negociado).", icon: "🔀" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.p 
        className="text-xl mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        El análisis de situación es un paso crucial en el proceso de negociación. Te permite comprender el panorama completo y prepararte adecuadamente para lograr los mejores resultados.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-20 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{step.icon}</span>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
            </div>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 mx-auto block"
        onClick={onStartActivity}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(59,130,246)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Iniciar Actividad Interactiva
      </motion.button>
    </div>
  );
};

export default AnalisisSituacionContent;