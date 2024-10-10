import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AnalisisSituacionActivityProps {
  onBackToContent: () => void;
}

const AnalisisSituacionActivity: React.FC<AnalisisSituacionActivityProps> = ({ onBackToContent }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInputs, setUserInputs] = useState<string[]>(Array(4).fill(''));

  const steps = [
    { question: "¿Quiénes son las partes principales involucradas en esta negociación?", placeholder: "Ej: Comprador, vendedor, intermediario..." },
    { question: "¿Cuáles son los intereses clave de cada parte?", placeholder: "Ej: El comprador busca calidad, el vendedor busca beneficio..." },
    { question: "¿Qué factores del contexto pueden influir en la negociación?", placeholder: "Ej: Situación económica, competencia, regulaciones..." },
    { question: "¿Cuáles son algunas alternativas posibles si no se llega a un acuerdo?", placeholder: "Ej: Buscar otros proveedores, posponer la decisión..." },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInputs = [...userInputs];
    newInputs[currentStep] = e.target.value;
    setUserInputs(newInputs);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6">Actividad: Análisis de una Situación de Negociación</h3>
      <p className="mb-4">Imagina que estás preparándote para negociar la compra de un nuevo sistema de software para tu empresa. Analiza la situación respondiendo a las siguientes preguntas:</p>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white bg-opacity-20 rounded-lg p-6 mb-6"
      >
        <h4 className="text-xl font-semibold mb-2">{steps[currentStep].question}</h4>
        <textarea
          className="w-full h-32 p-2 rounded bg-white bg-opacity-30 text-white placeholder-blue-200"
          placeholder={steps[currentStep].placeholder}
          value={userInputs[currentStep]}
          onChange={handleInputChange}
        />
      </motion.div>

      <div className="flex justify-between">
        <motion.button
          className="bg-white text-blue-700 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Anterior
        </motion.button>
        {currentStep < steps.length - 1 ? (
          <motion.button
            className="bg-white text-blue-700 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300"
            onClick={handleNext}
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
            Finalizar Actividad
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default AnalisisSituacionActivity;