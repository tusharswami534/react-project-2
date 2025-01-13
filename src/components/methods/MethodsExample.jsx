import React from 'react'

const MethodsExample = () => {
  const name = 'Radialcode'

  const changeArray = name => {
    const newArray = [...name]
    const reversedArray = []

    for (let i = newArray.length - 1; i >= 0; i--) {
      reversedArray.push(newArray[i])
    } 
    
    return reversedArray.join('')
  }

  const reverseName = changeArray(name)

  return (
    <div>
      <h2 className='text-xl'>{name}</h2>
      <h2 className='text-xl'>{reverseName}</h2>
    </div>
  )
}

export default MethodsExample