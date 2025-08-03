import { Typography } from '@/components/ui/typography';

export default function TypographyTestPage() {
  return (
    <div className='min-h-screen bg-background p-8 space-y-12'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold mb-8 text-primary'>
          Typography Component Test
        </h1>

        {/* External Tailwind Classes Test */}
        <section className='space-y-8'>
          {/* <Typography variant='heading-1'>Heading 1</Typography> */}
          <Typography variant='heading-1' className='text-red-500'>
            Heading 1
          </Typography>
        </section>
      </div>
    </div>
  );
}
