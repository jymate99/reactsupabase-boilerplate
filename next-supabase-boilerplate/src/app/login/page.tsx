import { Button } from "@/app/ui/button";
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function login() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
      
  if (error || !data?.user) {
    redirect('/auth')
  } else  redirect('/dashboard')
  ;
}
