import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//clsx avoid duplications //duplicates hata deta hai
//taiwind merge for hirarchy of classes ,or merging two classes ,merging new classes which are passing