import React from "react";
import Social from "./Social";
import HorizontalScroll from "./HorizontalScroll";


const Home = () => {
  return (
    <>
      
      <div className='h-[550px] text-white flex justify-center items-center bg-[url("https://growify.in/cdn/shop/files/about_us_hero.jpg?v=1716293561&width=1800")]'>
        <h1 className="text-6xl">We grow when you grow</h1>
      </div>
      
      <HorizontalScroll/>

      <Social/>
    </>
  );
};

export default Home;
