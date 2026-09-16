import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sliders, ThermometerSun, Zap, PhoneCall } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import EmergencyBanner from '@/components/EmergencyBanner';

export const metadata: Metadata = {
  title: 'Radiator Installation & Power Flushing Birmingham | GSHSB',
  description: 'Specialist radiator installation, vertical designer radiators, heated towel rails & MagnaCleanse power flushing in Birmingham. Eliminate cold spots & lower bills.',
  alternates: {
    canonical: '/radiator-installation',
  },
  openGraph: {
    title: 'Radiator Installation & Power Flushing Birmingham | GSHSB',
    description: 'Designer radiators, smart thermostatic TRV valves & magnetic power flushing across Birmingham.',
    url: '/radiator-installation',
  },
};

const faqs = [
  {
    question: "Why are some of my radiators cold at the bottom?",
    answer: "Cold spots at the bottom of radiators indicate magnetic black iron oxide sludge build-up inside the system. We perform high-pressure MagnaClean power flushing to restore 100% circulation."
  },
  {
    question: "What are TRV valves and why should I install them?",
    answer: "Thermostatic Radiator Valves (TRVs) allow individual room temperature control, preventing overheating unused rooms and reducing heating bills by up to 18%."
  },
  {
    question: "Do you supply designer horizontal and vertical column radiators?",
    answer: "Yes, we supply and fit anthracite, matte black, chrome, and classic white column radiators tailored to your room BTU heat requirement."
  }
];

export default function RadiatorInstallationPage() {
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
    name: 'Radiator Installation & Power Flushing Birmingham',
    provider: {
      '@type': 'HVACBusiness',
      name: 'GSHSB Birmingham',
    },
    areaServed: {
      '@type': 'City',
      name: 'Birmingham',
    },
    description: 'Designer column radiators, heated towel rails, TRV smart valves, and magnetic power flushing in Birmingham.',
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
                <ThermometerSun className="w-3.5 h-3.5" />
                <span>MAXIMUM THERMAL EFFICIENCY</span>
              </div>
              <h1 className="font-epic text-4xl sm:text-6xl font-black text-white">
                RADIATOR & HEATING <br />
                <span className="text-gradient-flame">NETWORK FITTING</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                Designer column radiators, heated towel rails, smart TRV valves, and power flushing services to eliminate cold spots and maximize system heat output across Birmingham.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="btn-emergency-pill text-sm flex items-center gap-2"
                >
                  <Sliders className="w-4 h-4" />
                  <span>Book Radiator Survey</span>
                </Link>
                <a
                  href="tel:07900401035"
                  className="glass-card px-6 py-3 text-sm font-semibold text-white flex items-center gap-2 border border-white/10 hover:border-[#e46222]"
                >
                  <PhoneCall className="w-4 h-4 text-[#e46222]" />
                  <span>Call Heating Engineer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 space-y-4">
            <Sliders className="w-8 h-8 text-[#e46222]" />
            <h2 className="font-epic text-xl font-bold text-white">Designer Column Radiators</h2>
            <p className="text-xs text-gray-400">Vertical space-saving and horizontal traditional steel column radiators calculated to exact BTU output.</p>
          </div>
          <div className="glass-card p-8 space-y-4">
            <Zap className="w-8 h-8 text-[#e46222]" />
            <h2 className="font-epic text-xl font-bold text-white">Smart TRV Valves</h2>
            <p className="text-xs text-gray-400">Fitting smart thermostatic valves compatible with Hive and Tado for room-by-room zone control.</p>
          </div>
          <div className="glass-card p-8 space-y-4">
            <ThermometerSun className="w-8 h-8 text-[#e46222]" />
            <h2 className="font-epic text-xl font-bold text-white">MagnaClean Power Flushing</h2>
            <p className="text-xs text-gray-400">High-velocity magnetic flush removing sludge, restoring hot circulation, and boosting boiler efficiency.</p>
          </div>
        </div>
      </section>

      <EmergencyBanner />
      <FAQAccordion items={faqs} title="Radiator Installation FAQs" />
    </div>
  );
}
