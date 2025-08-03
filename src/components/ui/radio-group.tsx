'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      className={cn('grid gap-3', className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  children,
  value,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  children?: React.ReactNode;
}) {
  const id = React.useId();

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <RadioGroupPrimitive.Item
        id={id}
        data-slot='radio-group-item'
        value={value}
        className={cn(
          'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square w-5 h-5 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
          // Custom styling for dark theme
          'border-neutral-600 dark:border-neutral-500',
          'focus-visible:border-primary focus-visible:ring-primary/20',
          'data-[state=checked]:border-primary'
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator
          data-slot='radio-group-indicator'
          className='relative flex items-center justify-center'
        >
          <CircleIcon className='fill-primary absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2' />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {children && (
        <label
          htmlFor={id}
          className='text-text font-body text-lg font-medium leading-[30px] tracking-[-0.18px] cursor-pointer'
        >
          {children}
        </label>
      )}
    </div>
  );
}

export { RadioGroup, RadioGroupItem };
