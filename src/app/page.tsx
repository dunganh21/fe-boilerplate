import { Menu } from '@/components/organisms/menu/menu';

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Menu variant='light' />
      <div className='flex items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold text-primary'>
          Welcome to FE Template
        </h1>
      </div>
    </main>
  );
}
