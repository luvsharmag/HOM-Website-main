import React from 'react'

const Front2 = () => {
  return (
    <div className='flex flex-col h-[100%] w-[100vw]'>
      <div className='flex gap-48'>
        <div className='p-12 ml-4 w-[30%] flex flex-col gap-4'>
            <h4 className='text-2xl text-violet-800'>WHO WE ARE</h4>
            <h1 className='text-4xl'>We are a team of growth hackers</h1>
        </div>
        <div className='p-12 w-[70%] flex flex-col gap-4 bg-violet-200'>
            <h4 className='text-2xl text-violet-800'>CONCEPT</h4>
            <p className='text-lg'>Our experts employ cutting-edge strategies and tools to provide comprehensive e-commerce solutions, driving success for over 100+ renowned brands providing extensive services.</p>
        </div>
      </div>

      <div>
        <img className='h-[60vh] w-full' src="https://growify.in/cdn/shop/files/about_us_growth_hackers.jpg?v=1716294443&width=1800" alt="" />
      </div>
    </div>
  )
}

export default Front2
