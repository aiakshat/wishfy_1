import React, { useEffect, useRef, useState } from 'react';
import Icons from './icons/Icons';

const servicesMenuItems = [
  {
    slug: 'softscape-landscaping',
    title: 'Softscape Landscaping',
    description: 'Lawns, trees, plantations, flower beds & shrubs',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-4.5 0-8 3.5-8 8s3.5 8 8 8M12 3c4.5 0 8 3.5 8 8s-3.5 8-8 8M12 8c-2 1-3 3-3 5M12 11c2 1 3 3 3 5" />
      </svg>
    )
  },
  {
    slug: 'hardscape-landscaping',
    title: 'Hardscape Landscaping',
    description: 'Pathways, pergolas, decking & stone features',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18M9 6v6M15 12v6M9 12v6M15 6v6" />
      </svg>
    )
  },
  {
    slug: 'rooftop-landscaping',
    title: 'Rooftop Landscaping',
    description: 'Terrace gardens, sky lawns & outdoor seating',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 12v8a2 2 0 002 2h10a2 2 0 002-2v-8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9c0 0-2 2-2 4s2 3 2 3c0 0 2-1 2-3s-2-4-2-4z" />
      </svg>
    )
  },
  {
    slug: 'water-feature-landscaping',
    title: 'Water Feature Landscaping',
    description: 'Fountains, pools, ponds & water walls',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10c3 1.5 5-1.5 8 0s5 1.5 8 0M3 15c3 1.5 5-1.5 8 0s5 1.5 8 0M3 20c3 1.5 5-1.5 8 0s5 1.5 8 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m3-2l-1.5 1.5M9 4l1.5 1.5" />
      </svg>
    )
  },
  {
    slug: 'sustainable-landscaping',
    title: 'Sustainable Green Infrastructure',
    description: 'Drip irrigation, greenhouses, rainwater harvesting & more',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a7 7 0 007-7c0-3.86-7-11-7-11S5 10.14 5 14a7 7 0 007 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c-1.5 1.5-2 3-2 4.5" />
      </svg>
    )
  },
  {
    slug: 'large-scale-landscaping',
    title: 'Large-Scale Landscaping',
    description: 'Corporate campuses, townships & industrial parks',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V8a1 1 0 011-1h4a1 1 0 011 1v13M13 21v-7a1 1 0 011-1h4a1 1 0 011 1v7M8 10h1M8 14h1M16 16h1" />
      </svg>
    )
  },
  {
    slug: 'b2b-plant-supply',
    title: 'B2B Plant & Crop Supply',
    description: 'Bulk institutional nursery procurement & logistics',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c0-2 2-3 2-3s1 1 1 2-1.5 2-2 2z" />
      </svg>
    )
  },
  {
    slug: 'landscape-maintenance',
    title: 'Landscape Maintenance',
    description: 'Ongoing seasonal botanical care & upgrades',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6c-2 0-3.5 1.5-3.5 3.5S10 13 12 13s3.5-1.5 3.5-3.5S14 6 12 6z" />
      </svg>
    )
  }
];

