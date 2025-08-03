import { Footer } from '@/components/sections/footer';
import { Container } from '@/components/layout/container';

export default function FooterTestPage() {
  return (
    <div className='min-h-screen bg-background-secondary'>
      <Container className='py-8'>
        <h1 className='text-4xl font-bold text-primary mb-8'>
          Footer Component Test
        </h1>
        <p className='text-text-secondary mb-8'>
          This page displays the footer component for testing purposes. The
          Container component is now used for consistent padding across all
          sections.
        </p>

        <div className='bg-white p-6 rounded-lg shadow-sm'>
          <h2 className='text-2xl font-semibold text-primary mb-4'>
            Container Component Usage
          </h2>
          <p className='text-text-secondary'>
            The Container component provides consistent horizontal padding:
          </p>
          <ul className='list-disc list-inside mt-4 space-y-2 text-text-secondary'>
            <li>
              Mobile:{' '}
              <code className='bg-gray-100 px-2 py-1 rounded'>px-4</code>
            </li>
            <li>
              Tablet:{' '}
              <code className='bg-gray-100 px-2 py-1 rounded'>px-8</code>
            </li>
            <li>
              Desktop:{' '}
              <code className='bg-gray-100 px-2 py-1 rounded'>px-[184px]</code>
            </li>
          </ul>
        </div>
      </Container>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
