import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind classes with proper conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get CSS custom property value from design tokens
 */
export function getTokenValue(token: string): string {
  // This function can be used to get token values programmatically
  // For now, we'll use Tailwind classes directly
  return token;
}

/**
 * Create responsive class names
 */
export function responsive(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  const classes = [base];
  if (sm) classes.push(`sm:${sm}`);
  if (md) classes.push(`md:${md}`);
  if (lg) classes.push(`lg:${lg}`);
  if (xl) classes.push(`xl:${xl}`);
  return classes.join(' ');
}

/**
 * Create variant class names
 */
export function variant(
  base: string,
  variants: Record<string, string>,
  selectedVariant: string
): string {
  return cn(base, variants[selectedVariant]);
}
