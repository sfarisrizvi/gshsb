'use client';

import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock, ShieldCheck, Send, CheckCircle2, Flame } from 'lucide-react';
import EmergencyBanner from '@/components/EmergencyBanner';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    service: 'Boiler Installation',
    urgent: false,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-16">
      {/* Header */}
      <section className="relative site-container pt-8">
        <div>
          <div className="glass-card-flame p-8 sm:p-14 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#520701] border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
                <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
                <span>24/7 BIRMINGHAM DISPATCH HOTLINE</span>
              </div>
              <h1 className="font-epic text-4xl sm:text-6xl font-black text-white">
                GET IN TOUCH & <br />
                <span className="text-gradient-flame">BOOK AN ENGINEER</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                Need emergency leak isolation, boiler replacement quote, or bathroom design consultation? Complete the form below for an instant response within 15 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 border border-white/10 relative overflow-hidden">
              <h2 className="font-epic text-2xl font-bold text-white mb-6">
                REQUEST A FREE QUOTE OR EMERGENCY DISPATCH
              </h2>

              {submitted ? (
                <div className="p-8 rounded-24 bg-[#520701]/60 border border-[#e46222] text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#e46222] text-white flex items-center justify-center mx-auto shadow-[0_0_25px_#e46222]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-epic text-2xl font-bold text-white">REQUEST RECEIVED!</h3>
                  <p className="text-sm text-gray-200 max-w-md mx-auto">
                    Thank you, <strong className="text-[#e46222]">{formData.name}</strong>. A senior Gas Safe engineer will call your phone (<strong className="text-white">{formData.phone}</strong>) within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#e46222] underline pt-4 block mx-auto"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e46222] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="07123 456789"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e46222] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                        Birmingham Postcode *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        placeholder="e.g. B13 9PT"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e46222] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#121218] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e46222] transition-colors"
                      >
                        <option value="Domestic Plumbing">Domestic Plumbing</option>
                        <option value="Boiler Installation">Boiler Installation</option>
                        <option value="Cooker Installation">Cooker Installation</option>
                        <option value="Radiator Installation">Radiator Installation</option>
                        <option value="New Bathroom Installations">New Bathroom Installations</option>
                        <option value="24/7 Emergency Dispatch">24/7 Emergency Callout</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#520701]/40 border border-[#e46222]/40 p-4 rounded-xl">
                    <input
                      type="checkbox"
                      id="urgentCheck"
                      checked={formData.urgent}
                      onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                      className="w-4 h-4 accent-[#e46222] rounded cursor-pointer"
                    />
                    <label htmlFor="urgentCheck" className="text-xs text-white cursor-pointer">
                      <strong className="text-[#e46222]">URGENT EMERGENCY:</strong> Check if you require an engineer on-site within 45 minutes.
                    </label>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                      Project Details / Symptoms
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your boiler model, leak location, or bathroom installation requirements..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e46222] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-emergency-pill w-full text-sm uppercase tracking-wider flex items-center justify-center gap-2 py-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Request Callback</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 space-y-6 border border-white/10">
              <h3 className="font-epic text-xl font-bold text-white border-b border-white/10 pb-4">
                DIRECT CONTACT DETAILS
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#520701] border border-[#e46222] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-[#e46222]" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-mono uppercase block">24/7 Hotline</span>
                    <a href="tel:01210000000" className="text-lg font-bold text-white hover:text-[#e46222] transition-colors">
                      0121 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#520701] border border-[#e46222] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#e46222]" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-mono uppercase block">Email Enquiries</span>
                    <a href="mailto:info@gshsb.co.uk" className="text-sm font-semibold text-white hover:text-[#e46222] transition-colors">
                      info@gshsb.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#520701] border border-[#e46222] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#e46222]" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-mono uppercase block">Coverage Area</span>
                    <p className="text-sm text-gray-300">
                      Birmingham, Solihull, Sutton Coldfield, Edgbaston, Harborne, Moseley, Shirley & Greater West Midlands.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accreditation Box */}
            <div className="glass-card-flame p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#e46222] font-semibold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Gas Safe Certified #948123</span>
              </div>
              <p className="text-xs text-gray-300">
                All work is insured up to £5M public liability and fully compliant with UK Building Regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner />
    </div>
  );
}
