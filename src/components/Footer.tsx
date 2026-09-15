'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, ShieldCheck, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#050507] text-gray-400 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background radial flame glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-flame pointer-events-none opacity-40 blur-3xl" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo for dark theme.svg"
                alt="GSHSB Logo"
                width={220}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Birmingham’s premier Gas Safe registered heating and plumbing engineers. Specialising in high-efficiency boiler installations, emergency repairs, luxury bathroom fitting, and safety compliance across the West Midlands.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-gray-200">
                <ShieldCheck className="w-4 h-4 text-[#e46222]" />
                <span>Gas Safe Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-gray-200">
                <Clock className="w-4 h-4 text-[#e46222]" />
                <span>24/7 Rapid Response</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="font-epic text-sm text-white tracking-widest uppercase border-l-2 border-[#e46222] pl-3">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/domestic-plumbing" className="hover:text-[#e46222] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e46222]" />
                  Domestic Plumbing
                </Link>
              </li>
              <li>
                <Link href="/boiler-installation" className="hover:text-[#e46222] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e46222]" />
                  Boiler Installation
                </Link>
              </li>
              <li>
                <Link href="/cooker-installation" className="hover:text-[#e46222] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e46222]" />
                  Cooker Installation
                </Link>
              </li>
              <li>
                <Link href="/radiator-installation" className="hover:text-[#e46222] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e46222]" />
                  Radiator Installation
                </Link>
              </li>
              <li>
                <Link href="/new-bathroom-installations" className="hover:text-[#e46222] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e46222]" />
                  Bathroom Installations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Guides */}
          <div className="space-y-4">
            <h4 className="font-epic text-sm text-white tracking-widest uppercase border-l-2 border-[#e46222] pl-3">
              Helpful Guides
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/new-boiler-installation-birmingham-guide" className="hover:text-[#e46222] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e46222]" />
                  Boiler Installation Guide
                </Link>
              </li>
              <li>
                <Link href="/top-7-things-to-consider-before-a-new-bathroom-installation-in-birmingham" className="hover:text-[#e46222] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e46222]" />
                  7 Bathroom Tips
                </Link>
              </li>
              <li>
                <Link href="/step-by-step-guide-to-cooker-installation" className="hover:text-[#e46222] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#e46222]" />
                  Cooker Setup Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Dispatch */}
          <div className="space-y-4">
            <h4 className="font-epic text-sm text-white tracking-widest uppercase border-l-2 border-[#e46222] pl-3">
              Emergency Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#e46222] mt-1 shrink-0" />
                <span>Birmingham & Surrounding West Midlands</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#e46222] shrink-0" />
                <a
                  href="https://wa.me/447900401035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#e46222] font-semibold transition-colors"
                >
                  +44 7900 401035
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#e46222] shrink-0" />
                <a href="mailto:info@gshsb.co.uk" className="hover:text-[#e46222] transition-colors">
                  info@gshsb.co.uk
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact-us"
                className="btn-emergency-pill text-xs block text-center uppercase tracking-wider"
              >
                Book Inspection
              </Link>
            </div>
          </div>
        </div>

        {/* Ref 2 Watermark Typography */}
        <div className="my-12 text-center overflow-hidden pointer-events-none select-none opacity-10">
          <span className="font-epic text-6xl md:text-8xl lg:text-[140px] font-black tracking-widest text-transparent stroke-text uppercase whitespace-nowrap block"
            style={{ WebkitTextStroke: '2px #e46222' }}
          >
            GSHSB Bham Heating
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} GSHSB (Gas Services & Heating Solutions Birmingham). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('gshsb-open-cookie-settings'));
                }
              }}
              className="text-gray-400 hover:text-[#e46222] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Cookie Preferences
            </button>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Gas Safe Register ID #948123</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
