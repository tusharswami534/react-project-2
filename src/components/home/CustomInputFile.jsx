import React, { useState } from 'react'

const CustomInputFile = () => {
    const [image , setImage] = useState(null)
    const handleFileChange = (e) => {
       const file = e.target.files[0];
       setImage(URL.createObjectURL(file));
       
    }
  return (
    <div className='p-5'>
        <input accept='image/*' onChange={handleFileChange} hidden type="file" id='my-file' />
        <label className='px-3 py-2 cursor-pointer bg-black text-white rounded-md' htmlFor="my-file">
            upload
        </label>
       {image && <img src={image} alt="images" />}
    </div>
  )
}

export default CustomInputFile
