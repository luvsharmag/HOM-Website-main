import React from 'react'

const AboutFooter = () => {
  return (
    <div className='flex flex-col gap-4 items-center py-6 bg-violet-100'>
      <ul className='flex'>
        <li><a className='px-1 hover:text-violet-900' href="#">Privacy Policy</a></li>
        <li><a className='px-1 hover:text-violet-900' href="#">Terms Of Services</a></li>
        <li><a className='px-1 hover:text-violet-900' href="#">Contact Us</a></li>
        <li><a className='px-1 hover:text-violet-900' href="#">Refund Policy</a></li>
      </ul>

      <div>
        <h2> &copy; 2023 Growify Digital LLP | All Rights Reserved</h2>
      </div>
    </div>
  )
}

export default AboutFooter
