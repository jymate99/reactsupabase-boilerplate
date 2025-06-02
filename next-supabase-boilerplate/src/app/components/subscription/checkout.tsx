"use client";

import useUser from "@/app/hook/useUser";
import { checkout } from '@/app/lib/actions/stripe'
import { cn } from "@/app/lib/utils";
import { Button } from '@/app/ui/button'
import { loadStripe } from '@stripe/stripe-js'
import { useRouter } from "next/navigation";


import React, { useState } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Checkout({ priceId }: { priceId: string }) {

  const { data: user } = useUser();
  const router = useRouter()
  const [loading,setLoading] = useState(false)

    const handleCheckout = async () =>{
      if (user) {
        setLoading(true)
        const data = JSON.parse( 
          await checkout(user.email,priceId,location.origin+'/success' )
        )
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!)
        const res = await stripe?.redirectToCheckout({sessionId:data.id})
        if (res?.error) {
            alert("fail to checkout")
        }
        setLoading(false)
      }
     
      else {
          router.push('/auth')
      }
    }

  return (
    <div>
        {/* <div>{props.priceID}</div> */}
        <Button className='w-full flex items-center text-white' onClick={handleCheckout} >Get Started! 
            <AiOutlineLoading3Quarters className={cn('animate-spin',loading?"block":'hidden')}>
            </AiOutlineLoading3Quarters>
          </Button>
        
    </div>
  )
}



// "use client";

// import React, { useState } from "react";
// import useUser from "@/app/hook/useUser";
// import { useRouter } from "next/navigation";
// import { loadStripe } from "@stripe/stripe-js";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { checkout } from "@/app/lib/actions/stripe";
// import { Button } from "@/app/ui/button";
// import { cn } from "@/app/lib/utils";


// export default function Checkout({ priceId }: { priceId: string }) {
// 	const { data: user } = useUser();
// 	const router = useRouter();
// 	const [loading, setLoading] = useState(false);

// 	const handleCheckout = async () => {
// 		if (user?.id) {
// 			setLoading(true);
// 			const data = JSON.parse(
// 				await checkout(
// 					user.email,
// 					priceId,
// 					location.origin + location.pathname
// 				)
// 			);
// 			const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);
// 			const res = await stripe?.redirectToCheckout({
// 				sessionId: data.id,
// 			});
// 			if (res?.error) {
// 				alert("Fail to checkout");
// 			}
// 			setLoading(false);
// 		} else {
// 			router.push("/auth?next=" + location.pathname);
// 		}
// 	};

// 	return (
// 		<Button
// 			className="w-full flex items-center gap-2 text-white"
// 			onClick={handleCheckout}
// 		>
// 			Getting Started{" "}
// 			<AiOutlineLoading3Quarters
// 				className={cn(" animate-spin", loading ? "block" : "hidden")}
// 			/>
// 		</Button>
// 	);
// }