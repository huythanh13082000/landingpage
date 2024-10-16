import Image from 'next/image'
import React from 'react'
import earthIcon from '@/assets/icons/earth.svg'
import flowerIcon from '@/assets/icons/flower.svg'
import medicalIcon from '@/assets/icons/medical.svg'

const Section4 = () => {
  return (
    <div className='w-[1440px] h-[698px] px-[110px] py-[100px] flex-col justify-start items-center gap-28 inline-flex'>
      <div className='self-stretch opacity-80 text-center text-black text-[84px] font-black  leading-[100.80px]'>
        A huge leap in smart life.
      </div>
      <div className='self-stretch justify-start items-start gap-10 inline-flex'>
        <div className='flex-col justify-start items-center gap-[13px] inline-flex'>
          <Image alt='flowerIcon' src={flowerIcon} width={40} height={40} />
          <div className='text-black text-2xl font-black  leading-[28.80px]'>
            Bluetooth Connectivity
          </div>
          <div className='w-[380px] text-center text-black text-2xl font-medium  leading-[38.40px]'>
            It connects to the ModuSMART app via Bluetooth, enabling users to
            control the device setti|ngs from their phone.
          </div>
        </div>
        <div className='flex-col justify-start items-center gap-[13px] inline-flex'>
          <Image alt='earthIcon' src={earthIcon} width={40} height={40} />
          <div className='text-black text-2xl font-black  leading-[28.80px]'>
            Smart Chip Integration
          </div>
          <div className='w-[380px] text-center text-black text-2xl font-medium  leading-[38.40px]'>
            The battery is equipped with smart chip technology, which allows for
            adjustments in temperature, combustion time, and smoke volume
            through a mobile app.
          </div>
        </div>
        <div className='flex-col justify-start items-center gap-[13px] inline-flex'>
          <Image alt='medicalIcon' src={medicalIcon} width={40} height={40} />
          <div className='text-black text-2xl font-black  leading-[28.80px]'>
            Long-Lasting
          </div>
          <div className='w-[380px] text-center text-black text-2xl font-medium  leading-[38.40px]'>
            The battery ensures extended usage, contributing to the overall
            durability and efficiency of the device​.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
