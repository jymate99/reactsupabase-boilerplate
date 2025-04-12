'use client'
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/utils/supabase/client"
import { KeyRound } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


export default function page() {
    const handleLoginWithAuth = (provider:'github' | 'google') =>{
        const supabase = createClient()
        supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`
            }
        })
    }




    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="w-96 rounded-md border p-5 space-y-5 bg-slate-900">
                <div className="flex items-center gap-2">
                    <KeyRound />
                    <h1 className=" text-2xl font-bold"> Next + Supabase </h1>
                </div>
                <p className="text-sm text-gray-300"> Register/SignIn Today 👇</p>
                
                <Button className="flex items-center gap-2 w-full" 
                        variant={'outline'}
                        onClick={()=>handleLoginWithAuth('github')}  >
                            <FaGithub /> Github</Button>
                <Button className="flex items-center gap-2 w-full" 
                        variant={'outline'}
                        onClick={()=>handleLoginWithAuth('google')}  >
                        <FcGoogle />Google</Button>
            </div>
            <div className="glowbox -z-10"></div>
        </div>
        
    
    )
}