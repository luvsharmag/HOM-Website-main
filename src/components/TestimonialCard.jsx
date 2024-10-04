import React from 'react'

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div className='flex-shrink-0 w-[300px] mx-4 my-8 shadow-lg rounded-lg bg-white'>
      <div className="p-6">
        <div className="space-y-2 flex flex-col items-center">
          <div className="h-20 w-20 rounded-full bg-slate-300">
            <img src={testimonial.avatar} className='rounded-full'  />
            {/* <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback> */}
          </div>
          <div className="flex flex-col items-center justify-center space-x-4 mt-4">

            
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            
          </div>
          <p className="text-sm text-center text-black">{testimonial.content}</p>
        </div>
      </div>

    </div>
  )
}

export default TestimonialCard
