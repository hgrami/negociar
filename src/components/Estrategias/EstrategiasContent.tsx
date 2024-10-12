import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mapanEstrategiasImage from '../../assets/mapan_estrategias.jpg'; // Placeholder for image import

interface MapanEstrategiasContentProps {
  onStartFlashCards: () => void;
}

const MapanEstrategiasContent: React.FC<MapanEstrategiasContentProps> = ({ onStartFlashCards }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'mapan',
      icon: '⚖️',
      title: 'MAPAN',
      shortDesc: 'Mejor Alternativa Posible a un Acuerdo Negociado',
      fullDesc: 'Define el poder de negociación, establece límites y guía decisiones.'
    },
    {
      id: 'distributiva',
      icon: '🏆',
      title: 'Negociación Distributiva',
      shortDesc: 'Enfoque Ganar-Perder',
      fullDesc: 'Divide un "pastel" fijo. Útil en transacciones únicas. Tácticas: Anclaje, concesiones calculadas, presión.'
    },
    {
      id: 'integrativa',
      icon: '🤝',
      title: 'Negociación Integrativa',
      shortDesc: 'Enfoque Ganar-Ganar',
      fullDesc: 'Crea valor para todas las partes. Ideal para relaciones a largo plazo. Fomenta creatividad y colaboración.'
    },
    {
      id: 'tacticas',
      icon: '🧠',
      title: 'Tácticas',
      shortDesc: 'Técnicas de influencia',
      fullDesc: 'Anclaje, reciprocidad, escasez, autoridad, y compromiso progresivo.'
    },
    {
      id: 'emociones',
      icon: '😊',
      title: 'Manejo Emocional',
      shortDesc: 'Control emocional en negociación',
      fullDesc: 'Identificar emociones propias, reconocer las ajenas, usar inteligencia emocional.'
    }
  ];

  return (
    <div className="text-white p-6 bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl shadow-2xl overflow-hidden">
      <motion.div 
        className="relative mb-6 overflow-hidden rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={mapanEstrategiasImage}
          alt="MAPAN y Estrategias"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="text-sm italic">
            "La capacidad de controlar las emociones y de leer las de los demás es una habilidad crucial del negociador experto."
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {sections.map((section) => (
          <motion.div 
            key={section.id}
            className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 cursor-pointer transition-all duration-300 ${expandedSection === section.id ? 'ring-2 ring-teal-300' : ''}`}
            whileHover={{ scale: 1.02, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
            onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2 bg-teal-500 bg-opacity-30 rounded-full p-1">{section.icon}</span>
              <h3 className="text-lg font-bold">{section.title}</h3>
            </div>
            <p className="text-sm text-teal-100 mb-2">{section.shortDesc}</p>
            <AnimatePresence>
              {expandedSection === section.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-teal-200"
                >
                  {section.fullDesc}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <motion.button
          className="bg-teal-500 text-white font-bold py-2 px-6 rounded-full hover:bg-teal-400 transition duration-300 shadow-lg text-sm"
          onClick={onStartFlashCards}
          whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(0,0,0,0.15)' }}
          whileTap={{ scale: 0.95 }}
        >
          Revisar con Flash Cards
        </motion.button>
      </div>
    </div>
  );
};

export default MapanEstrategiasContent;