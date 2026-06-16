import React from 'react';

const clients = [
  { name: 'Archaeological Survey of India', logo: '/images/client-logo-Archaeological Survey of India.jpg' },
  { name: 'New Delhi Municipal Council', logo: '/images/client-logo-New Delhi Municipal Council.jpg' },
  { name: 'Rail Vikas Nigam Limited', logo: '/images/client-logo-Rail Vikas Nigam Limited.jpg' },
  { name: 'Ahluwalia Contracts (India) Ltd.', logo: '/images/client-logo-Ahluwalia Contracts (India) Ltd.jpg' },
  { name: 'Jindal Group', logo: '/images/client-logo-Jindal group.jpg' },
  { name: 'The Camellias', logo: '/images/client-logo-The-Camellias.jpg' },
  { name: 'Westside', logo: '/images/client-logo-westside.jpg' },
  { name: 'Barista', logo: '/images/client-logo-barista.jpg' },
  { name: 'Radisson', logo: '/images/client-logo-radission.jpg' },
  { name: 'The Imperial', logo: '/images/client-logo-the imperial.jpg' },
  { name: 'ASG Eye Hospital', logo: '/images/client-logo-ASG Eye Hospital.jpg' },
  { name: 'Qutub Minar', logo: '/images/client-logo-Qutub Minar.jpg' },
  { name: 'Varanasi Airport', logo: '/images/client-logo-Varanasi Airport.jpg' },
  { name: 'Jubilee Convention and Banquet', logo: '/images/client-logo-jubilee convention and banquet.jpg' }
];

export default function ClientsSection() {
  return (
    <>
      {/* Clients Section (Infinite horizontal marquee carousel) */}
      <section id="clients" className="py-20 bg-slate-50 border-t border-emerald-100 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Our Network of Patrons</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
              Trusted By Leading Organizations
            </h2>
            <p className="text-sm text-slate-600">
              We deliver sustainable green solutions across state administrations, private corporate tech parks, luxury developers, and hospitality icons.
            </p>
          </div>

          {/* Marquee Carousel Container */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Visual gradient mask for fading edges - slate-50 for slate-50 bg */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee flex gap-6 items-stretch">
              {/* First loop of client cards */}
              {clients.map((client, idx) => (
                <div 
                  key={`c1-${idx}`} 
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-between gap-3 w-44 shrink-0"
                >
                  <div className="h-16 w-32 flex items-center justify-center overflow-hidden">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-10 h-0.5 bg-emerald-100/70" />
                  <div className="text-xs font-bold text-emerald-950 text-center line-clamp-2 h-8 flex items-center justify-center leading-snug">
                    {client.name}
                  </div>
                </div>
              ))}
              
              {/* Second loop of client cards for continuous infinite scroll */}
              {clients.map((client, idx) => (
                <div 
                  key={`c2-${idx}`} 
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-between gap-3 w-44 shrink-0"
                >
                  <div className="h-16 w-32 flex items-center justify-center overflow-hidden">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-10 h-0.5 bg-emerald-100/70" />
                  <div className="text-xs font-bold text-emerald-950 text-center line-clamp-2 h-8 flex items-center justify-center leading-snug">
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
