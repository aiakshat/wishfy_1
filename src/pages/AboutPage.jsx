import React, { useState } from 'react';
import Icons from '../components/icons/Icons';
import ClientsSection from '../components/ClientsSection';

const strengths = [
  'Integrated landscaping, horticulture, precision agriculture, and plant science',
  'Licensed horticulturists and in-house design execution teams',
  'MSME registered, NHM empaneled, and recognized startup ecosystem credentials',
  'Pan-India delivery with an active Dubai landscape works presence'
];

const milestones = [
  { value: '2023', label: 'Founded in Noida' },
  { value: '500+', label: 'Projects delivered' },
  { value: '50+', label: 'Horticulturists, architects, and engineers' },
  { value: '1 Cr+', label: 'Plants and crops supplied' }
];

const capabilities = [
  {
    title: 'Landscape Design',
    body: 'Softscape, hardscape, terrace gardens, water features, corporate campuses, hospitality sites, public parks, and premium residential communities.'
  },
  {
    title: 'Smart Agriculture',
    body: 'Climate-controlled greenhouses, polyhouses, hydroponics, IoT monitoring, precision irrigation, fertigation, and year-round production systems.'
  },
  {
    title: 'B2B Plant Supply',
    body: 'Large-volume sourcing, logistics, and fulfillment for online platforms, institutional buyers, commercial landscapes, and retail networks.'
  }
];

const proofPoints = [
  'Qutub Minar heritage landscaping and public-space maintenance',
  'Varanasi and Darbhanga airport landscape work',
  'DLF Camellias, Westside, Barista, Radisson, The Imperial, and hospitality projects',
  'Dubai operations through Wishfy Greens Landscape & Gardening Works L.L.C S.O.C'
];

const processSteps = [
  {
    step: '1',
    title: 'Discovery & Consultation',
    description: 'We meet to understand your vision, goals, and budget. Our experts assess your space, discuss possibilities, and share initial ideas.'
  },
  {
    step: '2',
    title: 'Custom Design Creation - Draftsman',
    description: 'Our professional draftsmen create bespoke blueprints, custom layouts, and highly detailed 3D designs for your specific requirements.'
  },
  {
    step: '3',
    title: 'Structural Foundation & Installation',
    description: 'Our skilled teams construct robust structural foundations, install precise drainage, and establish the engineering groundwork for your space.'
  },
  {
    step: '4',
    title: 'Care & Maintenance',
    description: 'We provide customized care guides, set up recurring maintenance routines, and share expert insights to keep your green assets in pristine condition.'
  }
];

const detailedServices = {
  softscape: [
    'Lawns & turfs',
    'Trees & plantations',
    'Flower beds',
    'Shrubs & hedges'
  ],
  hardscape: [
    'Pathways',
    'Pergolas',
    'Decking',
    'Stone features',
    'Seating zones'
  ],
  rooftop: [
    'Terrace gardens',
    'Sky lawns',
    'Outdoor seating',
    'Planter installations'
  ],
  water: [
    'Fountains',
    'Reflecting pools',
    'Artificial ponds',
    'Water walls'
  ],
  swimmingPool: [
    'Infinity & lap pools',
    'Natural stone coping',
    'Sun decks & pergolas',
    'Aquatic LED lighting'
  ],
  sustainable: [
    'Drip irrigation',
    'Native plantation',
    'Rainwater harvesting',
    'Low maintenance'
  ],
  largeScale: [
    'Corporate campuses',
    'Golf courses',
    'Townships',
    'Industrial parks',
    'Institutions'
  ]
};

