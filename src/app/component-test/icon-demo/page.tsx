import { Icon } from '@/components/ui/icon';

export default function IconDemoPage() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8'>
      <div className='max-w-4xl mx-auto space-y-12'>
        {/* Header */}
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold text-slate-900'>
            Social Media Icons Demo
          </h1>
          <p className='text-lg text-slate-600'>
            Downloaded from Figma and integrated into the Icon component
          </p>
        </div>

        {/* Footer Style Demo */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-slate-800'>
            Footer Style (Original Design)
          </h2>
          <div className='bg-footer p-8 rounded-lg'>
            <div className='flex items-center justify-center gap-6'>
              <div className='text-center space-y-3'>
                <Icon name='youtube' variant='social' size='social' />
                <p className='text-accent text-sm opacity-70'>YouTube</p>
              </div>
              <div className='text-center space-y-3'>
                <Icon name='facebook' variant='social' size='social' />
                <p className='text-accent text-sm opacity-70'>Facebook</p>
              </div>
              <div className='text-center space-y-3'>
                <Icon name='messenger' variant='social' size='social' />
                <p className='text-accent text-sm opacity-70'>Messenger</p>
              </div>
              <div className='text-center space-y-3'>
                <Icon name='viber' variant='social' size='social' />
                <p className='text-accent text-sm opacity-70'>Viber</p>
              </div>
            </div>
          </div>
        </section>

        {/* Different Sizes Demo */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-slate-800'>
            Different Sizes
          </h2>
          <div className='bg-white p-8 rounded-lg shadow-sm border'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              <div className='text-center space-y-4'>
                <h3 className='font-medium text-slate-700'>YouTube</h3>
                <div className='space-y-3'>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='youtube' size='sm' />
                    <span className='text-xs text-slate-500'>Small</span>
                  </div>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='youtube' size='default' />
                    <span className='text-xs text-slate-500'>Default</span>
                  </div>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='youtube' size='lg' />
                    <span className='text-xs text-slate-500'>Large</span>
                  </div>
                </div>
              </div>
              <div className='text-center space-y-4'>
                <h3 className='font-medium text-slate-700'>Facebook</h3>
                <div className='space-y-3'>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='facebook' size='sm' />
                    <span className='text-xs text-slate-500'>Small</span>
                  </div>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='facebook' size='default' />
                    <span className='text-xs text-slate-500'>Default</span>
                  </div>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='facebook' size='lg' />
                    <span className='text-xs text-slate-500'>Large</span>
                  </div>
                </div>
              </div>
              <div className='text-center space-y-4'>
                <h3 className='font-medium text-slate-700'>Messenger</h3>
                <div className='space-y-3'>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='messenger' size='sm' />
                    <span className='text-xs text-slate-500'>Small</span>
                  </div>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='messenger' size='default' />
                    <span className='text-xs text-slate-500'>Default</span>
                  </div>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='messenger' size='lg' />
                    <span className='text-xs text-slate-500'>Large</span>
                  </div>
                </div>
              </div>
              <div className='text-center space-y-4'>
                <h3 className='font-medium text-slate-700'>Viber</h3>
                <div className='space-y-3'>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='viber' size='sm' />
                    <span className='text-xs text-slate-500'>Small</span>
                  </div>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='viber' size='default' />
                    <span className='text-xs text-slate-500'>Default</span>
                  </div>
                  <div className='flex flex-col items-center space-y-1'>
                    <Icon name='viber' size='lg' />
                    <span className='text-xs text-slate-500'>Large</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-slate-800'>
            Interactive Demo
          </h2>
          <div className='bg-white p-8 rounded-lg shadow-sm border'>
            <div className='flex items-center justify-center gap-6'>
              <button className='group p-4 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-200 hover:scale-110'>
                <Icon
                  name='youtube'
                  size='lg'
                  className='group-hover:opacity-80 transition-opacity'
                />
              </button>
              <button className='group p-4 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-200 hover:scale-110'>
                <Icon
                  name='facebook'
                  size='lg'
                  className='group-hover:opacity-80 transition-opacity'
                />
              </button>
              <button className='group p-4 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-200 hover:scale-110'>
                <Icon
                  name='messenger'
                  size='lg'
                  className='group-hover:opacity-80 transition-opacity'
                />
              </button>
              <button className='group p-4 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-200 hover:scale-110'>
                <Icon
                  name='viber'
                  size='lg'
                  className='group-hover:opacity-80 transition-opacity'
                />
              </button>
            </div>
            <p className='text-center text-slate-600 mt-4'>
              Hover over the icons to see the interactive effects
            </p>
          </div>
        </section>

        {/* Usage Examples */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-slate-800'>
            Usage Examples
          </h2>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Card Example */}
            <div className='bg-white p-6 rounded-lg shadow-sm border'>
              <h3 className='font-medium text-slate-700 mb-4'>
                Social Links Card
              </h3>
              <div className='space-y-3'>
                <a
                  href='#'
                  className='flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors'
                >
                  <Icon name='youtube' size='default' />
                  <span className='text-slate-700'>Watch our videos</span>
                </a>
                <a
                  href='#'
                  className='flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors'
                >
                  <Icon name='facebook' size='default' />
                  <span className='text-slate-700'>Follow us on Facebook</span>
                </a>
                <a
                  href='#'
                  className='flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors'
                >
                  <Icon name='messenger' size='default' />
                  <span className='text-slate-700'>Chat with us</span>
                </a>
                <a
                  href='#'
                  className='flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors'
                >
                  <Icon name='viber' size='default' />
                  <span className='text-slate-700'>Message on Viber</span>
                </a>
              </div>
            </div>

            {/* Compact Example */}
            <div className='bg-white p-6 rounded-lg shadow-sm border'>
              <h3 className='font-medium text-slate-700 mb-4'>
                Compact Social Bar
              </h3>
              <div className='flex items-center gap-4'>
                <span className='text-slate-600'>Follow us:</span>
                <div className='flex gap-2'>
                  <Icon
                    name='youtube'
                    size='sm'
                    className='hover:opacity-70 cursor-pointer transition-opacity'
                  />
                  <Icon
                    name='facebook'
                    size='sm'
                    className='hover:opacity-70 cursor-pointer transition-opacity'
                  />
                  <Icon
                    name='messenger'
                    size='sm'
                    className='hover:opacity-70 cursor-pointer transition-opacity'
                  />
                  <Icon
                    name='viber'
                    size='sm'
                    className='hover:opacity-70 cursor-pointer transition-opacity'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-slate-800'>
            Technical Details
          </h2>
          <div className='bg-slate-50 p-6 rounded-lg'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h3 className='font-medium text-slate-700 mb-3'>Icon Files</h3>
                <ul className='space-y-1 text-sm text-slate-600'>
                  <li>• /public/icons/youtube.svg (25×18)</li>
                  <li>• /public/icons/facebook.svg (12×22)</li>
                  <li>• /public/icons/messenger.svg (22×22)</li>
                  <li>• /public/icons/viber.svg (22×24)</li>
                </ul>
              </div>
              <div>
                <h3 className='font-medium text-slate-700 mb-3'>Usage</h3>
                <div className='bg-white p-3 rounded border text-sm font-mono text-slate-700'>
                  {`<Icon name="youtube" variant="social" size="social" />`}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
