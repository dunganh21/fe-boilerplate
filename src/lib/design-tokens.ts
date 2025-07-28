/**
 * Design Tokens for LUMIÈRE Boulevard Project
 * Based on Figma analysis - focusing on common, repeatable elements
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export const colors = {
  // Primary Brand Colors
  primary: {
    50: '#F0F7F5',
    100: '#E1EFEA',
    200: '#C3DFD5',
    300: '#A5CFC0',
    400: '#87BFAB',
    500: '#69AF96',
    600: '#549F81',
    700: '#3F8F6C',
    800: '#2A7F57',
    900: '#154E43', // Main brand color
  },

  // Secondary/Accent Colors
  accent: {
    50: '#FDF8F0',
    100: '#FBF1E1',
    200: '#F7E3C3',
    300: '#F3D5A5',
    400: '#EFC787',
    500: '#E6D8BA', // Warm accent
    600: '#A9704F',
    700: '#793202',
    800: '#5A2501',
    900: '#3B1801',
  },

  // Neutral Colors
  neutral: {
    50: '#FFFFFF',
    100: '#F8F8F8',
    200: '#F0F0F0',
    300: '#E5E5E5',
    400: '#C4C4C4',
    500: '#A0A0A0',
    600: '#717171',
    700: '#495957', // Text secondary
    800: '#153E36', // Text muted
    900: '#112724', // Dark background
  },

  // Semantic Colors
  success: {
    50: '#F0F9F4',
    500: '#10B981',
    600: '#059669',
  },

  warning: {
    50: '#FFFBEB',
    500: '#F59E0B',
    600: '#D97706',
  },

  error: {
    50: '#FEF2F2',
    500: '#EF4444',
    600: '#DC2626',
  },

  // Background Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F4EEE4', // Warm background
    tertiary: '#EDE4D0',
    dark: '#112724',
    overlay: 'rgba(17, 39, 36, 0.4)',
  },

  // Text Colors
  text: {
    primary: '#154E43',
    secondary: '#495957',
    muted: '#153E36',
    inverse: '#FFFFFF',
    placeholder: 'rgba(73, 89, 87, 0.5)',
  },

  // Border Colors
  border: {
    light: '#E5E5E5',
    medium: '#C4C4C4',
    dark: '#153E36',
    accent: '#E6D8BA',
  },
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typography = {
  // Font Families
  fontFamily: {
    primary: 'SVN-Optima, serif',
    secondary: 'Libre Franklin, sans-serif',
  },

  // Font Sizes (based on common usage in design)
  fontSize: {
    xs: '11px', // Small labels, numbers
    sm: '12px', // Footer text, captions
    base: '14px', // Body text
    lg: '16px', // Body text larger
    xl: '18px', // Form labels, emphasis
    '2xl': '24px', // Section headings
    '3xl': '32px', // Sub-headings
    '4xl': '36px', // Large headings
    '5xl': '50px', // Hero text
    '6xl': '60px', // Large hero text
    '7xl': '72px', // Extra large headings
    '8xl': '84px', // Massive headings
    '9xl': '110px', // Hero text
  },

  // Font Weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Line Heights
  lineHeight: {
    tight: '1.1',
    snug: '1.25',
    normal: '1.375',
    relaxed: '1.5',
    loose: '1.625',
  },

  // Letter Spacing
  letterSpacing: {
    tight: '-6%',
    normal: '-3%',
    wide: '-1%',
  },
} as const;

// ============================================================================
// SPACING TOKENS (Simplified and practical)
// ============================================================================

export const spacing = {
  // Base spacing units (4px grid system)
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  18: '72px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  48: '192px',
  56: '224px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
  120: '480px',
  160: '640px',
  200: '800px',
  240: '960px',
  320: '1280px',
  400: '1600px',
} as const;

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

export const borderRadius = {
  none: '0px',
  sm: '4px',
  base: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  full: '9999px',
  // Custom radius for specific components
  button: '12px',
  card: '16px',
  modal: '24px',
  avatar: '50px',
  badge: '68px',
} as const;

// ============================================================================
// BREAKPOINT TOKENS
// ============================================================================

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px', // Design width
} as const;

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const;

// ============================================================================
// OPACITY TOKENS
// ============================================================================

export const opacity = {
  0: '0',
  10: '0.1',
  20: '0.2',
  30: '0.3',
  35: '0.35',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  80: '0.8',
  90: '0.9',
  100: '1',
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const animation = {
  duration: {
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
    slower: '700ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

export const components = {
  // Button tokens
  button: {
    height: {
      sm: '32px',
      md: '40px',
      lg: '48px',
      xl: '56px',
    },
    padding: {
      sm: '8px 16px',
      md: '12px 24px',
      lg: '16px 32px',
      xl: '20px 40px',
    },
  },

  // Input tokens
  input: {
    height: {
      sm: '32px',
      md: '40px',
      lg: '48px',
    },
    padding: {
      sm: '8px 12px',
      md: '12px 16px',
      lg: '16px 20px',
    },
  },

  // Card tokens
  card: {
    padding: {
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '40px',
    },
  },

  // Container tokens
  container: {
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      full: '100%',
    },
    padding: {
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '40px',
    },
  },
} as const;

// ============================================================================
// LAYOUT TOKENS
// ============================================================================

export const layout = {
  // Grid columns
  grid: {
    cols: {
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gap: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
  },

  // Aspect ratios
  aspectRatio: {
    square: '1 / 1',
    video: '16 / 9',
    photo: '4 / 3',
    wide: '21 / 9',
  },
} as const;

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================

export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  breakpoints,
  zIndex,
  shadows,
  opacity,
  animation,
  components,
  layout,
} as const;

export default tokens;
