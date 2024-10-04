import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Explore = () => {
    return (
        <div className='px-24 pt-16 flex flex-col items-center hover:bg-gray-200 transition duration-300'>
            <h1 className='text-3xl font-bold'>Explore More Topics</h1>
            <div className='my-16'>
                <ul className='grid grid-cols-3 gap-16'>
                    <li>
                        <a className='flex gap-8 hover:transform hover:scale-110 duration-300 ease-in-out hover:shadow-[0px_0px_30px] rounded-lg p-2' href="/blogs/marketing">
                            <div className='bg-gray-400 p-5 rounded-full'>
                                <img className='w-56' src="https://www.webfx.com/wp-content/themes/fx/assets/img/blog/v3/main-page/categories/marketing-icon.png" alt="" />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold flex items-center gap-2 text-blue-700'>Marketing <FaArrowRight/> </h1>
                                <p className='text-xl'>Enhance your online presence with these marketing strategies.</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className='flex gap-8 hover:transform hover:scale-110 duration-300 ease-in-out hover:shadow-[0px_0px_30px] rounded-lg p-1' href="/blogs/seo">
                            <div className='bg-gray-400 p-5 rounded-full'>
                                <img className='w-48' src="https://www.webfx.com/wp-content/themes/fx/assets/img/blog/v3/main-page/categories/seo-icon.png" alt="" />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold flex items-center gap-2 text-blue-700'>SEO <FaArrowRight/> </h1>
                                <p className='text-xl'>Improve your websites ranking with these simple SEO techniques.</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className='flex gap-8 p-2 hover:transform hover:scale-110 duration-300 ease-in-out hover:shadow-[0px_0px_30px] rounded-lg' href="/blogs/ppc">
                            <div className='bg-gray-400 p-5 rounded-full'>
                                <img className='w-48' src="https://www.webfx.com/wp-content/themes/fx/assets/img/blog/v3/main-page/categories/ppc-icon.png" alt="" />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold flex items-center gap-2 text-blue-700'>PPC <FaArrowRight/> </h1>
                                <p className='text-xl'>Level up your PPC skills and dominate the online market.</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className='flex hover:transform hover:scale-110 duration-300 ease-in-out hover:shadow-[0px_0px_30px] rounded-lg gap-8 p-1' href="/blogs/social-media">
                            <div className='bg-gray-400 p-4 rounded-full'>
                                <img className='w-48' src="https://www.webfx.com/wp-content/themes/fx/assets/img/blog/v3/main-page/categories/social-media-icon.png" alt="" />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold flex items-center gap-2 text-blue-700'>Social Media <FaArrowRight/> </h1>
                                <p className='text-xl'>Boost your engagement game with our Social Media tips.</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className='flex gap-8 p-2 hover:transform hover:scale-110 duration-300 ease-in-out hover:shadow-[0px_0px_30px] rounded-lg' href="/blogs/web-design">
                            <div className='bg-gray-400 p-5 rounded-full'>
                                <img className='w-48' src="https://www.webfx.com/wp-content/themes/fx/assets/img/blog/v3/main-page/categories/web-design-icon.png" alt="" />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold flex items-center gap-2 text-blue-700'>Web Design <FaArrowRight/> </h1>
                                <p className='text-xl'>Develop outstanding websites with these free resources.</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className='flex gap-8 p-1 hover:transform hover:scale-110 duration-300 ease-in-out hover:shadow-[0px_0px_30px] rounded-lg' href="/blogs/internet">
                            <div className='bg-gray-400 p-5 rounded-full'>
                                <img className='w-48' src="https://www.webfx.com/wp-content/themes/fx/assets/img/blog/v3/main-page/categories/internet-icon.png" alt="" />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold flex items-center gap-2 text-blue-700'>Internet <FaArrowRight/> </h1>
                                <p className='text-xl'>Discover helpful insights to unleash the potential of the internet.</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Explore
Explore