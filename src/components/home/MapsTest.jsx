import React from 'react'
import { ARROW_OF_OBJ, NESTED_MAP, SIMPLE_ARROW } from '../../utils/helper'

const MapsTest = () => {
  return (
    <>
    <p className='text-3xl font-bold text-center'>This is Simple arrow</p>
        {SIMPLE_ARROW.map((item, index) => (
            <p className='text-center' key={index}>{item}</p>
        ))}
            <p className='text-3xl font-bold text-center'>This is arrow of object</p>
        {ARROW_OF_OBJ.map((item, index) => (
            <p className='text-center' key={index}>{item.name}</p>
        ))}
       {NESTED_MAP.map((item, index) => (
            <div key={index}>
                <p className='text-center'>{item.id}</p>
            <p className='text-center' >{item.name}</p>
            {item.content.map((obj, index) => (
                <p key={index}>{obj.name}</p>
            ))}
            </div>
        ))}
    </>
  )
}

export default MapsTest
