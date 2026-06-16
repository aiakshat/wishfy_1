import React from 'react';

export default function CTASection({setActiveModal}) {
  return (
    <>
      {/* Massive CTA Section */}
      <section className="bg-emerald-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 block">Ready To Elevate Your Environment?</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Let's Build A Greener Future Together
          </h2>
          <p className="text-base text-emerald-100 max-w-2xl mx-auto">
            Whether you are planning a high-yield smart agricultural greenhouse, a lush private terrace garden, or sprawling hotel softscaping, our specialized horticulturists are ready to collaborate.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setActiveModal('consultation')}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-8 py-4 rounded-xl text-center shadow-lg"
            >
              Request Free Consultation
            </button>
            <button 
              onClick={() => setActiveModal('estimate')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all"
            >
              Get Estimated Scope
            </button>
          </div>
        </div>
      </section>

    </>
  );
}
