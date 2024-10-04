
import  cardcover  from "../assets/images/playingcard.png";


import React,{ useState, useEffect, useRef } from 'react'


const cards = [
  { id: 1, front: "Struggling to identify and reach your target audience effectively?", backHeading: "Target Audience Identification & Reach", backSubheading: "Social Media Handling, SEO, and Google Ads" },
  { id: 2, front: "Difficulty in generating leads and converting them into loyal customers?", backHeading: "Lead Generation & Conversion", backSubheading: "Content Production, PR, and Branding" },
  { id: 3, front: "Lacking brand awareness or struggling to build trust in a competitive market?", backHeading: "Building Brand Awareness & Trust", backSubheading: "Influencer Marketing, PR, and Branding" },
  { id: 4, front: "Finding it hard to stand out from competitors and capture attention? ", backHeading: "Standing Out in a Crowded Market", backSubheading: "Website Development, Graphics, and Animation Videos" },
  { id: 5, front: "Managing customer relationships and keeping up with their changing expectations?", backHeading: "Customer Relationship Management", backSubheading: "Strategy and Google My Business" },
  { id: 6, front: "Dealing with operational inefficiencies that slow down growth?", backHeading: "Optimizing Operational Efficiency", backSubheading: "Automation and Strategy" },
  { id: 7, front: "Struggling to adapt to fast-changing market trends and technology?", backHeading: "Adapting to Market Trends", backSubheading: "Analytics, PR, and Branding" },
  { id: 8, front: "Facing challenges in scaling your business and managing increased demand?", backHeading: "Scaling Your Business", backSubheading: "Content Production, Website Development, and Strategy" },
]

export default function FlippableCards() {
  const [flippedCards, setFlippedCards] = useState([])
  const cardRefs = useRef(cards.map(() => React.createRef()));
  const lastScrollTop = useRef(0)
  const isScrollingUp = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop
      isScrollingUp.current = st < lastScrollTop.current
      lastScrollTop.current = st <= 0 ? 0 : st
    }

    window.addEventListener('scroll', handleScroll, false)
    return () => window.removeEventListener('scroll', handleScroll, false)
  }, [])

  useEffect(() => {
    let timeout

    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingUp.current) {
            timeout = setTimeout(() => {
              setFlippedCards(prev => [...prev, cards[index].id])
            }, index % 4 * 150) // Delay based on odd/even index
          } else if (!entry.isIntersecting && isScrollingUp.current) {
            timeout = setTimeout(() => {
              setFlippedCards(prev => prev.filter(id => id !== cards[index].id))
            }, index % 4 * 150) // Delay based on odd/even index
          }
        },
        { threshold: 0.5 }
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return observer
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <div className='hidden lg:block h-screen w-screen'></div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className='text-4xl font-bold mb-4 text-left md:text-center'>Struggling with Challenges in the Business Industry?</h1>
        <h1 className='text-2xl font-bold mb-12 text-left md:text-center'>
          <span className='text-blue-600'>House of Marktech</span> Delivers the Best Solutions to Overcome Every Obstacle.
        </h1>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 mt-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={cardRefs.current[index]}
              className="relative w-64 h-96 m-2 [perspective:1000px] group"
            >
              <div
                className={`absolute w-full h-full transition-all duration-700 [transform-style:preserve-3d] 
                  ${flippedCards.includes(card.id) ? '[transform:rotateY(180deg)]' : ''}`}
              >
                <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden [backface-visibility:hidden]">
                  <img src={cardcover} alt=""  className='w-full h-full object-cover'/>
                </div>
                <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-lg flex flex-col justify-between p-4 py-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h2 className='text-base text-start'>{card.front}</h2>
                  <h2 className='text-2xl font-bold text-right '>{card.backSubheading}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}