'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      'heading-1':
        'text-9xl leading-[122px] tracking-[-6.6px] font-display font-normal text-text-light',
      'heading-2':
        'text-8xl leading-[90px] tracking-[-4.2px] font-display font-normal text-primary',
      'heading-3':
        'text-7xl leading-[74px] tracking-[-3.6px] font-display font-normal text-primary',
      subheading:
        'text-base leading-[26px] font-body font-normal uppercase text-primary-dark',
      body: 'text-lg leading-[28px] tracking-[-0.18px] font-body font-normal text-text',
      label:
        'text-3xl leading-[40px] tracking-[-0.96px] font-display font-normal text-primary',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

// Base Typography Props
interface BaseTypographyProps extends VariantProps<typeof typographyVariants> {
  className?: string;
}

// Text-specific props
export interface TextProps
  extends BaseTypographyProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'className'> {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asLabel?: never;
  htmlFor?: never;
  required?: never;
}

// Label-specific props
export interface LabelProps
  extends BaseTypographyProps,
    React.ComponentProps<typeof LabelPrimitive.Root> {
  as?: never;
  asLabel: true;
  required?: boolean;
}

// Union type for all props
export type TypographyProps = TextProps | LabelProps;

// Type guard to check if it's a label
function isLabelProps(props: TypographyProps): props is LabelProps {
  return 'asLabel' in props && props.asLabel === true;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (props, _ref) => {
    const { className, variant, children } = props;

    // Common class generation - put variant classes first, then external className for proper override
    const classes = cn(
      typographyVariants({
        variant,
      }),
      // Add label-specific styles when used as label
      isLabelProps(props) &&
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      // Add required asterisk for labels
      isLabelProps(props) &&
        props.required &&
        "after:content-['*'] after:text-destructive after:ml-1",
      className
    );

    // Render as Label
    if (isLabelProps(props)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {
        asLabel: _asLabel,
        required: _required,
        className: _className,
        ...labelProps
      } = props;
      return (
        <LabelPrimitive.Root className={classes} {...labelProps}>
          {children}
        </LabelPrimitive.Root>
      );
    }

    // Render as Text element
    const {
      as: Component = 'p',
      className: _className,
      ...textProps
    } = props as TextProps;
    console.log('run to this', classes, textProps, _className);

    return (
      <Component className={classes} {...textProps}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
