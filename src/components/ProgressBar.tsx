import { motion } from "framer-motion";

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
    <div className="w-full bg-gray-300 h-2 rounded-full mb-4">
        <motion.div
            className="bg-blue-500 h-full rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
        />
    </div>
);

export default ProgressBar;
