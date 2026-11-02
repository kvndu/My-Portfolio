import React, { useState } from 'react';
import { 
  Globe, 
  Download, 
  ArrowRight, 
  Terminal, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, LeetCodeIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

// Import local photos generated
import kavinduStudio from '../assets/kavindu-studio.png';
import kavinduPortrait from '../assets/kavindu-portrait.jpg';
import kavinduRaw from '../assets/kavindu.jpg';

export default function Hero({ onOpenHireModal, onDownloadCV }) {
  const { personal } = portfolioData;
  const [photoStyle, setPhotoStyle] = useState('studio'); // 'studio', 'portrait', 'raw'

  const handleDownloadCVClick = () => {
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ff5e14', '#ff9a44', '#ffffff', '#ffd166']
    });

    onDownloadCV();
  };

  const currentPhotoSrc = 
    photoStyle === 'studio' ? kavinduStudio :
    photoStyle === 'portrait' ? kavinduPortrait : kavinduRaw;

  return (
    <section id="home" className="hero-section">
      {/* Background ambient lighting */}
      <div className="hero-ambient-glow" />
      <div className="hero-geometric-curved-lines" />

      <div className="container hero-container">
        {/* Left Column: Bio & Calls to Action */}
        <div className="hero-content">
          <div className="hero-intro-badge">
            <span className="hero-greeting">{personal.greeting}</span>
          </div>

          <h1 className="hero-name">{personal.name}</h1>

          <div className="hero-role-wrapper">
            <h2 className="hero-role">{personal.role}</h2>
          </div>

          <p className="hero-description">
            {personal.tagline}
          </p>

          {/* Social Icons matching design */}
          <div className="hero-socials">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-circle-btn"
              title="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a 
              href={personal.socials.find(s => s.name === 'LinkedIn')?.url || '#'} 
              target="_blank" 
              rel="noreferrer" 
              className="social-circle-btn"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a 
              href={personal.socials.find(s => s.name === 'GitHub')?.url || '#'} 
              target="_blank" 
              rel="noreferrer" 
              className="social-circle-btn"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a 
              href="https://leetcode.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-circle-btn"
              title="LeetCode / Code Profiles"
            >
              <LeetCodeIcon size={18} />
            </a>
            <a 
              href="#about" 
              className="social-circle-btn"
              title="Personal Website"
            >
              <Globe size={18} />
            </a>
          </div>

          {/* Hero Buttons matching design */}
          <div className="hero-btn-group">
            <button 
              onClick={onOpenHireModal} 
              className="hero-hire-btn"
              id="hero-hire-btn"
            >
              <span>Hire Me</span>
              <ArrowRight size={18} />
            </button>

            <button 
              onClick={handleDownloadCVClick} 
              className="hero-cv-btn"
              id="hero-download-cv-btn"
            >
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>

          {/* Floating Stats Card matching the design screenshot */}
          <div className="hero-stats-card glass-card">
            <div className="stat-column">
              <span className="stat-number">5+</span>
              <span className="stat-label">Experiences</span>
            </div>

            <div className="stat-divider" />

            <div className="stat-column">
              <span className="stat-number">20+</span>
              <span className="stat-label">Project done</span>
            </div>

            <div className="stat-divider" />

            <div className="stat-column">
              <span className="stat-number">80+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Portrait Disc matching the design */}
        <div className="hero-visual">
          <div className="hero-circle-backdrop">
            {/* Ambient Orange Glow behind the disc */}
            <div className="circle-glow-halo" />

            {/* Main Dark Disc */}
            <div className="portrait-circle-frame">
              <img 
                src={currentPhotoSrc} 
                alt="Kavindu Heshan - Software Engineer" 
                className={`hero-real-photo ${photoStyle}`}
              />
            </div>

            {/* Floating Floating Pill: Code Architect */}
            <div className="floating-badge badge-top-right">
              <div className="badge-icon-box">
                <Terminal size={16} />
              </div>
              <div className="badge-text-box">
                <span className="badge-subtitle">Specialist</span>
                <span className="badge-title">Full-Stack Engineer</span>
              </div>
            </div>

            {/* Floating Pill: Available */}
            <div className="floating-badge badge-bottom-left">
              <span className="status-indicator-dot" />
              <span className="badge-status-text">Available for Projects</span>
            </div>

            {/* Image Style Toggle Switcher */}
            <div className="photo-style-switcher" title="Toggle photo presentation style">
              <button 
                className={`style-pill ${photoStyle === 'studio' ? 'active' : ''}`}
                onClick={() => setPhotoStyle('studio')}
              >
                Studio Tone
              </button>
              <button 
                className={`style-pill ${photoStyle === 'portrait' ? 'active' : ''}`}
                onClick={() => setPhotoStyle('portrait')}
              >
                Portrait Crop
              </button>
              <button 
                className={`style-pill ${photoStyle === 'raw' ? 'active' : ''}`}
                onClick={() => setPhotoStyle('raw')}
              >
                Full Photo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
