import React from 'react';

const About = () => (
  <section id="about" className="py-5 position-relative bg-dark text-white">
    <div className="container">
      <div className="glass-card p-4 rounded-4 shadow-lg mx-auto" style={{maxWidth: 700, backdropFilter: 'blur(16px)', background: 'rgba(20, 40, 80, 0.4)', border: '1px solid rgba(255,255,255,0.1)'}}>
        <h2 className="fw-bold mb-3 text-info">About Me</h2>
        <p className="lead mb-0">
          I'm a passionate Full Stack Developer with hands-on experience in Java, Spring Boot, React.js, and modern web technologies. I enjoy solving real-world problems through clean, efficient code and creative design. I started freelancing while still learning, and I consistently use AI tools like ChatGPT, GitHub Copilot, Cursor, DeepSeek, Replit, Qodo, and more to accelerate my learning and development process. I believe in working smart and building for impact.
        </p>
      </div>
    </div>
    {/* SVG Wave Divider */}
    <div className="position-absolute w-100" style={{bottom: 0, left: 0}}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 80}}><path fill="#181f2a" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,128C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path></svg>
    </div>
  </section>
);

export default About; 