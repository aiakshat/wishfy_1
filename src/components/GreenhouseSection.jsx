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
          backgroundImage: `linear-gradient(to right, rgba(2, 44, 34, 0.94), rgba(15, 23, 42, 0.88)), url('/images/work/polyhouse_1.jpg')`,
        }}
      >
        {/* Absolute geometric light accents */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-400 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Glassmorphic Core Content */}
            <div className="lg:col-span-7 space-y-8 bg-slate-900/80 border border-emerald-500/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full px-4 py-1.5 inline-block">
                  Future-Ready Farming Solutions
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  Intelligent Greenhouses & Polyhouses
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  From climate-controlled greenhouses to advanced aeroponic cultivation, we create systems built for consistent growth, clean produce, and sustainable living. Engineered for efficiency and long-term performance, our solutions make modern cultivation accessible, intelligent, and beautifully streamlined.
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm text-slate-300">
                {[
                  "Climate Control Systems",
                  "Precision Drip Irrigation",
                  "Automated Fertigation",
                  "Hydroponic & Aeroponic Labs",
                  "IoT Smart Mobile Dashboards",
                  "Water Recycling & Filtration"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-emerald-500/20 p-1 rounded-full text-emerald-400">
                      <Icons.Check />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setActiveModal('consultation')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-center text-xs uppercase tracking-wider shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  Request Agri Consultation
                  <span>→</span>
                </button>
                <a 
                  href="/services/sustainable-landscaping"
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-6 py-3.5 rounded-xl text-center text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  Sustainable Solutions
                  <span>🌱</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Smart Greenhouse Dashboard Mockup */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-950/80 border border-emerald-500/30 backdrop-blur-md rounded-3xl p-6 shadow-2xl space-y-6">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">IoT Smart Greenhouse Node-01</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-extrabold px-2 py-0.5 rounded border border-emerald-500/30">ONLINE</span>
                </div>

                {/* Dashboard Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Temp & Humidity Card */}
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Climate Control</span>
                    <div className="text-xl font-black text-white">24.5°C</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span>Humidity: 62%</span>
                    </div>
                  </div>

                  {/* Yield Multiplier */}
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Yield Output</span>
                    <div className="text-xl font-black text-amber-400">3x to 5x</div>
                    <div className="text-[10px] text-slate-400">Higher Yield (365 Days)</div>
                  </div>

                  {/* Water & Drip */}
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Drip Irrigation</span>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">ACTIVE</span>
                      <span className="w-8 h-4 bg-emerald-500 rounded-full p-0.5 flex items-center justify-end cursor-pointer transition-colors">
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-400">Flow: 2.4L/hr</div>
                  </div>

                  {/* Fertigation Node */}
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Automated Fertigation</span>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">ACTIVE</span>
                      <span className="w-8 h-4 bg-emerald-500 rounded-full p-0.5 flex items-center justify-end cursor-pointer transition-colors">
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-400">EC level: 1.8 mS/cm</div>
                  </div>

                </div>

                {/* Scale Stats / Progress bar */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="flex justify-between text-[10px] font-bold text-slate-300">
                    <span>Active Commercial Setups Deployments</span>
                    <span className="text-emerald-400">150+ Sites</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
                  </div>
                </div>

                {/* Commercial ROI Indicator */}
                <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-500/20 p-3.5 rounded-xl">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Investment Payback Period</span>
                    <span className="text-xs font-black text-white">Average Commercial ROI</span>
                  </div>
                  <span className="text-lg font-black text-emerald-400">2-3 Years</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
