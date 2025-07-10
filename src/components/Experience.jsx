import React from 'react';
import { FaBriefcase, FaUserGraduate, FaLaptopCode } from 'react-icons/fa';

const experiences = [
  {
    title: 'Fresher',
    company: 'Open to Opportunities',
    duration: 'Present',
    icon: <FaUserGraduate className="text-info" />,
    description: 'Actively seeking my first full-time role as a Full Stack Developer. Eager to contribute, learn, and grow in a dynamic team environment.'
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Self-employed',
    duration: '2024 - Present',
    icon: <FaLaptopCode className="text-info" />,
    description: 'Built a real MLM Website (NWA), a Weed Detection ML project, and multiple personal projects using Java, Spring Boot, React.js, Node.js, and modern web technologies. Delivered end-to-end solutions for clients and personal learning.'
  },
];

const Experience = () => (
  <section id="experience" className="py-5 position-relative bg-dark text-white">
    <div className="container">
      <h2 className="fw-bold mb-4 text-info text-center">Experience</h2>
      <div className="timeline mx-auto" style={{maxWidth: 700}}>
        {experiences.map((exp, idx) => (
          <div key={idx} className="d-flex mb-5 align-items-start">
            <div className="me-4 flex-shrink-0 d-flex align-items-center justify-content-center" style={{width: 56, height: 56}}>
              <div className="glass-card d-flex align-items-center justify-content-center" style={{width: 56, height: 56, borderRadius: '50%'}}>
                {exp.icon}
              </div>
            </div>
            <div className="glass-card p-4 rounded-4 shadow-lg flex-grow-1">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold mb-0">{exp.title}</h5>
                <span className="badge bg-info text-dark fs-6">{exp.duration}</span>
              </div>
              <div className="mb-1 text-secondary">{exp.company}</div>
              <div>{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* SVG Wave Divider */}
    <div className="position-absolute w-100" style={{bottom: 0, left: 0}}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 80}}><path fill="#181f2a" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,128C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path></svg>
    </div>
    <style>{`
      .timeline::before { content: ''; position: absolute; left: 28px; top: 0; bottom: 0; width: 2px; background: rgba(102,178,255,0.2); z-index: 0; }
      .timeline { position: relative; }
    `}</style>
  </section>
);

export default Experience; 