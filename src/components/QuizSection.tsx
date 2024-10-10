import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

interface QuizSectionProps {
    question: {
        question: string;
        options: { id: number; text: string }[];
    };
    feedback: string | null;
    time: number;
    handleAnswer: (selectedId: number) => void;
    progress: number;
}

const QuizSection: React.FC<QuizSectionProps> = ({
    question,
    feedback,
    time,
    handleAnswer,
    progress
}) => (
    <div className="w-full max-w-md">
        <ProgressBar progress={progress} />
        <p className="mb-4">Tiempo: {Math.floor(time / 60)}m {time % 60}s</p>
        <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
        {question.options.map((option) => (
            <motion.button
                key={option.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2"
                onClick={() => handleAnswer(option.id)}
            >
                {option.text}
            </motion.button>
        ))}
        {feedback && (
            <motion.p
                className="text-lg mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {feedback}
            </motion.p>
        )}
    </div>
);

export default QuizSection;