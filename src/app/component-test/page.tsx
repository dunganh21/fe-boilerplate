import Link from 'next/link';

export default function ComponentTestPage() {
  return (
    <div className='min-h-screen bg-background p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-display text-primary mb-8'>
          Component Testing Hub
        </h1>

        {/* Debug Grid Test */}
        <div className='mb-8 p-6 border border-primary/20 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Grid Debug Test</h2>
          <div className='grid grid-cols-6 gap-4 mb-4'>
            <div className='col-span-1 bg-red-500 text-white p-2 text-center text-sm'>
              span-1
            </div>
            <div className='col-span-2 bg-green-500 text-white p-2 text-center text-sm'>
              span-2
            </div>
            <div className='col-span-3 bg-blue-500 text-white p-2 text-center text-sm'>
              span-3
            </div>
          </div>
          <div className='grid grid-cols-6 gap-4 mb-4'>
            <div className='col-span-4 bg-purple-500 text-white p-2 text-center text-sm'>
              span-4
            </div>
            <div className='col-span-2 bg-orange-500 text-white p-2 text-center text-sm'>
              span-2
            </div>
          </div>
          <div className='grid grid-cols-6 gap-4'>
            <div className='col-span-6 bg-pink-500 text-white p-2 text-center text-sm'>
              span-6 (should be full width)
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Link
            href='/component-test/grid-demo'
            className='block p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors'
          >
            <h2 className='text-xl font-semibold text-primary mb-2'>
              Grid System
            </h2>
            <p className='text-primary/70'>
              Test the responsive grid system with various layouts and spans.
            </p>
          </Link>

          <Link
            href='/component-test/icon-demo'
            className='block p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors'
          >
            <h2 className='text-xl font-semibold text-primary mb-2'>
              Icon System
            </h2>
            <p className='text-primary/70'>
              Test custom icons and Lucide React icons integration.
            </p>
          </Link>

          <Link
            href='/component-test/text-label'
            className='block p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors'
          >
            <h2 className='text-xl font-semibold text-primary mb-2'>
              Typography
            </h2>
            <p className='text-primary/70'>
              Test typography components and text styling.
            </p>
          </Link>

          <Link
            href='/component-test/menu-test'
            className='block p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors'
          >
            <h2 className='text-xl font-semibold text-primary mb-2'>Menu</h2>
            <p className='text-primary/70'>
              Test navigation menu component with responsive design.
            </p>
          </Link>

          <Link
            href='/component-test/mega-menu-test'
            className='block p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors'
          >
            <h2 className='text-xl font-semibold text-primary mb-2'>
              Mega Menu
            </h2>
            <p className='text-primary/70'>
              Test mega menu component with complex layouts.
            </p>
          </Link>

          <Link
            href='/component-test/features-test'
            className='block p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors'
          >
            <h2 className='text-xl font-semibold text-primary mb-2'>
              Interactive Features
            </h2>
            <p className='text-primary/70'>
              Test interactive features section with vertical tabs layout.
            </p>
          </Link>

          <Link
            href='/component-test/quality-specifications'
            className='block p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors'
          >
            <h2 className='text-xl font-semibold text-primary mb-2'>
              Quality Specifications
            </h2>
            <p className='text-primary/70'>
              Test interactive quality design specifications with row selection
              and dynamic image rotation.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
