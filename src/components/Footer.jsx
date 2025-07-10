import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-3 bg-dark text-white position-relative" style={{backdropFilter: 'blur(8px)', background: 'rgba(10, 20, 40, 0.8)'}}>
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} Jijith B. All rights reserved.</div>
      <div>
        <a href="https://github.com/jijith2k2" target="_blank" rel="noopener noreferrer" className="text-info fs-4 me-3"><FaGithub /></a>
        <a href="https://linkedin.com/in/jijith-b" target="_blank" rel="noopener noreferrer" className="text-info fs-4"><FaLinkedin /></a>
      </div>
    </div>
  </footer>
);

export default Footer; 