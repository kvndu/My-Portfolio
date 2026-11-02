import React, { useState } from 'react';
import './css/App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HireMeModal from './components/HireMeModal';
import ResumeModal from './components/ResumeModal';

// Pages / Sections
import Hero from './pages/Hero';
import Services from './pages/Services';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenHireModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsHireModalOpen(true);
  };

  const handleCloseHireModal = () => {
    setIsHireModalOpen(false);
    setSelectedService('');
  };

  const handleOpenResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="portfolio-app">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenHireModal={() => handleOpenHireModal()} />

      {/* Hero Section matching the mockup */}
      <main>
        <Hero 
          onOpenHireModal={() => handleOpenHireModal()} 
          onDownloadCV={handleOpenResumeModal}
        />

        {/* Specialized Services */}
        <Services onSelectService={(service) => handleOpenHireModal(service)} />

        {/* About Me & Engineering Journey */}
        <About 
          onDownloadCV={handleOpenResumeModal} 
          onOpenHireModal={() => handleOpenHireModal()} 
        />

        {/* Technical Arsenal & Skills */}
        <Skills />

        {/* Portfolio & Engineered Projects */}
        <Projects />

        {/* Contact Me Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <HireMeModal 
        isOpen={isHireModalOpen} 
        onClose={handleCloseHireModal}
        preselectedService={selectedService}
      />

      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={handleCloseResumeModal}
      />
    </div>
  );
}

export default App;
