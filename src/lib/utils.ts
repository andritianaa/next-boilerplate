import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSlug(title: string) {
  const normalized = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const cleanString = normalized.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "_");

  return cleanString;
}
