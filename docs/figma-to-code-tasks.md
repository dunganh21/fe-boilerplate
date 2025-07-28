# Figma to Code Conversion Tasks

## 1. Analyze the Design: Structure & Repeated Patterns

### a. Layout Structure

- Both frames are multi-section landing pages with a clear vertical flow.
- Common sections:
  - **Header/Menu** (component instance: `menu`)
  - **Hero/Intro Section** (large image, overlay, headline)
  - **Feature/Highlight Sections** (text + image, grid, or list)
  - **Amenities/Icons/Badges** (repeated groups: icon + label + number)
  - **Contact Form** (headline, description, form fields, submit button)
  - **Footer** (component instance: `Foooter`)

### b. Repeated Components & Molecules

- **Button**: Consistent style, used in hero, forms, CTAs.
- **Input Field**: Used in contact forms, search, etc.
- **Icon + Label**: Amenities, features, badges.
- **Card/Box**: For features, testimonials, or highlights.
- **Section Headline**: Repeated typography and spacing.
- **Menu Item**: Navigation links, possibly with dropdowns.

## 2. Component Decomposition

### a. Atoms

- Button
- Input
- Icon
- Label/Text

### b. Molecules

- Input Group (label + input)
- Icon Badge (icon + label + number)
- Menu Item

### c. Organisms

- Header/Menu
- Hero Section
- Feature Grid/List
- Amenities Section
- Contact Form
- Footer

## 3. Design Tokens

- **Colors**: Primary, secondary, background, text
- **Typography**: Font sizes, weights, line heights
- **Spacing**: Padding, margin, gap
- **Border Radius**: For cards, buttons, inputs

## 4. Implementation Workflow

1. **Extract Design Tokens**
   - Map Figma colors, font sizes, spacing to Tailwind config.
2. **Build Atoms**
   - Button, Input, Icon, Label
3. **Build Molecules**
   - Input Group, Icon Badge, Menu Item
4. **Build Organisms**
   - Header, Hero, Feature Grid, Amenities, Contact Form, Footer
5. **Compose Pages**
   - Assemble sections in page layouts as per Figma
6. **Ensure Responsiveness**
   - Use Tailwind breakpoints, test on mobile/tablet/desktop
7. **QA & Polish**
   - Cross-check with Figma, adjust spacing, colors, and typography

## 5. Notes

- Prioritize reusability and consistency.
- Use Tailwind and design tokens for all styling.
- Keep component names and structure aligned with Figma layers.
- Document any design-to-code deviations or improvements.
