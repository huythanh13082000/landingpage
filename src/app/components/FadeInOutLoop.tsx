// components/FadeInOutLoop.tsx
'use client'
import {motion} from 'framer-motion'
import {useState, useEffect, ReactNode} from 'react'

const FadeInOutLoop = ({
  children,
  time,
}: {
  children: ReactNode
  time: number
}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev) // Thay đổi trạng thái từ hiện sang ẩn và ngược lại
    }, time) // 2 giây cho mỗi vòng lặp (1 giây hiện, 1 giây ẩn)

    return () => clearInterval(interval) // Xóa bỏ interval khi component bị unmount
  }, [time])

  return (
    <motion.div
      initial={{opacity: 0}} // Bắt đầu ẩn
      animate={{opacity: isVisible ? 1 : 0}} // Điều khiển opacity theo `isVisible`
      transition={{duration: 1}} // Thời gian chuyển đổi giữa các trạng thái là 1 giây
    >
      {children}
    </motion.div>
  )
}

export default FadeInOutLoop
