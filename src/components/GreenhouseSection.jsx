import React from 'react';
import Icons from './icons/Icons';

export default function GreenhouseSection({setActiveModal}) {
  return (
    <>
      {/* Greenhouse Section: Refactored with Full-Bleed Thematic Glasshouse Background */}
      <section 
        id="greenhouse" 
        className="py-24 lg:py-36 text-white scroll-mt-20 overflow-hidden relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2, 44, 34, 0.96), rgba(15, 23, 42, 0.85)), url('/images/greenhouse.jpg')`,
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
                  onClick={() => setActiveModal('consultation')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-center text-xs uppercase tracking-wider shadow-lg hover:shadow-emerald-500/20 transition-all"
                >
                  Request Agri Consultation
                </button>
                <button 
                  onClick={() => setActiveModal('consultation')}
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-6 py-3.5 rounded-xl text-center text-xs uppercase tracking-wider transition-all"
                >
                  Request Agri Proposal
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </>
  );
}
