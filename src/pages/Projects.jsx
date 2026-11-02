import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';
import '../css/Projects.css';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filterCategories = ['All', 'Full Stack', 'Backend / API', 'Frontend', 'DevOps & Cloud'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="portfolio" className="projects-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Featured Portfolio</div>
          <h2 className="section-title">
            Production <span className="gradient-text">Engineered Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of distributed systems, full-stack web applications, and developer platforms I've built.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-filters">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Card Header / Category */}
              <div className="project-card-header">
                <span className="project-category">{project.category}</span>
                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Stats Highlights if present */}
              {project.stats && (
                <div className="project-metrics">
                  {Object.entries(project.stats).map(([k, v]) => (
                    <div key={k} className="metric-badge">
                      <span className="metric-val">{v}</span>
                      <span className="metric-key">{k}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Tags */}
              <div className="project-tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* Project Card Links */}
              <div className="project-card-footer">
                <button 
                  onClick={() => setActiveProjectModal(project)}
                  className="project-details-btn"
                >
                  <span>Architecture Details</span>
                  <ArrowUpRight size={16} />
                </button>

                <div className="project-links-group">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-icon-link"
                    title="View Source on GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-icon-link"
                    title="View Live Platform Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeProjectModal && (
          <div className="project-modal-backdrop" onClick={() => setActiveProjectModal(null)}>
            <div className="project-modal-dialog glass-card" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn"
                onClick={() => setActiveProjectModal(null)}
              >
                <X size={20} />
              </button>

              <div className="modal-header">
                <span className="modal-category">{activeProjectModal.category}</span>
                <h3 className="modal-title">{activeProjectModal.title}</h3>
              </div>

              <div className="modal-body">
                <p className="modal-desc">{activeProjectModal.description}</p>

                <div className="modal-section">
                  <h4 className="modal-section-title">Core Architecture & Tech Stack</h4>
                  <div className="modal-tech-grid">
                    {activeProjectModal.techStack.map((tech, i) => (
                      <div key={i} className="modal-tech-item">
                        <CheckCircle2 size={16} className="modal-check" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Engineering Highlights</h4>
                  <ul className="modal-bullets">
                    <li>Designed modular decoupled architecture with high maintainability.</li>
                    <li>Integrated real-time telemetry, automated state synchronization, and retry handlers.</li>
                    <li>Built fully responsive, accessible UI adhering to strict performance budgets.</li>
                  </ul>
                </div>

                <div className="modal-actions">
                  <a 
                    href={activeProjectModal.liveDemo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={16} />
                    <span>Launch Live Preview</span>
                  </a>
                  <a 
                    href={activeProjectModal.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
