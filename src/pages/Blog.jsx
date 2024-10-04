import { useState } from 'react'
import BlogNav from '../components/BlogNav'
// import { Outlet, RouterProvider } from 'react-router-dom'
// import router from '../routers/router'
import BlogHome from '../components/BlogHome'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


function Blog() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='mt-32'>
      <BlogNav/>
      <Outlet/>

    </div>
      {/* <BlogHome/> */}
    </>
  )
}

export default Blog
