import React from 'react';
import Icons from './icons/Icons';

export default function AboutSection() {
  return (
    <>
      {/* About Us Section */}
      <section id="about" className="py-20 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side text and profile details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Rooted In Design, Driven By Sustainability</span>
                <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
                  About Wishfy Greens
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Founded in 2023 in Noida, Wishfy Greens is on a mission to bring green infrastructure to every space in India. With a team of 50+ horticulturists, landscape architects, and agricultural engineers, we have delivered 500+ projects, ranging from elegant balcony gardens to sprawling 4,000 sq. m. high-yield polyhouse farms.
                </p>
                <p>
                  Our multidisciplinary team combines landscape architecture, horticulture, agricultural engineering, and meticulous execution expertise to deliver solutions that are aesthetically inspiring, environmentally responsible, and built to last.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-900 flex-shrink-0 text-white flex items-center justify-center font-bold text-xl border-2 border-emerald-400">
                  AG
                </div>
                <div>
                  <blockquote className="text-sm font-semibold italic text-emerald-950">
                    "At Wishfy, we don't just build green spaces - we create experiences that elevate everyday living, creating an environmental legacy."
                  </blockquote>
                  <cite className="block mt-2 text-xs font-bold uppercase tracking-widest text-emerald-600 not-italic">
                    — Akshat Garg (MD & CEO, Wishfy Greens)
                  </cite>
                </div>
              </div>
            </div>

            {/* Right side checkmark grid (Why choose us) */}
            <div className="lg:col-span-5 bg-gradient-to-tr from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-400 rounded-full blur-2xl"></div>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-emerald-300 mb-6">Why Industry Leaders Choose Us</h3>
              
              <ul className="space-y-4">
                {[
                  { title: "Licensed Horticulturists", desc: "Our teams hold formal botanic & agricultural qualifications" },
                  { title: "NHM Empaneled Vendor", desc: "Approved government partners for large-scale landscaping" },
                  { title: "MSME Registered Company", desc: "Corporate-grade quality guarantees and governance" },
                  { title: "Pan-India Operations", desc: "Robust sourcing capability across all geographic states" },
                  { title: "UAE Licensed Entity", desc: "Fully operational locally with Dubai Commercial License" },
                  { title: "End-to-End Project Management", desc: "From concept blueprint to custom maintenance handovers" },
                  { title: "Sustainable Design Expertise", desc: "Smart water conservation & low-maintenance ecosystems" }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start border-b border-emerald-800/60 pb-3 last:border-b-0 last:pb-0">
                    <div className="bg-emerald-500/20 p-1 rounded mt-0.5">
                      <Icons.Check />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
