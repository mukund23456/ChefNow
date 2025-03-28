import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/home/About';
import NotificationBanner from './Components/home/Header/Header';
import Footer from './Components/home/Footer/Footer';
import Nav from './Components/home/Header/Nav';
import Contact from './Components/home/Contact/Contact';

const App = () => {
  return (
    <div className="App">
    <NotificationBanner/>
    <Nav/>
    <Routes>
      <Route path="" element={ <Home/> } />
      <Route path="about" element={ <About/> } />
      <Route path="contact" element={ <Contact/> } />
    </Routes>
    <Footer/>
  </div>
  );
};

export default App;