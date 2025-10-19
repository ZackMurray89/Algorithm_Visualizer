import { useState, useRef } from "react";

import { Layout } from "./components/layout";
import { Controls } from "./components/controls/Controls";
import { Visualizer } from "./components/visualizer/Visualizer";
import { bubbleSortSteps, type SortStep } from "./algorithms/bubbleSort";

import type { AlgorithmId } from "./types";
import { AlgorithmInfo } from "./components/info/AlgorithmInfo";

function App() {
  const [algorithm, setAlgorithm] = useState<AlgorithmId>("bubbleSort");
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [currentStepDescription, setCurrentStepDescription] = useState<string>("");
  const [speed, setSpeed] = useState<number>(400);
  const intervalRef = useRef<number | null>(null);

  const handleStart = () => {
    if (isSorting || array.length === 0) return;

    setIsSorting(true);

    const steps: SortStep[] = bubbleSortSteps(array);
    let index = 0;

    const runStep = () => {
      if (index >= steps.length) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        setIsSorting(false);
        setCurrentStepDescription("Array Sorted!")

        return;
      }

      setArray(steps[index].array);
      setCurrentStepDescription(steps[index].description || "");
      index++;
    }

    runStep();
    intervalRef.current = window.setInterval(runStep, speed);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center gap-4">
        <Controls 
          selectedAlgorithm={algorithm}
          onAlgorithmChange={setAlgorithm}
          onArrayGenerate={setArray}
          onStart={handleStart}
          speed={speed}
          onSpeedChange={setSpeed}
        />

        <Visualizer 
          array={array}
        />

        <AlgorithmInfo 
          algorithmId={algorithm}
          stepDescription={currentStepDescription}
        />
      </div>
    </Layout>
  )
}

export default App;