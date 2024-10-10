import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./components/ui/AlertDialog";
import './App.css';
import ScrollIndicator from './components/ScrollIndicator';
import ElArteDeNegociar from './components/ElArteDeNegociar';
import Placeholder from './components/Placeholder'

interface Section {
  title: string;
  color: string;
  description: string;
  Component: React.FC;
}

const sections: Section[] = [
  { title: "El Arte de Negociar", color: "#8A2BE2", description: "El arte de negociar implica habilidades de comunicación, empatía y estrategia para lograr acuerdos mutuamente beneficiosos.", Component: ElArteDeNegociar },
  { title: "Principios Básicos", color: "#FF69B4", description: "Los principios básicos incluyen: separar a las personas del problema, enfocarse en intereses no en posiciones, inventar opciones de beneficio mutuo, y usar criterios objetivos.", Component: Placeholder },
  { title: "Análisis de Situación", color: "#1E90FF", description: "El análisis de situación implica evaluar el contexto, las partes involucradas, los intereses en juego y las posibles alternativas antes de negociar.", Component: Placeholder },
  { title: "MAPAN y Estrategias", color: "#32CD32", description: "MAPAN (Mejor Alternativa Posible a un Acuerdo Negociado) es crucial para determinar tu poder de negociación y desarrollar estrategias efectivas.", Component: Placeholder },
  { title: "Aplicaciones Prácticas", color: "#FF7F50", description: "Las aplicaciones prácticas incluyen negociaciones empresariales, diplomáticas, laborales y personales, aplicando los principios aprendidos en situaciones reales.", Component: Placeholder },
  { title: "Conclusiones", color: "#9932CC", description: "La negociación efectiva es una habilidad que se puede aprender y mejorar con la práctica, llevando a mejores resultados en diversos aspectos de la vida.", Component: Placeholder }
];

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', description: '' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    sections.map(s => s.color)
  );

  useEffect(() => {
    const handleScroll = () => {
      const newSection = Math.floor(scrollYProgress.get() * sections.length);
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
      }
    };

    handleScroll(); // Call initially to set the first section
    const unsubscribeScroll = scrollYProgress.onChange(handleScroll);
    return () => unsubscribeScroll();
  }, [scrollYProgress, currentSection, sections.length]);

  const handleTitleClick = (section: Section) => {
    setDialogContent({ title: section.title, description: section.description });
    setIsDialogOpen(true);
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor }}
      className="min-h-[600vh]"
    >
      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          className="section h-screen flex flex-col items-center justify-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSection === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Counter */}
          <div className="counter absolute left-10 top-1/2 transform -translate-y-1/2">
            <div className="counter-circle w-20 h-20 rounded-full border-2 border-white flex flex-col items-center justify-center text-white">
              <span className="text-sm font-bold">{index + 1} / {sections.length}</span>
            </div>
          </div>

          {/* Title */}
          <h1
            className="title text-4xl font-bold text-white mb-10 cursor-pointer"
            onClick={() => handleTitleClick(section)}
          >
            {section.title}
          </h1>

          {/* Placeholder for component */}
          <div className="w-2/3 h-2/3 bg-white bg-opacity-20 rounded-lg overflow-auto">
            <section.Component />
          </div>
        </motion.div>
      ))}

      {/* Scroll indicator */}
      <ScrollIndicator progress={scrollYProgress} sections={sections} currentSection={currentSection} />

      {/* Information Dialog */}
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogContent.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {dialogContent.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
};

export default App;