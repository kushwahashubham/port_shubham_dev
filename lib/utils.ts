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

export function formatDate(dateString: string): string {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  // Get the day, month, and year
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  // Return the formatted date string
  return `${day} ${month}, ${year}`;
}
