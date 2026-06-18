import React, { useState } from 'react';
import { detailedProjects } from '../data/detailedProjects';
import ClientsSection from '../components/ClientsSection';
import CTASection from '../components/CTASection';
import Icons from '../components/icons/Icons';

// Sub-component to render the 3-image collage format
function ProjectCollage({ images, title }) {
  return (
    <div className="grid grid-cols-3 gap-3 h-64 sm:h-72 md:h-80 lg:h-96 rounded-[2rem] overflow-hidden shadow-lg border border-slate-100/60 bg-slate-100 relative group">
      {/* Main Image - col-span-2 */}
      <div className="col-span-2 h-full relative overflow-hidden">
        <img
          src={images[0]}
          alt={`${title} main view`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-85" />
      </div>
      
      {/* Side Column - col-span-1 */}
      <div className="col-span-1 grid grid-rows-2 gap-3 h-full">
        <div className="relative overflow-hidden h-full">
          <img
            src={images[1]}
            alt={`${title} detail view 1`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        <div className="relative overflow-hidden h-full">
          <img
            src={images[2]}
            alt={`${title} detail view 2`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
      </div>
    </div>
  );
}

export default function OurWorkPage({ setActiveModal }) {
  const [region, setRegion] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const formDataToSend = new FormData(e.target);
    formDataToSend.append("access_key", "b5d3a0c8-79c6-417f-b421-06acb2435ae3");
    formDataToSend.append("subject", "Catalogue Download Request - Wishfy Greens");

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });
      setFormData({ name: '', email: '', phone: '' });
    } catch (err) {
      console.error("Failed to submit catalogue request to Web3Forms:", err);
    }
  };

  const filteredProjects = detailedProjects.filter(
    (proj) => region === 'all' || proj.region === region
  );

  return (
    <main className="min-h-screen bg-slate-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Banner Section */}
        <div className="rounded-[2.5rem] bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-700 px-8 py-16 sm:px-12 lg:px-16 text-white text-center shadow-lg relative overflow-hidden border border-emerald-900">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300 mb-6 border border-white/10 relative z-10">
            Our Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight relative z-10">Our Work</h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-emerald-100 relative z-10 leading-relaxed">
            Explore our signature landscape designs, horticultural masterpieces, and climate-controlled agricultural facilities custom-built across India and the UAE.
          </p>
        </div>

        {/* Region Filter Selection Tabs */}
        <div className="flex justify-center mt-16">
          <div className="flex gap-2 bg-emerald-50/80 p-1.5 rounded-xl border border-emerald-100 shadow-sm">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'india', label: '🇮🇳 India Operations' },
              { id: 'uae', label: '🇦🇪 UAE Operations' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setRegion(tab.id)}
                className={`px-5 py-2.5 text-xs font-extrabold rounded-lg uppercase tracking-wider transition-all duration-200 ${
                  region === tab.id
                    ? 'bg-emerald-900 text-white shadow-md'
                    : 'text-emerald-900 hover:bg-emerald-100/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Projects Layout List */}
        <div className="mt-16 space-y-24 lg:space-y-36">
          {filteredProjects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Project Details Description Column */}
                <div 
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-100">
                        {proj.category}
                      </span>
                      <span className="bg-slate-900/90 text-[9px] font-bold tracking-widest text-white px-2.5 py-1 rounded-full uppercase">
                        {proj.region === 'india' ? '🇮🇳 India' : '🇦🇪 UAE'}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-emerald-950 tracking-tight leading-tight">
                      {proj.title}
                    </h2>
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <Icons.MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-bold tracking-wider uppercase">{proj.loc}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {proj.desc}
                  </p>

                  {/* Scope of Work bullet checklist */}
                  <div className="pt-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-950 mb-3 border-b border-slate-100 pb-2">
                      Scope of Work & Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                      {proj.scope.map((item, sIdx) => (
                        <li key={sIdx} className="flex gap-2.5 text-xs text-slate-700 leading-normal items-start">
                          <span className="text-emerald-600 font-extrabold text-sm leading-none select-none">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3-Image Collage Column */}
                <div 
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <ProjectCollage images={proj.images} title={proj.title} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Portfolio Stats summary */}
        <div className="mt-28 bg-emerald-50/60 rounded-[2rem] p-8 border border-emerald-100 flex flex-wrap justify-around items-center gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <span className="text-3xl font-black text-emerald-950">50+</span>
            <span className="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1 block">Residential Communities</span>
          </div>
          <div className="h-12 w-px bg-emerald-200 hidden sm:block"></div>
          <div className="text-center sm:text-left">
            <span className="text-3xl font-black text-emerald-950">30+</span>
            <span className="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1 block">Parks & Public Spaces</span>
          </div>
          <div className="h-12 w-px bg-emerald-200 hidden sm:block"></div>
          <div className="text-center sm:text-left">
            <span className="text-3xl font-black text-emerald-950">15+</span>
            <span className="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1 block">Luxury Hotels & Resorts</span>
          </div>
        </div>

        {/* Interactive Catalogue Download Section */}
        <section className="mt-24 border-t border-emerald-100 pt-20">
          <div className="bg-gradient-to-br from-emerald-950 to-slate-900 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-emerald-800">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full inline-block">
                Download Catalogue
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Want to Explore Our Complete Portfolio?
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-xl mx-auto">
                Download our latest design catalogue to view detailed specifications, plant palettes, and agricultural innovations.
              </p>
              
              {/* Form Submission / Download Trigger */}
              {submitted ? (
                <div className="bg-emerald-900/30 border border-emerald-500/30 p-6 rounded-2xl max-w-md mx-auto space-y-4 shadow-lg backdrop-blur-sm">
                  <p className="text-emerald-300 font-bold text-sm">
                    ✓ Thank you! Your download is now ready.
                  </p>
                  <a
                    href="/images/wishfy-new-june-26-v7-web.pdf"
                    download="Wishfy_Greens_Catalogue.pdf"
                    className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/25 w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download Catalogue PDF
                  </a>
                </div>
              ) : showForm ? (
                <form 
                  onSubmit={handleFormSubmit} 
                  className="bg-white text-slate-800 p-8 rounded-3xl shadow-xl max-w-md mx-auto space-y-4 border border-slate-100 text-left"
                >
                  <h3 className="text-lg font-black text-emerald-950 border-b border-slate-100 pb-2 mb-3">
                    Request Catalogue
                  </h3>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="e.g. Akshat Garg"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="e.g. akshat@wishfy.com"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="e.g. +91 98765 43210"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-4 rounded-xl transition-colors text-sm shadow-md"
                    >
                      Submit & Access Download
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-8 py-4 rounded-xl transition-all shadow-xl shadow-emerald-500/10"
                >
                  Request Catalogue Download
                </button>
              )}
            </div>
          </div>
        </section>

      </div>

      <ClientsSection />
      <CTASection setActiveModal={setActiveModal} />
    </main>
  );
}
