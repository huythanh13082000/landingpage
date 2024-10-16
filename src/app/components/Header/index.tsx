import Image from 'next/image'
import React from 'react'
import MoodLogo from '@/assets/moodLogo.png'

const Header = () => {
  return (
    <div className='h-[104px] box-border py-6 px-[105px] flex items-center justify-between  left-0 z-[999]'>
      <div className='relative text-white w-fit '>
        <Image src={MoodLogo} alt='MoodLogo' width={222} height={44} />
        <div className='absolute top-0 -right-[26%] w-[53px] h-[25px] items-center flex py-1 px-3 bg-[#FF3737] rounded-xl rounded-bl-none justify-center'>
          Beta
        </div>
      </div>
    </div>
  )
}

export default Header
