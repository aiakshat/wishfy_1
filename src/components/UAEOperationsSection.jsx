import React from 'react';
import Icons from './icons/Icons';

export default function UAEOperationsSection({setActiveModal}) {
  return (
    <>
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

    </>
  );
}
