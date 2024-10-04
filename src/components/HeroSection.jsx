import React, { useState, useEffect, useCallback } from 'react'
import firstVideo from '../assets/videos/herofirst.mp4'
import secondVideo from '../assets/videos/herosecond.mp4'

const HeroSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
 
    const videos = [

        { id: 1, video: secondVideo },
        { id: 2, video: firstVideo },
        { id: 3, video: secondVideo },
        { id: 4, video: firstVideo },


    ];
    useEffect(() => {
        const interval = setInterval(() => {
            nextVideo();
        }, 5000); // 5000ms = 5 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, [currentIndex]);

   
    const nextVideo = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, [])

    const prevVideo = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    }, [])

    return (
        <section className=" text-white ">
            <div className="">

                <div className="relative w-[100%] h-screen overflow-hidden">
                    {/* Video Wrapper */}
                    {videos.map((video, index) => (

                        <div key={video.id} className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${index === currentIndex ? ' translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'}`}> {/* 16:9 Aspect Ratio */}
                            <video autoPlay loop muted className=" w-full h-full  object-cover"
                                src={video.video}
                            // title="Video"
                            // allowFullScreen

                            >
                                {/* <source src={videos[currentIndex]} type='video/mp4'/> */}
                            </video>
                        </div>
                    ))
                    }


                    {/* Navigation Buttons */}
                    <button
                        onClick={prevVideo}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2  p-2  text-white font-bold text-2xl"
                    >
                        &lt; {/* Left Arrow */}
                    </button>
                    <button
                        onClick={nextVideo}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2  p-2  text-white font-bold text-2xl"
                    >
                        &gt; {/* Right Arrow */}
                    </button>
                </div>

                {/* Dots Indicator for Videos */}
                <div className="flex justify-center space-x-2 mt-6">
                    {videos.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`cursor-pointer w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
                        ></span>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default HeroSection
