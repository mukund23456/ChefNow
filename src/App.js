import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/home/About';
import NotificationBanner from './Components/home/Header/Header';
import Footer from './Components/home/Footer/Footer';
import Nav from './Components/home/Header/Nav';
import Contact from './Components/home/Contact/Contact';
import ChefConnection from './Components/home/ChefConnection/Chefconnection';
import Month from './Components/home/Cookforamonth/Month';
import OneTime from './Components/home/Onetimecook/Onetime';
import Chef from './Components/home/Chefforparty/chef';

const App = () => {
  return (
    <div className="App">
    {/* <NotificationBanner/> */}
    <Nav/>
    <Routes>
      <Route path="" element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/contact" element={ <Contact/> } />
      <Route path="/join-chefkart" element={<ChefConnection/> } />
      <Route path="/cook-for-month" element={<Month/> } />
      <Route path="/one-time-cook" element={<OneTime/> } />
      <Route path="/chef-for-party" element={<Chef/> } />
    </Routes>
    <Footer/>
  </div>
  );
};

export default App;