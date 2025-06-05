import useUser from '@/app/hook/useUser'
import { createClient } from '@/utils/supabase/client'

import React, { useEffect, useState } from 'react'

export default function Post() {
    const {data : user} = useUser()
    const email = user?.email as string
    const [cust_email, setcust_email] = useState('');
    const [cust_end_date, setcust_end_date] = useState('');

    const getPost = async () => {
        const supabase = createClient()
        const {data} = await supabase.from('subscription').select('*').eq('email',email).single()
        console.log(data?.email)
        const email2 = data?.email as string
        setcust_email(email2)
        setcust_end_date(data?.end_at as string)

    }

    useEffect(()=>{ getPost(),[]})

  return (
    <>
    <div>This is protected data</div>

    <h1 className=''>this is POST page</h1>
    <div className='grid-row-2 border-2 m-4 text-black bg-gray-300 border-white w-fit rounded-3xl'>
    <div className='m-3 ck'> User email : {cust_email}</div>
    <div className='m-3'>subscription end date : {cust_end_date}</div>
    </div>

    </>
    
    
  )
}
