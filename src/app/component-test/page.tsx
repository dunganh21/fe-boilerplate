import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icon } from '@/components/ui/icon';
import { Mail, Phone, MapPin, Heart, Star, Settings } from 'lucide-react';

export default function ComponentTestPage() {
  return (
    <main className='p-8 space-y-8 bg-background-secondary min-h-screen'>
      {/* Button Component Test */}
      <section className='space-y-6'>
        <h1 className='text-2xl font-bold mb-4'>Button Component Test</h1>
        <div className='space-y-4'>
          <div>
            <h2 className='font-semibold mb-2'>Variants</h2>
            <div className='flex gap-4 flex-wrap'>
              <Button variant='primary'>Primary</Button>
              <Button variant='secondary'>Secondary</Button>
              <Button variant='outline'>Outline</Button>
              <Button variant='ghost'>Ghost</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
          <div>
            <h2 className='font-semibold mb-2'>Sizes</h2>
            <div className='flex gap-4 flex-wrap items-end'>
              <Button size='sm'>Small</Button>
              <Button size='md'>Medium</Button>
              <Button size='lg'>Large</Button>
              <Button size='xl'>XLarge</Button>
            </div>
          </div>
          <div>
            <h2 className='font-semibold mb-2'>Custom Class</h2>
            <Button className='bg-red-500 hover:bg-red-600 text-white'>
              Custom Red
            </Button>
          </div>
        </div>
      </section>

      {/* Input Component Test */}
      <section className='space-y-6'>
        <h1 className='text-2xl font-bold mb-4'>Input Component Test</h1>
        <div className='space-y-6'>
          {/* Basic Input Types */}
          <div>
            <h2 className='font-semibold mb-3'>Input Types</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Text Input</label>
                <Input type='text' placeholder='Enter your name' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Email Input</label>
                <Input type='email' placeholder='Enter your email' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Password Input</label>
                <Input type='password' placeholder='Enter your password' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Number Input</label>
                <Input type='number' placeholder='Enter a number' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Search Input</label>
                <Input type='search' placeholder='Search...' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>File Input</label>
                <Input type='file' />
              </div>
            </div>
          </div>

          {/* Input States */}
          <div>
            <h2 className='font-semibold mb-3'>Input States</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Default</label>
                <Input placeholder='Default input' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>With Value</label>
                <Input defaultValue='Pre-filled value' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Disabled</label>
                <Input placeholder='Disabled input' disabled />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Read Only</label>
                <Input defaultValue='Read only value' readOnly />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Required</label>
                <Input placeholder='Required field' required />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Invalid</label>
                <Input
                  placeholder='Invalid input'
                  aria-invalid='true'
                  defaultValue='Invalid value'
                />
              </div>
            </div>
          </div>

          {/* Custom Styling */}
          <div>
            <h2 className='font-semibold mb-3'>Custom Styling</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Large Input</label>
                <Input placeholder='Large input' className='h-12 text-lg' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Rounded Input</label>
                <Input placeholder='Rounded input' className='rounded-full' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>With Icon (Left)</label>
                <div className='relative'>
                  <Input placeholder='Search with icon' className='pl-10' />
                  <span className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500'>
                    🔍
                  </span>
                </div>
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>With Icon (Right)</label>
                <div className='relative'>
                  <Input placeholder='Input with icon' className='pr-10' />
                  <span className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500'>
                    ✨
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Example */}
          <div>
            <h2 className='font-semibold mb-3'>Form Example</h2>
            <form className='space-y-4 max-w-md'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Full Name</label>
                <Input placeholder='Enter your full name' required />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Email Address</label>
                <Input type='email' placeholder='Enter your email' required />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Phone Number</label>
                <Input type='tel' placeholder='Enter your phone number' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Message</label>
                <Input placeholder='Enter your message' />
              </div>
              <Button type='submit' className='w-full'>
                Submit Form
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Icon Component Test */}
      <section className='space-y-6'>
        <h1 className='text-2xl font-bold mb-4'>Icon Component Test</h1>
        <div className='space-y-6'>
          {/* Social Media Icons (from Footer) */}
          <div>
            <h2 className='font-semibold mb-3'>
              Social Media Icons (Footer Style)
            </h2>
            <div className='flex gap-4 items-center p-6 bg-[#112724] rounded-lg'>
              <Icon name='youtube' variant='social' size='social' />
              <Icon name='facebook' variant='social' size='social' />
              <Icon name='messenger' variant='social' size='social' />
              <Icon name='viber' variant='social' size='social' />
            </div>
          </div>

          {/* Icon Variants */}
          <div>
            <h2 className='font-semibold mb-3'>Icon Variants</h2>
            <div className='flex gap-4 items-center'>
              <div className='text-center space-y-2'>
                <Icon icon={Mail} variant='default' />
                <p className='text-xs text-neutral-600'>Default</p>
              </div>
              <div className='text-center space-y-2'>
                <Icon icon={Mail} variant='ghost' />
                <p className='text-xs text-neutral-600'>Ghost</p>
              </div>
              <div className='text-center space-y-2'>
                <Icon icon={Mail} variant='outline' />
                <p className='text-xs text-neutral-600'>Outline</p>
              </div>
              <div className='text-center space-y-2'>
                <Icon icon={Mail} variant='social' />
                <p className='text-xs text-neutral-600'>Social</p>
              </div>
            </div>
          </div>

          {/* Icon Sizes */}
          <div>
            <h2 className='font-semibold mb-3'>Icon Sizes</h2>
            <div className='flex gap-6 items-center'>
              <div className='text-center space-y-2'>
                <Icon icon={Phone} size='sm' />
                <p className='text-xs text-neutral-600'>Small</p>
              </div>
              <div className='text-center space-y-2'>
                <Icon icon={Phone} size='default' />
                <p className='text-xs text-neutral-600'>Default</p>
              </div>
              <div className='text-center space-y-2'>
                <Icon icon={Phone} size='lg' />
                <p className='text-xs text-neutral-600'>Large</p>
              </div>
              <div className='text-center space-y-2'>
                <Icon icon={Phone} size='xl' />
                <p className='text-xs text-neutral-600'>XLarge</p>
              </div>
              <div className='text-center space-y-2'>
                <Icon icon={Phone} size='social' />
                <p className='text-xs text-neutral-600'>Social</p>
              </div>
            </div>
          </div>

          {/* Icon Usage Examples */}
          <div>
            <h2 className='font-semibold mb-3'>Usage Examples</h2>
            <div className='space-y-4'>
              {/* With Buttons */}
              <div className='space-y-2'>
                <h3 className='text-sm font-medium'>With Buttons</h3>
                <div className='flex gap-3'>
                  <Button className='flex items-center gap-2'>
                    <Icon icon={Mail} size='sm' asChild />
                    Email
                  </Button>
                  <Button variant='outline' className='flex items-center gap-2'>
                    <Icon icon={Phone} size='sm' asChild />
                    Call
                  </Button>
                  <Button variant='ghost' className='flex items-center gap-2'>
                    <Icon icon={MapPin} size='sm' asChild />
                    Location
                  </Button>
                </div>
              </div>

              {/* Interactive Icons */}
              <div className='space-y-2'>
                <h3 className='text-sm font-medium'>Interactive Icons</h3>
                <div className='flex gap-3'>
                  <Icon
                    icon={Heart}
                    variant='ghost'
                    className='cursor-pointer hover:text-red-500 transition-colors'
                  />
                  <Icon
                    icon={Star}
                    variant='ghost'
                    className='cursor-pointer hover:text-yellow-500 transition-colors'
                  />
                  <Icon
                    icon={Settings}
                    variant='ghost'
                    className='cursor-pointer hover:text-blue-500 transition-colors'
                  />
                </div>
              </div>

              {/* Custom Colors */}
              <div className='space-y-2'>
                <h3 className='text-sm font-medium'>Custom Colors</h3>
                <div className='flex gap-3'>
                  <Icon icon={Heart} className='text-red-500' />
                  <Icon icon={Star} className='text-yellow-500' />
                  <Icon icon={Settings} className='text-blue-500' />
                  <Icon icon={Mail} className='text-green-500' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
