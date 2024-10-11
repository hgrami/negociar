import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Quiz from '../Quiz';
import { elArteDeNegociarQuestionsPool } from '../../constants/questions';
import AplicacionesPracticasContent from './AplicacionesPracticasContent';

const AplicacionesPracticas: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
      {!showQuiz && (
        <>
          <AplicacionesPracticasContent />
          <motion.button
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out"
              onClick={() => setShowQuiz(true)}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,197,94)" }}
              whileTap={{ scale: 0.95 }}
            >
              Comienza el Quiz
            </motion.button>
        </>
      )}

      {showQuiz && <Quiz quizId="aplicacionesPracticas" onClose={() => setShowQuiz(false)} questionsPool={elArteDeNegociarQuestionsPool} />}
    </div>
  );
};

export default AplicacionesPracticas;