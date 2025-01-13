import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

const ScrollRevealTest = () => {
  useEffect(() => {
    ScrollReveal().reveal('.heading', {
      duration: 300,
      reset: true,
      rotate: { x: 50, y: 50, z: 50 },
      once: true,
      easing: 'ease-in-out',
      origin: 'center',
      distance: '100px',
      scale: 0.8,
    });

  ScrollReveal().reveal('.box', {
    duration: 300,
    reset: true,
    rotate: { x: 50, y: 50, z: 50 },
    once: true,
    easing: 'ease-in-out',
    origin: 'center',
    distance: '100px',
    scale: 0.8,
    interval: 100
  });
  })
  return (
    <div className='px-5 py-10'>
      <div className='min-h-screen flex items-center justify-center'></div>
      <div className='min-h-screen flex justify-center items-center'><h1 className='heading text-4xl text-black'>Hello world</h1></div>
      <div className='flex flex-wrap gap-2 justify-center'>
          <div className='size-96 box bg-black rounded-xl'></div>
          <div className='size-96 box bg-red-300 rounded-xl'></div>
          <div className='size-96 box bg-red-900 rounded-xl'></div>
          <div className='size-96 box bg-blue-300 rounded-xl'></div>
          <div className='size-96 box bg-blue-900 rounded-xl'></div>
          <div className='size-96 box bg-yellow-300 rounded-xl'></div>
          <div className='size-96 box bg-yellow-900 rounded-xl'></div>
          <div className='size-96 box bg-yellow-500 rounded-xl'></div>
          <div className='size-96 box bg-white border border-black rounded-xl'></div>
      </div>
    </div>
  )
}

export default ScrollRevealTest
