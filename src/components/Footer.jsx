import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Footer (Detailed with operational addresses based on brochure page 16) */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            
            {/* Column 1: Info, brief, and socials */}
            <div className="md:col-span-3 space-y-6">
              <a href="/" className="flex items-center">
                <img 
                  src="/images/log-trans.png" 
                  alt="Wishfy Greens" 
                  className="h-20 w-auto object-contain" 
                />
              </a>
              <p className="text-xs text-slate-400 leading-relaxed">
                Wishfy Greens is a premium landscaping, horticulture design, precision agricultural greenhouse developer, and smart landscape maintenance company serving clients across India and the UAE.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://www.instagram.com/wishfy_greens/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/wishfy-greens" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-sky-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/p/Wishfy-technologies-61558730829798" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400">Quick Links</h4>
              <nav className="flex flex-col gap-2.5 text-xs text-slate-400 font-semibold">
                <a href="/our-work" className="hover:text-emerald-400 transition-colors">Our Work</a>
                <a href="/our-process" className="hover:text-emerald-400 transition-colors">Our Process</a>
                <a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a>
                <a href="/contact-us" className="hover:text-emerald-400 transition-colors">Contact Us</a>
              </nav>
            </div>

            {/* Column 3: All Services */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400">Our Services</h4>
              <nav className="flex flex-col gap-2.5 text-xs text-slate-400 font-semibold">
                <a href="/services/softscape-landscaping" className="hover:text-emerald-400 transition-colors">Softscape Landscaping</a>
                <a href="/services/hardscape-landscaping" className="hover:text-emerald-400 transition-colors">Hardscape Landscaping</a>
                <a href="/services/rooftop-landscaping" className="hover:text-emerald-400 transition-colors">Rooftop Landscaping</a>
                <a href="/services/water-feature-landscaping" className="hover:text-emerald-400 transition-colors">Water Feature Landscaping</a>
                <a href="/services/swimming-pool-landscaping" className="hover:text-emerald-400 transition-colors">Swimming Pool & Fountain Landscaping</a>
                <a href="/services/sustainable-landscaping" className="hover:text-emerald-400 transition-colors">Sustainable Green Infrastructure</a>
                <a href="/services/large-scale-landscaping" className="hover:text-emerald-400 transition-colors">Large Scale Landscaping</a>
                <a href="/services/b2b-plant-supply" className="hover:text-emerald-400 transition-colors">B2B Plant & Crop Supply</a>
                <a href="/services/landscape-maintenance" className="hover:text-emerald-400 transition-colors">Landscape Maintenance</a>
              </nav>
            </div>

            {/* Column 4: India HQ Address */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400">🇮🇳 India HQ</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p className="font-bold text-white">Wishfy Greens Pvt Ltd</p>
                <p>2nd Floor H-146 & H-147, Sec 63, Noida, UP, 201301</p>
                <p className="pt-2 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.132-3.865-6.689-6.69l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:+919625679829" className="hover:text-emerald-400 font-bold">+91 96256 79829</a>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉</span>
                  <a href="mailto:sales@wishfygreens.com" className="hover:text-emerald-400">sales@wishfygreens.com</a>
                </p>
              </div>
            </div>

            {/* Column 5: UAE HQ Address */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-500">🇦🇪 Dubai HQ</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p className="font-bold text-white">Wishfy Greens LLC</p>
                <p>Suite 2001, Citadel Tower, Marasi Dr, Business Bay, Dubai</p>
                <p className="pt-2 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.132-3.865-6.689-6.69l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:+971504503699" className="hover:text-amber-500 font-bold">+971 50 450 3699</a>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉</span>
                  <a href="mailto:sales@wishfygreens.com" className="hover:text-amber-500">sales@wishfygreens.com</a>
                </p>
              </div>
            </div>

          </div>

          <hr className="border-white/5 my-8" />

          {/* Footer bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© 2026 Wishfy Greens Private Limited. All Rights Reserved. Udyam UP-29-0089156.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Commercial License</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
