'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Typography } from '../ui/typography';
import { Container } from '../layout/container';

interface SpecificationItem {
  label: string;
  description: string;
  isHighlighted?: boolean;
  imageSrc?: string;
  imageRotation?: number;
}

interface QualitySpecificationsProps {
  className?: string;
  items?: SpecificationItem[];
}

const defaultItems: SpecificationItem[] = [
  {
    label: 'Service',
    description: 'Two 24/7 reception areas',
    imageSrc: '/images/service.jpg',
    imageRotation: -5,
  },
  {
    label: 'Parking Space',
    description: 'Ground, guarded car parkings',
    isHighlighted: true,
    imageSrc: '/images/parking-garage.jpg',
    imageRotation: 5,
  },
  {
    label: 'Security System',
    description: 'Video surveillance, perimeter burglar alarm',
    imageSrc: '/images/parking-garage.jpg',
    imageRotation: -5,
  },
  {
    label: 'Lifts',
    description: 'Silent premium elevators',
    imageSrc: '/images/parking-garage.jpg',
    imageRotation: 5,
  },
  {
    label: 'Fire Alarms',
    description: 'Automatic fire extinguishing system',
    imageSrc: '/images/parking-garage.jpg',
    imageRotation: -5,
  },
  {
    label: 'Conditioners',
    description: 'Central air conditioning systems',
    imageSrc: '/images/parking-garage.jpg',
    imageRotation: 5,
  },
];

export function QualitySpecifications({
  className,
  items = defaultItems,
}: QualitySpecificationsProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(1); // Default to Parking Space
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const selectedItem = items[selectedIndex];

  return (
    <section className={cn('relative w-full overflow-visible', className)}>
      <Container className='relative flex flex-col lg:flex-row gap-0'>
        {/* Left Content */}
        <div className='flex-1 relative z-10'>
          {/* Title - Exact Figma specs: 15px, 1.333 line-height, uppercase, centered */}
          <div className='mb-20'>
            <Typography variant='subheading'>
              Quality design specifications
            </Typography>
          </div>

          {/* Specifications List */}
          <div className='space-y-0'>
            {items.map((item, index) => {
              const isSelected = selectedIndex === index;

              return (
                <div key={index} className='relative'>
                  {/* Horizontal line - Exact Figma specs: 1552px width, 1px height */}
                  {index > 0 && (
                    <div
                      className={cn(
                        'absolute top-0 left-0 w-[1552px] h-px transition-colors duration-300',
                        isSelected ? 'bg-primary-dark/40' : 'bg-primary-dark/10'
                      )}
                    />
                  )}

                  {/* Item content - Exact Figma spacing */}
                  <div
                    className='flex flex-col lg:flex-row lg:items-center py-6 cursor-pointer group transition-all duration-300 hover:scale-102'
                    onClick={() => setSelectedIndex(index)}
                  >
                    {/* Label - Using Typography heading-3 with state-based styling */}
                    <div className='lg:w-[528px] lg:pr-8 mb-4 lg:mb-0'>
                      <Typography
                        variant='heading-3'
                        as='h3'
                        className={isSelected ? 'text-primary' : 'opacity-20'}
                      >
                        {item.label}
                      </Typography>
                    </div>

                    {/* Description - Using Typography body with state-based styling */}
                    <div className='lg:flex-1'>
                      <Typography
                        variant='body'
                        className={isSelected ? 'text-text' : 'opacity-20'}
                        as='p'
                      >
                        {item.description}
                      </Typography>
                    </div>
                  </div>

                  {/* Bottom line for last item */}
                  {index === items.length - 1 && (
                    <div
                      className={cn(
                        'absolute bottom-0 left-0 w-[1552px] h-px transition-colors duration-300',
                        isSelected ? 'bg-primary-dark/40' : 'bg-primary-dark/10'
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image - Absolutely positioned outside container */}
        <div className='hidden lg:block'>
          {/* Spacer to maintain layout - Exact Figma specs: 628.33px width, 447.43px height */}
          <div className='w-[628px] h-[447px]'></div>
        </div>
      </Container>

      {/* Absolutely positioned image that rotates - only changes on selection */}
      <div
        className='absolute top-20ß -right-20 w-[628px] h-[447px] pointer-events-none z-10'
        style={{
          transform: `rotate(${selectedItem?.imageRotation || 15}deg)`,
          transformOrigin: 'center center',
          transition: 'transform 500ms ease-in-out',
        }}
      >
        <div className='relative w-full h-full overflow-hidden'>
          <Image
            src={selectedItem?.imageSrc || '/images/service.jpg'}
            alt={`${selectedItem?.label} - Premium facility feature`}
            fill
            className='object-cover'
            style={{
              transform: 'scale(1.2)',
              transformOrigin: 'center center',
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default QualitySpecifications;
