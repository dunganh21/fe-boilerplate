'use client';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';

export default function RadioGroupTestPage() {
  const [value, setValue] = useState('option1');

  return (
    <div className='min-h-screen bg-background p-8'>
      <div className='max-w-md mx-auto space-y-8'>
        <h1 className='text-3xl font-bold text-primary'>Radio Group Test</h1>

        <div className='space-y-4'>
          <h2 className='text-xl font-semibold'>Basic Radio Group</h2>
          <RadioGroup value={value} onValueChange={setValue}>
            <RadioGroupItem value='option1'>
              Option 1 - This is a longer text to test the line height and
              spacing
            </RadioGroupItem>
            <RadioGroupItem value='option2'>
              Option 2 - Another option with different text length
            </RadioGroupItem>
            <RadioGroupItem value='option3'>
              Option 3 - Short option
            </RadioGroupItem>
          </RadioGroup>
        </div>

        <div className='space-y-4'>
          <h2 className='text-xl font-semibold'>Selected Value</h2>
          <p className='text-text'>
            Current selection: <strong>{value}</strong>
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-xl font-semibold'>Disabled State</h2>
          <RadioGroup value='option1' disabled>
            <RadioGroupItem value='option1'>Disabled Option 1</RadioGroupItem>
            <RadioGroupItem value='option2'>Disabled Option 2</RadioGroupItem>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
