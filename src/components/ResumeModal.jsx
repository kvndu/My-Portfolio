import React from 'react';
import { X, Download, FileText, Printer } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../css/ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, experience, education, skills } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadFile = () => {
    // Generate a clean text / markdown resume file for download
    const cvContent = `
============================================================
${personal.name.toUpperCase()} - ${personal.role.toUpperCase()}
============================================================
Email: ${personal.email}
Phone: ${personal.phone}
Location: ${personal.location}
LinkedIn: ${personal.socials.find(s => s.name === 'LinkedIn')?.url}
GitHub: ${personal.socials.find(s => s.name === 'GitHub')?.url}

SUMMARY
------------------------------------------------------------
${personal.tagline}

PROFESSIONAL EXPERIENCE
------------------------------------------------------------
${experience.map(e => `* ${e.role} | ${e.company} (${e.period})
  - ${e.description}
  - Tech Stack: ${e.tech.join(', ')}
`).join('\n')}

EDUCATION
------------------------------------------------------------
* ${education[0].degree}
  ${education[0].institution} (${education[0].year})
  ${education[0].achievement}

KEY TECHNICAL SKILLS
------------------------------------------------------------
* Frontend: ${skills.frontend.map(s => s.name).join(', ')}
* Backend: ${skills.backend.map(s => s.name).join(', ')}
* Databases & Cache: ${skills.database.map(s => s.name).join(', ')}
* DevOps & Cloud: ${skills.devops.map(s => s.name).join(', ')}
============================================================
`;
    const blob = new Blob([cvContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Kavindu_Heshan_Software_Engineer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div className="resume-modal-dialog glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-top-bar">
          <div className="resume-title-wrap">
            <FileText size={22} className="resume-icon" />
            <div>
              <h3 className="resume-modal-title">Kavindu Heshan — Resume</h3>
              <span className="resume-modal-subtitle">Software Engineer • Official Profile</span>
            </div>
          </div>

          <div className="resume-top-actions">
            <button onClick={handlePrint} className="top-action-btn" title="Print Resume">
              <Printer size={18} />
              <span>Print</span>
            </button>
            <button onClick={handleDownloadFile} className="btn-primary resume-dl-btn">
              <Download size={16} />
              <span>Download File</span>
            </button>
            <button className="resume-modal-close" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable/Readable Document Preview */}
        <div className="resume-document-sheet">
          <div className="sheet-header">
            <h1 className="sheet-name">{personal.name}</h1>
            <h2 className="sheet-role">{personal.role}</h2>
            <div className="sheet-contact-line">
              <span>{personal.email}</span> • 
              <span>{personal.phone}</span> • 
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>

          <hr className="sheet-divider" />

          <section className="sheet-section">
            <h3 className="sheet-section-title">Professional Summary</h3>
            <p className="sheet-text">{personal.tagline}</p>
          </section>

          <section className="sheet-section">
            <h3 className="sheet-section-title">Work Experience</h3>
            {experience.map((exp, idx) => (
              <div key={idx} className="sheet-exp-item">
                <div className="sheet-exp-row">
                  <span className="sheet-exp-role">{exp.role} — <strong>{exp.company}</strong></span>
                  <span className="sheet-exp-period">{exp.period}</span>
                </div>
                <p className="sheet-exp-desc">{exp.description}</p>
                <p className="sheet-exp-tech"><strong>Technologies:</strong> {exp.tech.join(', ')}</p>
              </div>
            ))}
          </section>

          <section className="sheet-section">
            <h3 className="sheet-section-title">Education</h3>
            <div className="sheet-exp-row">
              <span className="sheet-exp-role">{education[0].degree}</span>
              <span className="sheet-exp-period">{education[0].year}</span>
            </div>
            <p className="sheet-exp-desc">{education[0].institution}</p>
            <p className="sheet-exp-tech"><em>{education[0].achievement}</em></p>
          </section>

          <section className="sheet-section">
            <h3 className="sheet-section-title">Technical Expertise</h3>
            <div className="sheet-skills-list">
              <p><strong>Languages & Frontend:</strong> React, Next.js, TypeScript, JavaScript (ES6+), HTML5/CSS3, Tailwind</p>
              <p><strong>Backend & Systems:</strong> Node.js, Express.js, NestJS, Python, REST APIs, Microservices, GraphQL</p>
              <p><strong>Databases & Cloud:</strong> PostgreSQL, MongoDB, Redis, Docker, AWS, Git, CI/CD</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
