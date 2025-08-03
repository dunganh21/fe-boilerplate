'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Container } from '@/components/layout/container';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-footer text-text-light', className)}>
      <Container>
        {/* Upper Section - 3 Column Flex Layout */}
        <div className='flex flex-col lg:flex-row gap-20 py-16 lg:py-[118px]'>
          {/* Left Column - Logo and Company Info */}
          <div className='flex-2'>
            <Image
              src='/images/footer-logo-23e90d.png'
              alt='Masterise Homes Logo'
              width={264}
              height={212}
              className='w-[200px] h-[160px] lg:w-[264px] lg:h-[212px] object-contain'
            />
          </div>

          {/* Middle Column - Address Information */}
          <div className='flex flex-col gap-6 lg:flex-1'>
            <div className='flex flex-col gap-4'>
              <span className='text-accent/60 text-[13px] font-normal leading-[18px] tracking-normal uppercase'>
                PROJECT ADDRESS
              </span>
              <p className='text-text-light/70 text-[15px] font-normal leading-[23px] tracking-normal'>
                259 Hanoi highway, District 2, HCMC, Vietnam
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <span className='text-accent/60 text-[13px] font-normal leading-[18px] tracking-normal uppercase'>
                SALE GALLERY ADDRESS
              </span>
              <p className='text-text-light/70 text-[15px] font-normal leading-[23px] tracking-normal'>
                Masteri An Phu residence, 179 Hanoi highway, Thao Dien ward,
                District 2, HCMC
              </p>
            </div>
          </div>

          {/* Right Column - Contact and Social */}
          <div className='flex flex-col gap-6 lg:flex-1'>
            <div className='flex flex-col gap-4'>
              <span className='text-accent/60 text-[13px] font-normal leading-[18px] tracking-normal uppercase'>
                HOTLINE
              </span>
              <p className='text-text-light/70 text-[15px] font-normal leading-[23px] tracking-normal'>
                +828 159 159
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <span className='text-accent/60 text-[13px] font-normal leading-[18px] tracking-normal uppercase'>
                EMAIL
              </span>
              <p className='text-text-light/70 text-[15px] font-normal leading-[23px] tracking-normal'>
                sales@masterisehomes.com
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <span className='text-accent/60 text-[13px] font-normal leading-[18px] tracking-normal uppercase'>
                SOCIAL
              </span>
              <div className='flex gap-4'>
                <Image
                  src='/icons/youtube.svg'
                  alt='YouTube'
                  width={29}
                  height={29}
                  className='w-[29px] h-[29px] opacity-70'
                />
                <Image
                  src='/icons/facebook.svg'
                  alt='Facebook'
                  width={28}
                  height={28}
                  className='w-[28px] h-[28px] opacity-70'
                />
                <Image
                  src='/icons/messenger.svg'
                  alt='Messenger'
                  width={27}
                  height={27}
                  className='w-[27px] h-[27px] opacity-70'
                />
                <Image
                  src='/icons/viber.svg'
                  alt='Viber'
                  width={27}
                  height={27}
                  className='w-[27px] h-[27px] opacity-70'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className='w-full h-[1px] bg-text-light/10' />

        {/* Lower Section - Legal and Copyright */}
        <div className='py-6 lg:py-[23px] max-w-screen-lg'>
          <div className='flex flex-col lg:flex-row gap-6 lg:gap-13 mb-6 lg:mb-[23px]'>
            <div className='flex-1'>
              <p className='text-text-light/35 text-[12px] font-normal leading-[18px] tracking-normal'>
                Website owned by: MASTERISE HOMES REAL ESTATE DEVELOPMENT
                COMPANY LIMITED.
              </p>
              <p className='text-text-light/35 text-[12px] font-normal leading-[18px] tracking-normal'>
                Enterprise Registration Certificate No. 0316001930 thirdly
                issued, on 23 April 2020 by the Business Registration Ho Chi
                Minh
              </p>
            </div>

            <p className='text-text-light/35 text-[12px] font-normal leading-[18px] tracking-normal flex-1'>
              Disclaimer: Whilst every care has been taken to ensure accuracy in
              the preparation of the information contained herein, no warranties
              whatsoever are given or legal representation provided in respect
              thereon. The developer reserves the right to modify information of
              the development or any part thereof as maybe approved or required
              by the relevant authorities.
            </p>
          </div>
        </div>

        <div className='w-full h-[1px] bg-text-light/10' />

        {/* Bottom Copyright Line */}
        <div className=' py-6 lg:py-[23px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0'>
          <span className='text-text-light/35 text-[12px] font-normal leading-[14px] tracking-normal'>
            ©2022 Masterise Group
          </span>
          <span className='text-text-light/35 text-[12px] font-normal leading-[14px] tracking-normal'>
            Designed by Beau Agency
          </span>
        </div>
      </Container>
    </footer>
  );
}
