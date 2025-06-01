import { Button } from '@/app/ui/button';
import { CheckCircle2 } from 'lucide-react';
import React from 'react'

export default function price() {
    const prices = [
		{
			title: "Hobby",
			description: "Start your next side project",
			benefits: [
				"Improved productivity",
				"Enhanced performance",
				"Cost savings",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 10,
			
		},
		{
			title: "Pro",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
			benefits: [
				"Improved productivity",
				"Enhanced performance",
				"Cost savings",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 20,
			
		},
		{
			title: "Enterpise",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
			benefits: [
				"Improved productivity",
				"Enhanced performance",
				"Cost savings",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 100,
			
		},
	];
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            {prices.map((price,index) =>{
            return  <div key={index} className='border rounded-md p-5 space-y-5'>
                        <div className='space-y-3'>
                            <h1 className=' text-2xl font-bold'>{price.title} </h1>
                            <h1 className=' text-3xl font-bold'>${price.amount}</h1>
                            <p className=' text-sm text-gray-400'>{price.description}</p>
                        </div>
                        <div className='space-y-2'>
                            {price.benefits.map((benefit,index) => {
                                return ( <div key={index} className='flex items-center gap-2'>
                                            <CheckCircle2  />
                                            <h1 className=' text-gray-400'>{benefit}</h1>
                                        </div>

                                )
                            }
                            )}
                        </div>
                        <Button className='w-full text-white'>Get Started</Button>
                    </div>
            })}
        </div>
    </div>
  )
}
