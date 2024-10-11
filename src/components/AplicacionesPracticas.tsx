import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Quiz from './Quiz';
import { elArteDeNegociarQuestionsPool } from '../constants/questions';
import AplicacionesPracticasContent from './AplicacionesPracticasContent';

const AplicacionesPracticas: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
      {!showQuiz && (
        <>
          <AplicacionesPracticasContent />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowQuiz(true)}
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