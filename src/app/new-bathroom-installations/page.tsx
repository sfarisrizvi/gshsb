'use client';

import React from 'react';
import Link from 'next/link';
import { Bath, Sparkles, Droplets, CheckCircle2, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import EmergencyBanner from '@/components/EmergencyBanner';

export default function NewBathroomInstallationsPage() {
  const faqs = [
    {
      question: "How long does a complete new bathroom installation take in Birmingham?",
      answer: "A standard full bathroom refurbishment (rip-out, re-plumbing, tiling, shower/bath fitting, and electricals) takes between 5 to 8 working days."
    },
    {
      question: "Do you supply all bathroom suites and tiles or can I buy my own?",
      answer: "We offer both turnkey supply & fit packages from top brands (Grohe, Hansgrohe, Roca, Ideal Standard) or installation-only services if you have already chosen your own fixtures."
    },
    {
      question: "Can you turn a standard bathroom into a walk-in wetroom?",
      answer: "Yes, we specialize in tanked waterproof wetroom installations with linear floor drainage, recessed thermostatic showers, and micro-cement or porcelain tiling."
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      <section className="relative site-container pt-8">
        <div>
          <div className="glass-card-flame p-8 sm:p-14 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#520701] border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TURNKEY LUXURY BATHROOM FITTING</span>
              </div>
              <h1 className="font-epic text-4xl sm:text-6xl font-black text-white">
                NEW BATHROOM <br />
                <span className="text-gradient-flame">INSTALLATIONS BIRMINGHAM</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                Complete bathroom design, plumbing, walk-in wetrooms, rainfall showers, wall tiling, and LED mirror installations. Handcrafted for luxury durability.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="btn-emergency-pill text-sm flex items-center gap-2"
                >
                  <Bath className="w-4 h-4" />
                  <span>Book Free 3D Design Survey</span>
                </Link>
                <a
                  href="tel:01210000000"
                  className="glass-card px-6 py-3 text-sm font-semibold text-white flex items-center gap-2 border border-white/10 hover:border-[#e46222]"
                >
                  <PhoneCall className="w-4 h-4 text-[#e46222]" />
                  <span>0121 000 0000</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 space-y-4">
            <Bath className="w-8 h-8 text-[#e46222]" />
            <h3 className="font-epic text-xl font-bold text-white">Full Suite Fitting</h3>
            <p className="text-xs text-gray-400">Freestanding baths, wall-hung rimless toilets, double vanity units, and concealed pipework.</p>
          </div>
          <div className="glass-card p-8 space-y-4">
            <Droplets className="w-8 h-8 text-[#e46222]" />
            <h3 className="font-epic text-xl font-bold text-white">Walk-in Wetrooms</h3>
            <p className="text-xs text-gray-400">100% tanked waterproof floor trays, frameless glass screens, and high-flow rainfall showers.</p>
          </div>
          <div className="glass-card p-8 space-y-4">
            <Sparkles className="w-8 h-8 text-[#e46222]" />
            <h3 className="font-epic text-xl font-bold text-white">Precision Tiling & Finish</h3>
            <p className="text-xs text-gray-400">Large format porcelain, marble effect, herringbone feature walls, anti-fog LED mirrors, and underfloor heating.</p>
          </div>
        </div>
      </section>

      <EmergencyBanner />
      <FAQAccordion items={faqs} title="Bathroom Installation FAQs" />
    </div>
  );
}
