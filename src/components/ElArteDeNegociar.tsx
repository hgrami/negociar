import React, { useState } from 'react';
import { motion } from 'framer-motion';
import elArteDeNegociarImage from '../assets/el_arte_de_negociar.jpg'

const ElArteDeNegociar: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "¿Cuál es un elemento clave en el arte de negociar?",
      options: ["Fuerza", "Empatía", "Agresividad", "Indiferencia"],
      correctAnswer: 1
    },
    {
      question: "¿Qué es importante considerar en una negociación?",
      options: ["Solo tus intereses", "Los intereses de ambas partes", "Ganar a toda costa", "Evitar el conflicto"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es una habilidad importante para negociar efectivamente?",
      options: ["Hablar rápido", "Escuchar activamente", "Ser inflexible", "Ocultar información"],
      correctAnswer: 1
    }
  ];

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizStarted(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
      <div className="flex justify-between w-full mb-6">
        <div className="w-1/2 pr-4">
          <h3 className="text-xl font-semibold mb-2">Puntos Importantes:</h3>
          <ul className="list-disc list-inside">
            <li>La comunicación efectiva es fundamental</li>
            <li>Entender los intereses de todas las partes</li>
            <li>Buscar soluciones mutuamente beneficiosas</li>
            <li>Mantener una actitud constructiva y positiva</li>
          </ul>
        </div>
        <div className="w-1/2 pl-4">
          <img 
          style={{ objectFit: 'cover', width: "300px" }}

            src={elArteDeNegociarImage}
            alt="El Arte de Negociar" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {!quizStarted ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setQuizStarted(true)}
        >
          Comienza el Quiz
        </motion.button>
      ) : (
        <div className="w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </motion.button>
          ))}
        </div>
      )}

      {!quizStarted && score > 0 && (
        <p className="mt-4 text-lg">Tu puntuación: {score} de {questions.length}</p>
      )}
    </div>
  );
};

export default ElArteDeNegociar;