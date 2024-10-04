import React from 'react'
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";

const BlogMark = () => {
  return (
    <>
    <div className='flex justify-center'>
      <img className='w-[60%]' src="https://www.webfx.com/wp-content/uploads/2023/10/072427_hire_an_seo_company-1024x462.png" alt="" />
    </div>
    <div className='flex gap-16 mt-16 mx-16'>
        <div className='w-[15%] flex justify-start flex-col gap-4 border-r-4 border-t-4'>
            <h1 className='font-bold border-r-4'>Table of Contents</h1>
            <h3>Why Hire an SEO Company?</h3>
            <h3>Benifits of Hiring an SEO Company</h3>
            <h3>6 Essential Question to Ask when Hiring an SEO Company</h3>
        </div>
        <div className='w-[50%]'>
            <h1 className='text-5xl font-extrabold'>When to Hire an SEO Company: 6 Questions to Ask Before Hiring SEO Services</h1>

            <div className='mt-6 flex gap-6'>
                <h3 className='flex gap-2 items-center'><SlCalender/> Published: Sep 13, 2024</h3>
                <h3 className='flex gap-2 items-center'><IoMdTime/> 15min</h3>
            </div>

            <div className='mt-8 gap-6 flex flex-col'>
                <h2 className='text-xl'>Even though 75% of businesses invest in search engine optimization (SEO), many question whether they should consider hiring an SEO company.</h2>
                <h2 className='text-xl'>On this page, we’re exploring when and why you should hire an SEO company, the benefits of doing so, and what questions you should ask to ensure you find the best agency for your needs and goals.</h2>
            </div>
            <div className='mt-6'>
            <iframe width="717" height="403" src="https://www.youtube.com/embed/cThIDXQM7w0" title="What SEO Specialists Do for Businesses | WebFX Digital Marketing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='mt-8 flex flex-col gap-6'>
                <h1 className='text-4xl font-extrabold'>Why hire an SEO company?</h1>
                <p className='text-xl'>So, when should you hire an SEO company? It’s not always clear when you should consider partnering with an SEO agency to further your goals.</p>
                <h1 className='text-xl font-bold'>Here are a few reasons why you should hire SEO:</h1>
                <ul className='text-lg gap-2 flex flex-col'>
                    <li>You want to improve your SEO strategy and results</li>
                    <li>Your team is stretched thin or you don’t have an in-house SEO team</li>
                    <li>Your website isn’t driving traffic</li>
                    <li>Your site isn’t ranking in the search results</li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 mt-8'>
                <h1 className='text-3xl'>Benefits of hiring an SEO company</h1>
                <h3 className='text-lg'>When it comes to deciding whether you should hire an SEO agency, you'll want to understand the benifits of doing so.</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogMark
