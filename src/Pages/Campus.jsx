import React from 'react'
import ImgOne from '../IMG/gallery-1.png'
import ImgTwo from '../IMG/gallery-2.png'
import ImgThree from '../IMG/gallery-3.png'
import ImgFour from '../IMG/gallery-4.png'



const Campus = () => {
  return (
    <div>
      <div className='Campus'>
      <div className='camp'>

      <h2>Campus Photos</h2>
      </div>
      <div className='gallery'>
        <img alt='' src={ImgOne}/>
        <img alt='' src={ImgTwo}/>
        <img alt='' src={ImgThree}/>
        <img alt='' src={ImgFour}/>
      </div>
      <div className='button'><button className='Btn'>See More</button></div>
      </div>
    </div>
  )
}

export default Campus