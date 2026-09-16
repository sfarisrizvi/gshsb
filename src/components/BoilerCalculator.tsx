'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BoilerCalculator() {
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

  return (
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
                  type="button"
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
                  type="button"
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
                type="button"
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
                type="button"
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
  );
}
