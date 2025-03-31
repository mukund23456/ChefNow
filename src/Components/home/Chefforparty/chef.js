import React from 'react'
import FoodBanner1 from './Banner'
import FAQ3 from './Faq'
import Carousel2 from './Slider2'
import BannerDow1 from './BannerDow'
import Work1 from './Work'
import Lower4 from './Lower3'
import Lower1 from './Low1'
import GalleryWithState from './Gallery'
import VideoBanner from './VideoBanner'
import GalleryAutoSlideZoom from './Gal'
import FloatingBanner from './FloatingBanner'
import ILeftImageRightText from './iLeftimagerighttext'

const Chef = () => {
  return (
    <div>
        <Carousel2/>
        <BannerDow1/>
      
        <Work1/>
        <ILeftImageRightText/>
        <VideoBanner/>
        <GalleryWithState/>
        <GalleryAutoSlideZoom/>
        <Lower4/>
        
        <Lower1/>
        <FAQ3/>
        
        <FoodBanner1/>
        <FloatingBanner/>
    </div>
  )
}

export default Chef