export default function Header({isAboutPage = false, region, setRegion, mobileMenuOpen, setMobileMenuOpen, setActiveModal, showToast}) {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionHref = (id) => (isAboutPage ? `/#${id}` : `#${id}`);
  const serviceToggleRef = useRef(null);
  const servicePanelRef = useRef(null);

  const toggleServiceMenu = () => {
    setServicesMenuOpen((open) => !open);
  };

  const closeServiceMenu = () => {
    setServicesMenuOpen(false);
  };

  useEffect(() => {
    if (!servicesMenuOpen) return undefined;
    const handleClickOutside = (event) => {
      if (
        servicePanelRef.current &&
        !servicePanelRef.current.contains(event.target) &&
        serviceToggleRef.current &&
        !serviceToggleRef.current.contains(event.target)
      ) {
        closeServiceMenu();
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [servicesMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkHeader = !isAboutPage && (window.location.pathname === '/' || window.location.pathname === '/about');
  const showSolid = isScrolled || !isDarkHeader || mobileMenuOpen;
  const textColorClass = showSolid ? 'text-emerald-950 hover:text-emerald-600' : 'text-white/95 hover:text-white';

  return (
    <>
      {/* Header / Navbar */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${showSolid ? 'bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-md' : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-1">
            
            {/* Logo area */}
            <a href="/" className="flex items-center">
              <img 
                src="/images/log-trans.png" 
                alt="Wishfy Greens" 
                className={`w-auto object-contain transition-all duration-300 ${showSolid ? 'h-24' : 'h-32 md:h-36 brightness-0 invert'}`} 
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              
              {/* Services Mega Menu */}
              <div className="relative">
                <button 
                  ref={serviceToggleRef}
                  onClick={toggleServiceMenu}
                  className={`text-sm font-semibold transition-colors flex items-center gap-1 ${textColorClass}`}
                  aria-expanded={servicesMenuOpen}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Menu Dropdown */}
                {servicesMenuOpen && (
                  <div 
                    ref={servicePanelRef}
                    className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 bg-white border-t-4 border-emerald-500 shadow-2xl rounded-xl overflow-hidden animate-fadeIn"
                    style={{ width: 'min(calc(100vw - 2rem), 72rem)' }}
                  >
                    <div className="grid grid-cols-3 gap-0 p-8">
                      {servicesMenuItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={`/services/${item.slug}`}
                          onClick={() => { setServicesMenuOpen(false); }}
                          className="group/item p-4 rounded-xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all font-black text-lg">
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="font-black text-emerald-950 text-sm group-hover/item:text-emerald-600 transition-colors">{item.title}</h4>
                              <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-t border-emerald-200 px-8 py-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-black text-emerald-950">Need a Custom Solution?</p>
                        <p className="text-xs text-slate-600 mt-1">Book a consultation with our design experts</p>
                      </div>
                      <button
                        onClick={() => { setActiveModal('consultation'); setServicesMenuOpen(false); }}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all whitespace-nowrap"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <a href="/our-work" className={`text-sm font-semibold transition-colors ${textColorClass}`}>Our Work</a>
              <a href="/our-process" className={`text-sm font-semibold transition-colors ${textColorClass}`}>Our Process</a>
              <a href="/about" className={`text-sm font-semibold transition-colors ${textColorClass}`}>About Us</a>
              <a href="/contact-us" className={`text-sm font-semibold transition-colors ${textColorClass}`}>Contact Us</a>
            </nav>

            {/* Quick Action Area */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Regional selection widget */}
              <div className={`p-1.5 rounded-xl border flex items-center gap-1 transition-all duration-300 ${showSolid ? 'bg-emerald-50/80 border-emerald-100' : 'bg-white/10 border-white/20 text-white'}`}>
                <button 
                  onClick={() => { setRegion('india'); showToast("Switched currency & operational scope to India"); }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${region === 'india' ? 'bg-emerald-800 text-white shadow-md' : (showSolid ? 'text-emerald-900 hover:bg-emerald-100/50' : 'text-emerald-100 hover:bg-white/10')}`}
                >
                  🇮🇳 IN
                </button>
                <button 
                  onClick={() => { setRegion('uae'); showToast("Switched currency & operational scope to UAE"); }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${region === 'uae' ? 'bg-amber-600 text-white shadow-md' : (showSolid ? 'text-emerald-900 hover:bg-emerald-100/50' : 'text-emerald-100 hover:bg-white/10')}`}
                >
                  🇦🇪 UAE
                </button>
                <button 
                  onClick={() => { setRegion('global'); showToast("Showing global scope"); }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${region === 'global' ? 'bg-slate-700 text-white shadow-md' : (showSolid ? 'text-emerald-900 hover:bg-emerald-100/50' : 'text-emerald-100 hover:bg-white/10')}`}
                >
                  🌐 ALL
                </button>
              </div>

              <button 
                onClick={() => setActiveModal('consultation')}
                className={`text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${showSolid ? 'bg-emerald-900 hover:bg-emerald-800 text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white'}`}
              >
                Free Consultation
              </button>
            </div>

            {/* Hamburger Button for Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors ${showSolid ? 'text-emerald-950 hover:bg-emerald-50' : 'text-white hover:bg-white/10'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-emerald-100 py-4 px-6 animate-fadeIn">
            <div className="flex flex-col gap-4">
              
              {/* Mobile Services Submenu */}
              <div className="pt-2">
                <button 
                  onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                  className="text-base font-bold text-emerald-950 flex items-center justify-between w-full pb-3"
                >
                  Services
                  <svg className={`w-5 h-5 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {servicesMenuOpen && (
                  <div className="space-y-4 pl-3 border-l-2 border-emerald-200 mb-3">
                    {servicesMenuItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={`/services/${item.slug}`}
                        onClick={() => { setMobileMenuOpen(false); setServicesMenuOpen(false); }}
                        className="flex items-start gap-3 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-bold text-emerald-950">{item.title}</div>
                          <div className="text-xs text-slate-600 mt-0.5">{item.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/our-work" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-emerald-950">Our Work</a>
              <a href="/our-process" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-emerald-950">Our Process</a>
              <a href="/about" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-emerald-950">About Us</a>
              <a href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-emerald-950">Contact Us</a>
              <hr className="border-emerald-100" />
              
              {/* Region controls on Mobile */}
              <div className="flex items-center justify-between bg-emerald-50 p-2 rounded-xl">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Region View:</span>
                <div className="flex gap-1">
                  <button onClick={() => { setRegion('india'); setMobileMenuOpen(false); }} className={`px-2.5 py-1 text-xs font-bold rounded ${region === 'india' ? 'bg-emerald-800 text-white' : 'text-slate-600'}`}>IN</button>
                  <button onClick={() => { setRegion('uae'); setMobileMenuOpen(false); }} className={`px-2.5 py-1 text-xs font-bold rounded ${region === 'uae' ? 'bg-amber-600 text-white' : 'text-slate-600'}`}>UAE</button>
                  <button onClick={() => { setRegion('global'); setMobileMenuOpen(false); }} className={`px-2.5 py-1 text-xs font-bold rounded ${region === 'global' ? 'bg-slate-700 text-white' : 'text-slate-600'}`}>ALL</button>
                </div>
              </div>

              <button 
                onClick={() => { setActiveModal('consultation'); setMobileMenuOpen(false); }}
                className="w-full bg-emerald-900 text-white py-3 rounded-xl font-bold text-center shadow-md"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>

    </>
  );
}
