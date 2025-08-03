import { ContactForm } from '@/components/contact-form';

export default function ContactFormTestPage() {
  return (
    <div className='min-h-screen bg-neutral-100 p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-neutral-900 mb-8'>
          Contact Form Test
        </h1>

        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
