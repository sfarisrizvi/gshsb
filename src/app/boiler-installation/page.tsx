'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flame, ShieldCheck, CheckCircle2, PhoneCall, ArrowRight, Calculator, Award, ThermometerSun } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import EmergencyBanner from '@/components/EmergencyBanner';

import LottieIcon from '@/components/LottieIcon';

export default function BoilerInstallationPage() {
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(1);
  const [boilerType, setBoilerType] = useState('combi');

  const estimatedPriceRange = () => {
    let base = 1750;
    if (bedrooms > 3) base += 400;
    if (bathrooms > 1) base += 350;
    if (boilerType === 'system') base += 500;
    return `£${base} - £${base + 650}`;
  };

  const faqs = [
    {
      question: "How long does a new boiler installation take in Birmingham?",
      answer: "A straight combi-to-combi boiler swap typically takes 1 day (6 to 8 hours). Converting from a conventional system boiler with hot water tank to a high-efficiency combi boiler takes 1.5 to 2 days."
    },
    {
      question: "What length of warranty is included on new boilers?",
      answer: "As Worcester Bosch and Baxi accredited installers, we provide 10 to 12 year parts and labor manufacturer warranties on selected boiler models."
    },
    {
      question: "Can I get interest-free boiler finance options?",
      answer: "Yes, we partner with leading home improvement finance providers to offer 0% APR finance over 12, 24, or 36 months subject to status."
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative site-container pt-8">
        <div>
          <div className="glass-card-flame p-8 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#520701] border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
                <Award className="w-3.5 h-3.5" />
                <span>WORCESTER & BAXI ACCREDITED INSTALLERS</span>
              </div>
              <h1 className="font-epic text-4xl sm:text-6xl font-black text-white">
                A-RATED NEW BOILER <br />
                <span className="text-gradient-flame">INSTALLATION BIRMINGHAM</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                Upgrade your heating with top-rated energy efficient combi, system, or regular boilers. Reduce gas bills by up to £340/year with smart controls and up to 12-year warranties.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#calculator"
                  className="btn-emergency-pill text-sm flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Instant Boiler Estimate</span>
                </a>
                <a
                  href="tel:01210000000"
                  className="glass-card px-6 py-3 text-sm font-semibold text-white flex items-center gap-2 border border-white/10 hover:border-[#e46222]"
                >
                  <PhoneCall className="w-4 h-4 text-[#e46222]" />
                  <span>Speak to Boiler Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quote Estimator Widget */}
      <section id="calculator" className="site-container">
        <div className="glass-card p-8 sm:p-12 border border-[#e46222]/30 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#e46222]/10 px-3 py-1 rounded-full text-xs text-[#e46222] font-mono">
              INSTANT ESTIMATOR
            </div>
            <h2 className="font-epic text-3xl font-bold text-white">
              BOILER INSTALLATION COST ESTIMATOR
            </h2>
            <p className="text-xs text-gray-400">Select your property specs for an instant price range breakdown</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Bedrooms selector */}
            <div className="space-y-3 bg-white/[0.02] p-6 rounded-24 border border-white/5">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                Number of Bedrooms
              </label>
              <div className="flex items-center justify-between gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setBedrooms(num)}
                    className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                      bedrooms === num
                        ? 'bg-[#e46222] text-white shadow-[0_0_15px_#e46222]'
                        : 'bg-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Bathrooms selector */}
            <div className="space-y-3 bg-white/[0.02] p-6 rounded-24 border border-white/5">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                Number of Bathrooms
              </label>
              <div className="flex items-center justify-between gap-2">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setBathrooms(num)}
                    className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                      bathrooms === num
                        ? 'bg-[#e46222] text-white shadow-[0_0_15px_#e46222]'
                        : 'bg-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Boiler Type selector */}
            <div className="space-y-3 bg-white/[0.02] p-6 rounded-24 border border-white/5">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                System Preference
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setBoilerType('combi')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    boilerType === 'combi'
                      ? 'bg-[#e46222] text-white shadow-[0_0_15px_#e46222]'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  Combi Boiler
                </button>
                <button
                  onClick={() => setBoilerType('system')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    boilerType === 'system'
                      ? 'bg-[#e46222] text-white shadow-[0_0_15px_#e46222]'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  System & Unvented
                </button>
              </div>
            </div>
          </div>

          {/* Result Box */}
          <div className="p-6 rounded-24 bg-gradient-to-r from-[#520701] to-[#120506] border border-[#e46222]/50 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-gray-400 font-mono block">ESTIMATED INSTALLED PRICE (INC. VAT & FLUSH)</span>
              <span className="font-epic text-3xl sm:text-4xl font-extrabold text-[#e46222]">{estimatedPriceRange()}</span>
            </div>
            <Link
              href="/contact-us"
              className="btn-emergency-pill text-xs px-6 py-3 uppercase tracking-wider whitespace-nowrap"
            >
              Lock In Free Fixed Price Survey
            </Link>
          </div>
        </div>
      </section>

      <EmergencyBanner />
      <FAQAccordion items={faqs} title="Boiler Installation FAQs" />
    </div>
  );
}
