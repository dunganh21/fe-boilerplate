'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Divider, FormInputField } from '@/components/ui/input';
import { Typography } from './ui/typography';

interface ContactFormProps {
  className?: string;
}

interface FormData {
  wantTo: 'visit' | 'info';
  name: string;
  phone: string;
  email: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    wantTo: 'visit',
    name: 'Lưu Kiên Định',
    phone: '',
    email: '',
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('w-full max-w-[892px]', className)}
    >
      {/* Radio Group Section */}
      <div className='mb-14'>
        <div className='flex items-center gap-15 mb-4'>
          <Typography
            asLabel
            required
            variant='body'
            className='text-text-subdued opacity-50 flex-shrink-0 w-[200px]'
          >
            You want to
          </Typography>

          <RadioGroup
            value={formData.wantTo}
            onValueChange={(value) =>
              handleInputChange('wantTo', value as 'visit' | 'info')
            }
            className='flex items-center gap-6'
          >
            <div className='flex items-center gap-2'>
              <RadioGroupItem value='visit' id='visit' />
              <label
                htmlFor='visit'
                className='text-neutral-700 text-base font-normal leading-normal tracking-normal cursor-pointer'
              >
                Visit Module House
              </label>
            </div>
            <div className='flex items-center gap-2'>
              <RadioGroupItem value='info' id='info' />
              <label
                htmlFor='info'
                className='text-neutral-700 text-base font-normal leading-normal tracking-normal cursor-pointer'
              >
                Get Project Information
              </label>
            </div>
          </RadioGroup>
        </div>
        {/* Connecting line */}
        <Divider />
      </div>

      {/* Name Field */}
      <FormInputField
        label='Your name'
        type='text'
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        required={true}
      />

      {/* Phone Field */}
      <FormInputField
        label='Your phone number'
        type='tel'
        value={formData.phone}
        onChange={(e) => handleInputChange('phone', e.target.value)}
        required={true}
      />

      {/* Email Field */}
      <FormInputField
        label='Your email'
        type='email'
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        required={true}
      />

      {/* Submit Button */}
      <div className='flex justify-end'>
        <button
          type='submit'
          className='bg-primary-900 text-white px-8 py-4 rounded-xl font-semibold text-[17px] leading-[1.41] hover:bg-primary-800 transition-colors duration-200'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
