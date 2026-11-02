import React from 'react';
import { 
  Globe, 
  Download, 
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, LeetCodeIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import '../css/Hero.css';

// Import primary profile photo
import kavinduPortrait from '../assets/kavindu-portrait.jpg';

export default function Hero({ onOpenHireModal, onDownloadCV }) {
  const { personal } = portfolioData;

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

          {/* Floating Stats Card */}
          <div className="hero-stats-card glass-card">
            {personal.stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <div className="stat-divider" />}
                <div className="stat-column">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column: Clean Visual Portrait Disc */}
        <div className="hero-visual">
          <div className="hero-circle-backdrop">
            {/* Ambient Orange Glow behind the disc */}
            <div className="circle-glow-halo" />

            {/* Main Dark Disc */}
            <div className="portrait-circle-frame">
              <img 
                src={kavinduPortrait} 
                alt="Kavindu Heshan - Software Engineer" 
                className="hero-real-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
