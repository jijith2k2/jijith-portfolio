import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const quotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    category: "Innovation"
  },
  {
    quote: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    category: "Technology"
  },
  {
    quote: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates",
    category: "Innovation"
  },
  {
    quote: "Software is eating the world.",
    author: "Marc Andreessen",
    category: "Technology"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Success"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "Leadership"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Inspiration"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Perseverance"
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "Motivation"
  },
  {
    quote: "Code never lies, comments sometimes do.",
    author: "Ron Jeffries",
    category: "Programming"
  },
  {
    quote: "The most damaging phrase in the language is 'We've always done it this way.'",
    author: "Grace Hopper",
    category: "Innovation"
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    category: "Design"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5 position-relative bg-dark text-white">
      <div className="container">
        <h2 className="fw-bold mb-4 text-info text-center">Inspirational Quotes</h2>
        <p className="text-center mb-5 text-muted">Words that inspire innovation and excellence</p>
        <div className="row g-4 justify-content-center">
          {quotes.map((quote, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="glass-card quote-card p-4 rounded-4 shadow-lg h-100" data-aos="fade-up" data-aos-delay={idx * 100} style={{backdropFilter: 'blur(12px)', background: 'rgba(20, 40, 80, 0.3)', border: '1px solid rgba(255,255,255,0.08)'}}>
                <div className="position-relative">
                  <FaQuoteLeft className="text-info position-absolute" style={{top: -10, left: -5, fontSize: '24px', opacity: 0.3}} />
                  <p className="mb-3 ps-4 fst-italic">"{quote.quote}"</p>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div>
                    <h6 className="fw-bold mb-0 text-info">— {quote.author}</h6>
                    <small className="text-muted">{quote.category}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <div className="glass-card p-4 rounded-4" style={{backdropFilter: 'blur(12px)', background: 'rgba(20, 40, 80, 0.3)', border: '1px solid rgba(255,255,255,0.08)'}}>
            <h5 className="fw-bold text-info mb-3">Ready to Create Something Amazing?</h5>
            <p className="mb-3">Let's turn these inspiring words into reality with your next project.</p>
            <a href="#contact" className="btn btn-primary glass-btn smooth-scroll">Start Your Project</a>
          </div>
        </div>
      </div>
      {/* SVG Wave Divider */}
      <div className="position-absolute w-100" style={{bottom: 0, left: 0}}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 80}}><path fill="#181f2a" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,128C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path></svg>
      </div>
      <style>{`
        .quote-card:hover { transform: translateY(-8px); box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25); }
        .quote-card { transition: all 0.3s ease; }
      `}</style>
    </section>
  );
};

export default Testimonials; 