import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import ElArteDeNegociarContent from './ElArteDeNegociarContent';
import QuizSection from './QuizSection';
import { elArteDeNegociarQuestionsPool, Question } from '../constants/questions';

const ElArteDeNegociar: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [bestResult, setBestResult] = useState({ score: 0, time: Infinity });

  useEffect(() => {
    const storedBestResult = localStorage.getItem('quizBestResult');
    if (storedBestResult) {
      setBestResult(JSON.parse(storedBestResult));
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (quizStarted && !showSummary) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [quizStarted, showSummary]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const selectRandomQuestions = useCallback(() => {
    const shuffledQuestions = shuffleArray(elArteDeNegociarQuestionsPool);
    const selectedQuestions = shuffledQuestions.slice(0, 4).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setQuestions(selectedQuestions);
  }, []);

  const handleAnswer = useCallback((selectedId: number) => {
    const currentQ = questions[currentQuestion];
    const isCorrect = selectedId === currentQ.correctAnswerId;
    setScore((prevScore) => isCorrect ? prevScore + 1 : prevScore);
    setFeedback(isCorrect ? "¡Correcto!" : "Incorrecto. Inténtalo de nuevo.");

    setTimeout(() => {
      setFeedback(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        setQuizStarted(false);
        setShowSummary(true);
        updateBestResult(score + (isCorrect ? 1 : 0), elapsedTime);
      }
    }, 1000);
  }, [currentQuestion, questions, score, elapsedTime]);

  const updateBestResult = (newScore: number, newTime: number) => {
    if (newScore > bestResult.score || (newScore === bestResult.score && newTime < bestResult.time)) {
      const newBestResult = { score: newScore, time: newTime };
      setBestResult(newBestResult);
      localStorage.setItem('quizBestResult', JSON.stringify(newBestResult));
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
    setElapsedTime(0);
    setShowHeader(true);
    setFeedback(null);
    selectRandomQuestions();
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setShowHeader(false);
    setElapsedTime(0);
    selectRandomQuestions();
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}m ${seconds}s`;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
      {showHeader && <ElArteDeNegociarContent />}

      {!quizStarted && !showSummary && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={startQuiz}
        >
          Comienza el Quiz
        </motion.button>
      )}

      {quizStarted && questions.length > 0 && (
        <QuizSection
          question={questions[currentQuestion]}
          feedback={feedback}
          time={elapsedTime}
          handleAnswer={handleAnswer}
          progress={(currentQuestion + 1) / questions.length * 100}
        />
      )}

      {showSummary && (
        <div className="w-full max-w-md text-center">
          <h3 className="text-2xl font-semibold mb-4">Resumen del Quiz</h3>
          <p className="text-lg mb-2">Tu puntuación: {score} de {questions.length}</p>
          <p className="text-lg mb-4">Tiempo total: {formatTime(elapsedTime)}</p>

          <h4 className="text-xl font-semibold mb-2">Mejor Resultado:</h4>
          <p className="text-lg mb-2">Puntuación: {bestResult.score} de {questions.length}</p>
          <p className="text-lg mb-4">Tiempo: {formatTime(bestResult.time)}</p>

          <button
            onClick={resetQuiz}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Reiniciar Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default ElArteDeNegociar;