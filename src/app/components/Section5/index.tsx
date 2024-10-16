'use client'

import deviceImage3 from '@/assets/deviceImage3.png'
import bluetoothIcon from '@/assets/icons/bluetooth.svg'
import moodiImage3 from '@/assets/moodiImage3.png'
import {motion} from 'framer-motion'
import Image from 'next/image'

const Section5 = () => {
  return (
    <div className='w-[1440px] h-[1160px] px-[89px] pt-[60px] pb-[100px] flex-col justify-start items-center gap-[100px] inline-flex'>
      <div className='w-[1261px] h-[832px] relative rounded-[104px]'>
        <div className='w-[750px] left-[251px] top-[20px] absolute text-center'>
          <span className='text-[#bdbdbd] text-2xl font-semibold leading-[28.80px]'>
            The very picture of
          </span>&nbsp;
          <span className='text-[#212121] text-2xl font-semibold leading-[28.80px]'>
            health
          </span>
          <span className='text-[#bdbdbd] text-2xl font-semibold leading-[28.80px]'>
            . Moodi the
          </span>&nbsp;
          <span className='text-[#212121] text-2xl font-semibold leading-[28.80px]'>
            Health
          </span>&nbsp;
          <span className='text-[#bdbdbd] text-2xl font-semibold leading-[28.80px]'>
            app on Mood to give you important insights on your sleep, activity,
            heart rate, menstrual cycle, and
          </span>&nbsp;
          <span className='text-[#212121] text-2xl font-semibold leading-[28.80px]'>
            mental health
          </span>
          <span className='text-[#bdbdbd] text-2xl font-semibold leading-[28.80px]'>
            .
          </span>
        </div>
        <Image
          className='w-[78px] left-[309.50px] top-[261px] absolute origin-top-left'
          src={moodiImage3}
          alt='moodiImage3'
        />
        <div className='w-[471px] left-[504px] top-[190px] absolute'>
          <Image
            className='w-[471px] left-[26px] top-[22px] absolute '
            src={deviceImage3}
            alt='deviceImage3'
          />
        </div>
        <div className='w-[856px] h-[89px] left-[255px] top-[802px] absolute bg-white rounded-full blur-[39.10px]' />
      </div>

      <div
        // style={{boxShadow: '#0c4848 0px 22px 70px 4px'}}
        className='px-6 py-4 bg-[#0c4848] rounded-full border border-white/50 backdrop-blur-[24.60px] justify-center items-center gap-2.5 inline-flex '
      >
        <div className='w-9 h-9 justify-center items-center flex'>
          <motion.div id='bluetoothIcon' className='w-9 h-9 relative'>
            <Image
              src={bluetoothIcon}
              alt='bluetoothIcon'
              width={36}
              height={36}
              className='max-w-[36px]'
            />
          </motion.div>
        </div>
        <div className='text-white text-2xl font-bold leading-normal'>
          Connect bluetooth
        </div>
      </div>
    </div>
  )
}

export default Section5
