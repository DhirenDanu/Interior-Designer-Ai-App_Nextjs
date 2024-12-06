'use client'
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'

const CreateNew = () => {
  const [formData, setFormData]=useState([])
  const onHandleInputChange=(value,fieldName)=>{
   setFormData(prev=>({
    ...prev,[fieldName]:[value]
   }))
   console.log(formData)
  }
  return (
    <div>
       <h2 className='font-bold text-4xl text-green-500 text-center'>Experience The Magic Of Ai ReModeling</h2>
       <p className='text-center text-gray-500 text-lg'>Transform any Room with a click,. Select a space ,choose a style, and watch as ai instantly reimagines your environment</p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 '>
            {/* Image Selection */}
            <ImageSelection selectedImage={(value)=>onHandleInputChange(value,'image')}/>

            {/* Form Input Selection */}
            <div>
              {/* Room Type */}
               <RoomType selectedRoomType={(value)=>onHandleInputChange(value,'room')}/>

              {/* Design Type */}
               <DesignType selectedDesignType={(value)=>onHandleInputChange(value,'designType')}/>

              {/* Additional Requirements Text Area  */}
               <AdditionalReq additionalReq={(value)=>onHandleInputChange(value,'additionalReq')}/>

              {/* Button To generate Image */}
              <Button className='w-full font-bold mt-5 text-white bg-green-600'>Generate</Button>
               <p>Note: 1 Credit  will be deducted</p>
            </div>
        </div>
   
    </div>
  )
}

export default CreateNew
