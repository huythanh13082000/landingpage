'use client'

import React from 'react'
import battery from '@/assets/battery.png'
import Image from 'next/image'
import FadeInOutLoop from '../FadeInOutLoop'

const Section7 = () => {
  return (
    <div>
      <div className='h-[986px] relative bg-white'>
        <div className='w-[1877px] h-[1877px] left-[-454px] top-[-526px] absolute'>
          <FadeInOutLoop time={650}>
            <div className='w-[1877px] h-[1877px] left-0 top-0 absolute bg-[#d9d9d9]/10 rounded-full border border-[#888888]/10'></div>
          </FadeInOutLoop>
          <FadeInOutLoop time={600}>
            <div className='w-[1435px] h-[1435px] left-[221px] top-[221px] absolute bg-[#d9d9d9]/20 rounded-full border border-[#888888]/20' />
          </FadeInOutLoop>
          <FadeInOutLoop time={550}>
            <div className='w-[884px] h-[884px] left-[494px] top-[499px] absolute bg-[#d9d9d9]/30 rounded-full shadow-inner' />
          </FadeInOutLoop>
          <FadeInOutLoop time={500}>
            <div className='w-[494px] h-[494px] left-[689px] top-[694px] absolute bg-[#d9d9d9]/40 rounded-full shadow-inner' />
          </FadeInOutLoop>
        </div>
        <div className='left-[428px] top-[127px] absolute text-[#313131] text-[82px] font-black leading-[82px]'>
          Easier. Higher.
        </div>
        <div className='w-[119px] h-[375px] left-[425px] top-[714px] absolute bg-[#959595]/30 rounded-full blur-[50px]' />
        <div className='left-[624px] top-[363px] absolute flex-col justify-start items-start gap-6 inline-flex'>
          <div className='text-slate-900 text-[32px] font-semibold uppercase leading-9'>
            Controller
          </div>
          <div className='w-[694px]'>
            <span className='text-[#bdbdbd] text-2xl font-semibold leading-[38.40px]'>
              Our portable vapes are
            </span>
            <span className='text-[#212121] text-2xl font-semibold leading-[38.40px]'>
              award-winning, easy-to-use
            </span>
            <span className='text-[#bdbdbd] text-2xl font-semibold leading-[38.40px]'>
              , and perfected over a decade. <br />
              <br />
              Our portable vapes are
            </span>
            <span className='text-[#212121] text-2xl font-semibold leading-[38.40px]'>
              award-winning, easy-to-use,
            </span>
            <span className='text-[#bdbdbd] text-2xl font-semibold leading-[38.40px]'>
              and perfected over a decade. Our portable vapes are award-winning,
            </span>
            <span className='text-[#212121] text-2xl font-semibold leading-[38.40px]'>
              easy-to-use
            </span>
            <span className='text-[#bdbdbd] text-2xl font-semibold leading-[38.40px]'>
              , and perfected over a decade.
            </span>
          </div>
        </div>
        <Image
          className='w-[92.28px] h-[413.66px] left-[430.28px] top-[300px] absolute origin-top-left'
          src={battery}
          alt=''
        />
      </div>
    </div>
  )
}

export default Section7
