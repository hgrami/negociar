// CaseStudy.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudyProps {
  titulo: string;
  descripcion: string;
  resultado: string;
  onClose: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ titulo, descripcion, resultado, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ y: -50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 15 }}
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-500 pb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {titulo}
        </motion.h2>
        <motion.div 
          className="mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Descripción:</h3>
          <p className="text-gray-700 leading-relaxed">{descripcion}</p>
        </motion.div>
        <motion.div 
          className="mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-green-600">Resultado:</h3>
          <p className="text-gray-700 leading-relaxed">{resultado}</p>
        </motion.div>
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={onClose}
            className="mt-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 ease-in-out shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(79,70,229)" }}
            whileTap={{ scale: 0.95 }}
          >
            Cerrar
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudy;