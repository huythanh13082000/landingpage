/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import bong1 from '@/assets/bong1.png'
import bong2 from '@/assets/bong2.png'
import bong3 from '@/assets/bong3.png'
import moddiImage2 from '@/assets/moddiImage2.png'
import {motion} from 'framer-motion'
import Image from 'next/image'
const generateRandomAnimation = (): any => {
  const y = [Math.random() * 50 - 25, Math.random() * 50 - 25] // Random Y movement
  const x = [Math.random() * 50 - 25, Math.random() * 50 - 25] // Random X movement
  const scale = [Math.random() * 0.4 + 0.8, Math.random() * 0.4 + 0.8] // Random scale
  return {
    y,
    x,
    scale,
    transition: {
      duration: Math.random() * 4 + 2, // Random duration between 2-6s
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  }
}

const Section2 = () => {
  const bubblePositions = [
    {top: '10%', left: '10%'}, // Position for bubble 1
    {top: '50%', left: '30%'}, // Position for bubble 2
    {top: '30%', left: '70%'}, // Position for bubble 3
  ]
  return (
    <div className='p-20'>
      <div className='relative max-w-[1150px] h-[858px]  rounded-[104px] bg-[#F8F8F8] m-auto'>
        <div className='w-[750px] left-[251px] top-[20px] absolute text-center mt-[75px]'>
          <span className='text-[#bdbdbd] text-2xl font-semibold leading-[28.80px]'>
            The very picture of
          </span>
          &nbsp;
          <span className='text-[#212121] text-2xl font-semibold leading-[28.80px]'>
            health
          </span>
          <span className='text-[#bdbdbd] text-2xl font-semibold leading-[28.80px]'>
            . Moodi the
          </span>
          &nbsp;
          <span className='text-[#212121] text-2xl font-semibold leading-[28.80px]'>
            Health
          </span>
          &nbsp;
          <span className='text-[#bdbdbd] text-2xl font-semibold leading-[28.80px]'>
            app on Mood to give you important insights on your sleep, activity,
            heart rate, menstrual cycle, and
          </span>
          &nbsp;
          <span className='text-[#212121] text-2xl font-semibold leading-[28.80px]'>
            mental health
          </span>
          <span className='text-[#bdbdbd] text-2xl font-semibold leading-[28.80px]'>
            .
          </span>
        </div>

        <Image
          src={moddiImage2}
          className='min-w-[1226px] h-[123px] absolute top-[50%] -left-8'
          width={1226}
          height={123}
          alt='moddiImage2'
        />

        <motion.div
          animate={generateRandomAnimation()} // Apply unique animation to each bubble
          initial={{
            top: bubblePositions[0].top,
            left: bubblePositions[0].left,
          }}
          className='w-[210px] h-[210px] absolute top-20 right-6'
        >
          <Image src={bong1} width={304} height={304} alt='' />
        </motion.div>
        <motion.div
          animate={generateRandomAnimation()} // Apply unique animation to each bubble
          initial={{
            top: bubblePositions[1].top,
            left: bubblePositions[1].left,
          }}
          className='w-[186px] h-[186px] absolute top-0 right-0'
        >
          <Image src={bong2} width={186} height={186} alt='' />
        </motion.div>
        <motion.div
          animate={generateRandomAnimation()} // Apply unique animation to each bubble
          initial={{
            top: bubblePositions[2].top,
            left: bubblePositions[2].left,
          }}
          className='w-[248px] h-[248px] absolute bottom-10 right-20'
        >
          <Image src={bong3} width={248} height={248} alt='' />{' '}
        </motion.div>
      </div>
    </div>
  )
}

export default Section2
