import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, LeetCodeIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import '../css/Footer.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-text">KH<span className="logo-accent">.</span></span>
              <span className="logo-badge">DEV</span>
            </a>
            <p className="footer-brand-p">
              Crafting scalable web systems and modern digital products with engineering precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="footer-social-col">
            <h4 className="footer-heading">Connect With Me</h4>
            <div className="footer-social-icons">
              <a href={personal.socials.find(s => s.name === 'LinkedIn')?.url || '#'} target="_blank" rel="noreferrer" title="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={personal.socials.find(s => s.name === 'GitHub')?.url || '#'} target="_blank" rel="noreferrer" title="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="https://leetcode.com" target="_blank" rel="noreferrer" title="LeetCode">
                <LeetCodeIcon size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
                <InstagramIcon size={18} />
              </a>
            </div>
            <p className="footer-availability">
              <span className="status-dot" /> Available for new software engineering projects
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Kavindu Heshan. All rights reserved.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to Top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
