import { useState } from 'react'

import './App.css'
import Header from './Markup/Component/Header.jsx/Header'
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import './assets/vendor/php-email-form/validate.js';
// import './assets/vendor/aos/aos.js';
// import './assets/js/main.js'
import './assets/vendor/typed.js/typed.umd.js';
import './assets/vendor/purecounter/purecounter_vanilla.js';
import './assets/vendor/waypoints/noframework.waypoints.js';
import './assets/vendor/glightbox/js/glightbox.min.js';
import './assets/vendor/imagesloaded/imagesloaded.pkgd.min.js';
import './assets/vendor/isotope-layout/isotope.pkgd.min.js';
import './assets/vendor/swiper/swiper-bundle.min.js';
import { BrowserRouter } from 'react-router-dom';

// Optionally, you can also initialize or export functions here if needed.
import './assets/css/main.css';  // Import CSS if needed
import Hero from './Markup/Component/Hero/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import About from './Markup/Component/About/About.jsx';
import States from './Markup/Component/States/States.jsx';
import Resume from './Markup/Component/Resume.jsx/Resume.jsx';
import Portifolio from './Markup/Component/Portifolio/Portifolio.jsx';
import Service from './Markup/Component/Service/Service.jsx';
import Contact from './Markup/Component/Contact/Contact.jsx';
import Footer from './Markup/Component/Footer/Footer.jsx';

function App() {
  

  return (
    <>
     <Header/>
   
   
   <div className='main '>
   <Routes >
      <Route path="/" element={<Hero/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/portfolio" element={<Portifolio/>} />
      <Route path="/services" element={<Service/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
   </div>
    <Footer/>
    

    
   
    </>
  )
}

export default App
