import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SanctuarySection from './components/SanctuarySection';
import ProcessSection from './components/ProcessSection';
import GreenhouseSection from './components/GreenhouseSection';
import ProjectsSection from './components/ProjectsSection';
import UAEOperationsSection from './components/UAEOperationsSection';
import PlantSupplySection from './components/PlantSupplySection';
import ClientsSection from './components/ClientsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import SuccessModal from './components/SuccessModal';
import Icons from './components/icons/Icons';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import OurWorkPage from './pages/OurWorkPage';
import OurProcessPage from './pages/OurProcessPage';
import ContactUsPage from './pages/ContactUsPage';


export default function App() {
  const pathname = window.location.pathname;
  const isAboutPage = pathname === '/about';
  const isWorkPage = pathname === '/our-work';
  const isProcessPage = pathname === '/our-process';
  const isContactPage = pathname === '/contact-us';
  const isServicePage = pathname.startsWith('/services/');
  const serviceSlug = isServicePage ? pathname.replace(/^\/services\//, '').replace(/\/$/, '') : null;
  const [region, setRegion] = useState('global');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [notification, setNotification] = useState('');

  const showToast = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setActiveModal('success');
      setFormSubmitted(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-emerald-600 selection:text-white">
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce border border-emerald-500">
          <Icons.Check />
          <span className="text-sm font-medium">{notification}</span>
        </div>
      )}

      <Header
        isAboutPage={isAboutPage}
        region={region}
        setRegion={setRegion}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setActiveModal={setActiveModal}
        showToast={showToast}
      />
      {isAboutPage ? (
        <div className="pt-[104px] bg-emerald-950">
          <AboutPage setActiveModal={setActiveModal} />
        </div>
      ) : isWorkPage ? (
        <div className="pt-[104px] bg-slate-50">
          <OurWorkPage setActiveModal={setActiveModal} />
        </div>
      ) : isProcessPage ? (
        <div className="pt-[104px] bg-slate-50">
          <OurProcessPage setActiveModal={setActiveModal} />
        </div>
      ) : isContactPage ? (
        <div className="pt-[104px] bg-slate-50">
          <ContactUsPage setActiveModal={setActiveModal} />
        </div>
      ) : isServicePage && serviceSlug ? (
        <div className="pt-[104px] bg-slate-50">
          <ServicePage slug={serviceSlug} setActiveModal={setActiveModal} />
        </div>
      ) : (
        <>
          <HeroSection setActiveModal={setActiveModal} />
          <AboutSection />
          <ServicesSection setActiveModal={setActiveModal} />
          <SanctuarySection setActiveModal={setActiveModal} />
          <ProcessSection />
          <GreenhouseSection setActiveModal={setActiveModal} />
          <ProjectsSection region={region} setRegion={setRegion} />
          <UAEOperationsSection setActiveModal={setActiveModal} />
          <PlantSupplySection setActiveModal={setActiveModal} />
          <ClientsSection />
          <TestimonialsSection />
          <CTASection setActiveModal={setActiveModal} />
        </>
      )}
      <Footer />

      <ConsultationModal isOpen={activeModal === 'consultation'} onClose={() => setActiveModal(null)} onSubmit={handleFormSubmit} formSubmitted={formSubmitted} />
      <SuccessModal isOpen={activeModal === 'success'} onClose={() => setActiveModal(null)} />
    </div>
  );
}
