import React from 'react';

export default function HeroSection({setActiveModal}) {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden text-white py-24 lg:py-40 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[75vh]"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(2, 44, 34, 0.65), rgba(15, 23, 42, 0.75)), url('/images/hero_bg.jpg')" }}
      >
        {/* Abstract background vector shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mx-auto">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-300">Where Nature Meets Innovation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Creating Extraordinary Landscapes Across <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">India & UAE</span>
          </h1>

          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto font-medium leading-relaxed">
            Transforming outdoor spaces into sustainable, beautiful, and functional environments through innovative landscaping, horticulture, greenhouse solutions, and green infrastructure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#services" 
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-8 py-4 rounded-xl text-center shadow-lg hover:shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
            >
              Explore Our Services
            </a>
            <button 
              onClick={() => setActiveModal('consultation')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl text-center border border-white/20 backdrop-blur-sm transition-all hover:border-white/40 hover:-translate-y-0.5"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar / Quick highlights */}
      <section className="bg-emerald-50 py-8 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-emerald-900 font-extrabold text-sm tracking-wider uppercase">
            <span className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> MSME REGISTERED COMPANY
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> NHM EMPANELED VENDOR
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> LICENSED HORTICULTURISTS
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> STARTUP REGISTRATION: GOUP
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
