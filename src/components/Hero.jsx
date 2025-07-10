import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100 position-relative bg-dark text-white" style={{background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)'}}>
      <div className="glass-card p-4 rounded-4 shadow-lg" style={{backdropFilter: 'blur(16px)', background: 'rgba(20, 40, 80, 0.4)', border: '1px solid rgba(255,255,255,0.1)'}}>
        <div className="mb-3">
          <img src="/profile Dark.png" alt="Profile" className="rounded-circle border border-3 border-primary shadow" style={{width: 140, height: 140, objectFit: 'cover', background: 'rgba(255,255,255,0.1)'}} />
        </div>
        <h1 className="fw-bold mb-1">Jijith B</h1>
        <h4 className="fw-semibold mb-2 text-info">
          {text}
          {isTyping && <span className="typing-cursor">|</span>}
        </h4>
        <p className="mb-2">Bangalore, India</p>
        <a href="/Jijith_B_Resume.pdf.pdf" className="btn btn-primary glass-btn fw-bold me-2" download>Download Resume</a>
        <a href="#about" className="btn btn-outline-light glass-btn smooth-scroll">About Me <i className="bi bi-arrow-down"></i></a>
      </div>
      {/* SVG Wave Divider */}
      <div className="position-absolute w-100" style={{bottom: 0, left: 0}}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 80}}><path fill="#181f2a" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,128C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path></svg>
      </div>
      <style>{`
        .typing-cursor {
          animation: blink 1s infinite;
          color: #0dcaf0;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero; 