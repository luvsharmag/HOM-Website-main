import React from 'react'

const Front3 = () => {
  return (
    <div className='flex flex-col h-[100%] w-[100vw]'>
      <div className='flex'>
        <div className='p-12 pl-8 w-[30%] flex flex-col gap-4 bg-violet-300'>
            <h4 className='text-2xl text-violet-800'>WHO DO WE WORK WITH</h4>
            <h1 className='text-4xl'>Our Tech Partners</h1>
        </div>
        <div className='p-12 pr-72 w-[70%] flex flex-col gap-4 bg-[#3f304d]'>
            <h4 className='text-2xl text-violet-800'>CONCEPT</h4>
            <p className='text-md text-white'>We work with top-tier technologies and partner with industry-leading providers such as Meta (Managed Agency), Google, Shopify Plus, Razorpay, Klaviyo, Interakt, Shiprocket, PayU, GoKwik, and Simpl.</p>
        </div>
      </div>

      <div>
        <img className='h-[60vh] w-full' src="https://growify.in/cdn/shop/files/about_us_tech_partners.jpg?v=1716448106&width=1800" alt="" />
      </div>
    </div>
  )
}

export default Front3
Front3