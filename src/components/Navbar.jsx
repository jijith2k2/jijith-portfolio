import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`} style={{
      backdropFilter: 'blur(16px)',
      background: isScrolled ? 'rgba(20, 40, 80, 0.9)' : 'rgba(20, 40, 80, 0.3)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container">
        <a className="navbar-brand fw-bold text-info fs-3" href="#hero" style={{fontSize: '1.5rem', fontWeight: '700'}}>Jijith</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{
            border: '2px solid #0dcaf0',
            padding: '8px 12px',
            borderRadius: '8px',
            background: 'rgba(13, 202, 240, 0.1)'
          }}
        >
          <span className="navbar-toggler-icon" style={{color: '#ffffff', fontSize: '1.2rem'}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link smooth-scroll fw-semibold fs-5 px-3" href="#about" style={{color: '#ffffff', fontSize: '1.1rem', fontWeight: '600'}}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link smooth-scroll fw-semibold fs-5 px-3" href="#skills" style={{color: '#ffffff', fontSize: '1.1rem', fontWeight: '600'}}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link smooth-scroll fw-semibold fs-5 px-3" href="#projects" style={{color: '#ffffff', fontSize: '1.1rem', fontWeight: '600'}}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link smooth-scroll fw-semibold fs-5 px-3" href="#experience" style={{color: '#ffffff', fontSize: '1.1rem', fontWeight: '600'}}>Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link smooth-scroll fw-semibold fs-5 px-3" href="#contact" style={{color: '#ffffff', fontSize: '1.1rem', fontWeight: '600'}}>Contact</a>
            </li>
            <li className="nav-item ms-3">
              <button 
                onClick={toggleTheme}
                className="btn btn-outline-info btn-sm"
                style={{borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem'}}
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
        .navbar-nav .nav-link {
          transition: all 0.3s ease;
          position: relative;
        }
        .navbar-nav .nav-link:hover {
          color: #0dcaf0 !important;
          transform: translateY(-2px);
        }
        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: #0dcaf0;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .navbar-nav .nav-link:hover::after {
          width: 80%;
        }
        .navbar-brand:hover {
          color: #0dcaf0 !important;
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
        .navbar-toggler:focus {
          box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.25);
        }
        .navbar-toggler:hover {
          background: rgba(13, 202, 240, 0.2) !important;
          border-color: #0dcaf0 !important;
        }
        @media (max-width: 991.98px) {
          .navbar-nav {
            background: rgba(20, 40, 80, 0.95);
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            backdrop-filter: blur(16px);
          }
          .navbar-nav .nav-link {
            padding: 0.75rem 1rem !important;
            border-radius: 6px;
            margin: 0.25rem 0;
          }
          .navbar-nav .nav-link:hover {
            background: rgba(13, 202, 240, 0.1);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 