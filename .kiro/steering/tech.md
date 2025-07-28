# Technology Stack

## Core Framework

- **Next.js 15** with App Router and React Server Components
- **React 19** with latest features
- **TypeScript 5** for type safety

## Styling & UI

- **Tailwind CSS v4** with CSS variables and @theme directive
- **shadcn/ui** components (New York style) with Radix UI primitives
- **Lucide React** for icons
- **class-variance-authority** for component variants
- **tailwind-merge** and **clsx** for conditional styling

## Development Tools

- **ESLint** with Next.js configuration
- **PostCSS** with Tailwind CSS processing
- **Turbopack** for fast development builds

## Common Commands

### Development

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Component Management

```bash
npx shadcn@latest add [component]     # Add shadcn/ui component
npx shadcn@latest add --all           # Add all components
```

## Path Aliases

- `@/*` maps to `./src/*`
- `@/components` for UI components
- `@/lib` for utilities and helpers
- `@/hooks` for custom React hooks

## Build Configuration

- Uses Next.js default configuration with minimal customization
- Tailwind CSS v4 configured via CSS imports in globals.css
- TypeScript with strict mode enabled
- ESLint with Next.js recommended rules

## Design Token System

- CSS custom properties defined in `@theme` directive
- Design tokens for colors, typography, spacing, and breakpoints
- Dark mode support via CSS custom properties
- Responsive design with mobile-first approach
