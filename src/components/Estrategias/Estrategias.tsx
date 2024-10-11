import React, { useState } from 'react';
import EstrategiasContent from './EstrategiasContent';
import FlashCard from '../FlashCard';

const Estrategias: React.FC = () => {
  const [showFlashCards, setShowFlashCards] = useState(false);

  const flashCards = [
    { id: '1', front: '¿Qué es MAPAN?', back: 'Mejor Alternativa Posible a un Acuerdo Negociado' },
    { id: '2', front: 'Negociación distributiva', back: 'Enfoque ganar-perder, divide un "pastel" fijo' },
    { id: '3', front: 'Negociación integrativa', back: 'Enfoque ganar-ganar, busca crear valor para todas las partes' },
    { id: '4', front: 'Anclaje', back: 'Establecer un punto de referencia inicial en la negociación' },
    { id: '5', front: 'Reciprocidad', back: 'Hacer concesiones a cambio de concesiones de la otra parte' },
  ];

  return (
    <div className="w-full h-full bg-teal-500 text-white p-6 relative">

        {!showFlashCards ? (
          <EstrategiasContent onStartFlashCards={() => setShowFlashCards(true)} />
        ) : (
          <FlashCard
            cards={flashCards}
            onFinish={() => setShowFlashCards(false)}
          />
        )}
    </div>
  );
};

export default Estrategias;