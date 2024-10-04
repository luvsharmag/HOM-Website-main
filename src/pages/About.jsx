import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HorizontalScroll from '../components/HorizontalScroll'
import Social from '../components/Social'
import AboutFooter from '../components/AboutFooter'
import { FaWhatsappSquare } from "react-icons/fa";

const About = () => {
  const phoneNumber = "7891250008"
  const message = "Hello! I'm interested in your services."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    
    <div>
      <Navbar />
      <a className="text-6xl text-green-600 hover:text-green-800 fixed bottom-12 right-12 z-50" href={whatsappUrl} target='_blank' rel="noopener noreferrer"><FaWhatsappSquare/></a>

      <div className='h-[550px] text-white flex justify-center items-center bg-[url("https://growify.in/cdn/shop/files/about_us_hero.jpg?v=1716293561&width=1800")]'>
        <h1 className="text-6xl">We grow when you grow</h1>
      </div>
      
      <HorizontalScroll/>

      <Social/>
      <AboutFooter/>
      <Footer mode='light' next='Our Work' />
    </div>
  )
}

export default About
