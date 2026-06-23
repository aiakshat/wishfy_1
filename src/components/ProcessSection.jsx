import React from 'react';
import Icons from './icons/Icons';

export default function ProcessSection() {
  return (
    <>
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
                title: "Custom Design Creation - Draftsman",
                desc: "Our professional draftsmen create bespoke blueprints, custom layouts, and highly detailed 3D designs for your specific requirements."
              },
              {
                step: "Step 3",
                title: "Structural Foundation & Installation",
                desc: "Our skilled teams construct robust structural foundations, install precise drainage, and establish the engineering groundwork for your space."
              },
              {
                step: "Step 4",
                title: "Care & Maintenance",
                desc: "We provide customized care guides, set up recurring maintenance routines, and share expert insights to keep your green assets in pristine condition."
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

          <div className="text-center mt-12">
            <a
              href="/our-process"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg group text-sm"
            >
              Explore our process
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>
      </section>

    </>
  );
}
