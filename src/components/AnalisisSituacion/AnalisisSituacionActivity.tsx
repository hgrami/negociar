import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';

interface AnalisisSituacionActivityProps {
  onBackToContent: () => void;
}

interface Stakeholder {
  name: string;
  interests: string[];
  power: number;
  isCorrect: boolean;
}

const AnalisisSituacionActivity: React.FC<AnalisisSituacionActivityProps> = ({ onBackToContent }) => {
  const [stage, setStage] = useState(0);
  const [stakeholders, setStakeholders] = useState<string[]>([]);
  const [context, setContext] = useState<string[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const case_study = {
    title: "Fusión Empresarial: TechInnovate y DataPioneer",
    description: "TechInnovate y DataPioneer consideran una fusión para expandirse en el mercado tecnológico, enfrentando desafíos de integración cultural y valoración de activos."
  };

  const stakeholderOptions: Stakeholder[] = [
    { name: 'TechInnovate', interests: ['expansión', 'valoración justa', 'innovación'], power: 8, isCorrect: true },
    { name: 'DataPioneer', interests: ['expansión', 'valoración justa', 'liderazgo en software'], power: 8, isCorrect: true },
    { name: 'Empleados', interests: ['seguridad laboral', 'crecimiento'], power: 6, isCorrect: true },
    { name: 'Accionistas', interests: ['valor de acciones', 'crecimiento a largo plazo'], power: 7, isCorrect: true },
    { name: 'Clientes', interests: ['mejores productos', 'precios competitivos'], power: 5, isCorrect: false },
    { name: 'Competidores', interests: ['mantener cuota de mercado', 'innovación'], power: 4, isCorrect: false },
  ];

  const contextOptions = [
    { factor: 'Regulaciones antimonopolio', isCorrect: true },
    { factor: 'Tendencias del mercado tecnológico', isCorrect: true },
    { factor: 'Competencia en el sector', isCorrect: true },
    { factor: 'Situación económica global', isCorrect: true },
    { factor: 'Preferencias de color de los empleados', isCorrect: false },
    { factor: 'Menú de la cafetería corporativa', isCorrect: false },
    { factor: 'Políticas de estacionamiento', isCorrect: false },
    { factor: 'Escasez de papel en la oficina', isCorrect: false },
  ];

  const stages = [
    { title: "Identificar Partes Interesadas", description: "Selecciona las partes interesadas relevantes." },
    { title: "Analizar Contexto", description: "Identifica los factores externos influyentes." },
    { title: "Resumen del Análisis", description: "Revisa tu análisis de la situación." },
  ];

  const handleSelectStakeholder = (stakeholderName: string) => {
    setStakeholders(prev => 
      prev.includes(stakeholderName)
        ? prev.filter(s => s !== stakeholderName)
        : [...prev, stakeholderName]
    );
  };

  const handleSelectContext = (contextFactor: string) => {
    setContext(prev => 
      prev.includes(contextFactor)
        ? prev.filter(c => c !== contextFactor)
        : [...prev, contextFactor]
    );
  };

  const handleNextStage = () => {
    if (stage < stages.length - 1) {
      setStage(stage + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handlePreviousStage = () => {
    if (stage > 0) {
      setStage(stage - 1);
    }
  };

  const renderStage = () => {
    switch (stage) {
      case 0:
        return (
          <div className="grid grid-cols-2 gap-2">
            {stakeholderOptions.map((s, index) => (
              <Tooltip.Provider key={index}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <motion.button
                      className={`p-2 rounded text-white ${
                        stakeholders.includes(s.name)
                          ? s.isCorrect ? 'bg-green-500' : 'bg-red-500'
                          : 'bg-gray-300'
                      }`}
                      onClick={() => handleSelectStakeholder(s.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {s.name}
                    </motion.button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content className="bg-gray-800 text-white p-2 rounded shadow-lg z-50">
                      <p>Intereses: {s.interests.join(', ')}</p>
                      <p>Poder: {s.power}/10</p>
                      <Tooltip.Arrow className="fill-gray-800" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-2 gap-2">
            {contextOptions.map((c, index) => (
              <Tooltip.Provider key={index}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <motion.button
                      className={`p-2 rounded text-white ${
                        context.includes(c.factor)
                          ? c.isCorrect ? 'bg-green-500' : 'bg-red-500'
                          : 'bg-gray-300'
                      }`}
                      onClick={() => handleSelectContext(c.factor)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {c.factor}
                    </motion.button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content className="bg-gray-800 text-white p-2 rounded shadow-lg z-50">
                      <p>{c.isCorrect ? 'Factor relevante' : 'Factor no relevante'} para la negociación</p>
                      <Tooltip.Arrow className="fill-gray-800" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            ))}
          </div>
        );
      case 2:
        return (
          <div>
            <h4 className="text-lg font-semibold mb-2">Partes Interesadas seleccionadas:</h4>
            <ul className="mb-4 list-disc list-inside">
              {stakeholders.map((s, index) => (
                <li key={index} className={stakeholderOptions.find(so => so.name === s)?.isCorrect ? 'text-green-500' : 'text-red-500'}>{s}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-2">Factores Contextuales seleccionados:</h4>
            <ul className="list-disc list-inside">
              {context.map((c, index) => (
                <li key={index} className={contextOptions.find(co => co.factor === c)?.isCorrect ? 'text-green-500' : 'text-red-500'}>{c}</li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white bg-opacity-10 rounded-lg shadow-lg overflow-auto max-h-[80vh]">
      <h2 className="text-xl font-bold mb-2 text-center">{case_study.title}</h2>
      <p className="mb-4 text-sm text-center">{case_study.description}</p>
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-2">{stages[stage].title}</h3>
          <p className="mb-4 text-sm">{stages[stage].description}</p>
          {renderStage()}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-4">
        <motion.button
          className="bg-blue-500 text-white font-bold py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 text-sm"
          onClick={handlePreviousStage}
          disabled={stage === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Anterior
        </motion.button>
        {!showSummary ? (
          <motion.button
            className="bg-blue-500 text-white font-bold py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 text-sm"
            onClick={handleNextStage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {stage < stages.length - 1 ? "Siguiente" : "Ver Resumen"}
          </motion.button>
        ) : (
          <motion.button
            className="bg-green-500 text-white font-bold py-1 px-3 rounded-full hover:bg-green-600 transition duration-300 text-sm"
            onClick={onBackToContent}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Finalizar
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default AnalisisSituacionActivity;