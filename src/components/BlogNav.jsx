import React from 'react'

const BlogNav = () => {
  return (
    <div>
        <ul className='flex my-16 bg-blue-100 ml-16 py-4 w-[55%] rounded-[50px] justify-center'>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="/blogs">Blog Home</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="/blogs/marketing">Marketing</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="/blogs/seo">SEO</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="/blogs/ppc">PPC</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="/blogs/social-media">Social Media</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="/blogs/web-design">Web Design</a></li>
            <li><a className='px-4 text-lg hover:text-blue-600 hover:font-semibold' href="/blogs/internet">Internet</a></li>
        </ul>
    </div>
  )
}

export default BlogNav
