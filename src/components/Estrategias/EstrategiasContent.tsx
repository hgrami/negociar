import React from 'react';
import { motion } from 'framer-motion';

interface MapanEstrategiasContentProps {
  onStartFlashCards: () => void;
}

const MapanEstrategiasContent: React.FC<MapanEstrategiasContentProps> = ({ onStartFlashCards }) => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-teal-600 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">MAPAN</h3>
          <p className="mb-4">Mejor Alternativa Posible a un Acuerdo Negociado</p>
          <ul className="list-disc list-inside">
            <li>Determina tu poder en la negociación</li>
            <li>Ayuda a establecer tu punto de salida</li>
            <li>Previene aceptar acuerdos desfavorables</li>
          </ul>
        </div>
        <div className="bg-teal-600 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Estrategias de Negociación</h3>
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">Negociación distributiva</h4>
            <p>Enfoque ganar-perder, divide un "pastel" fijo</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Negociación integrativa</h4>
            <p>Enfoque ganar-ganar, busca crear valor para todas las partes</p>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-teal-600 rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Tácticas de negociación</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li>
            <span className="font-semibold">Anclaje:</span> Establecer un punto de referencia inicial
          </li>
          <li>
            <span className="font-semibold">Reciprocidad:</span> Hacer concesiones a cambio de concesiones
          </li>
          <li>
            <span className="font-semibold">Escasez:</span> Crear la percepción de que algo es limitado o único
          </li>
          <li>
            <span className="font-semibold">Autoridad:</span> Usar expertos o figuras de autoridad para respaldar posiciones
          </li>
        </ul>
      </div>
      <div className="mt-6 flex justify-center">
        <motion.button
          className="bg-white text-teal-500 font-bold py-2 px-6 rounded-full hover:bg-teal-100 transition duration-300"
          onClick={onStartFlashCards}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Revisar con Flash Cards
        </motion.button>
      </div>
    </div>
  );
};

export default MapanEstrategiasContent;