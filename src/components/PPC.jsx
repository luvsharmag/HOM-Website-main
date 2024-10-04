import React from 'react'
import { FaHandPointRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PPC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className='ml-24 flex'>
    <div className='flex flex-col gap-8'>
      <h1 className='text-7xl font-extrabold'>PPC</h1>
      <p className='text-xl'>Learn how to level up your PPC strategy to increase clicks, relevant traffic, and conversions!</p>
      <div className='flex gap-4'>
        <input className='w-[350px] h-[80px] border-2 border-solid rounded-md px-4 py-2' type="email" name="email" id="email" placeholder='Enter your work email' />
        <button className='bg-blue-700 px-24 text-xl rounded-md text-white'>Subscribe</button>
      </div>
    </div>
    <div>
      <img  src="https://www.webfx.com/wp-content/uploads/2023/10/ppc-header1.png" alt="" />
    </div>
  </div>
  <div className='mx-24'>
        <h1 className='flex items-center gap-2 text-3xl font-bold'><FaHandPointRight className='text-blue-700' /> Featured Articles</h1>
        <div className='mt-6 flex gap-4 justify-center'>
          <div className='flex flex-col gap-8 bg-violet-400 w-[45%] rounded-xl'>
            <img className='h-[400px] rounded-xl' src="https://www.webfx.com/wp-content/uploads/2023/05/072425_marketing_agency_cost-1024x462.png" alt="" />
            <div className='p-8 flex flex-col gap-4'>
              <h1 className='font-extrabold text-3xl'>Marketing Agency Cost: How Much It Costs To Market Your Business in 2024</h1>
              <h3 className='text-lg'>Whether you are a small to medium-sized business (SMB) or a large enterprise, your marketing budget is a crucial part of earning revenue. If you want to get the most out of your marketing spend, you need to understand marketing agency costs.</h3>
              <h3 className='font-bold'>7 minute read</h3>
            </div>
          </div>
          <div className='flex flex-col gap-8 bg-violet-400 w-[45%] rounded-xl'>
            <img className='h-[400px] rounded-xl' src="https://www.webfx.com/wp-content/uploads/2023/05/072425_marketing_agency_cost-1024x462.png" alt="" />
            <div className='p-8 flex flex-col gap-4'>
              <h1 className='font-extrabold text-3xl'>Marketing Agency Cost: How Much It Costs To Market Your Business in 2024</h1>
              <h3 className='text-lg'>Whether you are a small to medium-sized business (SMB) or a large enterprise, your marketing budget is a crucial part of earning revenue. If you want to get the most out of your marketing spend, you need to understand marketing agency costs.</h3>
              <h3 className='font-bold'>7 minute read</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-40 mt-8 flex gap-8 items-center justify-center'>
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
      </div>

      <div className='w-[80%] mx-auto'>
      <Slider {...settings}>
      <div className='mt-8 bg-gray-300 p-4 rounded-lg'>
        <div className='mx-8 flex items-center justify-between'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-3xl font-extrabold flex gap-2 items-center'><FaHandPointRight/> Watch Now</h1>
            <h1 className='text-3xl'>The Cost Digital Marketing </h1>
            <h3>2 min watch</h3>
          </div>
          <div>
            <img className='w-[400px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2023/10/about-us-thumbnail1.png" alt="" />
          </div>
        </div>
      </div>
      <div className='mt-8 bg-gray-300 p-4 rounded-lg'>
        <div className='mx-8 flex items-center justify-between'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-3xl font-extrabold flex gap-2 items-center'><FaHandPointRight/> Watch Now</h1>
            <h1 className='text-3xl'>The Cost Digital Marketing </h1>
            <h3>2 min watch</h3>
          </div>
          <div>
            <img className='w-[400px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2023/10/about-us-thumbnail1.png" alt="" />
          </div>
        </div>
      </div>
      <div className='mt-8 bg-gray-300 p-4 rounded-lg'>
        <div className='mx-8 flex items-center justify-between'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-3xl font-extrabold flex gap-2 items-center'><FaHandPointRight/> Watch Now</h1>
            <h1 className='text-3xl'>The Cost Digital Marketing </h1>
            <h3>2 min watch</h3>
          </div>
          <div>
            <img className='w-[400px] rounded-lg' src="https://www.webfx.com/wp-content/uploads/2023/10/about-us-thumbnail1.png" alt="" />
          </div>
        </div>
      </div>
        </Slider>
        </div>
    </>
  )
}

export default PPC
PPC