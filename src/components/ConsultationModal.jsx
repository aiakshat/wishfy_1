import React from 'react';

export default function ConsultationModal({isOpen, onClose, onSubmit, formSubmitted}) {
  if (!isOpen) return null;

  return (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-scaleIn">
            
            {/* Absolute close button */}
            <button 
              onClick={() => onClose()}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block">Personal Consultation Request</span>
                <h3 className="text-2xl font-black text-emerald-950 tracking-tight">Free Gardening Design Consult</h3>
                <p className="text-xs text-slate-500">Provide details below to hook you up with our regional horticulturist.</p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Full Name</label>
                    <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Contact Phone</label>
                    <input required type="tel" placeholder="e.g. +91 98765 43210" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Email Address</label>
                  <input required type="email" placeholder="e.g. rahul@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Target Hub Location</label>
                    <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 bg-white">
                      <option value="noida">Noida / Delhi NCR, India</option>
                      <option value="dubai">Business Bay, Dubai, UAE</option>
                      <option value="other">Other/Pan-India Sourcing</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Desired Service Type</label>
                    <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 bg-white">
                      <option value="terrace">Terrace / Rooftop Garden</option>
                      <option value="landscape">Commercial Landscaping</option>
                      <option value="greenhouse">Climate-Controlled Greenhouse</option>
                      <option value="balcony">Balcony Setup</option>
                      <option value="water">Koi Pond / Water Features</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Brief Description of Project Area</label>
                  <textarea rows="3" placeholder="Describe layout size, direct sunlight access, and overall vision..." className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800"></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full bg-emerald-900 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-md"
                >
                  {formSubmitted ? "Submitting Request..." : "Book Design Session"}
                </button>
              </form>
            </div>

          </div>
        </div>
  );
}
