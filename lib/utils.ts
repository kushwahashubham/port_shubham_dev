import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function flatten(nestedList: string[][]): string[] {
  const flatList: string[] = [];
  for (const sublist of nestedList) {
    flatList.push(...sublist); // Push individual elements from each sublist
  }
  return flatList;
}
