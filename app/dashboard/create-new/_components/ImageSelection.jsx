'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ImageSelection = ({selectedImage}) => {
 
  const [file,setFile]=useState( );

  const onFileSelected=(event)=>{
    console.log(event.target.files[0])
    setFile(event.target.files[0])
    selectedImage(event.target.files[0])
  }
  return (
    <div>
      <label className='font-bold'>
        Select Image of your Room
        <div>
          <label htmlFor='upload-image'>
            <div className={`p-28 border rounded-xl border-dotted flex justify-center border-green-500 bg-primary cursor-pointer hover:shadow-lg ${file&& 'p-0 bg-white'}`}>
            {!file? <Image src={'/imageupload.svg'} alt='image upload' height={40} width={40}  />
            : <Image src={URL.createObjectURL(file)} width={300} height={300} className='w-[300px] h-[300px] object-cover' alt="rendered image"/> 
            }
            </div>
          </label>
           <input type='file' accept='image/*' id='upload-image'  style={{display:'none'}} onChange={onFileSelected}/>
        </div>
      </label>
    </div>
  )
}

export default ImageSelection
