'use client';

import React from 'react';
import Link from 'next/link';
import { Bath, Sparkles, BookOpen, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function BathroomConsiderationsGuidePage() {
  const points = [
    { title: "1. Water Pressure & System Compatibility", desc: "Gravity-fed systems vs unvented high-pressure cylinders dictate whether you need a pump for your rainfall shower." },
    { title: "2. Layout Optimization & Waste Pipe Routes", desc: "Relocating soil pipes can add plumbing costs. Keeping the toilet near the main stack optimizes budget." },
    { title: "3. Waterproofing & Tanking for Wetrooms", desc: "Crucial for preventing moisture seepage into joists below. We apply multi-layer liquid tanking membranes." },
    { title: "4. Ventilation & Anti-Mould Extractor Fans", desc: "Installing high-extraction inline humidi-stat fan units keeps grout clean and prevents condensation." },
    { title: "5. Heating & Towel Warmers", desc: "Calculate BTU requirements to ensure your heated towel rail keeps both towels and room warm." },
    { title: "6. Tile Material & Slip Resistance Rating", desc: "Opt for R10+ anti-slip porcelain tiles for shower zones to combine luxury aesthetics with safety." },
    { title: "7. Realistic Fitting Timelines & Contingency", desc: "Allow 7 to 10 days for full rip-out, re-pipe, electrical work, plastering, tiling, and sanitaryware fitting." }
  ];

  return (
    <div className="space-y-16 pb-16 site-container">
      <div className="space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 bg-[#520701] border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>BATHROOM PLANNING GUIDE</span>
        </div>
        <h1 className="font-epic text-3xl sm:text-5xl font-black text-white leading-tight">
          TOP 7 THINGS TO CONSIDER BEFORE A NEW <br />
          <span className="text-gradient-flame">BATHROOM INSTALLATION IN BIRMINGHAM</span>
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 font-mono border-y border-white/10 py-3">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#e46222]" /> 5 Min Read</span>
          <span>•</span>
          <span>By GSHSB Master Fitters</span>
        </div>
      </div>

      <div className="glass-card p-8 sm:p-12 space-y-8">
        <div className="space-y-6">
          {points.map((pt, i) => (
            <div key={i} className="p-6 rounded-24 bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="font-epic text-lg font-bold text-[#e46222]">{pt.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-24 bg-gradient-to-r from-[#520701] to-[#120506] border border-[#e46222]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-epic text-lg font-bold text-white">Ready to Design Your Dream Bathroom?</div>
            <div className="text-xs text-gray-400">Schedule a free 3D design consultation in Birmingham</div>
          </div>
          <Link href="/new-bathroom-installations" className="btn-emergency-pill text-xs whitespace-nowrap">
            Book Design Survey
          </Link>
        </div>
      </div>
    </div>
  );
}
