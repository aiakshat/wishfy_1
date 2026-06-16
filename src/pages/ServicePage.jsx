import React from 'react';
import { services } from '../data/services';
import Icons from '../components/icons/Icons';
import ClientsSection from '../components/ClientsSection';
import CTASection from '../components/CTASection';

const slugToServiceTitle = {
  'softscape-landscaping': 'Softscape Landscaping',
  'hardscape-landscaping': 'Hardscape Landscaping',
  'rooftop-landscaping': 'Rooftop landscaping',
  'water-feature-landscaping': 'Water feature landscaping',
  'sustainable-landscaping': 'Sustainable Green Infrastructure',
  'large-scale-landscaping': 'Large Scale landscaping',
  'b2b-plant-supply': 'B2B Plant & Crop Supply',
  'landscape-maintenance': 'Landscape Maintenance'
};

const serviceTitleToSlug = {
  'Large Scale landscaping': 'large-scale-landscaping',
  'Softscape Landscaping': 'softscape-landscaping',
  'Hardscape Landscaping': 'hardscape-landscaping',
  'Rooftop landscaping': 'rooftop-landscaping',
  'Water feature landscaping': 'water-feature-landscaping',
  'Sustainable Green Infrastructure': 'sustainable-landscaping',
  'B2B Plant & Crop Supply': 'b2b-plant-supply',
  'Landscape Maintenance': 'landscape-maintenance'
};

const servicePageBanners = {
  'softscape-landscaping': '/images/Softscape-Landscaping.png',
  'hardscape-landscaping': '/images/Hardscape-Landscaping.png',
  'rooftop-landscaping': '/images/Rooftop-landscaping.png',
  'water-feature-landscaping': '/images/Water-feature-landscaping.png',
  'sustainable-landscaping': '/images/Sustainable-Green-Infrastructure.png',
  'large-scale-landscaping': '/images/Large-Scale-landscaping.png',
  'b2b-plant-supply': '/images/B2B-Plant-&-Crop-Supply.png',
  'landscape-maintenance': '/images/Landscape-Maintenance.png'
};


