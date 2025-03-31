import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Hom from './Components/home/Home/Home';
import NotificationBanner from './Components/home/Header/Header';
import Footer from './Components/home/Footer/Footer';
import Nav from './Components/home/Header/Nav';
import Contact from './Components/home/Contact/Contact';
import ChefConnection from './Components/home/ChefConnection/Chefconnection';
import Month from './Components/home/Cookforamonth/Month';
import OneTime from './Components/home/Onetimecook/Onetime';
import Chef from './Components/home/Chefforparty/chef';
import Testi from './Components/home/Testimonial/Testimonial';
import About from './Components/home/About/About';
import Blog from './Components/home/Blog/Blog';
import Career from './Components/home/Career/Career';

const App = () => {
  return (
    <div className="App">
    {/* <NotificationBanner/> */}
    <Nav/>
    <Routes>
      <Route path="/" element={ <Hom/>} />
      {/* <Route path="/about" element={ <About/> } /> */}
      <Route path="/contact" element={ <Contact/> } />
      <Route path="/join-chefkart" element={<ChefConnection/> } />
      <Route path="/cook-for-month" element={<Month/> } />
      <Route path="/one-time-cook" element={<OneTime/> } />
      <Route path="/chef-for-party" element={<Chef/> } />
      <Route path="/testimonials" element={<Testi/> } />
      <Route path="/about" element={<About/> } />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/career" element={<Career/>} />
    </Routes>
    <Footer/>
  </div>
  );
};

export default App;