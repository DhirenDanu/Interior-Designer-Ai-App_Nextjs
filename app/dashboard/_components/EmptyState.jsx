import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const EmptyState = () => {
  return (
    <div className='flex items-center justify-center mt-10 flex-col space-y-3 '>
      <Image src={'/EmptyState.png'}  height={200} width={200} alt='emptystate'/>
      <h2 className='font-medium text-lg text-gray-400'>Create new Design for your Room</h2>
      <Button className='bg-slate-300 text-green-600 font-bold rounded-full'>+ Redesign Room</Button>
    </div>

  )
}

export default EmptyState
