export interface Question {
    id: number;
    question: string;
    options: Array<{ id: number; text: string }>;
    correctAnswerId: number;
}

export const elArteDeNegociarQuestionsPool: Question[] = [
    {
        id: 1,
        question: "Según el libro 'El Arte de Negociar', la negociación es:",
        options: [
            { id: 1, text: "Solo un proceso de intercambio" },
            { id: 2, text: "Una habilidad que puede aprenderse y perfeccionarse" },
            { id: 3, text: "Un método exclusivo para empresas" },
            { id: 4, text: "Una técnica innata en algunas personas" }
        ],
        correctAnswerId: 2
    },
    {
        id: 2,
        question: "¿En qué ámbitos es importante la negociación según el texto?",
        options: [
            { id: 1, text: "Solo en el mundo de los negocios" },
            { id: 2, text: "Solo en la vida cotidiana" },
            { id: 3, text: "En el mundo de los negocios y la vida cotidiana" },
            { id: 4, text: "Solo en situaciones de conflicto extremo" }
        ],
        correctAnswerId: 3
    },
    {
        id: 3,
        question: "¿Cómo se define la negociación en el libro?",
        options: [
            { id: 1, text: "Como un proceso de ganar a toda costa" },
            { id: 2, text: "Como un método para evitar conflictos" },
            { id: 3, text: "Como un método para resolver conflictos y alcanzar acuerdos mutuamente beneficiosos" },
            { id: 4, text: "Como una técnica para imponer demandas" }
        ],
        correctAnswerId: 3
    },
    {
        id: 4,
        question: "¿Qué tipo de proceso es la negociación según el texto?",
        options: [
            { id: 1, text: "Un proceso de comunicación estático" },
            { id: 2, text: "Un proceso de comunicación dinámico" },
            { id: 3, text: "Un proceso unilateral" },
            { id: 4, text: "Un proceso exclusivamente formal" }
        ],
        correctAnswerId: 2
    },
    {
        id: 5,
        question: "En el contexto empresarial, ¿en qué áreas es crucial la negociación?",
        options: [
            { id: 1, text: "Solo en ventas" },
            { id: 2, text: "En ventas, compras, contrataciones y resolución de conflictos internos" },
            { id: 3, text: "Únicamente en la resolución de conflictos externos" },
            { id: 4, text: "Solo en las relaciones con los clientes" }
        ],
        correctAnswerId: 2
    },
    {
        id: 6,
        question: "Según el libro, ¿cómo se puede desarrollar la habilidad de negociar?",
        options: [
            { id: 1, text: "Es una habilidad innata que no puede desarrollarse" },
            { id: 2, text: "Solo a través de la experiencia en el mundo de los negocios" },
            { id: 3, text: "A través del estudio y la práctica" },
            { id: 4, text: "Únicamente mediante cursos formales de negociación" }
        ],
        correctAnswerId: 3
    },
    {
        id: 7,
        question: "¿Cuál es el objetivo final de una negociación exitosa según el texto?",
        options: [
            { id: 1, text: "Ganar a toda costa" },
            { id: 2, text: "Evitar cualquier tipo de conflicto" },
            { id: 3, text: "Alcanzar un acuerdo que satisfaga en lo posible los intereses de todas las partes" },
            { id: 4, text: "Imponer los propios intereses sobre los de la otra parte" }
        ],
        correctAnswerId: 3
    },
    {
        id: 8,
        question: "¿Cuál de los siguientes NO se menciona como un elemento clave en toda negociación?",
        options: [
            { id: 1, text: "Las partes involucradas" },
            { id: 2, text: "Los intereses de cada parte" },
            { id: 3, text: "El proceso de comunicación" },
            { id: 4, text: "El uso de tácticas agresivas" }
        ],
        correctAnswerId: 4
    }
];

export const mapanYEstrategiasQuestionsPool: Question[] = [
    {
        id: 1,
        question: "¿Cuál es la principal característica de la negociación distributiva?",
        options: [
            { id: 1, text: "Busca crear valor para todas las partes" },
            { id: 2, text: "Se enfoca en dividir un 'pastel' fijo" },
            { id: 3, text: "Es ideal para relaciones a largo plazo" },
            { id: 4, text: "Fomenta la colaboración entre las partes" }
        ],
        correctAnswerId: 2
    },
    {
        id: 2,
        question: "En la negociación integrativa, ¿cuál es uno de los objetivos principales?",
        options: [
            { id: 1, text: "Maximizar las ganancias a corto plazo" },
            { id: 2, text: "Dividir recursos limitados" },
            { id: 3, text: "Crear valor y encontrar soluciones que beneficien a todas las partes" },
            { id: 4, text: "Establecer una posición dominante en la negociación" }
        ],
        correctAnswerId: 3
    },
    {
        id: 3,
        question: "¿Qué táctica de negociación implica establecer un punto de referencia inicial?",
        options: [
            { id: 1, text: "Reciprocidad" },
            { id: 2, text: "Escasez" },
            { id: 3, text: "Anclaje" },
            { id: 4, text: "Autoridad" }
        ],
        correctAnswerId: 3
    },
    {
        id: 4,
        question: "La táctica de 'escasez' en una negociación busca:",
        options: [
            { id: 1, text: "Crear la percepción de que algo es limitado o único" },
            { id: 2, text: "Establecer múltiples opciones para negociar" },
            { id: 3, text: "Mostrar flexibilidad en las demandas" },
            { id: 4, text: "Revelar toda la información disponible" }
        ],
        correctAnswerId: 1
    },
    {
        id: 5,
        question: "¿Cuál de las siguientes NO es una característica de la negociación integrativa?",
        options: [
            { id: 1, text: "Busca crear valor" },
            { id: 2, text: "Es ideal para relaciones a largo plazo" },
            { id: 3, text: "Las ganancias de una parte implican pérdidas para la otra" },
            { id: 4, text: "Fomenta la creatividad y la colaboración" }
        ],
        correctAnswerId: 3
    },
    {
        id: 6,
        question: "En el manejo de emociones durante una negociación, es importante:",
        options: [
            { id: 1, text: "Ignorar completamente las emociones propias y ajenas" },
            { id: 2, text: "Expresar abiertamente todas las emociones sin filtro" },
            { id: 3, text: "Identificar y controlar las propias emociones" },
            { id: 4, text: "Centrarse únicamente en los aspectos lógicos de la negociación" }
        ],
        correctAnswerId: 3
    },
    {
        id: 7,
        question: "¿Qué táctica implica hacer concesiones a cambio de concesiones de la otra parte?",
        options: [
            { id: 1, text: "Anclaje" },
            { id: 2, text: "Reciprocidad" },
            { id: 3, text: "Escasez" },
            { id: 4, text: "Autoridad" }
        ],
        correctAnswerId: 2
    },
    {
        id: 8,
        question: "La negociación distributiva es más apropiada para:",
        options: [
            { id: 1, text: "Relaciones a largo plazo" },
            { id: 2, text: "Transacciones únicas sin relación futura" },
            { id: 3, text: "Situaciones que requieren alta colaboración" },
            { id: 4, text: "Negociaciones con múltiples partes interesadas" }
        ],
        correctAnswerId: 2
    }
]