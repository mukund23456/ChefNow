import Contacts from "./Contacts"
import GallerySection from "./Foundercard"
import Hero from "./Hero"
import Lower3 from "./Lowerthree"
import Lower4 from "./Lowertwo"
import SocialSection from "./Social"
import StatsSection from "./StassSection"
import VideoGallery from "./VideoGallery"

const About = () => {
  return (
    <div>
      <Hero/>
      <Lower4/>
      <Lower3/>
      <StatsSection/>
      <GallerySection/>
      <VideoGallery/>
      <Contacts/>
     <SocialSection/>
    </div>
  )
}

export default About