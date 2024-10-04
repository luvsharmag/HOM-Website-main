
import { useState, useEffect } from 'react'


export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      className="fixed bottom-16 right-16 rounded-[100%] py-3 px-5 shadow-lg z-10 bg-blue-500 animate-fadeInUp transition-all duration-200"
      onClick={scrollToTop}
      aria-label="Go to top"
    >
        <span className='w-4 h-4 text-2xl font-bold text-white'>
      &uarr;
        </span>
    </button>
  )
}