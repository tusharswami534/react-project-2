import React, { useEffect } from 'react';
import mojs from '@mojs/core';

const MoJsExample = () => {
  useEffect(() => {
    const burst = new mojs.Burst({
      radius: { 0: 100 }, 
      count: 10,         
      children: {
        shape: 'circle',
        radius: { 10: 0 },
        duration: 2000,   
        easing: 'cubic.out', 
      },
    },);

    burst.play();
  }, );

  return (
    <div className='py-10'>
      <h1 className='text-3xl font-bold text-center'>mo.js with React</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => new mojs.Shape({
        shape: 'circle',
        fill: { '#FF9C00': '#FC46AD' },
        radius: { 0: 80 },
        duration: 2000,
        easing: 'elastic.out',
        yoyo: true,
        repeat: 1,
      }).play()}>
        Trigger Animation
      </button>
    </div>
  );
};

export default MoJsExample;
