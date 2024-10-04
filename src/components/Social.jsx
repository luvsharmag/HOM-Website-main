import React from 'react'

const Social = () => {
  return (
    <div className='h-[65vh] flex flex-col items-center justify-center bg-violet-100'>
      <div className='flex gap-6'>
        <a target='_blank' className='px-16 py-[12px] bg-[#3F304D] text-white text-lg rounded-[35px] hover:bg-violet-500 transition duration-300 ease-in-out' href="https://www.instagram.com/growifydigital/">Instagram</a>
        <a target='_blank' className='px-16 py-[12px] bg-[#3F304D] text-white text-lg rounded-[35px] hover:bg-violet-500 transition duration-300 ease-in-out' href="#">Linkdin</a>
        <a target='_blank' className='px-16 py-[12px] bg-[#3F304D] text-white text-lg rounded-[35px] hover:bg-violet-500 transition duration-300 ease-in-out' href="mailto:someone@example.com">Email</a>
      </div>
      <div>
        <h1 className='text-[10rem] font-semibold text-[#3F304D]'>Growify Digital</h1>
      </div>
    </div>
  )
}

export default Social
