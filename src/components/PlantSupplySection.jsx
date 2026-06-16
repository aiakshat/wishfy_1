import React from 'react';
import Icons from './icons/Icons';

export default function PlantSupplySection({setActiveModal}) {
  return (
    <>
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

    </>
  );
}
