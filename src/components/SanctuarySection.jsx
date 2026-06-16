import React, { useEffect, useState } from 'react';
import Icons from './icons/Icons';
import { heroSlides } from '../data/heroSlides';

export default function SanctuarySection({ setActiveModal }) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Sanctuary Section (replacing Estimator Section) */}
      <section id="estimator" className="py-20 lg:py-32 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left description text & stats */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 block">Where Nature Meets Innovation</span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  Plan Your Green Sanctuary Today
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Whether you're developing an intimate residential balcony in Noida, a golf course estate near Delhi, or a sustainable commercial landscape in Dubai, let's collaborate to create your perfect environment.
                </p>
              </div>

              {/* Statistics Grid (Moved from Hero Section) */}
              <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">500+</div>
                  <div className="text-xs text-emerald-200 mt-1">Projects Completed</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">50+</div>
                  <div className="text-xs text-emerald-200 mt-1">Horticulturists & Eng.</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">1 Cr+</div>
                  <div className="text-xs text-emerald-200 mt-1">Plants Supplied</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">2 Co.</div>
                  <div className="text-xs text-emerald-200 mt-1">India & UAE Presence</div>
                </div>
              </div>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setActiveModal('consultation')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-xl text-center text-xs uppercase tracking-wider shadow-lg hover:shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            {/* Right: High-Fidelity Interactive Slider/Carousel */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-[500px] lg:max-w-none w-full">
                {/* Visual Accent Borders */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500 to-amber-500 opacity-25 blur-lg"></div>
                
                {/* Dynamic Slide Frame */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950 border-4 border-white/10 shadow-2xl transition-all duration-500">
                  
                  {/* Slide Background Image */}
                  <img 
                    src={heroSlides[slideIdx].image} 
                    alt={heroSlides[slideIdx].title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-60"
                    onError={(e) => {
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
                        {heroSlides[slideIdx].tag}
                      </span>
                      <span className="text-white/60 text-xs font-bold">
                        {slideIdx + 1} / {heroSlides.length}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                      {heroSlides[slideIdx].title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                      {heroSlides[slideIdx].desc}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        <Icons.MapPin className="w-4 h-4 shrink-0" />
                        <span className="text-[11px] font-black uppercase tracking-wider">{heroSlides[slideIdx].location}</span>
                      </div>

                      {/* Selector buttons (Previous / Next) */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setSlideIdx((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                          aria-label="Previous Slide"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => setSlideIdx((prev) => (prev + 1) % heroSlides.length)}
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
                        onClick={() => setSlideIdx(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${slideIdx === idx ? 'w-6 bg-emerald-400' : 'w-2 bg-white/40'}`}
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
    </>
  );
}
