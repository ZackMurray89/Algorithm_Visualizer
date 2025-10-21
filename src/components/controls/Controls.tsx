import { motion } from "motion/react";

import { AlgorithmSelector } from "./AlgorithmSelector";

function generateRandomArray(size = 30, maxValue = 100): number[] {
  return Array.from({ length: size }, () => 
    Math.floor(Math.random() * maxValue) + 1
  );
}

interface ControlsProps {
  selectedAlgorithm: string;
  onAlgorithmChange: (id: string) => void;
  onArrayGenerate: (arr: number[]) => void;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  isSorting: boolean;
  isPaused: boolean;
  speed: number;
  onSpeedChange: (value: number) => void;
}

export const Controls: React.FC<ControlsProps> = ({
  selectedAlgorithm,
  onAlgorithmChange,
  onArrayGenerate,
  onStart,
  onPause,
  onResume,
  isSorting,
  isPaused,
  speed,
  onSpeedChange
}) => {
  const handleGenerate = () => {
    const newArray = generateRandomArray();
    onArrayGenerate(newArray);
  };

  return (
    <section className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 py-4">
      <AlgorithmSelector 
        selected={selectedAlgorithm} 
        onChange={onAlgorithmChange} 
      />

      <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.03 }}
        onClick={handleGenerate}
        className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 transition"
        disabled={isSorting}
      >
        Generate Array
      </motion.button>

      {!isSorting ? (
        <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.03 }}
        onClick={onStart}
        className="px-4 py-2 rounded-md bg-green-700 text-white font-medium shadow-sm hover:bg-green-800 transition"
      >
        Start
      </motion.button>
      ) : isPaused ? (
        <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.03 }}
        onClick={onResume}
        className="px-4 py-2 rounded-md bg-yellow-500 text-white font-medium shadow-sm hover:bg-yellow-600 transition"
      >
        Resume
      </motion.button>
      ) : (
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
          onClick={onPause}
          className="px-4 py-2 rounded-md bg-orange-500 text-white font-medium shadow-sm hover:bg-orange-600 transition"
        >
          Pause
        </motion.button>
      )}
      

      {/* Speed Slider */}
      <div className="flex items-center gap-2 text-sm text-gray-300">
        <label htmlFor="speed" className="whitespace-nowrap">
          Speed:
        </label>
        <input 
          id="speed"
          type="range"
          min={50}
          max={1000}
          step={50}
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="accent-emerald-600"
        />
        <span>{speed}ms</span>
      </div>
    </section>
  )
}