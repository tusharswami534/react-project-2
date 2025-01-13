import React, { useState } from "react";

const Push = () => {
  const [myArray, setMyArray] = useState(['apple', 'banana', 'cherry'])
  const [inputValue, setInputValue] = useState('')
  const addValue = () => {
    if (inputValue) {
      const newArray = [...myArray]
      newArray.push(inputValue)
      setMyArray(newArray)
      setInputValue('')
    }
  }

  return (
    <div className='flex items-center justify-center flex-col'>
    <input
      className='border border-black py-4 px-5 rounded-xl'
      type='text'
      value={inputValue}
      onChange={e => setInputValue(e.target.value)} placeholder='Enter value'
    />
    <button
      onClick={addValue}
      className='px-4 py-4 bg-green-300 rounded-xl mt-8'
    >
      Add Value
    </button>
    <p className='text-2xl font-semibold pt-8'>
      Array: [{myArray.join(', ')}]
    </p>
  </div>
  );
};

export default Push;
