import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, Calculator, Award } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import EmergencyBanner from '@/components/EmergencyBanner';
import BoilerCalculator from '@/components/BoilerCalculator';

export const metadata: Metadata = {
  title: 'A-Rated Boiler Installation Birmingham | Gas Safe Engineers',
  description: 'Expert combi & system boiler installation in Birmingham. Worcester Bosch, Baxi & Vaillant accredited with up to 12-year warranties & 0% finance options.',
  alternates: {
    canonical: '/boiler-installation',
  },
  openGraph: {
    title: 'Gas Boiler Installation Birmingham | GSHSB',
    description: 'High efficiency A-rated boiler installations across Birmingham. Save up to £340/year on energy bills with smart controls and extended warranties.',
    url: '/boiler-installation',
  },
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

export default function BoilerInstallationPage() {
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
    name: 'Boiler Installation & Replacement Birmingham',
    provider: {
      '@type': 'HVACBusiness',
      name: 'GSHSB Birmingham',
    },
    areaServed: {
      '@type': 'City',
      name: 'Birmingham',
    },
    description: 'A-rated energy efficient combi, system and regular gas boiler installation in Birmingham with extended warranties.',
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
                  href="tel:07900401035"
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
      <BoilerCalculator />

      <EmergencyBanner />
      <FAQAccordion items={faqs} title="Boiler Installation FAQs" />
    </div>
  );
}