export default function AboutPage({ setActiveModal }) {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:18px_18px]"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="max-w-4xl space-y-8">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-300 bg-white/10 border border-white/15 rounded-full px-4 py-2">
              Rooted in Design
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                About Wishfy Greens
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100 leading-relaxed max-w-3xl">
                Founded in 2023 in Noida, Wishfy Greens brings landscape design, horticulture, plant science, and sustainable infrastructure under one roof. We create green spaces that are thoughtfully planned, low-maintenance, and built to last.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#services" className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-6 py-3.5 rounded-xl text-center transition-all">
                Explore Services
              </a>
              <button
                onClick={() => setActiveModal('consultation')}
                className="bg-white/10 hover:bg-white/15 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-all"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Our Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
                We do not just build green spaces. We create living environments.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At the heart of Wishfy Greens is our core philosophy: to create living environments that seamlessly blend design, nature, and modern technology. We believe sustainability is not only a responsibility, but an opportunity to build a better future. This philosophy guides how our team designs and executes public spaces, homes, hotels, campuses, farms, and commercial destinations.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every project blends design sensitivity with technical execution, from plant selection and irrigation planning to greenhouse automation and long-term maintenance.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {milestones.map((item) => (
                <div key={item.label} className="bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm">
                  <div className="text-3xl font-black text-emerald-900">{item.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MD's Message Section */}
      <section id="ceo-message" className="py-16 lg:py-24 bg-white border-y border-emerald-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">From The Desk Of The MD & CEO</span>
              <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
                Building a Sustainable Future, One Project at a Time
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  It gives us immense pride and gratitude to welcome you to the world of Wishfy Greens — a company built on the belief that sustainability is not merely a responsibility, but an opportunity to create a better future for generations to come.
                </p>
                <p>
                  Today, our footprint extends across landmark projects, airports, government institutions, hospitality developments, commercial spaces, residential communities, and agricultural ventures. With successful projects across India, Dubai, and the Middle East, we are committed to bringing world-class green solutions to some of the fastest-growing regions of the world.
                </p>
                <p>
                  At Wishfy Greens, we believe that every plant nurtured, every landscape designed, and every sustainable ecosystem created contributes to a larger purpose. Our work is not measured solely by the projects we complete, but by the positive environmental legacy we leave behind.
                </p>
                <p className="font-black text-emerald-900">
                  Together, let us create greener cities, stronger communities, and a more sustainable world.
                </p>
              </div>
              <div className="pt-4">
                <p className="font-black text-emerald-950">Akshat Garg</p>
                <p className="text-xs text-slate-500 font-bold">Managing Director & Chief Executive Officer</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-emerald-100 order-1 lg:order-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]">
              <img
                src="/images/about-ceo.jpg"
                alt="Akshat Garg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl border border-slate-100 p-7 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-900 text-white flex items-center justify-center">
                  <Icons.Leaf className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-emerald-950">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - 4 Step Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block mb-4">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight mb-4">
              How We Bring Your Vision to Life
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A proven 4-step methodology that transforms outdoor spaces into extraordinary landscapes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl border border-emerald-100 p-6 space-y-4 h-full">
                  <div className="inline-flex w-10 h-10 rounded-full bg-emerald-500 text-white font-black text-center items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-black text-emerald-950">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-emerald-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 lg:py-24 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block mb-4">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
              Comprehensive Landscaping Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Softscape Landscaping', items: detailedServices.softscape },
              { title: 'Hardscape Landscaping', items: detailedServices.hardscape },
              { title: 'Rooftop Landscaping', items: detailedServices.rooftop },
              { title: 'Water Features', items: detailedServices.water },
              { title: 'Swimming Pool Landscaping', items: detailedServices.swimmingPool },
              { title: 'Sustainable Landscaping', items: detailedServices.sustainable },
              { title: 'Large-Scale Landscaping', items: detailedServices.largeScale }
            ].map((service) => (
              <div key={service.title} className="bg-slate-50 rounded-2xl border border-slate-100 p-6 space-y-4">
                <h3 className="text-lg font-black text-emerald-950">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-700">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />

      {/* UAE Operations */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white border-y border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300 block">🇦🇪 Global Expansion</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Expanding Green Excellence to the UAE
              </h2>
              <p className="text-emerald-50 leading-relaxed">
                Wishfy Greens has established its presence in Dubai to support the growing demand for premium landscaping, horticulture, and sustainable green infrastructure solutions across the UAE.
              </p>
              <p className="text-emerald-50 leading-relaxed">
                Leveraging our experience of 500+ projects and 1 Crore+ plants delivered, we bring proven expertise to residential developments, hospitality projects, commercial properties, and public spaces.
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-sm font-bold text-emerald-300">Licensed Operations:</p>
                <p className="text-emerald-50">Wishfy Greens Landscape & Gardening Works L.L.C S.O.C</p>
              </div>
              <button
                onClick={() => setActiveModal('consultation')}
                className="inline-flex bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-6 py-3 rounded-xl transition-all mt-6"
              >
                Connect with Us
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-3 backdrop-blur-sm">
                <div className="text-3xl font-black text-emerald-300">500+</div>
                <p className="text-sm text-emerald-100">Projects Across India & UAE</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-3 backdrop-blur-sm">
                <div className="text-3xl font-black text-emerald-300">1 Cr+</div>
                <p className="text-sm text-emerald-100">Plants & Crops Supplied</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-3 backdrop-blur-sm">
                <div className="text-3xl font-black text-emerald-300">50+</div>
                <p className="text-sm text-emerald-100">Expert Team Members</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-3 backdrop-blur-sm">
                <div className="text-3xl font-black text-emerald-300">Pan-India</div>
                <p className="text-sm text-emerald-100">Coverage + Dubai Presence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Why Wishfy Stands Out</span>
              <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
                A single team for design, execution, science, and scale.
              </h2>
              <ul className="space-y-4">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                    <Icons.Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 bg-emerald-950 text-white rounded-3xl p-8 lg:p-10 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300 block">Trusted Across Categories</span>
              <h3 className="text-2xl font-black tracking-tight">
                From heritage landmarks to high-yield farms.
              </h3>
              <div className="space-y-4">
                {proofPoints.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-emerald-50 leading-relaxed">
                    <Icons.Check />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
