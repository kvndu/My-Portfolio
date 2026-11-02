import React from 'react';
import { Layers, Server, Database, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Services.css';

export default function Services({ onSelectService }) {
  const { services } = portfolioData;

  const iconMap = {
    Layers: <Layers size={28} className="service-icon" />,
    Server: <Server size={28} className="service-icon" />,
    Database: <Database size={28} className="service-icon" />,
    Cpu: <Cpu size={28} className="service-icon" />
  };

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">What I Offer</div>
          <h2 className="section-title">
            Specialized <span className="gradient-text">Engineering Services</span>
          </h2>
          <p className="section-subtitle">
            From architectural design to full-cycle deployment, I engineer performant solutions that scale smoothly with your business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card glass-card ${service.popular ? 'popular' : ''}`}
            >
              {service.popular && (
                <div className="popular-badge">
                  <span>Most Requested</span>
                </div>
              )}

              <div className="service-icon-wrapper">
                {iconMap[service.icon]}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>

              <div className="service-deliverables">
                <span className="deliverables-title">Key Capabilities:</span>
                <ul>
                  {service.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={15} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => onSelectService(service.title)} 
                className="service-action-btn"
              >
                <span>Discuss This Service</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
