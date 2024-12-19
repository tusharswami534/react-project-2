import React, { useState } from 'react'

const UseState = () => {
    const [ name , setName] = useState('Tushar')
    const toggleName = () => {
        setName((prevName) => (prevName === 'Tushar' ? 'Swami' : 'Tushar'));
      };
  return (
    <div>
      <p>{name}</p>
      <button onClick={toggleName}>Change Nmae</button>
    </div>
  )
}

export default UseState
