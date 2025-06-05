"use client"

import React from 'react'
import Price from '../components/subscription/price'
import useUser from "@/app/hook/useUser";
import Post from './component/Post';

export default function page() {
	const { data: user, isLoading } = useUser();

    if (isLoading){
      return <></>
    }

  const isActive = !user?.subscription?.end_at? false : new Date(user.subscription.end_at) > new Date()



  return (
        <>
        <div>subscription Page</div>
        <div>
            {isActive ? <Post/> : <><h1 className='flex justify-center text-white font-bold mb-5 text-2xl'> Your subcription has ended, pleaes subscribe</h1>  <Price/></> } 
        </div>
       
        </>
    )
    
  }

