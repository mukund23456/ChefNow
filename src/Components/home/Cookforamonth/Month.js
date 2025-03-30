import React from 'react'
import FoodBanner from './Banner'
import FaqMonth from './Faqmonth'
import Lower from './Low1'

import Lower2 from './Lower2'
import BannerDow from './bannerdown'

import Carousel1 from './Slider2'
import Work from './Work'
import FloatingBanner from './FloatingBanner'

const Month = () => {
  return (
    <div>
       <Carousel1 />
      <BannerDow/>
      <Work/>
      <Lower2/>
      <Lower/> 
      <FaqMonth/>
       <FoodBanner/> 
      <FloatingBanner/>
    </div>
  )
}

export default Month