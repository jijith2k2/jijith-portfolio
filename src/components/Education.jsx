import React from 'react';
import { FaUniversity, FaCertificate } from 'react-icons/fa';

const education = [
  {
    degree: 'B.E. Computer Science',
    institution: 'Ponjesly College of Engineering',
    duration: '2020 - 2024',
    icon: <FaUniversity className="text-info" />,
    description: 'Graduated with a strong foundation in computer science, software engineering, and problem-solving. Participated in coding events and technical workshops.'
  },
  {
    degree: 'Full Stack Developer Certification',
    institution: 'Besant Technologies',
    duration: '2024 - Present ',
    icon: <FaCertificate className="text-info" />,
    description: 'Completed an intensive certification program covering Java, Spring Boot, React.js, Node.js, and modern web development best practices.'
  },
];

const Education = () => (
  <section id="education" className="py-5 position-relative bg-dark text-white">
    <div className="container">
      <h2 className="fw-bold mb-4 text-info text-center">Education</h2>
      <div className="timeline mx-auto" style={{maxWidth: 700}}>
        {education.map((edu, idx) => (
          <div key={idx} className="d-flex mb-5 align-items-start">
            <div className="me-4 flex-shrink-0 d-flex align-items-center justify-content-center" style={{width: 56, height: 56}}>
              <div className="glass-card d-flex align-items-center justify-content-center" style={{width: 56, height: 56, borderRadius: '50%'}}>
                {edu.icon}
              </div>
            </div>
            <div className="glass-card p-4 rounded-4 shadow-lg flex-grow-1">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold mb-0">{edu.degree}</h5>
                <span className="badge bg-info text-dark fs-6">{edu.duration}</span>
              </div>
              <div className="mb-1 text-secondary">{edu.institution}</div>
              <div>{edu.description}</div>
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

export default Education; 