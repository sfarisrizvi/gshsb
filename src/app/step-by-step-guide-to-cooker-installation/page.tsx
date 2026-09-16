import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Step-by-Step Gas Cooker Installation Guide | Safety & Regulations UK',
  description: 'Step-by-step gas cooker installation guide following UK Gas Safety 1998 regulations. Learn about clearances, stability chains, tightness testing & certification.',
  alternates: {
    canonical: '/step-by-step-guide-to-cooker-installation',
  },
  openGraph: {
    title: 'Step-by-Step Gas Cooker Installation Guide | GSHSB',
    description: 'How gas cookers and hobs are legally installed in the UK by Gas Safe registered engineers.',
    url: '/step-by-step-guide-to-cooker-installation',
    type: 'article',
  },
};

const steps = [
  { step: "Step 1: Gas Supply Isolation & Safety Inspection", detail: "Isolating the gas meter valve, inspecting the existing bayonet socket condition, and checking pipe diameter compliance." },
  { step: "Step 2: Appliance Position & Clearance Check", detail: "Ensuring non-combustible splashbacks are present and maintaining minimum 750mm clearance to cooker hood." },
  { step: "Step 3: Flexible Hose & Stability Chain Attachment", detail: "Fitting BS 669 certified high-temperature gas hoses and anchor chain to prevent accidental tipping." },
  { step: "Step 4: Tightness Pressure Drop & Combustion Testing", detail: "Monitoring gas pressure gauge for 2 minutes to confirm zero pressure drop, followed by flame stability checks." },
  { step: "Step 5: Digital Gas Safe Certificate Issuance", detail: "Issuing landlord or homeowner CP12 appliance safety certificate directly to your email." }
];

export default function StepByStepCookerGuidePage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Install a Gas Cooker Legally in the UK',
    description: 'A 5-step professional procedure for installing and testing domestic freestanding gas cookers in accordance with Gas Safety Regulations.',
    totalTime: 'PT1H30M',
    step: steps.map((s, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: s.step,
      text: s.detail,
    })),
  };

  return (
    <div className="space-y-16 pb-16 site-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 bg-[#520701] border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>GAS SAFETY STANDARD</span>
        </div>
        <h1 className="font-epic text-3xl sm:text-5xl font-black text-white leading-tight">
          STEP-BY-STEP GUIDE TO <br />
          <span className="text-gradient-flame">GAS COOKER INSTALLATION</span>
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 font-mono border-y border-white/10 py-3">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#e46222]" /> 4 Min Read</span>
          <span>•</span>
          <span>Gas Safe Regulations (UK 1998)</span>
        </div>
      </div>

      <div className="glass-card p-8 sm:p-12 space-y-6">
        {steps.map((st, i) => (
          <article key={i} className="p-6 rounded-24 bg-white/[0.02] border border-white/5 space-y-2">
            <h2 className="font-epic text-lg font-bold text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#520701] border border-[#e46222] flex items-center justify-center text-xs text-[#e46222]">
                {i + 1}
              </span>
              {st.step}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-11">{st.detail}</p>
          </article>
        ))}

        <div className="p-6 rounded-24 bg-gradient-to-r from-[#520701] to-[#120506] border border-[#e46222]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-epic text-lg font-bold text-white">Book Certified Gas Safe Fitting</div>
            <div className="text-xs text-gray-400">Fixed £95 fitting fee across Greater Birmingham</div>
          </div>
          <Link href="/cooker-installation" className="btn-emergency-pill text-xs whitespace-nowrap">
            Book Cooker Fitting
          </Link>
        </div>
      </div>
    </div>
  );
}
