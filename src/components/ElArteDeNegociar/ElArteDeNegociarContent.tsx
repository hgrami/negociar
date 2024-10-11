import { motion } from 'framer-motion';
import elArteDeNegociarImage from '../../assets/el_arte_de_negociar.jpg';
import * as Tooltip from '@radix-ui/react-tooltip';

const ElArteDeNegociarContent: React.FC = () => {
  const points = [
    { 
      icon: '🤝', 
      text: 'Proceso de comunicación dinámico',
      tooltip: 'La negociación es un método para resolver conflictos y diferencias de intereses a través del diálogo directo entre dos o más partes.'
    },
    { 
      icon: '💼', 
      text: 'Crucial en el contexto empresarial',
      tooltip: 'Aplicable en ventas, compras, contrataciones y resolución de conflictos internos.'
    },
    { 
      icon: '🏠', 
      text: 'Importante en la vida personal',
      tooltip: 'Útil para resolver problemas familiares, acuerdos con vecinos y en la educación de los hijos.'
    },
    { 
      icon: '🎯', 
      text: 'Habilidad que puede desarrollarse',
      tooltip: 'La negociación es una habilidad que puede aprenderse y perfeccionarse a través del estudio y la práctica.'
    },
    {
      icon: '👥',
      text: 'Elementos clave',
      tooltip: 'Partes involucradas, intereses de cada parte, proceso de comunicación, y posibles soluciones o acuerdos.'
    },
    {
      icon: '🏆',
      text: 'Objetivo final',
      tooltip: 'Alcanzar un acuerdo que satisfaga los intereses de todas las partes, creando valor y fortaleciendo las relaciones a largo plazo.'
    },
  ];

  return (
    <Tooltip.Provider delayDuration={300}>
      <div className="w-full mb-6 bg-gradient-to-r from-purple-700 to-indigo-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row p-6">
          <motion.div 
            className="w-full md:w-1/2 pr-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-4">
              {points.map((point, index) => (
                <Tooltip.Root key={index}>
                  <Tooltip.Trigger asChild>
                    <motion.li 
                      className="flex items-center bg-white bg-opacity-10 rounded-lg p-3 transition-all duration-300 hover:bg-opacity-20 cursor-help"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-2xl mr-3">{point.icon}</span>
                      <span className="text-white">{point.text}</span>
                    </motion.li>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet-50 select-none rounded-[4px] bg-purple-900 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                      sideOffset={5}
                    >
                      {point.tooltip}
                      <Tooltip.Arrow className="fill-purple-900" />
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
                src={elArteDeNegociarImage}
                alt="El Arte de Negociar"
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: '250px', objectFit: 'cover' }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-60 rounded-lg"
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
                <p className="text-lg font-semibold">El Arte de Negociar</p>
                <p className="text-sm">Habilidad fundamental en negocios y vida cotidiana</p>
              </motion.div>
            </div>
            <motion.div
              className="bg-white bg-opacity-10 rounded-lg p-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-white text-sm italic">
                "Negociar es un método para resolver conflictos entre dos o más partes mediante el cual éstas modifican sus demandas hasta llegar a un compromiso aceptable para todos."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Tooltip.Provider>
  );
};

export default ElArteDeNegociarContent;