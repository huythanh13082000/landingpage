'use client'

import bluetoothIcon from '@/assets/icons/bluetooth.svg'
import Image from 'next/image'
import {useEffect, useState} from 'react'

const ButtonBlueTooth = () => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {threshold: 0.5}
    )

    const section = document?.querySelector('#bluetoothIcon')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])
  return (
    <div
      style={isInView ? {display: 'none'} : {}}
      className='z-[100] fixed bottom-[59px] right-[59px] h-[100px] p-2.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-[18px] justify-center items-center gap-2.5 inline-flex'
    >
      <div className='w-20 h-20 bg-neutral-600/60 rounded-full border border-white/10 backdrop-blur-[9.60px] justify-center items-center gap-2.5 flex'>
        <div className='w-9 h-9 justify-center items-center flex'>
          <div className='w-9 h-9 relative'>
            <Image
              src={bluetoothIcon}
              alt=''
              width={36}
              height={36}
              className='max-w-[36px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonBlueTooth
