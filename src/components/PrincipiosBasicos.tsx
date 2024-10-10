import React, { useState } from 'react';

import PrincipiosBasicosContent from './PrincipiosBasicosContent';
import PrincipiosBasicosActivity from './PrincipiosBasicosActivity';

const PrincipiosBasicos: React.FC = () => {
  const [showActivity, setShowActivity] = useState(false);

  const principles = [
    { id: 'principle1', content: 'Separar las personas del problema', description: 'Evita que las emociones y personalidades interfieran con la resolución del problema.' },
    { id: 'principle2', content: 'Enfocarse en intereses, no en posiciones', description: 'Identifica las necesidades subyacentes en lugar de las demandas iniciales.' },
    { id: 'principle3', content: 'Generar opciones de beneficio mutuo', description: 'Busca soluciones creativas que beneficien a todas las partes.' },
    { id: 'principle4', content: 'Usar criterios objetivos', description: 'Basa las decisiones en estándares justos e imparciales.' },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-r from-pink-500 to-pink-700 rounded-xl shadow-2xl overflow-hidden p-6">
      {!showActivity ? (
        <PrincipiosBasicosContent 
          principles={principles} 
          onStartActivity={() => setShowActivity(true)} 
        />
      ) : (
        <PrincipiosBasicosActivity 
          principles={principles} 
          onBackToContent={() => setShowActivity(false)} 
        />
      )}
    </div>
  );
};

export default PrincipiosBasicos;