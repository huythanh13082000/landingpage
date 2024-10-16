'use client'

import moodiImage from '@/assets/moodiImage.png'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import GlowingText from '../GlowingText'
import Header from '../Header'

const HeroSection = () => {
  const [isInView, setIsInView] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsInView(false)
      } else {
        setIsInView(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <motion.div
      id='section'
      className='w-[1440px] h-[901px] relative bg-black'
      initial={{opacity: 1, scale: 1}}
      animate={!isInView ? {opacity: 1, scale: 0.8, borderRadius: 104} : {}}
      transition={{duration: 0.5}}
    >
      <Header />
      <div className='w-[1226.97px] h-[387px] left-[101px] top-[127px] absolute'>
        <GlowingText />
      </div>
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay: 1.25,
          duration: 1,
          ease: 'easeInOut',
        }}
        className='w-[957.55px] h-[82px] left-[241px] top-[375px] z-10 absolute'
      >
        <Image
          className='w-[957.55px] h-[82px] left-0 top-0 absolute'
          src={moodiImage}
          alt=''
        />
      </motion.div>
      <motion.div className='w-[750px] left-[345px] top-[558px] absolute text-center text-[#bdbdbd] text-2xl leading-[28.80px]'>
        The very picture of health. Moodi the Health app on Mood to give you
        important insights on your sleep, activity, heart rate, menstrual cycle,
        and mental health.
      </motion.div>
    </motion.div>
  )
}

export default HeroSection
