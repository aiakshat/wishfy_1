import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Wishfy Greens transformed our commercial patio areas. Their horticulturists designed a low-maintenance, heat-resistant layout that looks pristine year-round.",
    author: "Property Manager, Corporate Campus",
    rating: 5
  },
  {
    quote: "Our high-tech smart polyhouse setup was delivered ahead of schedule. The ROI is exactly where their team projected - a major milestone for our business.",
    author: "Director, Agribusiness Enterprise",
    rating: 5
  },
  {
    quote: "Meticulous work on our balcony vertical gardens. The water conservation drainage system they created is brilliant, cleanly recycling runoff water without mess.",
    author: "Penthouse Owner, DLF Camellias",
    rating: 5
  },
  {
    quote: "The landscape lighting and automatic drip irrigation system they installed for our hotel lawn are top-tier. Guests frequently compliment our evening garden ambiance.",
    author: "General Manager, Heritage Resort & Spa",
    rating: 5
  },
  {
    quote: "Wishfy Greens helped us design and construct a vertical green wall for our main lobby. It has dramatically improved air quality and completely changed the aesthetic of our office.",
    author: "Head of HR, Tech Unicorn HQ",
    rating: 5
  },
  {
    quote: "Their smart greenhouse automation system took our hydroponics farm to the next level. We can now control temperature, humidity, and nutrient levels via a mobile app.",
    author: "Co-Founder, GreenLife Farms",
    rating: 5
  },
  {
    quote: "Outstanding residential landscaping. They redesigned our entire backyard with beautiful stone pathways, native plants, and a stunning water fountain. The maintenance team is also extremely professional.",
    author: "Villa Owner, Nad Al Sheba (Dubai)",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  // Auto scroll logic
  useEffect(() => {
    if (isHovered || maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [maxIndex, isHovered]);

  // Handle index boundaries when resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <>
      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block">Creating Spaces That Inspire</span>
              <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
                What Our Partners Say
              </h2>
            </div>
            
            {/* Manual Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-slate-200 bg-white text-emerald-950 hover:bg-emerald-50 hover:border-emerald-200 flex items-center justify-center transition-all shadow-sm group"
                aria-label="Previous testimonials"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-slate-200 bg-white text-emerald-950 hover:bg-emerald-50 hover:border-emerald-200 flex items-center justify-center transition-all shadow-sm group"
                aria-label="Next testimonials"
              >
                <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel Viewport Container */}
          <div 
            className="overflow-hidden -mx-4 px-4 py-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex items-stretch transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` 
              }}
            >
              {testimonials.map((test, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 px-4 select-none"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative h-full flex flex-col justify-between hover:shadow-md hover:border-emerald-100/80 transition-all duration-300">
                    {/* Visual quote indicator icon */}
                    <span className="text-emerald-200 text-6xl font-serif absolute top-4 left-4 leading-none select-none">“</span>
                    <div className="relative z-10 space-y-4 flex-grow">
                      <div className="flex gap-1">
                        {[...Array(test.rating)].map((_, i) => (
                          <span key={i} className="text-amber-500 text-base">★</span>
                        ))}
                      </div>
                      <p className="text-sm text-slate-700 italic leading-relaxed">
                        {test.quote}
                      </p>
                    </div>
                    <div className="relative z-10 pt-6 mt-6 border-t border-slate-100">
                      <span className="block text-xs font-extrabold uppercase tracking-widest text-emerald-950">{test.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Page Indicators (Dots) */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'w-8 bg-emerald-600' 
                    : 'w-2.5 bg-slate-200 hover:bg-emerald-200'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
