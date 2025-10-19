import { motion, AnimatePresence } from "motion/react";

interface VisualizerProps {
  array: number[];
}

export const Visualizer: React.FC<VisualizerProps> = ({ array }) => {
  if (!array.length) {
    return (
      <div className="w-full h-64 flex justify-center items-center bg-gray-900 border border-gray-800 rounded-md p-4">
        <motion.p
          key="empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 text-sm"
        >
          Click "Generate Array" To Create New Data
        </motion.p>
      </div>
    )
  }

  const maxValue = Math.max(...array);
  const barCount = array.length;

  const containerWidthPct = 0.8;
  const containerHeightPct = 0.8;

  const barWidth = (containerWidthPct * 100) / barCount;
  const heightScale = containerHeightPct / maxValue;

  return (
    <div className="w-full h-64 flex justify-center items-end bg-gray-900 border border-gray-800 rounded-md p-4 overflow-hidden">
      <div className="flex items-end justify-center h-full w-[80%]">
        <AnimatePresence initial={false}>
          {array.map((val, i) => (
            <motion.div 
              key={i}
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: `${val * heightScale * 100}%`,
                opacity: 1
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.008,
              }}
              className="bg-gradient-to-t from-green-800 to-emerald-600 rounded-t mx-[1px]"
              style={{
                width: `${barWidth}%`
              }}
            />
          ))}
        </AnimatePresence>
      </div>      
    </div>
  )
}