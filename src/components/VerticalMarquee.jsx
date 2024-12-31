import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function VerticalMarquee({ children, speed = 20, className = '' }) {
  const [height, setHeight] = useState(0)
  const containerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight)
    }
  }, [])

  return (
    <div 
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={containerRef}
    >
      <motion.div
        animate={{
          y: [-height, 0],
        }}
        transition={{
          duration: height / speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {children}
      </motion.div>
      <motion.div
        animate={{
          y: [0, height],
        }}
        transition={{
          duration: height / speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
          position: 'absolute',
          top: -height,
          left: 0,
          right: 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

