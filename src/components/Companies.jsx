import React from 'react'
import comp1 from '../assets/images/complogo1.png'
import comp2 from '../assets/images/complogo2.png'
import comp3 from '../assets/images/complogo3.png'
const Companies = () => {
  return (
    <div className='infinite-slider'>
      <div className="list">
        <div className="item" style={{'--position':1}}><img src={comp1} alt="" /></div>
        <div className="item" style={{'--position':2}}><img src={comp2} alt="" /></div>
        <div className="item" style={{'--position':3}}><img src={comp3} alt="" /></div>
        <div className="item" style={{'--position':4}}><img src={comp1} alt="" /></div>
        <div className="item" style={{'--position':5}}><img src={comp2} alt="" /></div>
        <div className="item" style={{'--position':6}}><img src={comp3} alt="" /></div>
        <div className="item" style={{'--position':7}}><img src={comp1} alt="" /></div>
        <div className="item" style={{'--position':8}}><img src={comp2} alt="" /></div>
        {/* <div className="item" style={{'--position':9}}><img src={comp3} alt="" /></div> */}
        {/* <div className="item" style={{'--position':10}}><img src={comp1} alt="" /></div> */}
        
      </div>
    </div>
  )
}

export default Companies
