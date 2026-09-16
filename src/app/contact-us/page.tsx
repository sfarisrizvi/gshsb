import React from 'react';
import type { Metadata } from 'next';
import { PhoneCall } from 'lucide-react';
import EmergencyBanner from '@/components/EmergencyBanner';
import ContactUsClient from './ContactUsClient';

export const metadata: Metadata = {
  title: 'Contact GSHSB Birmingham | 24/7 Emergency Gas & Plumbing Booking',
  description: 'Book a Gas Safe engineer in Birmingham. 24/7 emergency dispatch hotline (+44 7900 401035), free boiler quotes & bathroom design surveys across West Midlands.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'Contact GSHSB | Emergency Plumbers & Gas Engineers Birmingham',
    description: 'Get in touch for rapid emergency leak repair, boiler quotes, or heating surveys. On-site within 45 minutes.',
    url: '/contact-us',
  },
};

export default function ContactUsPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact GSHSB Birmingham',
    description: 'Contact information and booking portal for GSHSB Heating and Plumbing Engineers.',
    url: 'https://gshsb.co.uk/contact-us',
    mainEntity: {
      '@type': 'HVACBusiness',
      name: 'GSHSB Birmingham',
      telephone: '+447900401035',
      email: 'info@gshsb.co.uk',
      areaServed: 'Birmingham, West Midlands',
    },
  };

  return (
    <div className="space-y-20 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

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

      {/* Main Grid: Form + Info Client Component */}
      <section className="site-container">
        <ContactUsClient />
      </section>

      <EmergencyBanner />
    </div>
  );
}
