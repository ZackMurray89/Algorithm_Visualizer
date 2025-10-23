import { useState, useRef } from "react";

import { Layout } from "./components/layout";
import { Controls } from "./components/controls/Controls";
import { Visualizer } from "./components/visualizer/Visualizer";
import { ColorLegend } from "./components/visualizer/ColorLegend";
import { 
  bubbleSortSteps, 
  type SortStep, 
  type SortAction 
} from "./algorithms/bubbleSort";

import type { AlgorithmId } from "./types";
import { AlgorithmInfo } from "./components/info/AlgorithmInfo";
import { CodeDisplay } from "./components/codeDisplay/CodeDisplay";

function App() {
  const [algorithm, setAlgorithm] = useState<AlgorithmId>("bubbleSort");
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentStepDescription, setCurrentStepDescription] = useState<string>("");
  const [speed, setSpeed] = useState<number>(400);
  const [currentAction, setCurrentAction] = useState<SortAction>("compare");
  const [highlights, setHighlights] = useState<number[]>([]);
  const intervalRef = useRef<number | null>(null);
  const stepsRef = useRef<SortStep[]>([]);
  const stepIndexRef = useRef<number>(0);

  const handleStart = () => {
    if (isSorting || array.length === 0) return;

    setIsSorting(true);
    setIsPaused(false);

    const steps: SortStep[] = bubbleSortSteps(array);
    stepsRef.current = steps;
    stepIndexRef.current = 0;

    playSteps();
  };

  const playSteps = () => {
    clearInterval(intervalRef.current!);
    intervalRef.current = window.setInterval(() => {
      const steps = stepsRef.current;
      const idx = stepIndexRef.current;
      if (idx >= steps.length) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        setIsSorting(false);
        setIsPaused(false);
        setHighlights([]);
        setCurrentAction("done");
        setCurrentStepDescription("Array Sorted");
        
        return;
      }

      const step = steps[idx];
      setArray(step.array);
      setHighlights(step.highlights);
      setCurrentStepDescription(step.description || "");
      setCurrentAction(step.action || "compare");
      stepIndexRef.current++;
    }, speed);
  };

  const handlePause = () => {
    if (!isSorting || isPaused) return;
    setIsPaused(true);
    clearInterval(intervalRef.current!);
  }

  const handleResume = () => {
    if (!isPaused) return;
    setIsPaused(false);
    playSteps();
  }

  return (
    <Layout>
      <div className="flex flex-col items-center gap-4">
        <Controls 
          selectedAlgorithm={algorithm}
          onAlgorithmChange={setAlgorithm}
          onArrayGenerate={setArray}
          onStart={handleStart}
          onPause={handlePause}
          onResume={handleResume}
          isSorting={isSorting}
          isPaused={isPaused}
          speed={speed}
          onSpeedChange={setSpeed}
        />

        <Visualizer 
          array={array}
          highlights={highlights}
          action={currentAction}
        />
        <ColorLegend action={currentAction} />

        <AlgorithmInfo 
          algorithmId={algorithm}
          stepDescription={currentStepDescription}
        />

        <CodeDisplay algorithmId={algorithm} />
      </div>
    </Layout>
  )
}

export default App;