'use client'

import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect } from 'react'

export function Provider  ({children})  {
   const{user}=useUser();
    useEffect(()=>{
        user&&verifyUser()
    },[user])

const verifyUser=async()=>{
 const dataResult=await axios.post('/api/verify-user',{user:user})
 console.log(dataResult.data);
}

    return (
    <div>
      {children}
    </div>
  )
}


