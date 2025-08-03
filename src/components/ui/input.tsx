import * as React from 'react';
import { cn } from '@/lib/utils';
import { Typography } from './typography';

interface FormInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  dividerClassName?: string;
  labelWidthClassName?: string;
  required?: boolean;
}

export const Divider = () => {
  return <div className='h-px bg-primary-dark opacity-15 w-full' />;
};

export const Label = ({
  label,
  required,
  labelWidthClassName,
  labelClassName,
}: {
  label: string;
  required: boolean;
  labelWidthClassName?: string;
  labelClassName?: string;
}) => {
  return (
    <Typography
      asLabel
      required={required}
      variant='body'
      className={cn(
        'text-text-subdued opacity-50 flex-shrink-0',
        labelWidthClassName,
        labelClassName
      )}
    >
      {label}
    </Typography>
  );
};

export function FormInputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  wrapperClassName,
  labelClassName = 'w-[200px]',
  inputClassName,
  dividerClassName,
  labelWidthClassName,
  required = false,
  ...props
}: FormInputFieldProps) {
  return (
    <div className={cn('mb-14', wrapperClassName)}>
      <div className='flex items-center gap-15 mb-4'>
        <Typography
          asLabel
          required={required}
          variant='body'
          className={cn(
            'opacity-50 flex-shrink-0',
            labelWidthClassName,
            labelClassName
          )}
        >
          {label}
        </Typography>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={cn(
            'text-lg leading-[28px] tracking-[-0.18px] font-body font-normal text-[#414141] outline-none focus:outline-none focus:ring-0 focus:border-none flex-1/2',
            inputClassName
          )}
          required={required}
          {...props}
        />
      </div>
      <Divider />
    </div>
  );
}
