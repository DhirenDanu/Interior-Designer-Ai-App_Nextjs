'use client'
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const Header = () => {
    const {userDetail,setUserDetail}=useContext(UserDetailContext)
  return (
    <div className=' p-5 shadow-sm flex justify-between items-center'>
          <div className='flex gap-2 items-center '>
          <Image src={'/logo.svg'} height={50} width={50} alt="logo"/>
          <h1 className='font-bold text-2xl'> Ai Interior Designer</h1>
          </div>
          <Button variant="ghost" className='text-green-600 font-bold text-lg'>Buy More Credits</Button>
          <div className='flex gap-7 items-center'>
            <div className=' flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full'>
                <Image src={'/star.svg'} height={20} width={20} alt="star"/>
                <h3>{userDetail?.credits}3</h3>
            </div>
            <UserButton/>
          </div>
    </div>
  )
}

export default Header
