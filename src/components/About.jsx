import React from 'react';
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  CheckCircle, 
  Code, 
  Compass, 
  Cpu, 
  Download, 
  MapPin, 
  User 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import kavinduPortrait from '../assets/kavindu-portrait.jpg';
import './About.css';

export default function About({ onDownloadCV, onOpenHireModal }) {
  const { about, personal, experience, education } = portfolioData;

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">
            Passionate <span className="gradient-text">Software Engineer</span> & Problem Solver
          </h2>
          <p className="section-subtitle">
            A look into who I am, how I approach engineering challenges, and my journey building production-grade software.
          </p>
        </div>

        {/* Main About Layout */}
        <div className="about-grid">
          {/* Left Column: Photo Card & Quick Facts */}
          <div className="about-left-col">
            <div className="about-photo-card glass-card">
              <div className="about-photo-wrapper">
                <img 
                  src={kavinduPortrait} 
                  alt="Kavindu Heshan" 
                  className="about-profile-photo"
                />
                <div className="about-photo-tag">
                  <span className="dot" />
                  <span>Kavindu Heshan • Software Engineer</span>
                </div>
              </div>

              <div className="about-details-table">
                {about.details.map((item, idx) => (
                  <div key={idx} className="detail-row">
                    <span className="detail-label">{item.label}</span>
                    <span className="detail-value">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="about-card-cta">
                <button onClick={onDownloadCV} className="btn-primary full-width">
                  <Download size={18} />
                  <span>Download Full Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Principles & Experience Timeline */}
          <div className="about-right-col">
            <div className="about-bio-box">
              <h3 className="about-headline">{about.headline}</h3>
              <p className="about-bio-p">{about.bio1}</p>
              <p className="about-bio-p">{about.bio2}</p>
            </div>

            {/* Core Pillars */}
            <div className="pillars-grid">
              {about.highlights.map((h, i) => (
                <div key={i} className="pillar-item glass-card">
                  <div className="pillar-bullet">
                    <CheckCircle size={18} className="pillar-icon" />
                  </div>
                  <div>
                    <h4 className="pillar-title">{h.title}</h4>
                    <p className="pillar-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Career Timeline */}
            <div className="timeline-container">
              <div className="timeline-header">
                <Briefcase size={20} className="timeline-header-icon" />
                <h3 className="timeline-heading">Professional Journey</h3>
              </div>

              <div className="timeline-track">
                {experience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <div className="timeline-meta">
                        <span className="timeline-period">{exp.period}</span>
                        <span className="timeline-company">{exp.company}</span>
                      </div>
                      <h4 className="timeline-role">{exp.role}</h4>
                      <p className="timeline-desc">{exp.description}</p>
                      <div className="timeline-tech-tags">
                        {exp.tech.map((t, idx) => (
                          <span key={idx} className="tech-badge">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Box */}
            <div className="education-box glass-card">
              <div className="education-header">
                <BookOpen size={20} className="edu-icon" />
                <div>
                  <h4 className="edu-degree">{education[0].degree}</h4>
                  <p className="edu-inst">{education[0].institution} • {education[0].year}</p>
                </div>
              </div>
              <p className="edu-achievement">{education[0].achievement}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
