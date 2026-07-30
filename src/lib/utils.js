import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Une clases de Tailwind sin conflictos (patrón shadcn / mapcn). */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
