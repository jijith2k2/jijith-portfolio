import React from 'react';
import { FaGlobe, FaMobileAlt, FaRocket, FaPaintBrush, FaQuoteLeft } from 'react-icons/fa';

const services = [
  { icon: <FaGlobe className="text-info me-2" />, label: 'Business Websites' },
  { icon: <FaMobileAlt className="text-info me-2" />, label: 'Responsive Web Apps' },
  { icon: <FaRocket className="text-info me-2" />, label: 'Fast Deployment' },
  { icon: <FaPaintBrush className="text-info me-2" />, label: 'Custom UI/UX Design' },
];

const Freelance = () => (
  <section id="freelance" className="py-5 position-relative bg-dark text-white">
    <div className="container">
      <div className="glass-card p-4 rounded-4 shadow-lg mx-auto text-center" style={{maxWidth: 700, backdropFilter: 'blur(16px)', background: 'rgba(20, 40, 80, 0.4)', border: '1px solid rgba(255,255,255,0.1)'}}>
        <h2 className="fw-bold mb-2 text-info">Need a Website?</h2>
        <div className="mb-3 fs-5 text-secondary">Let's build your online presence and grow your business!</div>
        <p className="lead mb-4">I'm available for freelance website and web app development. Whether you need a modern business site, a custom web app, or a personal portfolio, I deliver fast, beautiful, and scalable solutions tailored to your needs.</p>
        <div className="row mb-4 justify-content-center">
          {services.map((service, idx) => (
            <div key={idx} className="col-12 col-sm-6 text-start d-flex align-items-center mb-2 justify-content-center">
              {service.icon}
              <span>{service.label}</span>
            </div>
          ))}
        </div>
        <div className="bg-dark rounded-4 p-3 mb-4 mx-auto" style={{maxWidth: 500, opacity: 0.92}}>
          <div className="d-flex align-items-center mb-2"><FaQuoteLeft className="me-2 text-info" /><span className="fst-italic">"Jijith delivered our project on time with amazing quality and attention to detail. Highly recommended!"</span></div>
          <div className="text-end text-info">— Happy Client</div>
        </div>
        <a href="#contact" className="btn btn-lg btn-primary glass-btn fw-bold smooth-scroll">Get Your Website Now</a>
      </div>
    </div>
    {/* SVG Wave Divider */}
    <div className="position-absolute w-100" style={{bottom: 0, left: 0}}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 80}}><path fill="#181f2a" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,128C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path></svg>
    </div>
  </section>
);

export default Freelance; 