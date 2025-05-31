'use client'
import { Button } from "@/app/ui/button";
import { createClient } from "@/utils/supabase/client"
import { KeyRound } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { login, signup } from '../login/actions'
import Link from "next/link";

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
                <form className="space-y-4 w-full">
                    <div className="space-y-2">
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                required 
                                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                required 
                                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <button 
                            formAction={login}
                            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                        >
                            Log in
                        </button>
                        <Link 
                            href="/signup"
                            className="flex-1 px-4 py-2 text-center bg-slate-700 text-white rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                        >
                            Sign up
                        </Link>
                    </div>
                </form>
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