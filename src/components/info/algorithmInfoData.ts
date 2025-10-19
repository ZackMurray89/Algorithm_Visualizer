export interface AlgorithmInfoEntry {
  id: string;
  title: string;
  description: string;
  steps: string[];
}

export const ALGORITHM_INFO: AlgorithmInfoEntry[] = [
  {
    id: "bubbleSort",
    title: "Bubble Sort",
    description:
      "Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process repeats until the list is sorted.",
    steps: [
      "Start at the beginning of the array.",
      "Compare each pair of adjacent elements.",
      "Swap them if they’re out of order.",
      "After each full pass, the largest element 'bubbles' to the end.",
      "Repeat until no swaps are needed.",
    ],
  },
  {
    id: "mergeSort",
    title: "Merge Sort",
    description:
      "Merge Sort is a divide-and-conquer algorithm that splits the array into halves, sorts each half, and merges them back together.",
    steps: [
      "Divide the array into two halves.",
      "Recursively sort both halves.",
      "Merge the sorted halves into one sorted array.",
    ],
  },
  {
    id: "quickSort",
    title: "Quick Sort",
    description:
      "Quick Sort selects a 'pivot' element and partitions the array so that smaller elements go before the pivot and larger ones after.",
    steps: [
      "Choose a pivot element.",
      "Partition the array around the pivot.",
      "Recursively sort the subarrays on both sides.",
    ],
  },
];
