import React from 'react';
import Icons from './icons/Icons';

export default function SuccessModal({isOpen, onClose}) {
  if (!isOpen) return null;

  return (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative text-center p-8 space-y-6 animate-scaleIn">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-400/30">
              <Icons.Check className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-emerald-950">Consultation Booked Successfully!</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Thank you for reaching out. A senior horticulturist will contact you shortly to review your blueprints and finalize matching plant selections.
              </p>
            </div>

            <button 
              onClick={() => onClose()}
              className="w-full bg-slate-900 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest"
            >
              Continue Exploring
            </button>
          </div>
        </div>
  );
}
