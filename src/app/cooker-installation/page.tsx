import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CookingPot, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import EmergencyBanner from '@/components/EmergencyBanner';

export const metadata: Metadata = {
  title: 'Gas Cooker & Hob Installation Birmingham | Gas Safe Certified',
  description: 'Certified Gas Safe gas cooker, range oven & gas hob installation in Birmingham. Fixed price fitting, stability bracket installation & safety certificate included.',
  alternates: {
    canonical: '/cooker-installation',
  },
  openGraph: {
    title: 'Gas Cooker & Hob Fitting Birmingham | GSHSB',
    description: 'Safe and certified gas cooker and hob installations across Birmingham. Gas Safe registered engineers with same-day appointments.',
    url: '/cooker-installation',
  },
};

const faqs = [
  {
    question: "Is it illegal to fit a gas cooker myself in Birmingham?",
    answer: "Yes. Under UK Gas Safety (Installation and Use) Regulations 1998, any gas appliance connection must be legally performed by a registered Gas Safe engineer to prevent gas leaks and carbon monoxide danger."
  },
  {
    question: "What is included in a standard gas cooker installation?",
    answer: "Our certified installation includes disconnecting old appliances, inspecting gas supply hose & bayonet valve, fitting stability chains/brackets, testing pressure drop, and issuing a Gas Safe compliance certificate."
  },
  {
    question: "Do you install dual-fuel range cookers and built-in hobs?",
    answer: "Yes, we install freestanding gas cookers, dual fuel range cookers, built-in gas hobs, and gas ovens."
  }
];

export default function CookerInstallationPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gas Cooker & Hob Installation Birmingham',
    provider: {
      '@type': 'HVACBusiness',
      name: 'GSHSB Birmingham',
    },
    areaServed: {
      '@type': 'City',
      name: 'Birmingham',
    },
    description: 'Professional Gas Safe gas cooker, freestanding oven, and built-in gas hob fitting with tightness testing and certificates.',
  };

  return (
    <div className="space-y-20 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative site-container pt-8">
        <div>
          <div className="glass-card-flame p-8 sm:p-14 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#520701] border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CERTIFIED GAS SAFE COOKER FITTING</span>
              </div>
              <h1 className="font-epic text-4xl sm:text-6xl font-black text-white">
                GAS COOKER & HOB <br />
                <span className="text-gradient-flame">INSTALLATION BIRMINGHAM</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                Professional connection of freestanding gas cookers, gas hobs, and range cookers. Includes safety stability chains, leak tightness testing, and official Gas Safe certification.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="btn-emergency-pill text-sm flex items-center gap-2"
                >
                  <CookingPot className="w-4 h-4" />
                  <span>Book Cooker Installation (£95 Fixed)</span>
                </Link>
                <a
                  href="tel:07900401035"
                  className="glass-card px-6 py-3 text-sm font-semibold text-white flex items-center gap-2 border border-white/10 hover:border-[#e46222]"
                >
                  <PhoneCall className="w-4 h-4 text-[#e46222]" />
                  <span>Same-Day Availability</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 space-y-3">
            <CheckCircle2 className="w-8 h-8 text-[#e46222]" />
            <h2 className="font-epic text-lg font-bold text-white">Gas Tightness Testing</h2>
            <p className="text-xs text-gray-400">Pre- and post-installation pressure drop check ensuring zero gas escape.</p>
          </div>
          <div className="glass-card p-8 space-y-3">
            <CheckCircle2 className="w-8 h-8 text-[#e46222]" />
            <h2 className="font-epic text-lg font-bold text-white">Stability Chains & Brackets</h2>
            <p className="text-xs text-gray-400">Securing freestanding cookers to prevent dangerous tipping hazards.</p>
          </div>
          <div className="glass-card p-8 space-y-3">
            <CheckCircle2 className="w-8 h-8 text-[#e46222]" />
            <h2 className="font-epic text-lg font-bold text-white">Gas Safe Certificate</h2>
            <p className="text-xs text-gray-400">Official digital documentation for landlords, home buyers, and insurance.</p>
          </div>
        </div>
      </section>

      <EmergencyBanner />
      <FAQAccordion items={faqs} title="Cooker Installation FAQs" />
    </div>
  );
}
