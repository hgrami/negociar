import React, { useState } from 'react';
import EstrategiasContent from './EstrategiasContent';
import FlashCard from '../FlashCard';

const Estrategias: React.FC = () => {
  const [showFlashCards, setShowFlashCards] = useState(false);

  const flashCards = [
    { id: '1', front: '¿Qué es MAPAN?', back: 'Mejor Alternativa Posible a un Acuerdo Negociado' },
    { id: '2', front: '¿Por qué es importante MAPAN?', back: 'Determina tu poder de negociación y ayuda a establecer límites' },
    { id: '3', front: 'Ejemplo de MAPAN', back: 'En una negociación salarial, tu MAPAN podría ser una oferta de trabajo de otra empresa' },
    { id: '4', front: 'Negociación distributiva', back: 'Enfoque ganar-perder, divide un "pastel" fijo' },
    { id: '5', front: 'Negociación integrativa', back: 'Enfoque ganar-ganar, busca crear valor para todas las partes' },
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