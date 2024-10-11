// AnalisisSituacionActivity.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnalisisSituacionActivityProps {
  onBackToContent: () => void;
}

const AnalisisSituacionActivity: React.FC<AnalisisSituacionActivityProps> = ({ onBackToContent }) => {
  const [stage, setStage] = useState(0);
  const [userAnalysis, setUserAnalysis] = useState({
    identificar: '',
    analizar: '',
    evaluar: '',
    considerar: ''
  });

  const scenario = {
    title: "Negociación de Fusión Empresarial",
    description: "Dos empresas tecnológicas, TechInnovate y DataPioneer, están considerando una fusión. TechInnovate es conocida por su innovación en hardware, mientras que DataPioneer es líder en software de análisis de datos. Ambas empresas buscan expandirse en el mercado, pero tienen preocupaciones sobre la integración de sus culturas corporativas y la valoración de sus activos."
  };

  const stages = [
    { title: "Identificar Partes", key: "identificar", description: "Identifica las partes principales y secundarias involucradas en esta negociación." },
    { title: "Analizar Intereses", key: "analizar", description: "Para cada parte identificada, describe sus posibles intereses y motivaciones." },
    { title: "Evaluar Contexto", key: "evaluar", description: "Identifica factores externos que podrían influir en esta negociación." },
    { title: "Considerar Alternativas", key: "considerar", description: "Propón posibles alternativas para cada parte si no se llega a un acuerdo." }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setUserAnalysis(prev => ({
      ...prev,
      [stages[stage].key]: value
    }));
  };

  const handleNextStage = () => {
    if (stage < stages.length - 1) {
      setStage(stage + 1);
    }
  };

  const handlePreviousStage = () => {
    if (stage > 0) {
      setStage(stage - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">{scenario.title}</h2>
      <p className="mb-6 text-center">{scenario.description}</p>

      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2">{stages[stage].title}</h3>
          <p className="mb-4">{stages[stage].description}</p>
          <textarea
            className="w-full h-32 p-2 rounded bg-white bg-opacity-30 text-white placeholder-blue-200 resize-none mb-4"
            placeholder="Ingresa tu análisis aquí"
            value={userAnalysis[stages[stage].key as keyof typeof userAnalysis]}
            onChange={handleInputChange}
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-6">
        <motion.button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
          onClick={handlePreviousStage}
          disabled={stage === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Anterior
        </motion.button>
        {stage < stages.length - 1 ? (
          <motion.button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
            onClick={handleNextStage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Siguiente
          </motion.button>
        ) : (
          <motion.button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
            onClick={onBackToContent}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Finalizar Análisis
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default AnalisisSituacionActivity;