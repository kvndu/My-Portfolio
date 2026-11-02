import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import './HireMeModal.css';

export default function HireMeModal({ isOpen, onClose, preselectedService }) {
  if (!isOpen) return null;

  const { personal } = portfolioData;
  const [clientType, setClientType] = useState('project'); // 'project' or 'fulltime'
  const [budget, setBudget] = useState('$1,000 - $3,000');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'Full-Stack Web Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#ff5e14', '#ffffff', '#ff9a44']
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="hire-modal-backdrop" onClick={handleClose}>
      <div className="hire-modal-dialog glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="hire-modal-close" onClick={handleClose}>
          <X size={20} />
        </button>

        {submitted ? (
          <div className="hire-success-content">
            <div className="hire-success-icon">
              <CheckCircle2 size={50} />
            </div>
            <h3 className="hire-success-title">Proposal Inquiry Sent!</h3>
            <p className="hire-success-desc">
              Thank you, <strong>{formData.name}</strong>. I have received your inquiry regarding <strong>{formData.service}</strong>. I will review your requirements and reach out to <strong>{formData.email}</strong> within 12-24 hours.
            </p>
            <div className="hire-success-actions">
              <a 
                href={personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageSquare size={16} />
                <span>Follow Up on WhatsApp</span>
              </a>
              <button onClick={handleClose} className="btn-secondary">
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="hire-form-container">
            <div className="hire-modal-header">
              <div className="hire-badge">
                <Sparkles size={14} />
                <span>Work with Kavindu</span>
              </div>
              <h2 className="hire-modal-title">Hire Me For Your Next Big Build</h2>
              <p className="hire-modal-subtitle">
                Available for high-impact software engineering roles, architecture consulting, and custom full-stack solutions.
              </p>
            </div>

            {/* Client Engagement Type Switcher */}
            <div className="engagement-switcher">
              <button 
                type="button" 
                className={`eng-btn ${clientType === 'project' ? 'active' : ''}`}
                onClick={() => setClientType('project')}
              >
                Project / Contract
              </button>
              <button 
                type="button" 
                className={`eng-btn ${clientType === 'fulltime' ? 'active' : ''}`}
                onClick={() => setClientType('fulltime')}
              >
                Full-Time Role
              </button>
            </div>

            <form onSubmit={handleSubmit} className="hire-form">
              <div className="form-row-2">
                <div className="hire-field">
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="hire-field">
                  <label>Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="hire-field">
                  <label>Company / Organization</label>
                  <input 
                    type="text" 
                    placeholder="Company or Startup name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="hire-field">
                  <label>Target Scope / Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                    <option value="Backend & API Architecture">Backend & API Architecture</option>
                    <option value="Database Design & Optimization">Database Design & Optimization</option>
                    <option value="DevOps & Cloud Deployment">DevOps & Cloud Deployment</option>
                    <option value="Full-Time Senior/Mid Software Engineer">Full-Time Software Engineer</option>
                  </select>
                </div>
              </div>

              {clientType === 'project' && (
                <div className="hire-field">
                  <label>Estimated Budget (USD)</label>
                  <div className="budget-chips">
                    {['< $1,000', '$1,000 - $3,000', '$3,000 - $8,000', '$8,000+'].map((b) => (
                      <button
                        type="button"
                        key={b}
                        className={`budget-chip ${budget === b ? 'active' : ''}`}
                        onClick={() => setBudget(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="hire-field">
                <label>Tell Me About Your Project or Opportunity *</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Outline key features, timeline, tech stack preferences, or team details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="hire-submit-row">
                <button type="submit" className="btn-primary hire-submit-btn">
                  <Send size={16} />
                  <span>Submit Inquiry</span>
                </button>
                <span className="hire-privacy-text">
                  🔒 Strictly confidential. No spam guaranteed.
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
