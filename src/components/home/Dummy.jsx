import React from 'react'

const Dummy = () => {
    
    const handelClick = () => {
        console.log('clicked')
    }
    
  return (
    <div>
        <button onClick={handelClick()}></button>
    </div>
  )
}

export default Dummy
