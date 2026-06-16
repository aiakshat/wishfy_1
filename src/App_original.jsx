import React, { useState, useEffect } from 'react';

// Custom inline SVG icons for pristine rendering without external package issues
const Icons = {
  Check: () => (
    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Globe: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5A2.5 2.5 0 0019 9.5V8a2 2 0 00-2-2h-1M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
  ),
  Leaf: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ArrowRight: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  Cpu: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-3v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
    </svg>
  ),
  Droplet: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  ),
  Phone: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  MapPin: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Award: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  Shield: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Support: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
};

export default function App() {
  // Region toggle for multi-national localization
  const [region, setRegion] = useState('global'); // 'global', 'india', 'uae'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero Section Image Slider State
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);

  // Interactive Quote Calculator state
  const [calcArea, setCalcArea] = useState(1200);
  const [calcUnit, setCalcUnit] = useState('sqft'); // 'sqft' or 'sqm'
  const [calcService, setCalcService] = useState('terrace');
  const [calcGrade, setCalcGrade] = useState('premium');
  const [quotePrice, setQuotePrice] = useState(0);

  // Modals state
  const [activeModal, setActiveModal] = useState(null); // 'consultation', 'estimate', 'success'
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [notification, setNotification] = useState("");

  const heroSlides = [
    {
      title: "Terrace & Rooftop Gardens",
      desc: "Transforming empty commercial and residential roofs into vibrant green lounges, yoga spaces, and entertainment decks.",
      location: "Delhi NCR & Dubai",
      image: "https://images.unsplash.com/photo-1530731141654-5961adca3b66?auto=format&fit=crop&q=80&w=1200",
      tag: "Residential & Commercial"
    },
    {
      title: "Signature Heritage Restoration",
      desc: "Ongoing landscape curation and softscape engineering surrounding historic landmarks like Qutub Minar.",
      location: "ASI Monuments, India",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
      tag: "Heritage Preservation"
    },
    {
      title: "Precision Smart Polyhouses",
      desc: "High-yield smart climate agriculture set up for year-round crops and continuous smart monitor loops.",
      location: "Pan-India Logistics",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1200",
      tag: "Horticulture & IoT"
    },
    {
      title: "Desert Irrigation & Hardscape LLC",
      desc: "Providing high-durability plants and luxury green facades calibrated to withstand the intense UAE summer climates.",
      location: "Business Bay, Dubai",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200",
      tag: "UAE Operations"
    }
  ];

  // Auto-rotating Hero Slideshow
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  // Handle live quote updates
  useEffect(() => {
    // Base prices per unit in USD equivalent
    const baseRates = {
      terrace: { eco: 12, premium: 25, ultra: 45 },
      landscape: { eco: 8, premium: 18, ultra: 35 },
      greenhouse: { eco: 15, premium: 30, ultra: 60 },
      balcony: { eco: 10, premium: 22, ultra: 40 },
      water: { eco: 20, premium: 45, ultra: 85 }
    };

    const multiplier = calcUnit === 'sqm' ? 10.76 : 1.0;
    const rate = baseRates[calcService]?.[calcGrade] || 15;
    const computed = Math.round(calcArea * multiplier * rate);
    setQuotePrice(computed);
  }, [calcArea, calcUnit, calcService, calcGrade]);

  const showToast = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 4000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setActiveModal('success');
      setFormSubmitted(false);
    }, 800);
  };

  // Currencies based on region view
  const formatCurrency = (val) => {
    if (region === 'uae') {
      return `AED ${(val * 3.67).toLocaleString()}`;
    }
    if (region === 'india') {
      return `₹ ${(val * 83).toLocaleString()}`;
    }
    return `$ ${val.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-emerald-600 selection:text-white">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce border border-emerald-500">
          <Icons.Check />
          <span className="text-sm font-medium">{notification}</span>
        </div>
      )}

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo area */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center shadow-lg border border-emerald-400">
                <span className="text-white font-extrabold text-2xl tracking-tighter">W</span>
              </div>
              <div>
                <span className="text-xl font-black text-emerald-950 tracking-wider block leading-none">WISHFY</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Greens</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-semibold text-emerald-950 hover:text-emerald-600 transition-colors">About Us</a>
              <a href="#services" className="text-sm font-semibold text-emerald-950 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#process" className="text-sm font-semibold text-emerald-950 hover:text-emerald-600 transition-colors">Our Process</a>
              <a href="#greenhouse" className="text-sm font-semibold text-emerald-950 hover:text-emerald-600 transition-colors">Smart Tech</a>
              <a href="#projects" className="text-sm font-semibold text-emerald-950 hover:text-emerald-600 transition-colors">Signature Projects</a>
              <a href="#supply" className="text-sm font-semibold text-emerald-950 hover:text-emerald-600 transition-colors">B2B Supply</a>
            </nav>

            {/* Quick Action Area */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Regional selection widget */}
              <div className="bg-emerald-50/80 p-1.5 rounded-xl border border-emerald-100 flex items-center gap-1">
                <button 
                  onClick={() => { setRegion('india'); showToast("Switched currency & operational scope to India"); }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${region === 'india' ? 'bg-emerald-800 text-white shadow-md' : 'text-emerald-900 hover:bg-emerald-100/50'}`}
                >
                  🇮🇳 IN
                </button>
                <button 
                  onClick={() => { setRegion('uae'); showToast("Switched currency & operational scope to UAE"); }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${region === 'uae' ? 'bg-amber-600 text-white shadow-md' : 'text-emerald-900 hover:bg-emerald-100/50'}`}
                >
                  🇦🇪 UAE
                </button>
                <button 
                  onClick={() => { setRegion('global'); showToast("Showing global scope"); }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${region === 'global' ? 'bg-slate-700 text-white shadow-md' : 'text-emerald-900 hover:bg-emerald-100/50'}`}
                >
                  🌐 ALL
                </button>
              </div>

              <button 
                onClick={() => setActiveModal('consultation')}
                className="bg-emerald-900 hover:bg-emerald-800 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Free Consultation
              </button>
            </div>

            {/* Hamburger Button for Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-emerald-950 hover:bg-emerald-50 rounded-xl"
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
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-emerald-950">About Us</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-emerald-950">Services</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-emerald-950">Our Process</a>
              <a href="#greenhouse" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-emerald-950">Smart Tech</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-emerald-950">Signature Projects</a>
              <a href="#supply" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-emerald-950">B2B Supply</a>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-900 text-white py-20 lg:py-32">
        {/* Abstract background vector shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-300">Where Nature Meets Innovation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Creating Extraordinary Landscapes Across <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">India & UAE</span>
              </h1>

              <p className="text-lg text-emerald-100 max-w-2xl mx-auto lg:mx-0 font-medium">
                Transforming outdoor spaces into sustainable, beautiful, and functional environments through innovative landscaping, horticulture, greenhouse solutions, and green infrastructure.
              </p>

              {/* Highlight Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0 text-left pt-2">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-emerald-400">500+</div>
                  <div className="text-xs text-emerald-200">Projects Completed</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-emerald-400">50+</div>
                  <div className="text-xs text-emerald-200">Horticulturists & Eng.</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-emerald-400">1 Cr+</div>
                  <div className="text-xs text-emerald-200">Plants Supplied</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-amber-400">2 Co.</div>
                  <div className="text-xs text-emerald-200">India & UAE Presence</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="#services" 
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-8 py-4 rounded-xl text-center shadow-lg hover:shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
                >
                  Explore Our Services
                </a>
                <button 
                  onClick={() => setActiveModal('consultation')}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl text-center border border-white/20 backdrop-blur-sm transition-all hover:border-white/40"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>

            {/* Hero Right: High-Fidelity Interactive Slider/Carousel */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-[500px] lg:max-w-none w-full">
                {/* Visual Accent Borders */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500 to-amber-500 opacity-25 blur-lg"></div>
                
                {/* Dynamic Slide Frame */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 border-4 border-white/10 shadow-2xl transition-all duration-500">
                  
                  {/* Slide Background Image */}
                  <img 
                    src={heroSlides[heroSlideIdx].image} 
                    alt={heroSlides[heroSlideIdx].title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-45"
                    onError={(e) => {
                      // Fallback in case of network blocking
                      e.target.style.display = 'none';
                    }}
                  />
                  
                  {/* Decorative mesh background pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  {/* Gradient bottom fog */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Slide details container */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 space-y-3 z-10">
                    <div className="flex justify-between items-start">
                      <span className="bg-emerald-500 text-slate-950 text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full">
                        {heroSlides[heroSlideIdx].tag}
                      </span>
                      <span className="text-white/60 text-xs font-bold">
                        {heroSlideIdx + 1} / {heroSlides.length}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                      {heroSlides[heroSlideIdx].title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                      {heroSlides[heroSlideIdx].desc}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        <Icons.MapPin className="w-4 h-4 shrink-0" />
                        <span className="text-[11px] font-black uppercase tracking-wider">{heroSlides[heroSlideIdx].location}</span>
                      </div>

                      {/* Selector buttons (Previous / Next) */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setHeroSlideIdx((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                          aria-label="Previous Slide"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => setHeroSlideIdx((prev) => (prev + 1) % heroSlides.length)}
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                          aria-label="Next Slide"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Dot navigation indicators */}
                  <div className="absolute top-6 left-6 flex gap-1.5 z-10">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setHeroSlideIdx(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${heroSlideIdx === idx ? 'w-6 bg-emerald-400' : 'w-2 bg-white/40'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Badges Bar / Quick highlights */}
      <section className="bg-emerald-50 py-8 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-emerald-900 font-extrabold text-sm tracking-wider uppercase">
            <span className="flex items-center gap-2">
              <Icons.Check /> MSME REGISTERED COMPANY
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> NHM EMPANELED VENDOR
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> LICENSED HORTICULTURISTS
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> STARTUP REGISTRATION: GOUP
            </span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side text and profile details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Rooted In Design, Driven By Sustainability</span>
                <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
                  About Wishfy Greens
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Founded in 2023 in Noida, Wishfy Greens is on a mission to bring green infrastructure to every space in India. With a team of 50+ horticulturists, landscape architects, and agricultural engineers, we have delivered 500+ projects, ranging from elegant balcony gardens to sprawling 4,000 sq. m. high-yield polyhouse farms.
                </p>
                <p>
                  Our multidisciplinary team combines landscape architecture, horticulture, agricultural engineering, and meticulous execution expertise to deliver solutions that are aesthetically inspiring, environmentally responsible, and built to last.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-900 flex-shrink-0 text-white flex items-center justify-center font-bold text-xl border-2 border-emerald-400">
                  AG
                </div>
                <div>
                  <blockquote className="text-sm font-semibold italic text-emerald-950">
                    "At Wishfy, we don't just build green spaces - we create experiences that elevate everyday living, creating an environmental legacy."
                  </blockquote>
                  <cite className="block mt-2 text-xs font-bold uppercase tracking-widest text-emerald-600 not-italic">
                    — Akshat Garg (MD & CEO, Wishfy Greens)
                  </cite>
                </div>
              </div>
            </div>

            {/* Right side checkmark grid (Why choose us) */}
            <div className="lg:col-span-5 bg-gradient-to-tr from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-400 rounded-full blur-2xl"></div>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-emerald-300 mb-6">Why Industry Leaders Choose Us</h3>
              
              <ul className="space-y-4">
                {[
                  { title: "Licensed Horticulturists", desc: "Our teams hold formal botanic & agricultural qualifications" },
                  { title: "NHM Empaneled Vendor", desc: "Approved government partners for large-scale landscaping" },
                  { title: "MSME Registered Company", desc: "Corporate-grade quality guarantees and governance" },
                  { title: "Pan-India Operations", desc: "Robust sourcing capability across all geographic states" },
                  { title: "UAE Licensed Entity", desc: "Fully operational locally with Dubai Commercial License" },
                  { title: "End-to-End Project Management", desc: "From concept blueprint to custom maintenance handovers" },
                  { title: "Sustainable Design Expertise", desc: "Smart water conservation & low-maintenance ecosystems" }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start border-b border-emerald-800/60 pb-3 last:border-b-0 last:pb-0">
                    <div className="bg-emerald-500/20 p-1 rounded mt-0.5">
                      <Icons.Check />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section with Pictures Directly Above the Text */}
      <section id="services" className="py-20 lg:py-32 bg-slate-50 border-t border-emerald-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Crafting Green Experiences</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
              Comprehensive Green Solutions
            </h2>
            <p className="text-base text-slate-600">
              From concept and design to execution and maintenance, we offer complete landscaping and horticulture services tailored to residential, commercial, hospitality, and institutional projects.
            </p>
          </div>

          {/* Service Cards Grid with visual images placed directly above */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Landscape Design & Development",
                desc: "Custom-designed outdoor spaces that combine beauty, functionality, and sustainability with detailed blueprints & 3D renders.",
                tag: "Bespoke",
                image: "https://images.unsplash.com/photo-1558904541-efa8c1a68fc6?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Softscape Landscaping",
                desc: "Lawns, ornamental plants, trees, flower beds, shrubs, and meticulous seasonal green installations perfectly optimized for local climates.",
                tag: "Botanical",
                image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Hardscape Landscaping",
                desc: "Pergolas, pathways, high-grade decks, stone features, seating zones, and beautiful structural outdoor additions built to endure.",
                tag: "Structure",
                image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Terrace & Rooftop Gardens",
                desc: "Transform empty, high-temperature concrete roofs into vibrant green gardens, outdoor cafes, and sky-lawn community spaces.",
                tag: "Urban Space",
                image: "https://images.unsplash.com/photo-1530731141654-5961adca3b66?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Water Features & Koi Ponds",
                desc: "Add peaceful motion with custom-filtration koi ponds, modern fountains, cascading water walls, and reflecting pools.",
                tag: "Serenity",
                image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Greenhouses & Polyhouses",
                desc: "Double-layer naturally ventilated or smart high-tech commercial climate structures designed for continuous yield.",
                tag: "Precision Agri",
                image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Precision Agriculture & IoT",
                desc: "Nutrient dosing automation, real-time water filtration & recycle loops, plus fully smart IoT app control.",
                tag: "Hi-Tech",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Landscape Maintenance",
                desc: "Experienced, ongoing expert care plans with seasonal upgrades for private gardens, corporate campuses, and hotels.",
                tag: "Lifecycle",
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600"
              }
            ].map((srv, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-emerald-100/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-emerald-200"
              >
                <div>
                  {/* Photo Space Above the Text */}
                  <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      onError={(e) => {
                        // Safe fallback styled gradient backplane
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                        {srv.tag}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 text-emerald-300 text-xs font-bold">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Card text details */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-black text-emerald-950 group-hover:text-emerald-700 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 pt-0">
                  <button 
                    onClick={() => {
                      setCalcService(
                        srv.title.toLowerCase().includes('terrace') ? 'terrace' :
                        srv.title.toLowerCase().includes('greenhouse') ? 'greenhouse' :
                        srv.title.toLowerCase().includes('water') ? 'water' : 'landscape'
                      );
                      setActiveModal('estimate');
                    }}
                    className="w-full py-2.5 text-xs text-center border border-slate-200 group-hover:border-emerald-500 rounded-xl font-bold group-hover:bg-emerald-900 group-hover:text-white transition-all flex items-center justify-center gap-2 text-slate-700"
                  >
                    <span>Get Cost Estimate</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quote & Landscape Estimator Section */}
      <section id="estimator" className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left description text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Instantly Gauge Your Investment</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Plan Your Green Sanctuary Today
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you're developing an intimate residential balcony in Noida, a golf course estate near Delhi, or a sustainable commercial landscape in Dubai, configure this estimator to review our initial cost modeling structure.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icons.Check />
                  <p className="text-xs text-slate-300"><strong className="text-white">Customization Allowed:</strong> Includes initial excavation, design blueprint consultation, and plant acclimation periods.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icons.Check />
                  <p className="text-xs text-slate-300"><strong className="text-white">Tax Benefits:</strong> MSME / NHM-empaneled options support eligible agribusiness operations.</p>
                </div>
              </div>
            </div>

            {/* Right Estimator Tool Form card */}
            <div className="lg:col-span-7 bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-extrabold text-emerald-950 mb-6">Interactive Project Calculator</h3>
              
              <div className="space-y-6">
                
                {/* Service type Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">Space Category</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'terrace', label: 'Terrace Garden' },
                      { id: 'landscape', label: 'Commercial Softscape' },
                      { id: 'greenhouse', label: 'Horticulture Greenhouses' },
                      { id: 'balcony', label: 'Premium Balcony' },
                      { id: 'water', label: 'Ponds & Water Features' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => setCalcService(opt.id)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${calcService === opt.id ? 'bg-emerald-900 border-emerald-900 text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grade Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">Execution Grade</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'eco', label: 'Standard', sub: 'Eco-Friendly Setup' },
                      { id: 'premium', label: 'Premium Choice', sub: 'Imported Species' },
                      { id: 'ultra', label: 'Bespoke Luxury', sub: 'Rare Flora & Smart Automation' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => setCalcGrade(opt.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${calcGrade === opt.id ? 'bg-emerald-50 border-emerald-800 ring-2 ring-emerald-900/10' : 'bg-slate-50 border-slate-200'}`}
                      >
                        <span className="block text-xs font-black text-slate-900">{opt.label}</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5 leading-none">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area Input with slider and numerical readout */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Approximate Footprint Area</label>
                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                      <button 
                        onClick={() => setCalcUnit('sqft')}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded ${calcUnit === 'sqft' ? 'bg-white text-emerald-950 shadow-sm' : 'text-slate-500'}`}
                      >
                        SQ. FT.
                      </button>
                      <button 
                        onClick={() => setCalcUnit('sqm')}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded ${calcUnit === 'sqm' ? 'bg-white text-emerald-950 shadow-sm' : 'text-slate-500'}`}
                      >
                        SQ. M.
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-9">
                      <input 
                        type="range" 
                        min="200" 
                        max={calcUnit === 'sqft' ? 10000 : 1000} 
                        step="50"
                        value={calcArea} 
                        onChange={(e) => setCalcArea(Number(e.target.value))}
                        className="w-full accent-emerald-800" 
                      />
                    </div>
                    <div className="col-span-3 text-right">
                      <span className="text-base font-black text-slate-900">{calcArea}</span>
                      <span className="text-xs text-slate-500 ml-1">{calcUnit}</span>
                    </div>
                  </div>
                </div>

                {/* Estimation display summary */}
                <div className="p-5 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-center sm:text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-1">Estimated Baseline Valuation</span>
                    <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-300">
                      {formatCurrency(quotePrice)}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1">Excludes customized landscaping layout fees.</span>
                  </div>
                  <button 
                    onClick={() => {
                      showToast(`Project estimate saved: ${formatCurrency(quotePrice)}`);
                      setActiveModal('consultation');
                    }}
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-6 py-3 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider"
                  >
                    Lock Estimate & Book
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Road Map (How we bring your vision to life) */}
      <section id="process" className="py-20 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Seamless Execution Blueprint</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
              How We Bring Your Vision To Life
            </h2>
            <p className="text-base text-slate-600">
              A proven 4-step methodology that transforms wild ideas into breathtaking, long-lasting landscapes.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid md:grid-cols-4 gap-8 relative">
            
            {/* Connecting lines desktop */}
            <div className="hidden md:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-slate-100 z-0"></div>

            {[
              {
                step: "Step 1",
                title: "Discovery & Consultation",
                desc: "We schedule an on-site audit to understand your requirements, analyze soil/climate constraints, and define budget limits."
              },
              {
                step: "Step 2",
                title: "Custom Design Creation",
                desc: "Our architectural draftspersons draw blueprints, design precise 3D visualizations, and detail lists for matching plants."
              },
              {
                step: "Step 3",
                title: "Expert Installation",
                desc: "Highly qualified landscapers prepare structural foundations, organize drip water layouts, and deploy certified plant flora safely."
              },
              {
                step: "Step 4",
                title: "Care & Maintenance",
                desc: "We hand over comprehensive care guides along with automated maintenance routines ensuring your system continues to flourish."
              }
            ].map((st, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative z-10 hover:shadow-lg transition-shadow">
                {/* Round Badge Number */}
                <div className="w-12 h-12 bg-emerald-900 rounded-full text-white flex items-center justify-center font-black mb-6 border-4 border-emerald-500/20 text-base shadow-md mx-auto">
                  {idx + 1}
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block text-center mb-2">
                  {st.step}
                </span>
                
                <h3 className="text-base font-black text-emerald-950 text-center mb-3">
                  {st.title}
                </h3>
                
                <p className="text-xs text-slate-600 text-center leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Greenhouse Section: Refactored with Full-Bleed Thematic Glasshouse Background */}
      <section 
        id="greenhouse" 
        className="py-24 lg:py-36 text-white scroll-mt-20 overflow-hidden relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2, 44, 34, 0.96), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1600')`,
        }}
      >
        {/* Absolute geometric light accents */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-400 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Styled Glassmorphic overlay block containing the text info */}
            <div className="bg-slate-900/75 border border-emerald-500/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
              
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 block">Future-Ready Farming Solutions</span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  Greenhouses & Polyhouses
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  From climate-controlled greenhouses to advanced aeroponic cultivation, we create systems built for consistent growth, clean produce, and sustainable living. Engineered for efficiency and long-term performance, our solutions make modern cultivation accessible, intelligent, and beautifully streamlined.
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">150+</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Commercial Setups</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">3-5X</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Higher Yield</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">365</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Days Production</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">2-3 Yr</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Typical ROI</div>
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Icons.Check />
                  <span>Climate Control Systems</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icons.Check />
                  <span>Precision Drip Irrigation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icons.Check />
                  <span>Automated Fertigation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icons.Check />
                  <span>Hydroponic & Aeroponic Labs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icons.Check />
                  <span>IoT Smart Mobile Dashboards</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icons.Check />
                  <span>Water Recycling & Filtration</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    setCalcService('greenhouse');
                    setActiveModal('consultation');
                  }}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-center text-xs uppercase tracking-wider shadow-lg hover:shadow-emerald-500/20 transition-all"
                >
                  Request Agri Consultation
                </button>
                <a 
                  href="#estimator"
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-6 py-3.5 rounded-xl text-center text-xs uppercase tracking-wider transition-all"
                >
                  Estimate Agri-Plot Cost
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Signature Projects Section */}
      <section id="projects" className="py-20 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Our Premium Portfolio</span>
              <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
                Signature Landscapes Across India & UAE
              </h2>
              <p className="text-base text-slate-600 max-w-2xl">
                We handle landscape creation and horticulture development for heritage landmarks, national airports, premium residential communities, and retail chains.
              </p>
            </div>

            <div className="flex gap-4 shrink-0 bg-emerald-50/80 p-1.5 rounded-xl border border-emerald-100">
              {['all', 'india', 'uae'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setRegion(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-all ${region === cat ? 'bg-emerald-900 text-white shadow-md' : 'text-emerald-900 hover:bg-emerald-100/50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Qutub Minar Heritage Landscaping",
                desc: "Ongoing structural design and detailed softscape development preserving cultural landscape around New Delhi's iconic monument.",
                loc: "New Delhi, India",
                region: "india",
                imgDesc: "Heritage Restoration"
              },
              {
                title: "Varanasi & Darbhanga Airports",
                desc: "High-visibility landscape development and mass interior/exterior flora deployment across major transportation hubs.",
                loc: "Uttar Pradesh & Bihar, India",
                region: "india",
                imgDesc: "Transport Hub"
              },
              {
                title: "DLF Camellias Residential Turf",
                desc: "Premium residential rooftop sky-lawns, high-durability modern golf-course grade lawns, and custom pathways.",
                loc: "Gurugram, India",
                region: "india",
                imgDesc: "Luxury Residential"
              },
              {
                title: "Downtown Dubai Corporate Patios",
                desc: "Low-maintenance local desert flora softscape and precision drip system designs integrated for heat resistance.",
                loc: "Business Bay, Dubai",
                region: "uae",
                imgDesc: "Desert Hardscaping"
              }
            ].filter(p => region === 'all' || region === 'global' || p.region === region).map((proj, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                
                {/* Visual Image Placeholder */}
                <div className="aspect-video w-full bg-slate-800 relative flex items-center justify-center p-6 text-center text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px] group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="relative z-10 space-y-1">
                    <Icons.Leaf className="w-8 h-8 text-emerald-400 mx-auto opacity-75" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 block">{proj.imgDesc}</span>
                  </div>
                  
                  {/* Absolute region sticker */}
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-[9px] font-bold tracking-widest text-white px-2.5 py-1 rounded-full uppercase">
                    {proj.region === 'india' ? '🇮🇳 India Operations' : '🇦🇪 UAE Operations'}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Icons.MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-[11px] font-bold tracking-wider uppercase">{proj.loc}</span>
                  </div>
                  <h3 className="text-base font-black text-emerald-950 group-hover:text-emerald-700 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Portfolio stats box */}
          <div className="mt-12 bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex flex-wrap justify-around items-center gap-6">
            <div className="text-center sm:text-left">
              <span className="text-2xl font-black text-emerald-950">50+</span>
              <span className="text-xs text-slate-600 block">Residential Communities Served</span>
            </div>
            <div className="h-8 w-px bg-emerald-200 hidden sm:block"></div>
            <div className="text-center sm:text-left">
              <span className="text-2xl font-black text-emerald-950">30+</span>
              <span className="text-xs text-slate-600 block">Parks & Public Spaces Restored</span>
            </div>
            <div className="h-8 w-px bg-emerald-200 hidden sm:block"></div>
            <div className="text-center sm:text-left">
              <span className="text-2xl font-black text-emerald-950">15+</span>
              <span className="text-xs text-slate-600 block">Luxury Hotels & Resorts Maintained</span>
            </div>
          </div>

        </div>
      </section>

      {/* UAE Operations Section (Showcases UAE Commercial details explicitly) */}
      <section id="uae-ops" className="py-20 lg:py-32 bg-slate-50 border-y border-emerald-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side License Details in a styled UI Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 relative">
              <div className="absolute top-4 right-4 text-emerald-600 font-bold text-[10px] tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded">
                Dubai Commercial License
              </div>
              
              <h3 className="text-xl font-extrabold text-emerald-950 mb-1">WISHFY GREENS LANDSCAPE & GARDENING WORKS LLC</h3>
              <p className="text-xs text-slate-400 mb-6">Government of Dubai • License No: 1624758</p>

              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Legal Type</span>
                    <strong className="text-slate-900 block mt-0.5">Limited Liability Company (LLC)</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Operational Area</span>
                    <strong className="text-slate-900 block mt-0.5">Dubai / UAE Operations</strong>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Manager Director</span>
                    <strong className="text-slate-900 block mt-0.5">Akshat Garg</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Registered Address</span>
                    <strong className="text-slate-900 block mt-0.5">The Citadel Tower, Business Bay, Dubai</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Permitted Trade Activities:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Land Preparation Works", "Irrigation Systems Maintenance", "Landscape & Gardening execution"].map((act, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-[10px] font-bold">
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side Text Block */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Expanding Green Excellence</span>
              <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight leading-tight">
                Premium Landscaping Solutions in the UAE
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Wishfy Greens Landscape & Gardening Works LLC brings over 500+ projects' worth of engineering expertise directly to Dubai. We offer high-durability hardscapes, tailored irrigation, and structural vertical gardens built to handle the intense climate of Dubai.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Golf Course Landscaping",
                  "Public Space Beautification",
                  "Commercial Rooftops",
                  "Smart Irrigation Systems"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-slate-800 text-xs font-bold">
                    <Icons.Check />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => {
                    setRegion('uae');
                    setActiveModal('consultation');
                  }}
                  className="bg-emerald-900 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md text-sm flex items-center gap-2"
                >
                  <span>Connect with Dubai Team</span>
                  <Icons.ArrowRight />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Plant Supply Section */}
      <section id="supply" className="py-20 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column Text Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Bulk B2B Plant Sourcing & Logistics</span>
                <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
                  Delivering Green At Scale
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Wishfy Greens is one of India's largest and most reliable institutional suppliers of plants and agricultural crops. We fulfill mass-volume requirements for leading direct-to-consumer online gardening brands, real-estate landscapes, and public municipalities.
                </p>
              </div>

              {/* Mass Supply stats */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-emerald-100 grid grid-cols-3 gap-6 text-center">
                <div>
                  <strong className="text-2xl sm:text-3xl font-black text-emerald-950">1 Crore+</strong>
                  <span className="text-[10px] text-slate-500 block uppercase tracking-widest mt-1">Plants Delivered</span>
                </div>
                <div className="border-x border-slate-200">
                  <strong className="text-2xl sm:text-3xl font-black text-emerald-950">100%</strong>
                  <span className="text-[10px] text-slate-500 block uppercase tracking-widest mt-1">Logistical Guarantee</span>
                </div>
                <div>
                  <strong className="text-2xl sm:text-3xl font-black text-emerald-950">Pan-India</strong>
                  <span className="text-[10px] text-slate-500 block uppercase tracking-widest mt-1">Fulfillment</span>
                </div>
              </div>

              {/* Partnered Brand Badges */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">Trusted Supply partners including:</span>
                <div className="flex flex-wrap items-center gap-4 text-emerald-900 font-extrabold text-sm uppercase tracking-widest">
                  <span className="bg-slate-100 px-4 py-2 rounded-lg">Ugaoo</span>
                  <span className="bg-slate-100 px-4 py-2 rounded-lg">FNP (Ferns N Petals)</span>
                  <span className="bg-slate-100 px-4 py-2 rounded-lg">Gamlaa</span>
                  <span className="bg-slate-100 px-4 py-2 rounded-lg">Jindal</span>
                  <span className="bg-slate-100 px-4 py-2 rounded-lg">Radisson</span>
                </div>
              </div>
            </div>

            {/* Right Column visual layout */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-square bg-slate-950 text-white rounded-3xl p-8 overflow-hidden relative border border-emerald-500/20 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="relative z-10 space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded">B2B Distribution</span>
                  <h3 className="text-xl font-bold tracking-tight">Bulk Nursery Procurement</h3>
                  <p className="text-xs text-slate-300">
                    We manage climate-controlled nursery inventories containing tens of thousands of ornamental foliage, air-purifying, and structural hedges available for immediate corporate logistics.
                  </p>
                </div>

                <div className="relative z-10 space-y-4 pt-6">
                  <hr className="border-white/10" />
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Looking for bulk plant orders?</span>
                    <button 
                      onClick={() => setActiveModal('consultation')}
                      className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Inquire Bulk Prices</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clients Section (Grid representation based on brochure page 15) */}
      <section id="clients" className="py-20 bg-slate-50 border-t border-emerald-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Our Network of Patrons</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
              Trusted By Leading Organizations
            </h2>
            <p className="text-sm text-slate-600">
              We deliver sustainable green solutions across state administrations, private corporate tech parks, luxury developers, and hospitality icons.
            </p>
          </div>

          {/* Clean Categorized Clients presentation */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Gov & Heritage */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600 block">Heritage & Government</span>
              <ul className="space-y-2 text-sm text-slate-700 font-bold">
                <li>• Archaeological Survey of India (ASI)</li>
                <li>• NDMC (New Delhi Municipal Council)</li>
                <li>• Rail Vikas Nigam Limited (RVNL)</li>
                <li>• Public Works Department (PWD Delhi)</li>
              </ul>
            </div>

            {/* Corporate & Retail */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600 block">Retail & Corporate Icons</span>
              <ul className="space-y-2 text-sm text-slate-700 font-bold">
                <li>• Westside (Tata Group Retail)</li>
                <li>• DLF Group (The Camellias)</li>
                <li>• Barista Coffee Company</li>
                <li>• TK Elevators</li>
              </ul>
            </div>

            {/* Hospitality & Healthcare */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600 block">Hospitality & Care</span>
              <ul className="space-y-2 text-sm text-slate-700 font-bold">
                <li>• Radisson Hotels</li>
                <li>• The Imperial, New Delhi</li>
                <li>• ASG Eye Hospitals</li>
                <li>• Maisang Bamboo Resort</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Creating Spaces That Inspire</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Wishfy Greens transformed our commercial patio areas. Their horticulturists designed a low-maintenance, heat-resistant layout that looks pristine year-round.",
                author: "Property Manager, Corporate Campus",
                rating: 5
              },
              {
                quote: "Our high-tech smart polyhouse setup was delivered ahead of schedule. The ROI is exactly where their team projected - a major milestone for our business.",
                author: "Director, Agribusiness Enterprise",
                rating: 5
              },
              {
                quote: "Meticulous work on our balcony vertical gardens. The water conservation drainage system they created is brilliant, cleanly recycling runoff water without mess.",
                author: "Penthouse Owner, DLF Camellias",
                rating: 5
              }
            ].map((test, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative">
                {/* Visual quote indicator icon */}
                <span className="text-emerald-200 text-6xl font-serif absolute top-4 left-4 leading-none select-none">“</span>
                <div className="relative z-10 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="text-amber-500">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    {test.quote}
                  </p>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-emerald-950">{test.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="bg-emerald-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 block">Ready To Elevate Your Environment?</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Let's Build A Greener Future Together
          </h2>
          <p className="text-base text-emerald-100 max-w-2xl mx-auto">
            Whether you are planning a high-yield smart agricultural greenhouse, a lush private terrace garden, or sprawling hotel softscaping, our specialized horticulturists are ready to collaborate.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setActiveModal('consultation')}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-8 py-4 rounded-xl text-center shadow-lg"
            >
              Request Free Consultation
            </button>
            <button 
              onClick={() => setActiveModal('estimate')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all"
            >
              Get Estimated Scope
            </button>
          </div>
        </div>
      </section>

      {/* Footer (Detailed with operational addresses based on brochure page 16) */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            
            {/* Column 1: Info and brief */}
            <div className="md:col-span-4 space-y-6">
              <a href="#" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-900 rounded-xl flex items-center justify-center border border-emerald-400">
                  <span className="text-white font-extrabold text-xl tracking-tighter">W</span>
                </div>
                <div>
                  <span className="text-lg font-black tracking-wider block leading-none text-white">WISHFY</span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400">Greens</span>
                </div>
              </a>
              <p className="text-xs text-slate-400 leading-relaxed">
                Wishfy Greens is a premium landscaping, horticulture design, precision agricultural greenhouse developer, and smart landscape maintenance company serving clients across India and the UAE.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400">Quick Links</h4>
              <nav className="flex flex-col gap-2.5 text-xs text-slate-400 font-semibold">
                <a href="#about" className="hover:text-emerald-400 transition-colors">About Wishfy</a>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Our Services</a>
                <a href="#process" className="hover:text-emerald-400 transition-colors">Our Process</a>
                <a href="#greenhouse" className="hover:text-emerald-400 transition-colors">Smart Greenhouse</a>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">Portfolio</a>
              </nav>
            </div>

            {/* Column 3: India HQ Office Address */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400">🇮🇳 India Headquarters</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p className="font-bold text-white">Wishfy Greens Private Limited</p>
                <p>2nd Floor H-146 & H-147, Sec 63, Noida, Uttar Pradesh, 201301</p>
                <p className="pt-2 flex items-center gap-2">
                  <Icons.Phone className="text-emerald-400" />
                  <span>+91 96256 79829</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉ sales@wishfygreens.com</span>
                </p>
              </div>
            </div>

            {/* Column 4: UAE Office Address */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-500">🇦🇪 Dubai Headquarters</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p className="font-bold text-white">Wishfy Greens Landscape Works LLC</p>
                <p>Suite 2001, The Citadel Tower, Marasi Dr, Business Bay, Dubai, UAE</p>
                <p className="pt-2 flex items-center gap-2">
                  <Icons.Phone className="text-amber-500" />
                  <span>+971 50 450 3699</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉ sales@wishfygreens.com</span>
                </p>
              </div>
            </div>

          </div>

          <hr className="border-white/5 my-8" />

          {/* Footer bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© 2026 Wishfy Greens Private Limited. All Rights Reserved. Udyam UP-29-0089156.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Commercial License</a>
            </div>
          </div>

        </div>
      </footer>


      {/* Modal 1: Free Consultation form */}
      {activeModal === 'consultation' && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-scaleIn">
            
            {/* Absolute close button */}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block">Personal Consultation Request</span>
                <h3 className="text-2xl font-black text-emerald-950 tracking-tight">Free Gardening Design Consult</h3>
                <p className="text-xs text-slate-500">Provide details below to hook you up with our regional horticulturist.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Full Name</label>
                    <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Contact Phone</label>
                    <input required type="tel" placeholder="e.g. +91 98765 43210" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Email Address</label>
                  <input required type="email" placeholder="e.g. rahul@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Target Hub Location</label>
                    <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 bg-white">
                      <option value="noida">Noida / Delhi NCR, India</option>
                      <option value="dubai">Business Bay, Dubai, UAE</option>
                      <option value="other">Other/Pan-India Sourcing</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Desired Service Type</label>
                    <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 bg-white">
                      <option value="terrace">Terrace / Rooftop Garden</option>
                      <option value="landscape">Commercial Landscaping</option>
                      <option value="greenhouse">Climate-Controlled Greenhouse</option>
                      <option value="balcony">Balcony Setup</option>
                      <option value="water">Koi Pond / Water Features</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Brief Description of Project Area</label>
                  <textarea rows="3" placeholder="Describe layout size, direct sunlight access, and overall vision..." className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800"></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full bg-emerald-900 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-md"
                >
                  {formSubmitted ? "Submitting Request..." : "Book Design Session"}
                </button>
              </form>
            </div>

          </div>
        </div>
      )}


      {/* Modal 2: Success Prompt */}
      {activeModal === 'success' && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative text-center p-8 space-y-6 animate-scaleIn">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-400/30">
              <Icons.Check className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-emerald-950">Consultation Booked Successfully!</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Thank you for reaching out. A senior horticulturist will contact you shortly to review your blueprints and finalize matching plant selections.
              </p>
            </div>

            <button 
              onClick={() => setActiveModal(null)}
              className="w-full bg-slate-900 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}

    </div>
  );
}