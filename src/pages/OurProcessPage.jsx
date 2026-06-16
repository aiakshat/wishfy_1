import React, { useState } from 'react';
import ClientsSection from '../components/ClientsSection';
import CTASection from '../components/CTASection';

const phases = [
  {
    number: "01",
    title: "Site Audit & Agronomic Soil Analysis",
    subtitle: "Understanding the land first",
    desc: "Our agronomists conduct thorough on-site tests to map sun angles, calculate wind directions, analyze soil pH values, check water source quality, and identify natural drainage constraints.",
    deliverables: [
      "Soil health & pH profile",
      "Micro-climate & sun map",
      "Hydraulic & drainage analysis"
    ]
  },
  {
    number: "02",
    title: "CAD Layouts & Photorealistic 3D Renders",
    subtitle: "Visualizing the landscape geometry",
    desc: "We transform ideas into high-fidelity CAD blueprints and photorealistic 3D renders, allowing you to preview how pathways, foliage density, and water structures harmonize before breaking ground.",
    deliverables: [
      "2D CAD site plan drawings",
      "3D photorealistic mockups",
      "Flora & materials specifications list"
    ]
  },
  {
    number: "03",
    title: "Soil Conditioning & Engineering Site Grading",
    subtitle: "Establishing solid organic roots",
    desc: "We prepare the site by grading slopes to guide surface runoff, clearing weeds, and layering premium custom organic compost to construct rich topsoil foundations ready for planting.",
    deliverables: [
      "Topographical land grading",
      "Imported premium compost layering",
      "Organic nutrient conditioning"
    ]
  },
  {
    number: "04",
    title: "Subterranean Irrigation & Smart Drainage",
    subtitle: "Precision engineering water flow",
    desc: "Laying subterranean automated drip irrigation pipes, sprinkler systems, and custom french drains designed to nourish flora roots while completely preventing waterlogging or runoff mess.",
    deliverables: [
      "Real-time moisture sensor nodes",
      "Subsurface micro-drip network",
      "Custom storm-water drainage lines"
    ]
  },
  {
    number: "05",
    title: "Landscape Hardscaping & Botanical Planting",
    subtitle: "Bringing architecture and botany together",
    desc: "Our structural engineers build pathways, fountains, and pergolas while our horticulturists carefully plant acclimatized shrubbery, shade trees, and lawns sourced directly from our nursery system.",
    deliverables: [
      "Acclimatized flora transplantation",
      "Precision masonry pathways & stonework",
      "Structural pergola & fountain installations"
    ]
  },
  {
    number: "06",
    title: "Post-Build Quality Audit & Handover",
    subtitle: "Guaranteeing long-term growth",
    desc: "We conduct pressure tests across irrigation lines and inspect plant roots, followed by handing over custom care manuals and detailing routine seasonal checks to keep your landscape thriving.",
    deliverables: [
      "Irrigation pressure & flow test report",
      "Custom print & digital care manuals",
      "Seasonal pruning & maintenance schedules"
    ]
  }
];

const differentiators = [
  {
    title: "Agronomy & Science First",
    desc: "We select plants based on soil microbiomes, local wind currents, and water chemistry rather than generic aesthetics, ensuring natural survival.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m9.75-9.75c.075.08.154.163.238.25a11.861 11.861 0 013.297 7.06c.079.916-.309 1.839-1.082 2.408l-5.334 3.948a3.375 3.375 0 01-3.992 0L4.144 15.63c-.773-.569-1.16-1.492-1.081-2.408a11.858 11.858 0 013.298-7.06c.084-.087.162-.169.238-.25" />
      </svg>
    )
  },
  {
    title: "IoT-Driven Smart Irrigation",
    desc: "Our automated micro-irrigation systems link with real-time soil moisture sensors and weather feeds, reducing water usage by up to 45%.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.364 5.636a9 9 0 0112.728 0m-10.607 2.12a6 6 0 018.486 0M12 12a3 3 0 100 6 3 3 0 000-6z" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "In-House Master Execution",
    desc: "We do not sub-contract labor. Our dedicated team of in-house architects, structural masons, and horticulturists executes every phase under strict QC.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.65-2.42 8.24 8.24 0 01-3.414-.783M12 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 00-9-9" />
      </svg>
    )
  },
  {
    title: "Acclimatized Sourcing",
    desc: "Flora is pre-conditioned at our partner nurseries to adjust to regional climate bounds (India NCR or Dubai desert) before site planting.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  }
];

