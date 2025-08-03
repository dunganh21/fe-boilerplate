# Grid System Documentation

## Overview

This project implements a custom 12-column grid system based on Figma design specifications:

- **12 columns** at 100px each
- **32px gutters** between columns
- **Total max width**: 1552px (12 × 100px + 11 × 32px)
- **Container padding**: 24px on desktop, 16px on mobile

## Implementation

### CSS Variables (globals.css)

```css
@theme {
  /* Grid System - Based on Figma: 12 columns, 100px each, 32px gutters */
  --grid-columns: 12;
  --grid-column-width: 100px;
  --grid-gutter: 32px;
  --grid-max-width: calc(12 * 100px + 11 * 32px); /* 1552px total */
  --grid-container-padding: 24px;
}
```

### Grid Components

#### GridContainer

Main container that centers content and applies max-width constraints.

**Props:**

- `children: ReactNode` - Content to be wrapped
- `className?: string` - Optional additional CSS classes

```tsx
<GridContainer>{/* Your content */}</GridContainer>
<GridContainer className="custom-styles">{/* Your content */}</GridContainer>
```

#### Grid

Creates the 12-column grid layout.

**Props:**

- `children: ReactNode` - Grid items to be laid out
- `className?: string` - Optional additional CSS classes

```tsx
<Grid>{/* Grid items */}</Grid>
<Grid className="items-center gap-4">{/* Grid items with custom styling */}</Grid>
```

#### GridItem

Individual grid items that can span multiple columns and optionally start at specific column positions.

**Props:**

- `children: ReactNode` - Content for the grid item
- `span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12` - Number of columns to span (default: 1)
- `start?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12` - Starting column position (optional)
- `className?: string` - Optional additional CSS classes

```tsx
<GridItem span={8}>{/* Content spanning 8 columns */}</GridItem>
<GridItem>{/* Content spanning 1 column (default) */}</GridItem>
<GridItem span={4} className="custom-item-styles">{/* Content with custom styling */}</GridItem>
<GridItem span={6} start={4}>{/* Content spanning 6 columns, starting at column 4 */}</GridItem>
```

## Usage Examples

### Hero Layout (8-4 split)

```tsx
<GridContainer>
  <Grid className='min-h-screen items-center'>
    <GridItem span={8}>{/* Main hero image */}</GridItem>
    <GridItem span={4}>{/* Brand/logo area */}</GridItem>
  </Grid>
</GridContainer>
```

### Content Layout (2-8-2 split)

```tsx
<GridContainer>
  <Grid className='items-center gap-8'>
    <GridItem span={2}>{/* Left decorative element */}</GridItem>
    <GridItem span={8}>{/* Main content area */}</GridItem>
    <GridItem span={2}>{/* Right decorative element */}</GridItem>
  </Grid>
</GridContainer>
```

### Full Width Content (1-10-1 split)

```tsx
<GridContainer>
  <Grid className='items-center gap-8'>
    <GridItem span={1}>{/* Small decorative element */}</GridItem>
    <GridItem span={10}>{/* Wide content area */}</GridItem>
    <GridItem span={1}>{/* Small decorative element */}</GridItem>
  </Grid>
</GridContainer>
```

## Responsive Behavior

### Desktop (1024px+)

- Full 12-column grid
- 32px gutters
- 24px container padding

### Tablet (768px - 1024px)

- 6-column grid
- 16px gutters
- 16px container padding

### Mobile (< 768px)

- 4-column grid
- 12px gutters
- 16px container padding

## CSS Classes Available

### Column Spans

- `.col-span-1` through `.col-span-12`
- Automatically responsive based on breakpoints

### Grid Utilities

- `.grid-container` - Main container with max-width and centering
- `.grid-12` - 12-column grid layout
- Responsive adjustments handled automatically

## Design Token Integration

The grid system integrates with the project's design token system:

- Uses CSS custom properties for consistency
- Responsive values defined in CSS media queries
- Compatible with Tailwind CSS utilities

## Testing

A grid demo page is available at `/component-test/grid-demo` to visualize:

- 12-column grid structure
- Different column span combinations
- Responsive behavior
- Layout examples matching Figma designs

## Best Practices

1. **Always use GridContainer** as the outermost wrapper
2. **Use Grid for layout structure** - don't nest grids unnecessarily
3. **GridItem spans should add up to 12** for full-width layouts
4. **Test responsive behavior** across all breakpoints
5. **Follow Figma column specifications** for consistency
