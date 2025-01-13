import React from 'react'
import { motion, useScroll } from "motion/react"

const MotionJsEmample = () => {
    const { scrollYProgress } = useScroll()
  return (
    <>
    <div className='min-h-screen'></div>
    <motion.div className='w-full h-1 fixed top-0 origin-left bg-red-700' style={{scaleX :scrollYProgress ,  }}/>
    <div className='min-h-screen flex items-center justify-center'>
        {/* <motion.div className='w-10 h-10 opacity-0 bg-black' transition={{duration: 0.3}} initial={{scale: 0 , opacity: 0}} whileInView={{scale: 5 , y: -100 , rotate: 90 , duration: 1000 , opacity: 1}} whileTap={{scale: 10 , backgroundColor: 'blue'}} whileHover={{scale: 1.5}} animate={{rotate: 45 , duration: 1000 , delay: 5000 , scale: 2 , repeat: Infinity} } /> */}
        <motion.input type='text' id='input' whileFocus={{ duration: 1000 , delay: 5000  , repeat: Infinity , width: '100px', height: '100%' , opacity: 1}} className='border w-0 opacity-0 h-0 border-solid border-black'/>
        <label htmlFor="input">upload</label>
    </div>
    <div className='min-h-screen'></div>x
    </>
  )
}

export default MotionJsEmample
