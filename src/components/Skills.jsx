import React from 'react';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGit, FaDatabase, FaRobot, FaTools } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  
  
];

const devTools = [
  { name: 'Git', icon: <FaGit /> },
  { name: 'DevOps', icon: <FaTools /> },
  { name: 'Copilot', icon: <FaRobot /> },
  { name: 'Cursor', icon: <FaRobot /> },
  
  { name: 'VS Code', icon: <FaTools /> },
];

const aiTools = [
  { name: 'Replit', icon: <FaRobot /> },
  { name: 'Qodo', icon: <FaRobot /> },
  { name: 'Blackbox', icon: <FaRobot /> },
  { name: 'Claude', icon: <FaRobot /> },
  { name: 'ChatGPT', icon: <FaRobot /> },
  { name: 'DeepSeek', icon: <FaRobot /> },
  { name: 'Gemini', icon: <FaRobot /> },
  { name: 'OpenRouter', icon: <FaRobot /> },
];

const Skills = () => (
  <section id="skills" className="py-5 position-relative bg-dark text-white">
    <div className="container">
      <h2 className="fw-bold mb-4 text-info text-center">Skills</h2>
      <div className="row g-4 justify-content-center">
        {skills.map((skill, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="glass-card skill-card p-3 rounded-4 text-center shadow-lg h-100 d-flex flex-column align-items-center justify-content-center" style={{transition: 'transform 0.2s', backdropFilter: 'blur(12px)', background: 'rgba(20, 40, 80, 0.3)', border: '1px solid rgba(255,255,255,0.08)'}}>
              <div className="display-5 mb-2 text-info">{skill.icon}</div>
              <div className="fw-semibold">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="fw-bold mt-5 mb-4 text-info text-center">Developer Tools</h3>
      <div className="row g-4 justify-content-center">
        {devTools.map((tool, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="glass-card skill-card p-3 rounded-4 text-center shadow-lg h-100 d-flex flex-column align-items-center justify-content-center" style={{transition: 'transform 0.2s', backdropFilter: 'blur(12px)', background: 'rgba(20, 40, 80, 0.3)', border: '1px solid rgba(255,255,255,0.08)'}}>
              <div className="display-5 mb-2 text-info">{tool.icon}</div>
              <div className="fw-semibold">{tool.name}</div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="fw-bold mt-5 mb-4 text-info text-center">AI Tools</h3>
      <div className="row g-4 justify-content-center">
        {aiTools.map((tool, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="glass-card skill-card p-3 rounded-4 text-center shadow-lg h-100 d-flex flex-column align-items-center justify-content-center" style={{transition: 'transform 0.2s', backdropFilter: 'blur(12px)', background: 'rgba(20, 40, 80, 0.3)', border: '1px solid rgba(255,255,255,0.08)'}}>
              <div className="display-5 mb-2 text-info">{tool.icon}</div>
              <div className="fw-semibold">{tool.name}</div>
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
      .skill-card:hover { transform: translateY(-8px) scale(1.05); box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25); }
    `}</style>
  </section>
);

export default Skills; 