# Project Structure

## Root Directory

```
├── .cursor/rules/          # Cursor IDE rules for code quality and testing
├── .kiro/                  # Kiro AI assistant configuration
├── docs/                   # Project documentation
├── public/                 # Static assets (SVG icons, images)
├── src/                    # Source code
└── [config files]          # Various configuration files
```

## Source Structure (`src/`)

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── component-test/     # Component testing page
│   ├── globals.css         # Global styles and design tokens
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
├── components/             # React components
│   └── ui/                 # shadcn/ui components
└── lib/                    # Utility functions and helpers
    ├── design-tokens.ts    # Design token definitions
    └── utils.ts            # Common utilities (cn, responsive helpers)
```

## Key Conventions

### File Naming

- **Components**: PascalCase (e.g., `Button.tsx`, `CardHeader.tsx`)
- **Pages**: lowercase with hyphens (e.g., `component-test/page.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`, `design-tokens.ts`)
- **Styles**: kebab-case (e.g., `globals.css`)

### Component Organization

- **UI Components**: Place in `src/components/ui/` following shadcn/ui patterns
- **Custom Components**: Place in `src/components/` with descriptive names
- **Page Components**: Co-locate with pages in `src/app/` directories

### Import Patterns

```typescript
// External libraries first
import React from 'react';
import { cn } from '@/lib/utils';

// Internal components
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Types (if separate)
import type { ComponentProps } from './types';
```

### Styling Approach

- Use Tailwind CSS classes with design tokens
- Leverage `cn()` utility for conditional classes
- Define component variants using `class-variance-authority`
- Store design tokens in CSS custom properties via `@theme`

### TypeScript Patterns

- Use proper typing for component props
- Leverage path aliases (`@/`) for clean imports
- Export types alongside components when needed
- Use `React.ComponentProps` for extending HTML element props

## Documentation Structure (`docs/`)

- `design-tokens.md`: Comprehensive design system documentation
- `figma-to-code-tasks.md`: Figma integration workflows
- `token-summary.md`: Quick reference for design tokens

## Configuration Files

- `components.json`: shadcn/ui configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration with path aliases
- `next.config.ts`: Next.js configuration (minimal)
- `eslint.config.mjs`: ESLint rules and settings
