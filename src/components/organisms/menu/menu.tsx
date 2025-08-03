'use client';

import { cn } from '@/lib/utils';
import { Container, Grid, GridItem } from '@/components/layout/grid-container';
import { cva, type VariantProps } from 'class-variance-authority';
import { LogoIcon } from './logo';
import { MegaMenu } from './mega-menu';

const menuVariants = cva('w-full h-[120px] relative', {
  variants: {
    variant: {
      light: 'bg-transparent',
      dark: 'bg-white',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
});

const textVariants = cva(
  'font-body font-medium text-sm leading-[1.43] uppercase text-right transition-colors hover:opacity-100',
  {
    variants: {
      variant: {
        light: 'text-white opacity-80',
        dark: 'text-primary-dark opacity-50',
      },
    },
    defaultVariants: {
      variant: 'light',
    },
  }
);

const hamburgerVariants = cva(
  'w-10 h-[13px] flex flex-col justify-between cursor-pointer opacity-90',
  {
    variants: {
      variant: {
        light: '[&_div]:bg-white',
        dark: '[&_div]:bg-primary-dark',
      },
    },
    defaultVariants: {
      variant: 'light',
    },
  }
);

interface MenuProps extends VariantProps<typeof menuVariants> {
  className?: string;
}

export function Menu({ variant, className }: MenuProps) {
  const menuItems = [
    { label: 'PROJECT', href: '#', isActive: false },
    { label: 'View 360°', href: '#', isActive: false },
    { label: 'Media', href: '#', isActive: false },
    { label: 'Sales Info', href: '#', isActive: false },
    { label: 'Contact', href: '#', isActive: variant === 'dark' },
    { label: 'VN / en', href: '#', isActive: false },
  ];

  return (
    <header className={cn(menuVariants({ variant }), className)}>
      <Container>
        <Grid className='h-full items-center'>
          {/* Left side - Logo (3 columns on desktop, full width on mobile) */}
          <GridItem
            span={3}
            className='flex items-center col-span-12 md:col-span-3'
          >
            <LogoIcon variant={variant || 'light'} />
          </GridItem>

          {/* Right side - Navigation and Hamburger (flex-end) */}
          <GridItem
            start={4}
            end={13}
            className='flex items-center justify-end col-span-12 md:col-start-4 md:col-end-13'
          >
            <div className='flex items-center gap-6'>
              {/* Navigation Items - Hidden on mobile, visible on desktop */}
              <nav className='hidden md:flex items-center gap-6'>
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={cn(
                      textVariants({ variant }),
                      item.isActive && '!opacity-100'
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Hamburger Menu - Always visible */}
              <MegaMenu
                trigger={
                  <div className={hamburgerVariants({ variant })}>
                    <div className='w-full h-[2px] rounded-sm' />
                    <div className='w-full h-[2px] rounded-sm' />
                  </div>
                }
              />
            </div>
          </GridItem>
        </Grid>
      </Container>

      {/* Bottom border line */}
      <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white/20' />
    </header>
  );
}
