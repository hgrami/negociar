import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ElArteDeNegociarContent from './ElArteDeNegociarContent';
import Quiz from '../Quiz';
import { elArteDeNegociarQuestionsPool } from '../../constants/questions';
import CaseStudy from '../CaseStudy';

const ElArteDeNegociar: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const caseStudy = {
    titulo: "Negociación de Compra de un Automóvil",
    descripcion: "El libro presenta un escenario de negociación para la compra de un automóvil usado. El vendedor quiere 20,000 euros por su automóvil, argumentando que es una buena oportunidad y que el coche está en excelentes condiciones. Por otro lado, el comprador no quiere pagar más de 15,000 euros, alegando que tiene problemas de tesorería y que el precio solicitado está por encima de su presupuesto. Inicialmente, ambas partes adoptan posiciones firmes, lo que parece llevar la negociación a un punto muerto.",
    resultado: "Tras analizar los intereses subyacentes de ambas partes, se descubre que el vendedor necesita vender rápidamente para comprar un coche más grande debido al crecimiento de su familia. Además, quiere evitar los gastos de renovación del seguro y el riesgo de tener que aparcar el coche en la calle. El comprador, por su parte, necesita un coche en mejores condiciones para las próximas vacaciones, pero tiene limitaciones financieras. Reconociendo estos intereses mutuos, llegan a un acuerdo creativo: el precio se fija en 18,000 euros, de los cuales 15,000 se pagan al contado y el resto después del verano. Esta solución satisface la necesidad del vendedor de vender rápidamente y obtener una cantidad sustancial de inmediato, mientras que permite al comprador adquirir el coche dentro de sus posibilidades financieras actuales. Este caso ilustra cómo, al enfocarse en los intereses subyacentes en lugar de las posiciones iniciales, se puede llegar a una solución que beneficie a ambas partes."
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
      {!showQuiz && (
        <>
          <ElArteDeNegociarContent />
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
              onClick={() => setShowCaseStudy(true)}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(59,130,246)" }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Caso de Estudio
            </motion.button>

            <motion.button
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out"
              onClick={() => setShowQuiz(true)}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,197,94)" }}
              whileTap={{ scale: 0.95 }}
            >
              Comienza el Quiz
            </motion.button>
          </div>
        </>
      )}
      {showCaseStudy && (
        <CaseStudy
          {...caseStudy}
          onClose={() => setShowCaseStudy(false)}
        />
      )}
      {showQuiz && <Quiz quizId="elArteDeNegociar" onClose={() => setShowQuiz(false)} questionsPool={elArteDeNegociarQuestionsPool} />}
    </div>
  );
};

export default ElArteDeNegociar;