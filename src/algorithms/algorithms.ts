import type { AlgorithmOption } from "../types";

export const ALGORITHMS: AlgorithmOption[] = [
  { id: "bubbleSort", name: "Bubble Sort", category: "sorting" },
  { id: "mergeSort", name: "Merge Sort", category: "sorting" },
  { id: "quickSort", name: "Quick Sort", category: "sorting" },
  { id: "insertionSort", name: "Insertion Sort", category: "sorting" },
] as const;
