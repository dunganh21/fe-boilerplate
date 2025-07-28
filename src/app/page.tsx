import Button from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted/20'>
      <div className='container mx-auto px-4 py-16'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold tracking-tight mb-4'>
            Welcome to Your <span className='text-primary'>shadcn/ui</span>{' '}
            Project
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Your project is now fully configured with Tailwind CSS v4 and
            shadcn/ui components. Start building beautiful, accessible
            interfaces with ease.
          </p>
        </div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          <Card className='border-border/50 hover:border-border transition-colors'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-primary rounded-full'></div>
                Tailwind CSS v4
              </CardTitle>
              <CardDescription>
                Latest version with improved performance and new features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                Configured with CSS variables, dark mode support, and optimized
                for modern development.
              </p>
            </CardContent>
          </Card>

          <Card className='border-border/50 hover:border-border transition-colors'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-primary rounded-full'></div>
                shadcn/ui Components
              </CardTitle>
              <CardDescription>
                Beautiful, accessible components built with Radix UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                Ready-to-use components with consistent design and full
                customization control.
              </p>
            </CardContent>
          </Card>

          <Card className='border-border/50 hover:border-border transition-colors'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-primary rounded-full'></div>
                TypeScript Ready
              </CardTitle>
              <CardDescription>
                Full TypeScript support with path aliases configured
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                Type-safe development with proper IntelliSense and error
                checking.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Demo Section */}
        <div className='text-center'>
          <h2 className='text-2xl font-semibold mb-8'>Component Demo</h2>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Button variant='primary'>Primary Button</Button>
            <Button variant='secondary'>Secondary Button</Button>
            <Button variant='outline'>Outline Button</Button>
            <Button variant='ghost'>Ghost Button</Button>
          </div>
        </div>

        {/* Quick Start Guide */}
        <Card className='mt-16 max-w-4xl mx-auto'>
          <CardHeader>
            <CardTitle>Quick Start Guide</CardTitle>
            <CardDescription>
              Here's how to add more components and start building
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <h4 className='font-medium'>Add Components</h4>
              <code className='block bg-muted px-3 py-2 rounded text-sm font-mono'>
                npx shadcn@latest add card input button
              </code>
            </div>

            <div className='space-y-2'>
              <h4 className='font-medium'>Import Components</h4>
              <code className='block bg-muted px-3 py-2 rounded text-sm font-mono'>
                <span>
                  import {'{'}Button{'}'} from '@/components/ui/button';
                </span>
              </code>
            </div>

            <div className='space-y-2'>
              <h4 className='font-medium'>Available Components</h4>
              <p className='text-sm text-muted-foreground'>
                Check out all available components at{' '}
                <a
                  href='https://ui.shadcn.com/docs/components'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  ui.shadcn.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