const servicePages = {
  'softscape-landscaping': {
    title: 'Softscape Landscaping',
    subtitle: 'Living landscapes designed for premium properties, parks, resorts and iconic landmarks.',
    overview: [
      'End-to-end softscape landscaping, gardening and maintenance for high-visibility properties.',
      'Trusted for landmark and hospitality spaces including Qutub Minar, 30+ parks, 50+ residential societies, and luxury resorts.',
      'Expert planting design, lawns, flower beds, shrubs, trees and green corridors that mature beautifully over time.',
    ],
    highlights: [
      'Large-scale greenfield planting for residential and retail chains',
      'Seasonal colour planning, lawns, shrubs, flower beds and hedgerow design',
      'Ongoing property maintenance for premium estates, resorts and public parks',
      'Heritage and high-profile projects with sensitive landscape treatment',
    ],
    details: [
      'Softscape is the living fabric of every landscape, from lawns and trees to flowering borders and ornamental planting.',
      'We combine horticulture expertise with design-led execution to deliver visually rich, sustainable and low-maintenance landscapes.',
      'Our teams work across public green spaces, resorts, residential communities and commercial campuses to nurture landscapes that perform year-round.',
    ],
  },
  'hardscape-landscaping': {
    title: 'Hardscape Landscaping',
    subtitle: 'Premium structural landscapes built for durability, form and luxury outdoor experiences.',
    overview: [
      'Hardscape landscaping for pathways, pergolas, decking, stone features and functional outdoor spaces.',
      'Delivered across resorts, hotels, retail precincts, airports and large commercial developments.',
      'Designed to harmonise with plantings and architecture while offering long-lasting material performance.',
    ],
    highlights: [
      'Pathway and plaza design for premium hospitality and retail spaces',
      'Pergolas, decks and stone features for elegant experiential environments',
      'Durable paving, seating walls, steps and structural garden elements',
      'Integrated hardscape layouts that support landscaping, lighting and outdoor living',
    ],
    details: [
      'Hardscape elements form the backbone of memorable landscapes, giving shape, circulation and structure to outdoor areas.',
      'We blend materials like natural stone, timber, engineered decking and composite finishes with intelligent landscape design.',
      'From resort entrances to retail showrooms and airport forecourts, our hardscape work is both functional and beautiful.',
    ],
  },
  'rooftop-landscaping': {
    title: 'Rooftop Landscaping',
    subtitle: 'Elevated garden experiences for terraces, balconies, rooftops and premium urban spaces.',
    overview: [
      'Rooftop and terrace landscaping for modern living, commercial rooftops and urban retreats.',
      'Services include balcony gardens, rooftop cafes, vertical gardens, pergolas and entertainment decks.',
      'Delivered with premium materials, careful detailing and sustainable planting for every scale of roofscape.',
    ],
    highlights: [
      'Rooftop gardens that transform empty roofs into vibrant social and relaxation spaces',
      'Vertical gardens and green walls for visual impact and thermal comfort',
      'Outdoor seating areas, yoga decks, meditation retreats and cafe landscapes',
      'Corporate terraces, penthouse greenspaces and urban farm balconies',
    ],
    details: [
      'Rooftop landscaping brings green design to elevated spaces by combining lightweight soil systems, planters and smart irrigation.',
      'Our rooftop gardens are designed for enjoyment, with resilient plant palettes and easy maintenance.',
      'We create terraces that support hospitality, wellness and entertainment while improving building performance and wellbeing.',
    ],
  },
  'water-feature-landscaping': {
    title: 'Water Feature Landscaping',
    subtitle: 'Serene water gardens, ponds, fountains and flowing landscape features with engineered elegance.',
    overview: [
      'Custom water feature landscaping including koi ponds, water gardens, fountains and waterfalls.',
      'Designed to create calming motion, natural sound and premium visual interest in any landscape.',
      'Engineered systems ensure water quality, natural filtration and integrated aquatic planting.',
    ],
    highlights: [
      'Koi ponds and water gardens with natural filtration and aquatic planting',
      'Custom fountains and waterfalls tailored to modern and natural landscape aesthetics',
      'Water features built for outdoor living spaces, resorts, corporate campuses and luxury homes',
      'Balanced design focused on serenity, motion, sound and ecosystem health',
    ],
    details: [
      'Water features are central to immersive landscapes, creating sensory appeal and a sense of calm.',
      'We engineer each water installation to integrate with planting, terraces and hardscape elements.',
      'Our water gardens are designed for beauty, functionality and long-term reliability.',
    ],
  },
  'sustainable-landscaping': {
    title: 'Sustainable Green Infrastructure',
    subtitle: 'Smart greenhouses, water-saving drip irrigation, and rainwater systems built for long-term ecological balance.',
    overview: [
      'Intelligent agricultural greenhouses, polyhouses, and climate-controlled structures for continuous botanical production.',
      'Precision automated drip irrigation and fertigation systems engineered to maximize water efficiency.',
      'Integrated rainwater harvesting, water recycling, and sustainable eco-infrastructure for commercial and residential estates.',
    ],
    highlights: [
      'High-yield commercial greenhouses and smart polyhouse construction',
      'Automated drip irrigation, IoT soil sensors, and fertigation controls',
      'Rainwater harvesting networks, filtration systems, and greywater recycling',
      'Climate-responsive infrastructure using low-input, highly resilient designs',
    ],
    details: [
      'Sustainable Green Infrastructure combines precision agricultural engineering with resource conservation to create high-performing ecological systems.',
      'Our solutions range from controlled-environment agriculture structures (greenhouses) to automated irrigation networks that reduce water waste by up to 60%.',
      'We design and deploy rainwater storage, recycling, and smart landscaping systems that enable properties to achieve self-sufficiency and low operating costs.',
    ],
  },
  'large-scale-landscaping': {
    title: 'Large-Scale Landscaping',
    subtitle: 'Transforming expansive sites with high-impact landscape design and execution.',
    overview: [
      'Large-scale landscaping for airports, flyovers, resorts, public parks and corporate campuses.',
      'End-to-end execution across premium projects including hospitality, commercial and civic spaces.',
      'We manage large programs with strong logistics, horticulture capability and landscape maintenance expertise.',
    ],
    highlights: [
      'Major infrastructure landscapes for airports, flyovers and retail precincts',
      'Resort and hospitality campuses with integrated softscape and hardscape design',
      'Large residential societies, parks and public green spaces with ongoing landscape care',
      'High-volume plant sourcing, delivery and installation for complex sites',
    ],
    details: [
      'Large-scale landscaping requires coordinated execution, strong supply chains and experienced teams.',
      'We deliver ambitious green projects with consistent quality across broad and high-profile sites.',
      'Our large-scale work is built to support brand experience, visitor comfort and long-term landscape impact.',
    ],
  },
  'b2b-plant-supply': {
    title: 'B2B Plant & Crop Supply',
    subtitle: 'Pan-India bulk procurement, contract nursery production, and reliable logistics for institutional buyers.',
    overview: [
      'Fulfillment of large-scale nursery requirements for real-estate developments, online gardening platforms, and municipalities.',
      'Active supply chains covering high-demand ornamental foliage, structural hedges, and ground covers.',
      'Pan-India distribution networks and licensed local operational hubs in India and the UAE.',
    ],
    highlights: [
      'High-volume plant supply for real-estate developers and public greening campaigns',
      'Contract farming and dedicated nursery production tailored to specific project timelines',
      'Specialized transport logistics ensuring zero transit damage and optimal plant freshness',
      'Licensed import/export and quarantine clearances for regional landscape projects',
    ],
    details: [
      'Institutional procurement requires scale, consistency, and absolute logistical reliability. Wishfy Greens stands out as one of the largest nursery distributors.',
      'Our dedicated nursery spaces house thousands of plant species ready for immediate delivery.',
      'We partner with top-tier developers, contractors, and e-commerce platforms to deliver green infrastructure on time and on budget.',
    ],
  },
  'landscape-maintenance': {
    title: 'Landscape Maintenance',
    subtitle: 'Specialized horticultural maintenance programs built for premium commercial, hospitality, and residential properties.',
    overview: [
      'Ongoing maintenance plans led by qualified horticulturists to protect and grow your landscape assets.',
      'Custom programs covering soil health, pest management, precision pruning, and seasonal upgrades.',
      'Trusted by corporate campuses, major resorts, public institutions, and premium private estates.',
    ],
    highlights: [
      'Horticultural audits and soil health optimization plans',
      'Precision pruning, trimming, and seasonal plantation replacements',
      'IoT-linked irrigation oversight and water efficiency tracking',
      'Dedicated on-site gardening teams with supervisor oversight',
    ],
    details: [
      'A beautiful landscape is an investment that matures over time. Regular, professional care ensures it reaches its full potential.',
      'Our team goes beyond basic trimming to provide deep botanical nourishment, pest preventative measures, and aesthetic styling.',
      'We offer flexible annual contracts tailored to the unique microclimates of your properties.',
    ],
  },
};

