import React from 'react'

const ExponentialInput = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-3 bg-blue-500 py-10'>
       <form className='flex flex-col gap-5' action="">
       <input className='py-2 w-52 rounded-lg outline-none  px-3' placeholder='Enter Your Number' type="number" />
       <input className='py-2 w-52 rounded-lg outline-none  px-3' placeholder='Enter Your Number' type="number" />
        </form>
    </div>
  )
}

export default ExponentialInput
