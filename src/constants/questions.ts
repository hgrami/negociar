
export interface Question {
  id: number;
  question: string;
  options: { id: number; text: string }[];
  correctAnswerId: number;
}

export const elArteDeNegociarQuestionsPool: Question[] = [
  {
    id: 1,
    question: "¿Cuál es un elemento clave en el arte de negociar?",
    options: [
      { id: 1, text: "Fuerza" },
      { id: 2, text: "Empatía" },
      { id: 3, text: "Agresividad" },
      { id: 4, text: "Indiferencia" }
    ],
    correctAnswerId: 2,
  },
  {
    id: 2,
    question: "¿Qué es importante considerar en una negociación?",
    options: [
      { id: 1, text: "Solo tus intereses" },
      { id: 2, text: "Los intereses de ambas partes" },
      { id: 3, text: "Ganar a toda costa" },
      { id: 4, text: "Evitar el conflicto" }
    ],
    correctAnswerId: 2,
  },
  {
    id: 3,
    question: "¿Cuál es una habilidad importante para negociar efectivamente?",
    options: [
      { id: 1, text: "Hablar rápido" },
      { id: 2, text: "Escuchar activamente" },
      { id: 3, text: "Ser inflexible" },
      { id: 4, text: "Ocultar información" }
    ],
    correctAnswerId: 2,
  },
  {
    id: 4,
    question: "¿Qué enfoque es más efectivo en una negociación a largo plazo?",
    options: [
      { id: 1, text: "Ganar-Perder" },
      { id: 2, text: "Ganar-Ganar" },
      { id: 3, text: "Perder-Perder" },
      { id: 4, text: "Evitar la negociación" }
    ],
    correctAnswerId: 2,
  },
  {
    id: 5,
    question: "¿Cuál es un buen primer paso en una negociación?",
    options: [
      { id: 1, text: "Hacer demandas firmes" },
      { id: 2, text: "Escuchar y entender a la otra parte" },
      { id: 3, text: "Ofrecer concesiones inmediatas" },
      { id: 4, text: "Mostrar superioridad" }
    ],
    correctAnswerId: 2,
  },
  {
    id: 6,
    question: "¿Qué papel juega la preparación en una negociación exitosa?",
    options: [
      { id: 1, text: "No es necesaria" },
      { id: 2, text: "Es fundamental" },
      { id: 3, text: "Solo importa en negociaciones grandes" },
      { id: 4, text: "Puede ser contraproducente" }
    ],
    correctAnswerId: 2,
  },
  {
    id: 7,
    question: "¿Cuál es una buena estrategia para manejar emociones en una negociación?",
    options: [
      { id: 1, text: "Ignorarlas completamente" },
      { id: 2, text: "Reconocerlas y manejarlas constructivamente" },
      { id: 3, text: "Usarlas para intimidar" },
      { id: 4, text: "Dejar que guíen todas las decisiones" }
    ],
    correctAnswerId: 2,
  },
  {
    id: 8,
    question: "¿Qué es BATNA en el contexto de negociación?",
    options: [
      { id: 1, text: "Un tipo de acuerdo" },
      { id: 2, text: "Mejor Alternativa a un Acuerdo Negociado" },
      { id: 3, text: "Una técnica de persuasión" },
      { id: 4, text: "Un término legal" }
    ],
    correctAnswerId: 2,
  },
  {
    id: 9,
    question: "¿Cuál es un beneficio de la negociación colaborativa?",
    options: [
      { id: 1, text: "Ganancias a corto plazo" },
      { id: 2, text: "Relaciones y resultados sostenibles" },
      { id: 3, text: "Dominio sobre la otra parte" },
      { id: 4, text: "Evitar compromisos" }
    ],
    correctAnswerId: 2,
  },
  {
    id: 10,
    question: "¿Qué papel juega la creatividad en la negociación?",
    options: [
      { id: 1, text: "No es relevante" },
      { id: 2, text: "Ayuda a encontrar soluciones innovadoras" },
      { id: 3, text: "Solo es útil en negociaciones artísticas" },
      { id: 4, text: "Puede complicar innecesariamente el proceso" }
    ],
    correctAnswerId: 2,
  },
];