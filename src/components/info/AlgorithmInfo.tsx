import { AnimatePresence, motion } from "motion/react";
import { ALGORITHM_INFO } from "./algorithmInfoData";

interface AlgorithmInfoProps {
  algorithmId: string;
  stepDescription?: string;
}

export const AlgorithmInfo: React.FC<AlgorithmInfoProps> = ({ 
  algorithmId,
  stepDescription
}) => {
  const info = ALGORITHM_INFO.find((a) => a.id === algorithmId);

  if (!info) {
    return (
      <div className="w-full bg-gray-900 border border-gray-800 rounded-md p-4 text-gray-400 text-sm text-center">
        <p>
          Select an algorithm to see an explanation.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      key={info.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-gray-900 border border-gray-800 rounded-md p-4 text-gray-200"
    >
      <h2 className="text-lg font-semibold mb-2 text-green-600">
        {info.title}
      </h2>
      <p className="text-gray-300 mb-3 text-sm">
        {info.description}
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
        {info.steps.map((step, idx) => (
          <li
            key={idx}
          >
            {step}
          </li>
        ))}
      </ul>

      <AnimatePresence mode="wait">
        {stepDescription && (
          <motion.div
            key={stepDescription}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-t border-gray-700 pt-2 mt-2 text-sm text-emerald-600"
          >
            <p>
              {stepDescription}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}