'use client'
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react'
import EmptyState from './EmptyState';
import Link from 'next/link';

const Listing = () => {
    const {user}=useUser();
    const [userRoomList,setUserRoomList]=useState([]);
  return (
    <div>
        <div className='flex items-center justify-between'>
        <h2 className='font-bold text-2xl'>Hello,{user?.fullName}</h2>

        <Link href={'/dashboard/create-new'}>
        <Button className='text-green-600 font-bold bg-slate-300 rounded-full'>+ Redesign Room</Button>
        </Link>

        </div>
     {/* EmptyState */}
     {userRoomList?.length==0?
     <EmptyState/>
     :

     <div>

     </div>
     }
    </div>
  )
}

export default Listing
