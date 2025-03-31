import FoodBanner1 from "./Banner";
import BlogSection from "./Blogsection";
import Carousel2 from "./Slider2";
import GalleryAutoSlideZoom from "./Gal";
import GalleryWithState from "./Gallery";
import SkillIndiaSection from "./Section";
import StatsSection from "./StatSection";
import Testimonial1 from "./NameTest";
import Testimonials from "./Tes";
import Work from "./Work";
import Lower from "./Lower";
import Pricing from "./Pricing";
import WhyChooseUs from "./WhyChoose";
import TakeItForward from "./TakeitForward";
import TabSwitchComponent from "./TabSwitch";
import VideoBanner from "./Videobanner";

const Hom = () => {
    return (
        <div>
            <Carousel2 />
            <Pricing />
            <WhyChooseUs />
            <Work />
            <StatsSection />
            <VideoBanner />
            <TabSwitchComponent />
            <Testimonial1 />
            <Testimonials />
            <SkillIndiaSection/>
      <GalleryWithState/>
      <GalleryAutoSlideZoom/>
            <TakeItForward />
            <Lower />
            <BlogSection/>
            <FoodBanner1 />
        </div>
    );
};

export default Hom;
