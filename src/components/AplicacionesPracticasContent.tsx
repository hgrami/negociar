import { motion } from 'framer-motion';
import negociadorHabilImage from '../assets/negociador_habilidades.jpg';
import * as Tooltip from '@radix-ui/react-tooltip';

const HabilidadesNegociadorContent: React.FC = () => {
  const habilidades = [
    { 
      icon: '👂', 
      text: 'Escucha activa',
      tooltip: 'Prestar atención completa, no interrumpir, hacer preguntas clarificadoras, parafrasear para confirmar la comprensión, observar el lenguaje corporal y el tono de voz.'
    },
    { 
      icon: '🤗', 
      text: 'Empatía',
      tooltip: 'Reconocer y validar emociones, entender el contexto y las presiones de la otra parte, mostrar genuino interés en las preocupaciones de los demás.'
    },
    { 
      icon: '💡', 
      text: 'Creatividad',
      tooltip: 'Usar técnicas de lluvia de ideas, considerar múltiples perspectivas, estar abierto a nuevas ideas y enfoques, combinar elementos de diferentes soluciones.'
    },
    { 
      icon: '🎯', 
      text: 'Asertividad',
      tooltip: 'Comunicar claramente las propias necesidades, mantener la calma bajo presión, decir "no" de manera efectiva, buscar soluciones mutuamente beneficiosas.'
    },
    {
      icon: '🌊',
      text: 'Flexibilidad',
      tooltip: 'Considerar diferentes enfoques, ajustar tácticas según la respuesta de la otra parte, mantener objetivos mientras se es flexible en los métodos.'
    },
    {
      icon: '📚',
      text: 'Preparación y análisis',
      tooltip: 'Investigar a fondo, anticipar escenarios, analizar fortalezas y debilidades, identificar posibles áreas de acuerdo y desacuerdo.'
    },
  ];

  return (
    <Tooltip.Provider delayDuration={300}>
      <div className="w-full mb-6 bg-gradient-to-r from-lime-500 to-orange-500 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row p-6">
          <motion.div 
            className="w-full md:w-1/2 pr-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Habilidades Clave del Negociador:</h3>
            <ul className="space-y-4">
              {habilidades.map((habilidad, index) => (
                <Tooltip.Root key={index}>
                  <Tooltip.Trigger asChild>
                    <motion.li 
                      className="flex items-center bg-white bg-opacity-10 rounded-lg p-3 transition-all duration-300 hover:bg-opacity-20 cursor-help"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-2xl mr-3">{habilidad.icon}</span>
                      <span className="text-white">{habilidad.text}</span>
                    </motion.li>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet-50 select-none rounded-[4px] bg-green-700 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                      sideOffset={5}
                    >
                      {habilidad.tooltip}
                      <Tooltip.Arrow className="fill-green-700" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 mt-6 md:mt-0 pl-4 flex flex-col justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-4">
              <img
                src={negociadorHabilImage}
                alt="Habilidades del Negociador"
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: '250px', objectFit: 'cover' }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-green-700 to-transparent opacity-60 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 right-4 text-white text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-lg font-semibold">Habilidades del Negociador</p>
                <p className="text-sm">Claves para el éxito en la negociación</p>
              </motion.div>
            </div>
            <motion.div
              className="bg-white bg-opacity-10 rounded-lg p-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-white text-sm italic">
                "Un negociador hábil debe estar atento a estos tres niveles de interés de los componentes de su propio grupo y también del de LOP (La Otra Parte)."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Tooltip.Provider>
  );
};

export default HabilidadesNegociadorContent;