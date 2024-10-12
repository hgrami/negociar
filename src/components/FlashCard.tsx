import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlashCardData {
  id: string;
  front: string;
  back: string;
}

interface FlashCardProps {
  cards: FlashCardData[];
  onFinish: () => void;
}

const FlashCard: React.FC<FlashCardProps> = ({ cards, onFinish }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<FlashCardData[]>([]);

  useEffect(() => {
    if (cards.length > 0) {
      setShuffledCards([...cards].sort(() => Math.random() - 0.5));
    }
  }, [cards]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCardIndex < shuffledCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      onFinish();
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  if (shuffledCards.length === 0) {
    return <div className="text-white text-center">No Hay Flash Cards.</div>;
  }

  const currentCard = shuffledCards[currentCardIndex];

  return (
    <div className="w-full max-w-lg mx-auto p-8 bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl shadow-2xl">
      <h3 className="text-3xl font-bold mb-6 text-white text-center">Flash Cards</h3>
      <div className="relative h-80 mb-8">
        <motion.div
          className="w-full h-full bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center p-8 cursor-pointer perspective-1000"
          onClick={handleFlip}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <AnimatePresence initial={false} mode='wait'>
            <motion.div
              key={isFlipped ? 'back' : 'front'}
              initial={{ opacity: 0, rotateY: isFlipped ? -90 : 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: isFlipped ? 90 : -90 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full flex items-center justify-center absolute backface-hidden"
            >
              <p className="text-white text-center text-xl font-semibold px-4">
                {isFlipped ? currentCard.back : currentCard.front}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-500 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-400 transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
        >
          Previous
        </motion.button>
        <p className="text-white text-lg font-semibold">
          {currentCardIndex + 1} / {shuffledCards.length}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-500 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-400 transition duration-300 shadow-lg"
          onClick={handleNext}
        >
          {currentCardIndex === shuffledCards.length - 1 ? 'Terminar' : 'Siguiente'}
        </motion.button>
      </div>
    </div>
  );
};

export default FlashCard;