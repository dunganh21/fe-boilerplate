'use client';

import { cn } from '@/lib/utils';
import { Container, Grid, GridItem } from '@/components/layout/grid-container';
import { Sheet, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { LogoIcon } from './logo';
import Image from 'next/image';

// Custom SheetContent without the built-in close button
function CustomSheetContent({
  className,
  children,
  side = 'top',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
}) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className='data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50' />
      <SheetPrimitive.Content
        data-slot='sheet-content'
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          side === 'top' &&
            'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
          className
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

interface MegaMenuProps {
  trigger: React.ReactNode;
  className?: string;
}

const menuItems = [
  { label: 'Project', href: '#', size: 'large' },
  { label: 'View 360°', href: '#', size: 'large' },
  { label: 'Sales Info', href: '#', size: 'large' },
  { label: 'Media', href: '#', size: 'small' },
  { label: 'Contact', href: '#', size: 'small' },
];

const megaMenuImages = [
  { src: '/images/mega-menu-image-1.png', alt: 'Main hero image' },
  { src: '/images/mega-menu-image-2.png', alt: 'Top left image' },
  { src: '/images/mega-menu-image-3.png', alt: 'Top right image' },
  { src: '/images/mega-menu-image-4.png', alt: 'Bottom right image' },
];

export function MegaMenu({ trigger, className }: MegaMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <CustomSheetContent
        side='top'
        className={cn(
          'w-full h-screen max-h-screen bg-footer border-none p-0',
          className
        )}
      >
        <div className='w-full h-full relative bg-footer overflow-hidden'>
          {/* Header with logo and close button using Container */}
          <div className='absolute top-0 left-0 w-full z-20 pt-4 sm:pt-6 lg:pt-8'>
            <Container>
              <Grid className='items-center'>
                <GridItem span={3} className='flex items-center'>
                  <LogoIcon variant='light' />
                </GridItem>
                <GridItem
                  start={10}
                  span={3}
                  className='flex items-center justify-end'
                >
                  <SheetClose className='text-accent hover:opacity-80 transition-opacity p-2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18 6L6 18M6 6L18 18'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </SheetClose>
                </GridItem>
              </Grid>
            </Container>
          </div>

          {/* Main content with new 3-part layout */}
          <div className='w-full h-full pt-20 sm:pt-24 lg:pt-32 pb-4 sm:pb-6 lg:pb-8'>
            {/* Desktop Layout (lg and above) */}
            <div className='hidden lg:block h-full relative'>
              <Container>
                <Grid className='h-full relative'>
                  {/* Column 1: Link List (flex-col) */}
                  <GridItem
                    span={3}
                    className='flex flex-col justify-center z-10'
                  >
                    <div className='space-y-6 xl:space-y-8'>
                      {menuItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className={cn(
                            'text-accent font-display transition-colors hover:opacity-80 block',
                            item.size === 'large'
                              ? 'text-6xl xl:text-7xl 2xl:text-8xl leading-none tracking-tight'
                              : 'text-xl xl:text-2xl 2xl:text-3xl leading-tight tracking-normal'
                          )}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>

                    {/* Language selector at bottom */}
                    <div className='mt-auto'>
                      <span className='text-white/40 font-body font-medium text-sm uppercase tracking-wider'>
                        VIET / ENG
                      </span>
                    </div>
                  </GridItem>

                  {/* Column 2: Large Image (flex-col, ending at col 10) */}
                  <GridItem
                    start={4}
                    end={10}
                    className='flex flex-col justify-center h-full z-10'
                  >
                    <div className='relative w-full h-full max-h-[600px]'>
                      <Image
                        src={megaMenuImages[0].src}
                        alt={megaMenuImages[0].alt}
                        fill
                        className='object-cover rounded-lg'
                        sizes='(max-width: 1024px) 100vw, 50vw'
                        priority
                      />
                    </div>
                  </GridItem>
                </Grid>
              </Container>

              {/* Column 3: Image Grid (starting at col 10, extending beyond container) */}
              <div className='absolute top-0 right-0 h-full flex flex-col justify-center z-0'>
                <div className='w-[50vw] h-full flex flex-col justify-center gap-4 pr-8'>
                  {/* Top image */}
                  <div className='relative h-1/2 max-h-[300px]'>
                    <Image
                      src={megaMenuImages[1].src}
                      alt={megaMenuImages[1].alt}
                      fill
                      className='object-cover rounded-lg'
                      sizes='25vw'
                    />
                  </div>

                  {/* Bottom image */}
                  <div className='relative h-1/2 max-h-[300px]'>
                    <Image
                      src={megaMenuImages[2].src}
                      alt={megaMenuImages[2].alt}
                      fill
                      className='object-cover rounded-lg'
                      sizes='25vw'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Layout (md to lg) */}
            <div className='hidden md:block lg:hidden h-full'>
              <Container>
                <Grid className='h-full gap-6'>
                  {/* Left side - Menu items (4 columns) */}
                  <GridItem span={4} className='flex flex-col justify-center'>
                    <div className='space-y-6'>
                      {menuItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className={cn(
                            'text-accent font-display transition-colors hover:opacity-80 block',
                            item.size === 'large'
                              ? 'text-4xl md:text-5xl leading-tight tracking-tight'
                              : 'text-lg md:text-xl leading-snug tracking-normal'
                          )}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>

                    {/* Language selector at bottom */}
                    <div className='mt-auto'>
                      <span className='text-white/40 font-body font-medium text-xs uppercase tracking-wider'>
                        VIET / ENG
                      </span>
                    </div>
                  </GridItem>

                  {/* Right side - Images (8 columns) */}
                  <GridItem span={8} className='h-full'>
                    <div className='grid grid-cols-3 gap-4 h-full'>
                      {/* Large image spans 2 columns */}
                      <div className='col-span-2 relative'>
                        <Image
                          src={megaMenuImages[0].src}
                          alt={megaMenuImages[0].alt}
                          fill
                          className='object-cover rounded-lg'
                          sizes='(max-width: 1024px) 66vw, 50vw'
                          priority
                        />
                      </div>

                      {/* Right column with stacked images */}
                      <div className='grid grid-rows-3 gap-4'>
                        <div className='relative'>
                          <Image
                            src={megaMenuImages[1].src}
                            alt={megaMenuImages[1].alt}
                            fill
                            className='object-cover rounded-md'
                            sizes='(max-width: 1024px) 33vw, 25vw'
                          />
                        </div>
                        <div className='relative'>
                          <Image
                            src={megaMenuImages[2].src}
                            alt={megaMenuImages[2].alt}
                            fill
                            className='object-cover rounded-md'
                            sizes='(max-width: 1024px) 33vw, 25vw'
                          />
                        </div>
                        <div className='relative'>
                          <Image
                            src={megaMenuImages[3].src}
                            alt={megaMenuImages[3].alt}
                            fill
                            className='object-cover rounded-md'
                            sizes='(max-width: 1024px) 33vw, 25vw'
                          />
                        </div>
                      </div>
                    </div>
                  </GridItem>
                </Grid>
              </Container>
            </div>

            {/* Mobile Layout (sm and below) */}
            <div className='block md:hidden h-full'>
              <Container>
                <div className='flex flex-col h-full'>
                  {/* Menu items */}
                  <div className='flex-1 flex flex-col justify-center space-y-8 py-8'>
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className={cn(
                          'text-accent font-display transition-colors hover:opacity-80 block text-center',
                          item.size === 'large'
                            ? 'text-4xl sm:text-5xl leading-tight tracking-tight'
                            : 'text-xl sm:text-2xl leading-snug tracking-normal'
                        )}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Images grid for mobile */}
                  <div className='flex-1 grid grid-cols-2 gap-3 sm:gap-4 pb-8'>
                    <div className='relative rounded-lg overflow-hidden'>
                      <Image
                        src={megaMenuImages[0].src}
                        alt={megaMenuImages[0].alt}
                        fill
                        className='object-cover'
                        sizes='50vw'
                        priority
                      />
                    </div>
                    <div className='relative rounded-lg overflow-hidden'>
                      <Image
                        src={megaMenuImages[1].src}
                        alt={megaMenuImages[1].alt}
                        fill
                        className='object-cover'
                        sizes='50vw'
                      />
                    </div>
                    <div className='relative rounded-lg overflow-hidden'>
                      <Image
                        src={megaMenuImages[2].src}
                        alt={megaMenuImages[2].alt}
                        fill
                        className='object-cover'
                        sizes='50vw'
                      />
                    </div>
                    <div className='relative rounded-lg overflow-hidden'>
                      <Image
                        src={megaMenuImages[3].src}
                        alt={megaMenuImages[3].alt}
                        fill
                        className='object-cover'
                        sizes='50vw'
                      />
                    </div>
                  </div>

                  {/* Language selector */}
                  <div className='text-center pb-4'>
                    <span className='text-white/40 font-body font-medium text-xs uppercase tracking-wider'>
                      VIET / ENG
                    </span>
                  </div>
                </div>
              </Container>
            </div>
          </div>

          {/* Bottom border line */}
          <div className='absolute bottom-0 left-0 w-full h-[1px] bg-accent/16' />
        </div>
      </CustomSheetContent>
    </Sheet>
  );
}
