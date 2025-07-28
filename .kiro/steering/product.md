# Product Overview

FE Template is a modern Next.js frontend template designed for building beautiful, accessible web applications. It provides a solid foundation with Tailwind CSS v4 and shadcn/ui components.

## Key Features

- Modern React development with Next.js 15 App Router
- Design system based on shadcn/ui components with Radix UI primitives
- Tailwind CSS v4 with CSS variables for theming
- Dark mode support out of the box
- TypeScript with proper path aliases
- Accessible components following WCAG guidelines
- Lucide React icons for consistent iconography

## Target Use Cases

- Rapid prototyping of web applications
- Building design systems and component libraries
- Creating accessible, responsive web interfaces
- Projects requiring consistent UI patterns and theming
- Converting Figma designs into production-ready code

## Design Philosophy

- Accessibility-first approach using Radix UI primitives
- Consistent design tokens and theming system
- Mobile-first responsive design
- Component-driven architecture
- Type safety throughout the application

---

# 🎯 Figma to Code Guidelines

## Goal

Convert Figma design into clean, scalable, and responsive frontend code using Tailwind CSS and shadcn/ui components.

## ✅ Development Workflow

### 1. Analyze the Design

- Identify layout structure: sections, grids, containers
- Extract reusable components: Button, Card, Input, etc.
- Map Figma components to existing shadcn/ui components

### 2. Create Design Tokens

- Define tokens in `src/lib/design-tokens.ts` or Tailwind config:
  - Colors (primary, background, text, etc.)
  - Font sizes and font weights
  - Spacing scale (margin, padding)
  - Border radius, shadows, etc.

### 3. Component Decomposition

- Organize components following project structure:
  - `src/components/ui`: Base UI components (from shadcn/ui)
  - `src/components/layout`: Headers, Footers, Wrappers
  - `src/components/sections`: Page-level sections
- Components should accept standard props:
  - `variant`, `size`, `className`, `children`
- Use functional components with clear, typed props

### 4. Write Maintainable Code

- Avoid inline styles unless necessary
- Use `cn()` utility to handle conditional Tailwind classes
- Remove unused code or values copied from Figma
- Follow TypeScript best practices with proper typing

### 5. Responsive Design

- Follow Tailwind's mobile-first approach
- Support breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Use relative units (`rem`, `%`, `em`) over fixed `px`
- Test across all viewport sizes

## 🎨 Design Token Usage

- **Always use design token values** from Tailwind config or design-tokens.ts
- **Do not** use hardcoded values unless it's an exception
- If a value is reused across the design but missing in tokens, **add it to tokens config**
- Use tokenized Tailwind classes like `bg-primary-900`, `text-muted`, `rounded-lg`
- Leverage CSS custom properties defined in `@theme` directive

## 🧩 shadcn/ui Component Rules

- Always use existing components from shadcn/ui if available
- Use the **shadcn MCP server** to browse and search for available components
- Only customize if really necessary, and document the reason in the file
- Avoid recreating components that already exist in the library
- Follow shadcn/ui patterns for component variants and props

## 📌 Implementation Notes

- Keep component names aligned with Figma layer names when applicable
- Prioritize accessibility (`aria-*`, semantic tags) — shadcn/ui handles this well
- Use `cn()` utility to combine Tailwind classes smartly
- Write self-documenting, reusable code
- Maintain consistency with existing codebase patterns
- Test components thoroughly following the testing guidelines