export default function ServicePage({slug, setActiveModal}) {
  const page = servicePages[slug];
  if (!page) {
    return (
      <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-emerald-100">
          <h1 className="text-3xl font-extrabold text-emerald-950">Service not found</h1>
          <p className="mt-4 text-slate-600">The requested service page could not be located. Please choose a valid service from the menu.</p>
        </div>
      </main>
    );
  }

  const currentServiceTitle = slugToServiceTitle[slug];
  const otherServices = services.filter(srv => srv.title !== currentServiceTitle);

  return (
    <main className="min-h-screen bg-slate-50 pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <section className="rounded-[2rem] bg-white shadow-2xl border border-emerald-100 overflow-hidden">
          <div 
            className="bg-cover bg-center bg-no-repeat px-8 py-16 sm:px-12 lg:px-16"
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(2, 44, 34, 0.75), rgba(6, 95, 70, 0.60), rgba(4, 120, 87, 0.45)), url(${servicePageBanners[slug]})` 
            }}
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200 mb-6">
              Service Focus
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">{page.title}</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg text-emerald-100">{page.subtitle}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {page.overview.map((item, idx) => (
                <div key={idx} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-emerald-100">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="px-8 py-10 sm:px-12 lg:px-16 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-2xl font-extrabold text-emerald-950">Why this service matters</h2>
                <p className="mt-4 text-slate-600 leading-8">Each service is tailored to deliver a landscape outcome that suits the scale, setting and purpose of the site. We combine thoughtful design, high-quality execution and ongoing care to create spaces that look stronger with every season.</p>
                <div className="mt-8 space-y-4">
                  {page.details.map((detail, idx) => (
                    <div key={idx} className="rounded-3xl bg-emerald-50 p-5 border border-emerald-100">
                      <p className="text-sm text-slate-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-emerald-950">Key capabilities</h2>
                <div className="mt-6 grid gap-4">
                  {page.highlights.map((highlight, idx) => (
                    <div key={idx} className="rounded-3xl bg-slate-950/5 p-5 border border-emerald-100">
                      <p className="text-sm font-semibold text-emerald-900">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Compact Other Solutions Section */}
      <section className="py-20 bg-slate-100/40 border-t border-b border-emerald-100/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Explore More Solutions</span>
            <h2 className="text-3xl font-black text-emerald-950 tracking-tight">
              Other Green Solutions
            </h2>
            <p className="text-sm text-slate-600">
              Discover our complete range of bespoke botanical, structured landscaping, and precision cultivation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((srv, idx) => {
              const targetSlug = serviceTitleToSlug[srv.title];
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-emerald-100/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
                >
                  <div>
                    {/* Compact Image */}
                    <div className="relative h-40 w-full bg-slate-900 overflow-hidden">
                      <img 
                        src={srv.image} 
                        alt={srv.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                          {srv.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-2">
                      <h3 className="text-sm font-black text-emerald-950 group-hover:text-emerald-700 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    {targetSlug ? (
                      <a 
                        href={`/services/${targetSlug}`}
                        className="w-full py-2 text-center text-xs border border-slate-200 group-hover:border-emerald-500 rounded-xl font-bold group-hover:bg-emerald-900 group-hover:text-white transition-all flex items-center justify-center gap-2 text-slate-700"
                      >
                        <span>View Details</span>
                        <Icons.ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button 
                        onClick={() => setActiveModal('consultation')}
                        className="w-full py-2.5 text-center text-xs border border-slate-200 group-hover:border-emerald-500 rounded-xl font-bold group-hover:bg-emerald-900 group-hover:text-white transition-all flex items-center justify-center gap-2 text-slate-700"
                      >
                        <span>Inquire Service</span>
                        <Icons.ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Autoplay Clients Carousel */}
      <ClientsSection />

      {/* Bottom CTA Section */}
      <CTASection setActiveModal={setActiveModal} />
    </main>
  );
}
