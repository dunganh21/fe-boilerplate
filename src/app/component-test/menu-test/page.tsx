'use client';

import { Menu } from '@/components/organisms/menu/menu';

export default function MenuTestPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-background to-accent/20'>
      <div className='space-y-8 p-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-primary mb-4'>
            Menu Component Test
          </h1>
          <p className='text-primary-dark'>
            Testing both light and dark variants
          </p>
        </div>

        {/* Light variant test */}
        <div className='space-y-4'>
          <h2 className='text-xl font-semibold text-primary'>
            Light Variant (Transparent Background)
          </h2>
          <div className='bg-primary-dark p-8 rounded-lg'>
            <Menu variant='light' />
          </div>
        </div>

        {/* Dark variant test */}
        <div className='space-y-4'>
          <h2 className='text-xl font-semibold text-primary'>
            Dark Variant (White Background)
          </h2>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <Menu variant='dark' />
          </div>
        </div>

        {/* Responsive test */}
        <div className='space-y-4'>
          <h2 className='text-xl font-semibold text-primary'>
            Responsive Test
          </h2>
          <div className='bg-primary-dark p-8 rounded-lg'>
            <Menu variant='light' />
          </div>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <Menu variant='dark' />
          </div>
        </div>
      </div>
    </div>
  );
}
