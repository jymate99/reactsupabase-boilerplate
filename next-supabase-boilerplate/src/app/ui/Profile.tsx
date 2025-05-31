'use client'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import useUser from '@/app/hook/useUser'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/client'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'





export default function Profile() {

    const  {isFetching,data} = useUser();

    const queryClient = useQueryClient()

    const router = useRouter()

    const handleLogout = async () =>{
      const supabase = createClient()
      queryClient.clear()
      await supabase.auth.signOut()
      router.refresh()
      

    }

    if(isFetching){
      return <></>
    }

    return (
      <div>
        {!data?.id ?<Link href='/auth'>
          <Button variant={'outline'}>Sign In</Button>
        </Link>: <>
        {data.image_url? <Image src={data.image_url || ""} alt={data.display_name || ""} 
          width={50}
          height={50}
          className='rounded-full ring-2 cursor-pointer'
          onClick={handleLogout}
          title="Logout"
        />: <div className='h-[50px] w-[50px] flex items-center justify-center rounded-full ring-2 text-2xl cursor-pointer'>
          <h1>{data.email[0]}</h1>
          </div>}

        </>


        }
        
      </div>
  )
}
