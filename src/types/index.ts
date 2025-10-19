import type { ALGORITHMS } from "../algorithms/algorithms";

export interface AlgorithmOption {
  id: string;
  name: string;
  category: "sorting" | "searching" | "graph" | "other";
}

export type AlgorithmId = (typeof ALGORITHMS)[number]["id"];
