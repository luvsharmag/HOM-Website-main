import React from 'react'

const Front1 = () => {
  return (
    <div className='flex flex-col h-[100%] w-[100vw] gap-8 my-6'>
      <div className='flex gap-48 px-24'>
        <div className='w-[22%] flex flex-col gap-4'>
            <h4 className='text-2xl text-violet-800'>WHAT WE DO</h4>
            <h1 className='text-4xl'>We give brands a digital voice</h1>
        </div>
        <div className='w-[40%] flex flex-col gap-4'>
            <h4 className='text-2xl text-violet-800'>How?</h4>
            <p className='text-lg'>We are an e-commerce growth agency specialising in luxury and fashion space, offering end-to-end services including website development, advertising, marketing automation, social media management, and client support.</p>
        </div>
      </div>

      <div>
        <img className='h-[60vh] w-full' src="https://growify.in/cdn/shop/files/About_02.jpg?v=1716550563&width=1800" alt="" />
      </div>
    </div>
  )
}

export default Front1