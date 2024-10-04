import React from 'react'
import Seo from './Seo'
import Marketing from './Marketing'
import { FaHandPointRight } from "react-icons/fa";
import Explore from './Explore'
import { useState } from "react";

const BlogHome = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submmit button');
    
    // Call backend API to send the confirmation email
    try {
      const response = await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json().then(data => {
        alert("Subscription successful! Please check your email for confirmation.")
        form.reset()
      });
      if (result.success) {
        setMessage('Subscription successful! Please check your email for confirmation.');
        alert("Subscription successful! Please check your email for confirmation.")
      } else {
        setMessage('Subscription failed! Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }}
  return (
    <>
      <div className='mx-24 mt-24'>
        <h1 className='text-6xl flex font-bold'>Smart marketing starts Here <span className='relative top-8 left-3 w-[100px]'><img src="https://www.webfx.com/wp-content/themes/fx/assets/img/blog/v3/main-page/masthead/orange-arrow.png" alt="" /></span></h1>
        <div className='flex mt-12'>
          <h3 className='text-xl pr-14'>Join over 200,000 marketing managers, and get the best digital marketing insights, strategies, and tips delivered straight to your inbox!</h3>
            <form action="" onSubmit={handleSubmit}>
          <div className='flex gap-4'>
            <input className='w-[350px] h-[80px] border-2 border-solid rounded-md px-4 py-2' type="email" value={email} onChange={handleEmailChange} name="email" id="email" placeholder='Enter your email' />
            <button type='submit' className='bg-blue-700 px-24 text-xl rounded-md text-white hover:bg-blue-900'>Subscribe</button>

          </div>
            </form>
        </div>

        <div>
          <h1 className=' flex gap-2 items-center text-3xl font-bold my-8'><FaHandPointRight className='text-blue-700'/> Learn how to grow your brand</h1>
          <div className='flex gap-8'>
            <a className=' hover:text-blue-900 hover:transform hover:scale-110 duration-300 ease-in-out flex flex-col items-start gap-2 w-[33%] h-[50%] justify-start' href="/blog-marketing">
              <img className='w-[300px] h-[180px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2019/10/052435_voice_search_statistics-1024x462.png" alt="" />
              <h1 className='font-bold text-blue-800'>MARKETING</h1>
              <h1 className='font-bold text-xl'>What Is Private Equity Due Diligence?</h1>
              <p>3 min read</p>
            </a>
            <a className='hover:text-blue-900 hover:transform hover:scale-110 duration-300 ease-in-out flex flex-col items-start gap-2 w-[33%] h-[50%] justify-start' href="#">
              <img className='w-[300px] h-[180px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2022/03/082407_why_is_metadata_important-1024x462.png" alt="" />
              <h1 className='font-bold text-blue-800'>MARKETING</h1>
              <h1 className='font-bold text-xl'>What Is Marketing Business Process Outsourcing (BPO)</h1>
              <p>3 min read</p>
            </a>
            <a className='hover:text-blue-900 hover:transform hover:scale-110 duration-300 ease-in-out flex flex-col items-start gap-2 w-[33%] h-[50%] justify-start' href="#">
              <img className='w-[300px] h-[180px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2021/06/012405_google_search_statistics-1024x462.png" alt="" />
              <h1 className='font-bold text-blue-800'>MARKETING</h1>
              <h1 className='font-bold text-xl'>What Is a CMO Dashboard, and Why Does It Matter? (Plus Metrics To Include in Yours)</h1>
              <p>3 min read</p>
            </a>
            <a className='hover:text-blue-900 hover:transform hover:scale-110 duration-300 ease-in-out flex flex-col items-start gap-2 w-[33%] h-[50%] justify-start' href="#">
              <img className='w-[300px] h-[180px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2022/09/052434_shopify_statistics-1024x462.png" alt="" />
              <h1 className='font-bold text-blue-800'>MARKETING</h1>
              <h1 className='font-bold text-xl'>30+ Shopify Statistics for Your Business to Know in 2024</h1>
              <p>3 min read</p>
            </a>
          </div>
        </div>

        <div className='my-16'>
          <h1 className='text-3xl font-bold my-8 flex gap-2 items-center'><FaHandPointRight className='text-blue-700'/> Learn how to grow website traffic</h1>
          <div className='flex gap-8'>
            <a className=' hover:text-blue-900 hover:transform hover:scale-110 duration-300 ease-in-out flex flex-col items-start gap-2 w-[33%] h-[50%] justify-start' href="/voice-search">
              <img className='w-[300px] h-[180px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2023/10/072427_hire_an_seo_company-1024x462.png" alt="" />
              <h1 className='font-bold text-blue-800'>SEO</h1>
              <h1 className='font-bold text-xl'>When to Hire an SEO Company: 6 Questions to Ask Before Hiring SEO Services</h1>
              <p>3 min read</p>
            </a>
            <a className='hover:text-blue-900 hover:transform hover:scale-110 duration-300 ease-in-out flex flex-col items-start gap-2 w-[33%] h-[50%] justify-start' href="/blog-2">
              <img className='w-[300px] h-[180px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2022/03/082407_why_is_metadata_important-1024x462.png" alt="" />
              <h1 className='font-bold text-blue-800'>SEO</h1>
              <h1 className='font-bold text-xl'>30+ Voice Search Statistics That Prove You Need Voice Search Optimization</h1>
              <p>3 min read</p>
            </a>
            <a className='hover:text-blue-900 hover:transform hover:scale-110 duration-300 ease-in-out flex flex-col items-start gap-2 w-[33%] h-[50%] justify-start' href="/blog-3">
              <img className='w-[300px] h-[180px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2021/06/012405_google_search_statistics-1024x462.png" alt="" />
              <h1 className='font-bold text-blue-800'>SEO</h1>
              <h1 className='font-bold text-xl'>30+ Voice Search Statistics That Prove You Need Voice Search Optimization</h1>
              <p>3 min read</p>
            </a>
            <a className='hover:text-blue-900 hover:transform hover:scale-110 duration-300 ease-in-out flex flex-col items-start gap-2 w-[33%] h-[50%] justify-start' href="/blog-4">
              <img className='w-[300px] h-[180px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2024/01/012403_keyword_research-1024x462.png" alt="" />
              <h1 className='font-bold text-blue-800'>SEO</h1>
              <h1 className='font-bold text-xl'>30+ Voice Search Statistics That Prove You Need Voice Search Optimization</h1>
              <p>3 min read</p>
            </a>
          </div>
        </div>
      </div>

      <Explore />
        <div className='flex mx-36 my-4 p-8 gap-4 bg-yellow-600 rounded-lg items-center'>
          <div className='w-[50%] flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>Don’t miss our Revenue Weekly emails!</h1>
            <h3 className='text-lg'>Join 200K smart marketers for the hottest marketing news and insights in your inbox. </h3>
          </div>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div className='flex gap-2'>
              <input className='w-[250px] h-[50px] border-2 border-solid rounded-md px-4 py-2' type="email" value={email} onChange={handleEmailChange} name="email" id="email" placeholder='Enter your email' />
              <button type='submit' className='bg-blue-700 px-12 py-2 text-xl rounded-md text-white hover:bg-blue-900'>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default BlogHome
