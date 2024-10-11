// PrincipiosBasicos.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PrincipiosBasicosContent from './PrincipiosBasicosContent';
import PrincipiosBasicosActivity from './PrincipiosBasicosActivity';
import CaseStudy from '../CaseStudy';

const PrincipiosBasicos: React.FC = () => {
  const [showActivity, setShowActivity] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const principles = [
    { id: 'principle1', content: 'Separar las personas del problema', description: 'Evita que las emociones y personalidades interfieran con la resolución del problema.' },
    { id: 'principle2', content: 'Enfocarse en intereses, no en posiciones', description: 'Identifica las necesidades subyacentes en lugar de las demandas iniciales.' },
    { id: 'principle3', content: 'Generar opciones de beneficio mutuo', description: 'Busca soluciones creativas que beneficien a todas las partes.' },
    { id: 'principle4', content: 'Usar criterios objetivos', description: 'Basa las decisiones en estándares justos e imparciales.' },
  ];

  const caseStudy = {
    titulo: "Negociación Laboral: Enfoque en Intereses",
    descripcion: "En una empresa de tecnología, una empleada de alto rendimiento, María, solicitó un aumento salarial del 20%. Su jefe, Carlos, inicialmente se negó, citando restricciones presupuestarias debido a la reciente expansión de la empresa. Esta situación ilustra cómo las posiciones iniciales (20% de aumento vs. ningún aumento) pueden llevar a un estancamiento en la negociación.\n\nSin embargo, aplicando el principio de 'Enfocarse en intereses, no en posiciones', tanto María como Carlos decidieron tener una conversación más profunda sobre sus necesidades y preocupaciones subyacentes. María reveló que buscaba no solo una compensación financiera, sino también reconocimiento por su trabajo y oportunidades de crecimiento profesional. Carlos, por su parte, explicó que aunque valoraba enormemente la contribución de María, tenía que balancear las necesidades de todos los empleados y los objetivos financieros de la empresa.",
    resultado: "Al enfocarse en los intereses subyacentes de ambas partes, María y Carlos lograron llegar a un acuerdo creativo y mutuamente beneficioso:\n\n1. Un aumento salarial del 10%, que era más manejable para el presupuesto de la empresa.\n2. Un bono basado en el rendimiento, vinculado a objetivos específicos del proyecto en el que María estaba trabajando.\n3. Oportunidades de desarrollo profesional, incluyendo la asignación de María a un proyecto de alto perfil y la financiación de un curso de liderazgo.\n4. Un plan de revisión salarial en seis meses, basado en el rendimiento y la situación financiera de la empresa.\n\nEste resultado satisfizo los intereses principales de María (reconocimiento, desarrollo profesional y compensación) y de Carlos (mantener a una empleada valiosa, respetar las limitaciones presupuestarias y alinear la compensación con el rendimiento de la empresa).\n\nEste caso demuestra cómo, al ir más allá de las posiciones iniciales y explorar los intereses subyacentes, las partes pueden encontrar soluciones creativas que satisfagan las necesidades de ambos lados, incluso cuando las posiciones iniciales parecen irreconciliables."
  };

  return (
    <div className="w-full h-full bg-gradient-to-r from-pink-500 to-pink-700 rounded-xl shadow-2xl overflow-hidden p-6">
      {!showActivity ? (
        <>
          <PrincipiosBasicosContent 
            principles={principles} 
          />
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <motion.button
              className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 ease-in-out"
              onClick={() => setShowCaseStudy(true)}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(99,102,241)" }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Caso de Estudio
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out"
              onClick={() => setShowActivity(true)}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,197,94)" }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Actividad Interactiva
            </motion.button>
          </div>
        </>
      ) : (
        <PrincipiosBasicosActivity 
          principles={principles} 
          onBackToContent={() => setShowActivity(false)} 
        />
      )}
      {showCaseStudy && (
        <CaseStudy
          {...caseStudy}
          onClose={() => setShowCaseStudy(false)}
        />
      )}
    </div>
  );
};

export default PrincipiosBasicos;