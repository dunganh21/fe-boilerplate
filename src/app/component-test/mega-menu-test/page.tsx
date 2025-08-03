import { Menu } from '@/components/organisms/menu/menu';

export default function MegaMenuTestPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Menu variant='light' />

      {/* Content to show the menu is working */}
      <div className='pt-32 px-8'>
        <h1 className='text-4xl font-bold text-primary mb-8'>
          Mega Menu Test Page
        </h1>
        <p className='text-lg text-primary-dark mb-4'>
          Click the hamburger icon in the top right to open the mega menu.
        </p>
        <p className='text-primary-dark'>
          The mega menu should slide down from the top with the full-screen
          overlay.
        </p>
      </div>
    </div>
  );
}
