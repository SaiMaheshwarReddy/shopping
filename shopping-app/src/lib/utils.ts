import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Item {
  id: number;
  name: string;
  description: string;
  image_url: string;
  categoryId: number;
}
export interface ItemsByCategoryProps {
  categoryId: number;
  categoryName: string;
  items: Item[];
}
