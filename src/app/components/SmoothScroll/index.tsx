/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import {useEffect, useRef} from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss'

const SmoothScroll: React.FC<{children: React.ReactNode}> = ({children}) => {
  const scrollRef = useRef<any>(null)

  useEffect(() => {
    let locoScroll: any

    if (scrollRef?.current) {
      locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.7,
      })

      locoScroll?.update()
    }

    return () => {
      if (locoScroll) locoScroll?.destroy()
    }
  }, [])

  return (
    <div
      data-scroll-container
      ref={scrollRef}
      className='relative overflow-hidden max-w-[1440px] m-auto'
    >
      {children}
    </div>
  )
}

export default SmoothScroll
