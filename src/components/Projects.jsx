import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const projects = [
  {
    title: 'Weed Detection',
    description: 'A machine learning project for detecting weeds in crop images.',
    github: 'https://github.com/jijith2k2',
    demo: '',
    image: '/weed.jpeg',
    tags: ['CNN', 'Java', 'openCV', 'MongoDB'],
  },
  {
    title: 'MLM Website',
    description: 'A real-world Multi-Level Marketing website built with full stack technologies.',
    github: 'https://github.com/jijith2k2',
    demo: 'https://nwa.net.in',
    image: '/NWA.png',
    tags: ['React', 'javaScript', 'Firebase', ],
  },
  {
    title: 'Lion 2D Game',
    description: 'A fun 2D game project featuring a lion character.',
    github: 'https://github.com/jijith2k2',
    demo: 'https://lion-game.netlify.app/',
    image: '/lion.jpeg',
    tags: ['JavaScript', 'Canvas', 'Game'],
  },
];

const Projects = () => {
  const { theme } = useTheme();
  return (
    <section id="projects" className="py-5 position-relative bg-dark text-white">
      <div className="container">
        <h2 className="fw-bold mb-4 text-info text-center">Projects</h2>
        <div className="row g-5 justify-content-center">
          {projects.map((project, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
              <div className="glass-card project-card p-0 rounded-4 shadow-lg h-100 d-flex flex-column" data-aos="fade-up" data-aos-delay={idx * 100} style={{transition: 'transform 0.2s', backdropFilter: 'blur(12px)', background: 'rgba(20, 40, 80, 0.3)', border: '1px solid rgba(255,255,255,0.08)'}}>
                <div className="project-img-wrapper rounded-top-4 overflow-hidden" style={{height: 180, background: '#181f2a'}}>
                  <img src={project.image} alt={project.title} className="w-100 h-100 object-fit-cover" style={{objectFit: 'cover', minHeight: 180}} />
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h5 className="fw-bold mb-2 text-info">{project.title}</h5>
                  <div className="mb-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="badge bg-gradient me-2 mb-1" style={{background: 'linear-gradient(90deg, #66b2ff 0%, #0d6efd 100%)', color: theme === 'dark' ? '#fff' : '#181f2a', fontWeight: 500}}>{tag}</span>
                    ))}
                  </div>
                  <p className="flex-grow-1 mb-3">{project.description}</p>
                  <div className="mt-auto d-flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light flex-fill"><FaGithub /> GitHub</a>
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-info flex-fill"><FaExternalLinkAlt /> Demo</a>}
                  </div>
                </div>
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
        .project-card:hover { transform: translateY(-8px) scale(1.03); box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25); }
        .project-img-wrapper img { transition: transform 0.5s cubic-bezier(.23,1.02,.64,.97); }
        .project-card:hover .project-img-wrapper img { transform: scale(1.08) rotate(-2deg); }
      `}</style>
    </section>
  );
};

export default Projects;