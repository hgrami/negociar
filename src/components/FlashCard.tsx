import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    return <div className="text-white">No flash cards available.</div>;
  }

  const currentCard = shuffledCards[currentCardIndex];

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-4 text-white text-center">Flash Cards</h3>
      <div className="relative h-64 mb-4">
        <div
          className="w-full h-full bg-teal-700 rounded-xl shadow-lg flex items-center justify-center p-4 cursor-pointer perspective-1000"
          onClick={handleFlip}
        >
          <motion.div
            className="w-full h-full absolute backface-hidden"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-full h-full flex items-center justify-center absolute backface-hidden">
              <p className="text-white text-center text-lg">{currentCard.front}</p>
            </div>
            <div className="w-full h-full flex items-center justify-center absolute backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
              <p className="text-white text-center text-lg">{currentCard.back}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-700 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
        >
          Previous
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-700 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
          onClick={handleNext}
        >
          {currentCardIndex === shuffledCards.length - 1 ? 'Finish' : 'Next'}
        </motion.button>
      </div>
      <p className="text-center mt-4 text-white">
        Card {currentCardIndex + 1} of {shuffledCards.length}
      </p>
    </div>
  );
};

export default FlashCard;