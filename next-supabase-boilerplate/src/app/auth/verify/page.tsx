'use client'
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"

export default function VerifyPage() {
    const [email, setEmail] = useState<string | null>(null)
    const supabase = createClient()

    useEffect(() => {
        // Get the email from the session if available
        const getEmail = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (session?.user?.email) {
                setEmail(session.user.email)
            }
        }
        getEmail()
    }, [])

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-slate-800 rounded-lg shadow-lg">
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <Mail className="w-12 h-12 text-blue-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Check your email</h2>
                    <p className="mt-4 text-gray-300">
                        We've sent a verification link to{' '}
                        <span className="font-semibold text-blue-400">{email || 'your email'}</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                        Click the link in the email to verify your account and start using our service.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-slate-700/50 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-300 mb-2">Didn't receive the email?</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>• Check your spam folder</li>
                            <li>• Make sure you entered the correct email address</li>
                            <li>• Wait a few minutes and try again</li>
                        </ul>
                    </div>

                    <div className="flex justify-center">
                        <Link 
                            href="/auth"
                            className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
                        >
                            Return to login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 