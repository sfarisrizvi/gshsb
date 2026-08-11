'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, ShieldCheck, CheckCircle2, PhoneCall, ArrowRight, BookOpen, Clock } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function NewBoilerGuidePage() {
  const guideFaqs = [
    {
      question: "Which boiler is best for a 3-bedroom house in Birmingham?",
      answer: "A 28kW to 32kW A-rated combi boiler (like the Worcester Bosch Greenstar 4000 or Baxi 800) is ideal for most 3-bedroom Birmingham homes with 1 bathroom."
    },
    {
      question: "Do I need to notify my local council when installing a boiler?",
      answer: "No. Because GSHSB is Gas Safe registered, we self-certify the installation with Gas Safe, who directly inform Building Control and issue your CP12/Building Regulations Compliance Certificate."
    }
  ];

  return (
    <div className="space-y-16 pb-16 site-container">
      {/* Header */}
      <div className="space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 bg-[#520701] border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>BIRMINGHAM HOMEOWNER GUIDE</span>
        </div>
        <h1 className="font-epic text-3xl sm:text-5xl font-black text-white leading-tight">
          NEW BOILER INSTALLATION <br />
          <span className="text-gradient-flame">BIRMINGHAM GUIDE (2026)</span>
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 font-mono border-y border-white/10 py-3">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#e46222]" /> 6 Min Read</span>
          <span>•</span>
          <span>Authored by GSHSB Senior Gas Engineers</span>
        </div>
      </div>

      {/* Guide Content */}
      <div className="glass-card p-8 sm:p-12 space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <h2 className="font-epic text-2xl font-bold text-white border-l-4 border-[#e46222] pl-4">
            1. Choosing the Right Boiler Type
          </h2>
          <p>
            When upgrading your central heating in Birmingham, choosing the correct boiler model dictates both your upfront investment and your monthly gas bill savings.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-sm">Combination (Combi) Boilers</h4>
              <p className="text-xs text-gray-400">Heats water directly from the mains on demand. Eliminates cold water tanks and hot water cylinders. Ideal for 1-2 bathroom homes.</p>
            </div>
            <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-sm">System & Conventional Boilers</h4>
              <p className="text-xs text-gray-400">Requires a hot water cylinder. Perfect for larger properties with multiple bathrooms running showers simultaneously.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-epic text-2xl font-bold text-white border-l-4 border-[#e46222] pl-4">
            2. The Importance of Chemical Power Flushing
          </h2>
          <p>
            Installing a brand-new A-rated boiler on an old, sludge-filled radiator system is a major mistake. Sludge and magnetic debris can void manufacturer warranties instantly. At GSHSB, every new boiler installation includes a high-velocity MagnaClean system flush and magnetic filter installation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-epic text-2xl font-bold text-white border-l-4 border-[#e46222] pl-4">
            3. Gas Safe Registration & Warranty Protection
          </h2>
          <p>
            Always verify your installer on the Gas Safe Register before work starts. GSHSB engineers carry digital badges and register your warranty directly with manufacturers like Worcester Bosch and Baxi for up to 12 years of total peace of mind.
          </p>
        </section>

        {/* CTA Card inside Guide */}
        <div className="p-6 rounded-24 bg-gradient-to-r from-[#520701] to-[#120506] border border-[#e46222]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-epic text-lg font-bold text-white">Need a New Boiler Quote?</div>
            <div className="text-xs text-gray-400">Fixed price quotes with 0% finance available in Birmingham</div>
          </div>
          <Link href="/boiler-installation" className="btn-emergency-pill text-xs whitespace-nowrap">
            Explore Boiler Options
          </Link>
        </div>
      </div>

      <FAQAccordion items={guideFaqs} title="Guide FAQs" />
    </div>
  );
}
