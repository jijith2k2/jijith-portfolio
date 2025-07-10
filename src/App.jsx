import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos';
import $ from 'jquery';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Freelance from './components/Freelance';
import Testimonials from './components/Testimonials';
import ScrollToTop from './components/ScrollToTop';
import ProgressBar from './components/ProgressBar';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    // Example jQuery scroll effect for smooth scroll
    $(document).on('click', 'a.smooth-scroll', function (e) {
      e.preventDefault();
      const target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top - 70 }, 800);
      }
    });
  }, []);

  return (
    <div>
      <ProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Freelance />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App
