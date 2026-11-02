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
${(personal.fullName || personal.name).toUpperCase()}
BSc (Hons) Software Engineering Graduate • University of Plymouth
============================================================
Email: ${personal.email}
Phone: ${personal.phone}
Location: ${personal.location}
LinkedIn: ${personal.socials.find(s => s.name === 'LinkedIn')?.url || ''}
GitHub: ${personal.socials.find(s => s.name === 'GitHub')?.url || ''}

CAREER OBJECTIVE
------------------------------------------------------------
${personal.tagline}

EDUCATION & QUALIFICATIONS
------------------------------------------------------------
* ${education[0].degree}
  ${education[0].institution} (${education[0].year})
  Awarded: ${education[0].classification || education[0].achievement}
  Programme Aggregate: 57.35% | Total Credits: 360 (Completed)

  Notable Modules & Achievements:
  - Final Year Computing Project (PUSL3190): 71% Coursework Report & Code (66.2% overall)
  - Computing Group Project (PUSL2021): 75% Coursework Portfolio (72% overall)
  - Mobile App Development (PUSL2023): 65.58% (Proposal: 76%, Final Report: 70%)
  - Software Engineering 2 (PUSL2024): 74% Coursework & Practical
  - Full-Stack Development (PUSL3120): Level 6 Confirmed
  - HCI, Graphics & Visualisation (PUSL3122): 65% Coursework

ACADEMIC & PROJECT EXPERIENCE
------------------------------------------------------------
${experience.map(e => `* ${e.role} | ${e.company} (${e.period})
  - ${e.description}
  - Tech Stack: ${e.tech.join(', ')}
`).join('\n')}

TECHNICAL EXPERTISE
------------------------------------------------------------
* Frontend: ${skills.frontend.map(s => s.name).join(', ')}
* Backend: ${skills.backend.map(s => s.name).join(', ')}
* Databases: ${skills.database.map(s => s.name).join(', ')}
* DevOps & Tools: ${skills.devops.map(s => s.name).join(', ')}
============================================================
`;
    const blob = new Blob([cvContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Kavindu_Heshan_Software_Engineering_Graduate_Resume.txt`;
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
              <span className="resume-modal-subtitle">BSc (Hons) Software Engineering Graduate • Official Profile</span>
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
            <h1 className="sheet-name">{personal.fullName || personal.name}</h1>
            <h2 className="sheet-role">{personal.role} • University of Plymouth</h2>
            <div className="sheet-contact-line">
              <span>{personal.email}</span> • 
              <span>{personal.phone}</span> • 
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>

          <hr className="sheet-divider" />

          <section className="sheet-section">
            <h3 className="sheet-section-title">Career Objective</h3>
            <p className="sheet-text">{personal.tagline}</p>
          </section>

          <section className="sheet-section">
            <h3 className="sheet-section-title">Education & Qualifications</h3>
            <div className="sheet-exp-row">
              <span className="sheet-exp-role">{education[0].degree} — <strong>{education[0].institution}</strong></span>
              <span className="sheet-exp-period">{education[0].year}</span>
            </div>
            <p className="sheet-exp-desc">
              <strong>Awarded:</strong> {education[0].classification || education[0].achievement} (Aggregate: {education[0].aggregate || '57.35%'}, {education[0].totalCredits || '360 Credits Completed'})
            </p>
            {education[0].notableModules && (
              <p className="sheet-exp-tech" style={{ marginTop: '6px' }}>
                <strong>Key Modules:</strong> {education[0].notableModules.join(' • ')}
              </p>
            )}
          </section>

          <section className="sheet-section">
            <h3 className="sheet-section-title">Academic & Project Experience</h3>
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
            <h3 className="sheet-section-title">Technical Expertise</h3>
            <div className="sheet-skills-list">
              <p><strong>Languages & Frontend:</strong> React.js, JavaScript (ES6+), TypeScript, HTML5/CSS3, Tailwind CSS</p>
              <p><strong>Backend & APIs:</strong> Node.js, Express.js, RESTful APIs, Python Basics, Java (OOP)</p>
              <p><strong>Databases & Tools:</strong> PostgreSQL, MySQL, MongoDB, Git & GitHub, Docker Basics, Postman, Agile/Scrum</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
