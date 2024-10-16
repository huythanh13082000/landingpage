'use client'

import {motion} from 'framer-motion'
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

    const section = document.querySelector('#bluetoothIcon')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])
  return (
    <motion.div
      initial={{opacity: 1}}
      whileHover='hover'
      animate={!isInView ? {opacity: 1} : {opacity: 0}}
      transition={{duration: 0.5}}
      className='z-[100] fixed bottom-[59px] right-[59px] h-[100px] p-2.5 bg-white/5 rounded-full  border-white/10 backdrop-blur-[18px] justify-center items-center gap-2.5 inline-flex'
    >
      <motion.div
        className='relative flex justify-center items-center'
        whileHover='hover'
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
        {/* Signal Animation Layer 1 */}
        <motion.div
          className='absolute w-full h-full rounded-full bg-gray-500 opacity-20'
          variants={{
            hover: {
              scale: [1, 1.5, 1.7, 2],
              opacity: [0.2, 0.1, 0.05, 0],
              transition: {
                duration: 0.5,
                // repeat: Infinity,
                ease: 'easeOut',
              },
            },
          }}
        ></motion.div>

        {/* Signal Animation Layer 2 */}
        <motion.div
          className='absolute w-full h-full rounded-full bg-gray-500 opacity-10'
          variants={{
            hover: {
              scale: [1, 1.8, 2, 2.5],
              opacity: [0.15, 0.05, 0.025, 0],
              transition: {
                delay: 0.2,
                duration: 1,
                // repeat: Infinity,
                ease: 'easeOut',
              },
            },
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ButtonBlueTooth
