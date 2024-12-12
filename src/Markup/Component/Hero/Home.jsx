import React, { useEffect } from 'react';
import { motion } from 'framer-motion';  // Importing framer-motion for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import image1 from '../../../assets/img/testimonials/hero-bg.jpg';

const Hero = () => {

  useEffect(() => {
    // Initialize AOS animation on component mount
    AOS.init({
      duration: 1200,
      once: true, // Animation triggers once when it enters the viewport
    });
  }, []);

  return (
    <div className="main">
      {/* Hero Section */}
      <section
        id="hero"
        className="hero section dark-background"
        data-aos="fade-up" // AOS scroll animation
      >
        {/* Hero Background Image with Framer Motion Animation */}
        <motion.img
          src={image1}
          alt="Hero background"
          initial={{ opacity: 0 }} // Start with hidden image
          animate={{ opacity: 1 }} // Fade in when mounted
          transition={{ duration: 1.5, ease: 'easeOut' }} // Animation duration
          data-aos="fade-in"
          className="hero-img"
        />

        {/* Hero Content Section */}
        <div
          className="container"
          data-aos="fade-up" // AOS animation for text fade-in
          data-aos-delay="100"
        >
          {/* Hero Title */}
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hero-title"
          >
            Abbey
          </motion.h2>

          {/* Hero Description Text with Typed.js Effect */}
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hero-description"
          >
            I'm{' '}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            >
              Full stack website developer
            </span>
            <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