const faqs = [
  {
    question: "How long does a typical landscaping project take?",
    answer: "A residential terrace or vertical garden usually takes 2–3 weeks. Large-scale corporate parks, public landscapes, or complex greenhouse installations can span 2–6 months depending on scale, grading requirements, and architectural scope."
  },
  {
    question: "Do you offer landscape maintenance services after handover?",
    answer: "Yes! We offer flexible quarterly and annual landscape maintenance plans. Our dedicated crew handles lawn trimming, soil enrichment, seasonal pruning, and irrigation audits to keep your green spaces in peak health."
  },
  {
    question: "How do you manage projects across different regions like India and the UAE?",
    answer: "We have fully staffed local offices and partner plant nurseries in Noida (India) and Dubai (UAE). Each team coordinates plants and soil amendments local to their regional parameters (e.g. salinity filters for Dubai water or heat-tolerant grasses for NCR summers)."
  },
  {
    question: "Can you automate or refactor existing traditional polyhouses?",
    answer: "Absolutely. We specialize in retrofitting traditional greenhouses with IoT climate sensors, automated shading curtains, fan-and-pad cooling systems, and computerized hydroponic nutrition tracks without needing full structural rebuilds."
  }
];

export default function OurProcessPage({ setActiveModal }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Banner Section */}
        <div className="rounded-[2.5rem] bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-700 px-8 py-16 sm:px-12 lg:px-16 text-white text-center shadow-lg relative overflow-hidden border border-emerald-900">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300 mb-6 border border-white/10 relative z-10">
            Our Methods
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight relative z-10">Our Process</h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-emerald-100 relative z-10 leading-relaxed">
            Discover how we combine agronomic science, structural design engineering, and smart IoT automation to deliver thriving, low-maintenance landscapes.
          </p>
        </div>

        {/* Detailed 6-Phase Timeline Section */}
        <section className="py-20 bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-slate-100 shadow-sm mt-16 relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Seamless Execution Blueprint</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
              Our 6-Phase Project Timeline
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              A transparent, end-to-end scientific methodology designed to deliver exceptional green spaces built to last.
            </p>
          </div>

          {/* Timeline Grid Container */}
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-slate-200/80 space-y-12 md:space-y-16 max-w-5xl mx-auto">
            {phases.map((phase, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className="relative md:grid md:grid-cols-2 md:gap-16 items-start"
                >
                  {/* Dot on center line */}
                  <div className="absolute -left-[17px] md:left-1/2 top-2 w-8 h-8 rounded-full bg-emerald-900 text-white flex items-center justify-center font-black border-4 border-emerald-500/20 text-xs shadow-md transform md:-translate-x-1/2 z-20">
                    {phase.number}
                  </div>
                  
                  {/* Content Box */}
                  <div className={`pl-6 md:pl-0 ${
                    isEven 
                      ? 'md:col-start-1 md:pr-8 md:text-right' 
                      : 'md:col-start-2 md:pl-8 md:text-left'
                  }`}>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-3.5">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block">
                          {phase.subtitle}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-emerald-950 mt-1">
                          {phase.title}
                        </h3>
                      </div>
                      
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {phase.desc}
                      </p>
                      
                      {/* Key Deliverables labels */}
                      <div className={`pt-3 border-t border-slate-200/60 flex flex-col gap-2 ${
                        isEven ? 'md:items-end' : 'md:items-start'
                      }`}>
                        <span className="text-[9px] font-black uppercase tracking-wider text-emerald-950">
                          Key Deliverables:
                        </span>
                        <div className={`flex flex-wrap gap-1.5 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          {phase.deliverables.map((item, dIdx) => (
                            <span 
                              key={dIdx} 
                              className="bg-white border border-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-md shadow-2xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* What We Do Differently Section */}
        <section className="py-20 mt-16 border-t border-slate-200/65">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Operational Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
              What We Do Differently
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              We separate ourselves from generic landscaping crews by putting scientific engineering and strict execution standards first.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    {diff.icon}
                  </div>
                  <h3 className="text-base font-black text-emerald-950">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process FAQs Section */}
        <section className="py-20 bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-slate-100 shadow-sm mt-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Common Queries</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
              Process & Execution FAQs
            </h2>
          </div>

          {/* Collapsible Accordions */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border-b border-slate-100 pb-4"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left py-2 group"
                  >
                    <span className="text-sm sm:text-base font-black text-emerald-950 group-hover:text-emerald-700 transition-colors">
                      {faq.question}
                    </span>
                    <span className={`text-emerald-600 font-extrabold text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      ＋
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      <ClientsSection />
      <CTASection setActiveModal={setActiveModal} />
    </main>
  );
}
