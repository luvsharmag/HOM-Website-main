import React from 'react'

const Front4 = () => {
  return (
    <div className='flex flex-col h-[100%] w-[100vw]'>
      <div className='flex'>
        <div className='p-12 pl-8 w-[30%] flex flex-col gap-4'>
            <h4 className='text-2xl text-violet-800'>OUR OFFICE</h4>
            <h1 className='text-4xl'>We are always up for a chat!</h1>
        </div>
        <div className='p-12 pr-72 w-[70%] flex flex-col gap-4 bg-[#c7aee5]'>
            <h4 className='text-2xl'>CONNECT</h4>
            <p className='text-lg'>Our office, spanning a generous 7,500 sq. ft., is a state-of-the-art, modern workspace situated in the vibrant area of Chhattarpur, Delhi. Designed to foster creativity and collaboration.</p>
        </div>
      </div>

      <div>
        <img className='h-[60vh] w-full' src="https://growify.in/cdn/shop/files/about_us_office.jpg?v=1716295604&width=1800" alt="" />
      </div>
    </div>
  )
}

export default Front4
