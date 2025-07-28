# FE Template - Next.js with Tailwind CSS v4 & shadcn/ui

A modern Next.js template with Tailwind CSS v4 and shadcn/ui components, providing a solid foundation for building beautiful, accessible web applications.

## 🚀 Features

- **Next.js 15** with App Router
- **Tailwind CSS v4** with latest features and optimizations
- **shadcn/ui** components for consistent, accessible UI
- **TypeScript** with proper path aliases
- **ESLint** configuration
- **Dark mode** support out of the box
- **CSS Variables** for theming
- **Lucide React** icons

## 📦 What's Included

### Tailwind CSS v4

- Latest version with improved performance
- CSS variables for theming
- Dark mode support
- Optimized for modern development

### shadcn/ui Components

- Beautiful, accessible components built with Radix UI
- Consistent design system
- Full customization control
- Type-safe with TypeScript

### Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind CSS and theme variables
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page with demo
├── components/
│   └── ui/              # shadcn/ui components
│       ├── button.tsx
│       └── card.tsx
└── lib/
    └── utils.ts         # Utility functions (cn helper)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fe-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Adding Components

### Using shadcn/ui CLI

Add components easily with the CLI:

```bash
# Add a single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add card input select

# Add all available components
npx shadcn@latest add --all
```

### Manual Installation

For manual installation, check the [shadcn/ui documentation](https://ui.shadcn.com/docs/components).

## 📝 Usage Examples

### Importing Components

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Using Tailwind CSS

```tsx
<div className='bg-background text-foreground p-4 rounded-lg border'>
  <h1 className='text-2xl font-bold text-primary'>Hello World</h1>
  <p className='text-muted-foreground'>This uses Tailwind CSS v4</p>
</div>
```

## 🎯 Available Components

The following components are available and ready to use:

- **Button** - Various button styles and variants
- **Card** - Content containers with header, content, and footer
- **Input** - Form input fields
- **Select** - Dropdown selection
- **Dialog** - Modal dialogs
- **Dropdown Menu** - Context menus
- **Form** - Form components with validation
- **Table** - Data tables
- **Tabs** - Tabbed interfaces
- **Toast** - Notification system
- **And many more...**

View all available components at [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/app/globals.css` to customize your theme:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  /* ... more variables */
}
```

### Component Styling

Components can be customized by modifying their source files in `src/components/ui/`.

### Tailwind Configuration

Tailwind CSS v4 is configured with the latest features. The configuration is handled through CSS imports in `src/app/globals.css`.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for the beautiful components
- [Radix UI](https://www.radix-ui.com) for the accessible primitives
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Next.js](https://nextjs.org) for the React framework
