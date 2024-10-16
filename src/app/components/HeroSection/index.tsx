'use client'

import moodiImage from '@/assets/moodiImage.png'
import moodiText from '@/assets/moodiText.png'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import Header from '../Header'

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {threshold: 0.6}
    )

    const section = document?.querySelector('#section')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])
  return (
    <motion.div
      id='section'
      className='w-[1440px] h-[901px] relative bg-black'
      initial={{opacity: 1, scale: 1}}
      animate={
        !isInView
          ? {opacity: 1, scale: 0.8, borderRadius: 104}
          : {opacity: 1, scale: 1}
      }
      transition={{duration: 0.5}}
    >
      <Header />
      <div className='w-[1226.97px] h-[387px] left-[101px] top-[127px] absolute'>
        <Image
          src={moodiText}
          alt='Mood Logo'
          className='relative z-10 w-[1226px] h-auto'
          width={1226}
          height={387}
        />
      </div>
      <div className='w-[957.55px] h-[82px] left-[241px] top-[390px] z-10 absolute'>
        <Image
          className='w-[957.55px] h-[82px] left-0 top-0 absolute'
          src={moodiImage}
          alt=''
        />
      </div>
      <div className='w-[750px] left-[345px] top-[558px] absolute text-center text-[#bdbdbd] text-2xl leading-[28.80px]'>
        The very picture of health. Moodi the Health app on Mood to give you
        important insights on your sleep, activity, heart rate, menstrual cycle,
        and mental health.
      </div>
    </motion.div>
  )
}

export default HeroSection
