"use client"
import { createClient } from '@/utils/supabase/client'
import { useQuery } from '@tanstack/react-query'


export default function useUser() {
    const InitUser= {
        created_at: '',
        display_name: "",
        email: "",
        id: "",
        image_url: "",
    } 



  return (
    useQuery({
        queryKey:["user"],
        queryFn: async ()=>{
            const supabase = createClient()
            const {data} = await supabase.auth.getSession()
            if(data.session?.user){
                //fetch user information
                const {data:user} = await supabase.from("profile").select('*').eq("id",data.session.user.id).single();
                return user
                
            } else {InitUser}
        }
    })
  )
}
