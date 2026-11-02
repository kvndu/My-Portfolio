import React, { useState } from 'react';
import { Code2, Server, Database, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../css/Skills.css';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', name: 'Frontend', icon: <Code2 size={18} /> },
    { id: 'backend', name: 'Backend', icon: <Server size={18} /> },
    { id: 'database', name: 'Databases & Cache', icon: <Database size={18} /> },
    { id: 'devops', name: 'DevOps & Tools', icon: <Cloud size={18} /> }
  ];

  const currentSkills = skills[activeTab] || [];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Technical Arsenal</div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my core engineering competencies, languages, frameworks, and developer toolchain.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="skills-tabs-container">
          <div className="skills-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`skill-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {currentSkills.map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-progress-track">
                <div 
                  className="skill-progress-bar"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips Showcase */}
        <div className="tech-chips-showcase">
          <h4 className="chips-title">Core Technologies & Ecosystem</h4>
          <div className="chips-container">
            {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Git', 'GitHub Actions', 'REST APIs', 'GraphQL', 'Microservices', 'Tailwind CSS'].map((tech, i) => (
              <span key={i} className="stack-chip">
                <span className="chip-dot" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
