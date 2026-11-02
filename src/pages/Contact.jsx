import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import '../css/Contact.css';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Full-Stack Web App',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff5e14', '#ffffff', '#22c55e']
      });
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      projectType: 'Full-Stack Web App',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span> Together
          </h2>
          <p className="section-subtitle">
            Whether you have an upcoming project, architecture questions, or a full-time engineering opportunity, I'd love to connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-col-title">Contact Information</h3>
              <p className="contact-col-desc">
                Feel free to reach out directly via email or messaging apps. I typically respond within 12 hours.
              </p>

              <div className="contact-channels">
                <a href={`mailto:${personal.email}`} className="channel-item">
                  <div className="channel-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="channel-label">Email</span>
                    <span className="channel-val">{personal.email}</span>
                  </div>
                </a>

                <a href={personal.whatsapp} target="_blank" rel="noreferrer" className="channel-item">
                  <div className="channel-icon-box">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <span className="channel-label">WhatsApp / Direct</span>
                    <span className="channel-val">{personal.phone}</span>
                  </div>
                </a>

                <div className="channel-item static">
                  <div className="channel-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="channel-label">Location</span>
                    <span className="channel-val">{personal.location}</span>
                  </div>
                </div>

                <div className="channel-item static">
                  <div className="channel-icon-box">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="channel-label">Availability</span>
                    <span className="channel-val">Open for Contracts & Full-time</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="whatsapp-callout">
                <div className="callout-content">
                  <span className="callout-badge">Fastest Response</span>
                  <p className="callout-text">Need a quick conversation or project discussion?</p>
                </div>
                <a 
                  href={personal.whatsapp} 
                  target="_blank" 
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="form-card glass-card">
              {submitted ? (
                <div className="submission-success">
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={48} className="success-icon" />
                  </div>
                  <h3 className="success-title">Message Received!</h3>
                  <p className="success-desc">
                    Thank you for reaching out, <strong>{formData.name}</strong>. I've received your inquiry regarding <strong>{formData.projectType}</strong> and will get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button onClick={handleReset} className="btn-secondary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-title">Send a Direct Message</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="John Doe"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="john@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="projectType" className="form-label">Project Type</label>
                      <select 
                        id="projectType" 
                        className="form-select"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option value="Full-Stack Web App">Full-Stack Web App</option>
                        <option value="Backend / API Microservice">Backend / API Microservice</option>
                        <option value="React Frontend Redesign">React Frontend Redesign</option>
                        <option value="Database Tuning & Architecture">Database Tuning & Architecture</option>
                        <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                        <option value="Other Consulting">Other Consulting</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        required 
                        placeholder="Project Discussion / Opportunity"
                        className="form-input"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Project Details / Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      required 
                      placeholder="Tell me about your project, goals, and timeline..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary form-submit-btn" 
                    disabled={loading}
                    id="submit-contact-btn"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
