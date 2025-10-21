export type SortAction = "compare" | "swap" | "pass" | "done";

export interface SortStep {
  array: number[];
  highlights: number[];
  description?: string;
  action?: SortAction;
}

export function bubbleSortSteps(inputArray: number[]): SortStep[] {
  const arr = [...inputArray];
  const steps: SortStep[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Comparison Step
      steps.push({
        array: [...arr],
        highlights: [j, j + 1],
        description: `Comparing elements at indices ${j} and ${j + 1} (${[
          arr[j],
        ]} vs ${[arr[j + 1]]})`,
        action: "compare",
      });

      if (arr[j] > arr[j + 1]) {
        // Swap Step
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({
          array: [...arr],
          highlights: [j, j + 1],
          description: `Swapped elements ${arr[j + 1]} and ${arr[j]}`,
          action: "swap",
        });
      }
    }

    // End Of Pass
    steps.push({
      array: [...arr],
      highlights: [],
      description: `End of pass ${
        i + 1
      }. Largest elements settled at position ${arr.length - i - 1}`,
      action: "pass",
    });
  }

  // Final State
  steps.push({
    array: [...arr],
    highlights: [],
    description: "Array is now fully sorted.",
    action: "done",
  });

  return steps;
}
