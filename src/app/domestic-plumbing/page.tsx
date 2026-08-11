'use client';

import React from 'react';
import Link from 'next/link';
import { Droplets, ShieldCheck, PhoneCall, CheckCircle, Clock, Wrench, AlertTriangle, ArrowRight } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import EmergencyBanner from '@/components/EmergencyBanner';

export default function DomesticPlumbingPage() {
  const faqs = [
    {
      question: "What domestic plumbing emergencies do you handle in Birmingham?",
      answer: "We handle burst pipes, severe water leaks, overflowing toilets, blocked mains drains, failed stopcocks, low water pressure emergencies, and leaking hot water cylinders across all Birmingham postcodes 24/7."
    },
    {
      question: "Do you charge a call-out fee for plumbing inspection?",
      answer: "We provide upfront transparent pricing. For standard diagnostic visits during regular hours, we provide zero hidden fees and a fixed quote before starting work."
    },
    {
      question: "Are your plumbers qualified and insured?",
      answer: "Yes, all GSHSB plumbing technicians carry full public liability insurance (£5 million) and City & Guilds level 3 plumbing credentials."
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative site-container pt-8">
        <div>
          <div className="glass-card-flame p-8 sm:p-14 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#520701] border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
                <Droplets className="w-3.5 h-3.5" />
                <span>24/7 EXPERT BIRMINGHAM PLUMBERS</span>
              </div>
              <h1 className="font-epic text-4xl sm:text-6xl font-black text-white">
                DOMESTIC PLUMBING <br />
                <span className="text-gradient-flame">REPAIRS & FITTING</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                Rapid emergency leak repairs, pipe replacements, stopcock installations, and full residential plumbing diagnostics in Birmingham. Certified, insured, and available round the clock.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:01210000000"
                  className="btn-emergency-pill text-sm flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 animate-bounce" />
                  <span>Call Emergency Plumber Now</span>
                </a>
                <Link
                  href="/contact-us"
                  className="glass-card px-6 py-3 text-sm font-semibold text-white flex items-center gap-2 border border-white/10 hover:border-[#e46222]"
                >
                  <span>Book Non-Emergency Repair</span>
                  <ArrowRight className="w-4 h-4 text-[#e46222]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plumbing Features Grid */}
      <section className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 space-y-4">
            <div className="w-12 h-12 rounded-24 bg-[#520701] border border-[#e46222] flex items-center justify-center text-[#e46222]">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="font-epic text-xl font-bold text-white">Emergency Burst Pipe Repair</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Fast isolation of burst mains pipes, frozen pipe thawing, and structural ceiling leak prevention in 45 minutes.
            </p>
          </div>

          <div className="glass-card p-8 space-y-4">
            <div className="w-12 h-12 rounded-24 bg-[#520701] border border-[#e46222] flex items-center justify-center text-[#e46222]">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-epic text-xl font-bold text-white">Tap, Sink & Toilet Maintenance</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Replacing dripping mixer taps, ball valves, faulty flush mechanisms, ceramic discs, and kitchen waste disposals.
            </p>
          </div>

          <div className="glass-card p-8 space-y-4">
            <div className="w-12 h-12 rounded-24 bg-[#520701] border border-[#e46222] flex items-center justify-center text-[#e46222]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-epic text-xl font-bold text-white">Stopcocks & Water Pressure</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Upgrading stuck brass stopcocks to Surestop electronic switches and installing brass booster pumps for low water pressure homes.
            </p>
          </div>
        </div>
      </section>

      <EmergencyBanner />
      <FAQAccordion items={faqs} title="Domestic Plumbing FAQs" />
    </div>
  );
}
