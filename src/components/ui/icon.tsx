import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

const iconVariants = cva(
  'inline-flex items-center justify-center transition-colors',
  {
    variants: {
      variant: {
        default: 'text-current',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        social: 'text-accent opacity-70 hover:opacity-100 transition-opacity',
      },
      size: {
        default: 'h-6 w-6',
        sm: 'h-4 w-4',
        lg: 'h-8 w-8',
        xl: 'h-10 w-10',
        social: 'h-7 w-7', // 29px from Figma
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// SVG icon mapping for custom icons from Figma
const svgIconMap = {
  youtube: '/icons/youtube.svg',
  facebook: '/icons/facebook.svg',
  messenger: '/icons/messenger.svg',
  viber: '/icons/viber.svg',
} as const;

export interface IconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> {
  name?: keyof typeof svgIconMap;
  icon?: LucideIcon;
  src?: string;
  alt?: string;
  asChild?: boolean;
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  (
    {
      className,
      variant,
      size,
      name,
      icon,
      src,
      alt,
      asChild = false,
      ...props
    },
    ref
  ) => {
    // Determine which icon to render
    const svgSrc = src || (name ? svgIconMap[name] : null);
    const IconComponent = icon;

    // Render custom SVG icon
    if (svgSrc) {
      const iconElement = (
        <Image
          src={svgSrc}
          alt={alt || name || 'icon'}
          width={28}
          height={28}
          className='h-full w-full object-contain'
        />
      );

      if (asChild) {
        return iconElement;
      }

      return (
        <div
          className={cn(iconVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {iconElement}
        </div>
      );
    }

    // Render Lucide icon
    if (IconComponent) {
      const iconElement = <IconComponent className='h-full w-full' />;

      if (asChild) {
        return iconElement;
      }

      return (
        <div
          className={cn(iconVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {iconElement}
        </div>
      );
    }

    console.warn(`Icon "${name}" not found and no icon component provided`);
    return null;
  }
);

Icon.displayName = 'Icon';

export { Icon, iconVariants, svgIconMap };
