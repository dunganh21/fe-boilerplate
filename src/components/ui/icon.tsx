import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Youtube,
  Facebook,
  MessageCircle,
  Phone,
  LucideIcon,
} from 'lucide-react';

const iconVariants = cva(
  'inline-flex items-center justify-center transition-colors',
  {
    variants: {
      variant: {
        default: 'text-current',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        social:
          'text-[#E6D8BA] opacity-70 hover:opacity-100 transition-opacity',
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

// Icon mapping for social media and common icons
const iconMap = {
  youtube: Youtube,
  facebook: Facebook,
  messenger: MessageCircle,
  viber: Phone, // Using Phone as Viber alternative since Lucide doesn't have Viber
} as const;

export interface IconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> {
  name?: keyof typeof iconMap;
  icon?: LucideIcon;
  asChild?: boolean;
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  (
    { className, variant, size, name, icon, asChild = false, ...props },
    ref
  ) => {
    // Determine which icon to render
    const IconComponent = icon || (name ? iconMap[name] : null);

    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in iconMap`);
      return null;
    }

    const Comp = asChild ? React.Fragment : 'div';
    const iconElement = <IconComponent className='h-full w-full' />;

    if (asChild) {
      return iconElement;
    }

    return (
      <Comp
        className={cn(iconVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconElement}
      </Comp>
    );
  }
);

Icon.displayName = 'Icon';

export { Icon, iconVariants, iconMap };
