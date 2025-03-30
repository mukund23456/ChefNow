import React from 'react'
import FaqOne from './faq'
import Lower3 from './Lower3'
import Testimonials from './Testimonal'
import Heart from './Heart1'
import Work from './Work'
import StatsSections from './Statsection'
import BannerDow2 from './Bannerdow'
import Carousel2 from './Slider2'
import Lower5 from './Lower'
import FloatingBanner from './Floatingbaneer'


const OneTime = () => {
  return (
    <div> 
      <Carousel2/>
      <BannerDow2/>
      <StatsSections/>
      <Work/>
      <Heart/>
      <Testimonials/>
      <Lower3/>
      <Lower5/>
        <FaqOne/>
    <FloatingBanner/>      
    </div>
  )
}

export default OneTime