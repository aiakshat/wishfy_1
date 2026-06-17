import React from 'react';
import Icons from './icons/Icons';
import { projects } from '../data/projects';

export default function ProjectsSection({region, setRegion}) {
  return (
    <>
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
            {projects.filter(p => region === 'all' || region === 'global' || p.region === region).map((proj, idx) => (
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

          <div className="text-center mt-12">
            <a
              href="/our-work"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg group text-sm"
            >
              Explore our work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>
      </section>

    </>
  );
}
