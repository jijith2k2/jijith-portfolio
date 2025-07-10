import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = 'Name is required';
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setStatus('');

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wmlu8om',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xglrn5k',
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_USER_ID || 'eshD3I5fRy9vZuwdl'
      );

      if (result.status === 200) {
        setStatus('✅ Message sent successfully! I\'ll get back to you soon.');
        setFormData({ user_name: '', user_email: '', message: '' });
        setErrors({});
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Provide specific error messages based on the error
      if (error.text?.includes('400')) {
        setStatus('❌ EmailJS configuration error. Please check your service, template, and user IDs.');
      } else if (error.text?.includes('403')) {
        setStatus('❌ EmailJS authentication failed. Please check your user ID.');
      } else if (error.text?.includes('404')) {
        setStatus('❌ EmailJS service or template not found. Please check your IDs.');
      } else {
        setStatus('❌ Failed to send message. Please try again or contact me directly at jijith2k2@gmail.com');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-5 position-relative bg-dark text-white">
      <div className="container">
        <h2 className="fw-bold mb-4 text-info text-center">Get In Touch</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="glass-card p-4 rounded-4 shadow-lg" style={{backdropFilter: 'blur(16px)', background: 'rgba(20, 40, 80, 0.4)', border: '1px solid rgba(255,255,255,0.1)'}}>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Name *</label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      className={`form-control ${errors.user_name ? 'is-invalid' : ''}`}
                      placeholder="Your Name"
                    />
                    {errors.user_name && <div className="invalid-feedback">{errors.user_name}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email *</label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      className={`form-control ${errors.user_email ? 'is-invalid' : ''}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.user_email && <div className="invalid-feedback">{errors.user_email}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      rows="5"
                      placeholder="Tell me about your project or how I can help you..."
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <div className="col-12 text-center">
                    <button 
                      type="submit" 
                      className="btn btn-primary glass-btn fw-bold px-4 py-2"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </form>
              
              {status && (
                <div className={`alert mt-3 text-center ${status.includes('✅') ? 'alert-success' : 'alert-danger'}`}>
                  {status}
                </div>
              )}
              
              <div className="mt-4 text-center">
                <h5 className="fw-bold mb-3 text-info">Connect With Me</h5>
                <div className="d-flex flex-column align-items-center gap-3">
                  <div className="d-flex gap-3">
                    <a href="tel:+917795639345" className="text-info fs-5 d-flex align-items-center">
                      <FaPhoneAlt className="me-2" />+91 7795639345
                    </a>
                    <a href="mailto:jijith2k2@gmail.com" className="text-info fs-5 d-flex align-items-center">
                      <FaEnvelope className="me-2" />jijith2k2@gmail.com
                    </a>
                  </div>
                  <div className="d-flex gap-3 mt-2">
                    <a href="https://linkedin.com/in/jijith-b" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm">
                      <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/jijith2k2" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm">
                      <FaGithub /> GitHub
                    </a>
                    <a href="https://twitter.com/jijith_b" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm">
                      <FaTwitter /> Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SVG Wave Divider */}
      <div className="position-absolute w-100" style={{bottom: 0, left: 0}}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 80}}><path fill="#181f2a" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,128C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path></svg>
      </div>
    </section>
  );
};

export default Contact; 