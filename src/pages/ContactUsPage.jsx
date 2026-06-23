import React, { useState } from 'react';
import Icons from '../components/icons/Icons';

export default function ContactUsPage({setActiveModal}) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const formDataToSend = new FormData(e.target);
    formDataToSend.append("access_key", "b5d3a0c8-79c6-417f-b421-06acb2435ae3");
    formDataToSend.append("subject", "New Contact Message - Wishfy Greens");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });
      const data = await response.json();
      if (data.success) {
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('Message sent successfully! Our horticultural consultant will get back to you shortly.');
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again later.');
    } finally {
      setFormSubmitted(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section */}
        <div className="rounded-[2rem] bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-700 px-8 py-16 sm:px-12 lg:px-16 text-white text-center mb-12">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-200 mb-6 border border-white/10">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-emerald-100">
            Have a project in mind? Contact our landscape and agricultural greenhouse experts today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Column 1: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl space-y-6">
            <h2 className="text-2xl font-extrabold text-emerald-950">Send Us a Message</h2>
            <p className="text-sm text-slate-600">Fill out the form below and our landscape designers will call you back within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Project Requirements</label>
                <textarea 
                  rows="4"
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none text-sm"
                  placeholder="Describe your landscape project space, size, location, and requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formSubmitted}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm uppercase tracking-wider"
              >
                {formSubmitted ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Column 2: Address Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* India HQ */}
            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-md space-y-4">
              <span className="inline-flex bg-emerald-100 text-emerald-800 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                🇮🇳 India Headquarters
              </span>
              <h3 className="text-lg font-extrabold text-emerald-950">Wishfy Greens Private Limited</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                2nd Floor H-146 & H-147, Sec 63, Noida, Uttar Pradesh, 201301
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.132-3.865-6.689-6.69l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:+919625679829" className="hover:text-emerald-600 font-bold">+91 96256 79829</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>✉</span>
                  <a href="mailto:sales@wishfygreens.com" className="hover:underline">sales@wishfygreens.com</a>
                </div>
              </div>
            </div>

            {/* Dubai HQ */}
            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-md space-y-4">
              <span className="inline-flex bg-amber-100 text-amber-800 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                🇦🇪 Dubai Headquarters
              </span>
              <h3 className="text-lg font-extrabold text-emerald-950">Wishfy Greens Landscape & Gardening Works LLC</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Suite 2001, The Citadel Tower, Marasi Dr, Business Bay, Dubai, UAE
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.132-3.865-6.689-6.69l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:+971504503699" className="hover:text-amber-600 font-bold">+971 50 450 3699</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>✉</span>
                  <a href="mailto:sales@wishfygreens.com" className="hover:underline">sales@wishfygreens.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
