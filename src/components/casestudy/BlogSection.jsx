import React from 'react'
import BlogsCard from './BlogsCard'

const BlogSection = () => {
  return (
    <div>
        <div className='flex items-center my-8 bg-blue-100 p-5 justify-around'>
            <img className='w-[250px]' src="https://goodcreator.co/icons/newsletter.svg" alt="" />
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl'>Never Miss a Beat..!</h1>
                <h3 className='text-xl'>Get the next blog post from Our Team in your inbox</h3>
                <button className='bg-blue-700 px-12 py-2 rounded-md font-semibold text-lg'>Join Us</button>
            </div>
        </div>
        <BlogsCard/>
    </div>
  )
}

export default BlogSection