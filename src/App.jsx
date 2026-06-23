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
import useSEO from './hooks/useSEO';


export default function App() {
  const pathname = window.location.pathname;
  const isAboutPage = pathname === '/about';
  const isWorkPage = pathname === '/our-work';
  const isProcessPage = pathname === '/our-process';
  const isContactPage = pathname === '/contact-us';
  const isServicePage = pathname.startsWith('/services/');
  const serviceSlug = isServicePage ? pathname.replace(/^\/services\//, '').replace(/\/$/, '') : null;

  // Dynamic SEO & Structured Schema markup config
  let seoTitle = 'Premium Landscaping & Green Infrastructure';
  let seoDescription = 'Wishfy Greens delivers premium landscape design, climate-controlled greenhouses, rooftop terrace gardens, and B2B plant supply across India and UAE.';
  let seoSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wishfy Greens",
    "image": "https://wishfygreens.com/images/log-trans.png",
    "telephone": "+91 96256 79829",
    "email": "sales@wishfygreens.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor H-146 & H-147, Sec 63",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Suite 2001, The Citadel Tower, Marasi Dr, Business Bay",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    ]
  };

  if (isAboutPage) {
    seoTitle = 'About Us | Akshat Garg MD & CEO Message';
    seoDescription = 'Learn about Wishfy Greens since 2023. Meet Akshat Garg, Managing Director & CEO, and explore our licensed operations in India and Dubai.';
    seoSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Wishfy Greens",
      "description": "Learn about Wishfy Greens, premium landscape design, horticulture, and sustainable greenhouse developers."
    };
  } else if (isWorkPage) {
    seoTitle = 'Landscape & Greenhouse Project Portfolio';
    seoDescription = 'Browse our signature projects portfolio featuring heritage restoration at Qutub Minar, Varanasi Airport landscaping, and premium residential spaces.';
    seoSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Our Premium Portfolio - Wishfy Greens",
      "description": "Showcase of signature projects in India and UAE."
    };
  } else if (isProcessPage) {
    seoTitle = 'Our 4-Step Landscape Design & Installation Process';
    seoDescription = 'Discover our step-by-step landscape execution blueprint: from discovery & site consultation, custom design, to installation and maintenance.';
    seoSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How We Bring Your Vision To Life",
      "description": "4-step execution process for landscape and greenhouse projects.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Discovery & Consultation",
          "text": "On-site audit to understand requirements, soil, climate, and budget."
        },
        {
          "@type": "HowToStep",
          "name": "Custom Design Creation - Draftsman",
          "text": "Technical CAD layouts, architectural blueprints, and detailed 3D designs."
        },
        {
          "@type": "HowToStep",
          "name": "Structural Foundation & Installation",
          "text": "Laying solid structural foundations, drainage systems, and structural work."
        },
        {
          "@type": "HowToStep",
          "name": "Care & Maintenance",
          "text": "Customized care guides and scheduled maintenance routines."
        }
      ]
    };
  } else if (isContactPage) {
    seoTitle = 'Contact Us | Noida & Dubai Offices';
    seoDescription = 'Contact Wishfy Greens for premium landscape designs, horticulture consulting, and agricultural polyhouses. Noida: +91 96256 79829 | Dubai: +971 50 450 3699';
    seoSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Wishfy Greens",
      "description": "Contact information for Wishfy Greens in Noida, India and Dubai, UAE."
    };
  } else if (isServicePage && serviceSlug) {
    const serviceTitles = {
      'softscape-landscaping': 'Softscape Landscaping',
      'hardscape-landscaping': 'Hardscape Landscaping',
      'rooftop-landscaping': 'Rooftop & Terrace Landscaping',
      'water-feature-landscaping': 'Water Features & Koi Ponds',
      'sustainable-landscaping': 'Sustainable Green Infrastructure',
      'large-scale-landscaping': 'Large Scale Commercial Landscaping',
      'b2b-plant-supply': 'B2B Bulk Plant & Crop Supply',
      'landscape-maintenance': 'Landscape & Horticultural Maintenance'
    };
    const title = serviceTitles[serviceSlug] || 'Green Services';
    seoTitle = `${title} Services`;
    seoDescription = `Explore our expert ${title} capabilities, highlights, and specialized engineering projects built across India and the UAE.`;
    seoSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "description": seoDescription,
      "provider": {
        "@type": "Organization",
        "name": "Wishfy Greens"
      }
    };
  }

  useSEO({ title: seoTitle, description: seoDescription, schema: seoSchema });

  const [region, setRegion] = useState('global');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [notification, setNotification] = useState('');

  const showToast = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "b5d3a0c8-79c6-417f-b421-06acb2435ae3");
    formData.append("subject", "New Consultation Request - Wishfy Greens");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setActiveModal('success');
        showToast('Consultation request submitted successfully!');
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again later.');
    } finally {
      setFormSubmitted(false);
    }
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
          <UAEOperationsSection setActiveModal={setActiveModal} setRegion={setRegion} />
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
