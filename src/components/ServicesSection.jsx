import React from 'react';
import Icons from './icons/Icons';
import { services } from '../data/services';

const serviceTitleToSlug = {
  'Large Scale landscaping': 'large-scale-landscaping',
  'Softscape Landscaping': 'softscape-landscaping',
  'Hardscape Landscaping': 'hardscape-landscaping',
  'Rooftop landscaping': 'rooftop-landscaping',
  'Water feature landscaping': 'water-feature-landscaping',
  'Sustainable Green Infrastructure': 'sustainable-landscaping',
  'B2B Plant & Crop Supply': 'b2b-plant-supply',
  'Landscape Maintenance': 'landscape-maintenance'
};

export default function ServicesSection({setActiveModal}) {
  return (
    <>
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
            {services.map((srv, idx) => {
              const targetSlug = serviceTitleToSlug[srv.title];
              return (
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
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 flex gap-3">
                    <a 
                      href={`/services/${targetSlug}`}
                      className="flex-1 py-2.5 text-xs text-center border border-slate-200 group-hover:border-emerald-500 rounded-xl font-bold hover:bg-emerald-900 hover:text-white transition-all flex items-center justify-center gap-1.5 text-slate-700"
                    >
                      <span>Know More</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <button 
                      onClick={() => setActiveModal('consultation')}
                      className="flex-1 py-2.5 text-xs text-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-sm"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </>
  );
}
