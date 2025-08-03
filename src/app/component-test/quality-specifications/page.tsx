import { QualitySpecifications } from '@/components/sections/quality-specifications';

export default function QualitySpecificationsTestPage() {
  return (
    <div className='min-h-screen bg-background-primary py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-primary mb-8 text-center'>
          Quality Design Specifications Component Test
        </h1>

        <QualitySpecifications />
      </div>
    </div>
  );
}
