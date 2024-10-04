import React, {useState, useEffect ,useRef} from 'react'
import dummy from '../assets/videos/herosecond.mp4'
import { motion, useScroll, useTransform } from 'framer-motion'
const CTA = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const containerRef = useRef(null)
    const videoRef = useRef(null)
    const widthx=window.innerWidth/4-(window.innerWidth)/16
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
      })
      const scale = useTransform(scrollYProgress, [0.7, 0.9], [1, 2.2])
  const y = useTransform(scrollYProgress, [0.6, 0.9], [0, 550])
  const x = useTransform(scrollYProgress, [0.6, 0.8], [0, 280])
    useEffect(()=>{
      console.log(widthx)
        const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setIsExpanded(true)
              } else {
                setIsExpanded(false)
              }
            },
            {
              threshold: 0.5, // Trigger when 50% of the video is visible
              rootMargin: '-50% 0px -50% 0px' // Consider the middle 50% of the viewport
            }
          )
          
      
          if (videoRef.current) {
            observer.observe(videoRef.current)
          }
          return () => {
            if (videoRef.current) {
              observer.unobserve(videoRef.current)
            }
          }
    },[])
      
        useEffect(() => {
            
          const svg = document.querySelector('svg.squiggle')
          const path = svg.querySelector('path');
        //   const about =document.querySelector('about')
      
          const scroll = () => {
            const distance = window.scrollY;
           
            const totalDistance = svg.clientHeight ;
      
            const percentage = distance / totalDistance; 
            // console.log(percentage)
            const pathLength = path.getTotalLength();
      
            path.style.strokeDasharray = `${pathLength}`;
            path.style.strokeDashoffset = `${pathLength * (1-percentage-1.5)}`;
          };
          window.addEventListener('scroll', scroll);
      
          // Call scroll initially to set the initial stroke dash offset
        //   scroll();
      
          // Attach the scroll event listener
      
          // Cleanup the event listener on component unmount
        //   return () => window.removeEventListener('scroll', scroll);
        
        }, []);
    



    return (
        <div ref={containerRef} className='relative about'>
            <div className='my-12 py-12 px-6 lg:px-10 mb-20'>
                <div className=" mb-8">

                    <div className="text-5xl sm:text-6xl md:text-7xl font-semibold animate-fadeInUp lg:ml-8">Marketing Ignites,</div>
                    <div className="text-5xl sm:text-6xl md:text-7xl font-semibold animate-fadeInUp delay-200 lg:ml-8">Technology Transforms,</div>
                    <div className="text-5xl sm:text-6xl md:text-7xl font-semibold animate-fadeInUp delay-200 lg:ml-8">Sales Soar!</div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-8">

                    <motion.div ref={videoRef} className={`relative hidden lg:block w-full lg:w-1/3 h-60 lg:h-64 transition-all ${isExpanded ? 'md:fixed md:right-4 md:top-1/4 md:w-[45%]' : ''}`} style={{ scale,y, x, }}>
                        <video autoPlay muted loop src={dummy} className='w-full h-full rounded-xl object-cover'></video>
                    </motion.div>
                    <div  className='w-full lg:w-1/3 h-60 lg:h-64 flex lg:hidden'>
                        <video autoPlay muted loop src={dummy} className='w-full h-full rounded-xl object-cover'></video>
                    </div>


                    <div className="w-full lg:w-1/4 ">
                        <div className="text-lg leading-relaxed text-gray-600  mb-8">
                        We ignite your ideas with creative marketing, bring them to life with cutting-edge technology, and propel your success with exceptional sales. Ready to transform your vision into reality? Let’s achieve greatness together!
                        </div>
                        <button className="px-8 py-3 rounded-full bg-white text-black hover:text-white hover:bg-blue-700 font-bold transition-all duration-500">
                            About Us
                        </button>
                    </div>
                </div>
            </div>
            {/* <img src={swiggle} alt="" className='absolute top-0 left-0 w-full -z-10' /> */}
            <svg  viewBox="0 0 1440 760" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-0 w-full -z-10 squiggle' >
                <path d="M-16.5 31.5C287.9 -39.7 440.5 144.333 440.5 250C447.333 318.5 408 506 270.5 531C159.338 551.211 102.647 443.975 110 376.5C127 220.5 302.622 246.771 347 276.5C450 345.5 450 418.5 486 501.5C529.373 601.499 625 641.5 715.5 593.5C832.5 512 889.4 346 1007 406C1136.5 472.071 1048 718 1183.5 743C1291.9 763 1249 566.5 1325.5 482.5C1364.22 442.957 1406.5 448.5 1450 464" stroke="#2424E6" strokeWidth="30" strokeLinecap='round'/>
            </svg>

        </div>


    )
}

export default CTA
