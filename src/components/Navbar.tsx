'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Flame, PhoneCall, ChevronDown, Menu, X, ShieldAlert, Wrench } from 'lucide-react';

import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-[2%] py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-[2550px] mx-auto rounded-24 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0f0f13]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3 px-6'
            : 'bg-[#0f0f13]/60 backdrop-blur-md border border-white/5 py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo for dark theme.svg"
              alt="GSHSB Gas Services & Heating Birmingham"
              width={220}
              height={50}
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e46222] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-gray-300 hover:text-white py-1 transition-colors">
                <span>Our Services</span>
                <ChevronDown className={`w-4 h-4 text-[#e46222] transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#0d0d12]/95 backdrop-blur-2xl border border-white/10 rounded-24 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-1 z-50">
                  <Link
                    href="/domestic-plumbing"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#e46222]/15 text-gray-200 hover:text-white transition-colors"
                  >
                    <Wrench className="w-4 h-4 text-[#e46222]" />
                    <div>
                      <div className="text-xs font-bold">Domestic Plumbing</div>
                      <div className="text-[11px] text-gray-400">Leaks, pipework & emergency repairs</div>
                    </div>
                  </Link>
                  <Link
                    href="/boiler-installation"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#e46222]/15 text-gray-200 hover:text-white transition-colors"
                  >
                    <Flame className="w-4 h-4 text-[#e46222]" />
                    <div>
                      <div className="text-xs font-bold">Boiler Installation</div>
                      <div className="text-[11px] text-gray-400">A-rated Worcester & Baxi systems</div>
                    </div>
                  </Link>
                  <Link
                    href="/cooker-installation"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#e46222]/15 text-gray-200 hover:text-white transition-colors"
                  >
                    <ShieldAlert className="w-4 h-4 text-[#e46222]" />
                    <div>
                      <div className="text-xs font-bold">Cooker Installation</div>
                      <div className="text-[11px] text-gray-400">Gas Safe certified cooker & hobs</div>
                    </div>
                  </Link>
                  <Link
                    href="/radiator-installation"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#e46222]/15 text-gray-200 hover:text-white transition-colors"
                  >
                    <Wrench className="w-4 h-4 text-[#e46222]" />
                    <div>
                      <div className="text-xs font-bold">Radiator Installation</div>
                      <div className="text-[11px] text-gray-400">Designer rads & power flushing</div>
                    </div>
                  </Link>
                  <Link
                    href="/new-bathroom-installations"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#e46222]/15 text-gray-200 hover:text-white transition-colors"
                  >
                    <Flame className="w-4 h-4 text-[#e46222]" />
                    <div>
                      <div className="text-xs font-bold">New Bathroom Installations</div>
                      <div className="text-[11px] text-gray-400">Full luxury design & fitting</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Guides Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGuidesOpen(true)}
              onMouseLeave={() => setGuidesOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-gray-300 hover:text-white py-1 transition-colors">
                <span>Guides</span>
                <ChevronDown className={`w-4 h-4 text-[#e46222] transition-transform duration-300 ${guidesOpen ? 'rotate-180' : ''}`} />
              </button>

              {guidesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-[#0d0d12]/95 backdrop-blur-2xl border border-white/10 rounded-24 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-1 z-50">
                  <Link
                    href="/new-boiler-installation-birmingham-guide"
                    className="block p-2.5 rounded-xl hover:bg-[#e46222]/15 text-gray-200 hover:text-white transition-colors"
                  >
                    <div className="text-xs font-bold">Boiler Installation Guide</div>
                    <div className="text-[11px] text-gray-400">Complete Birmingham homeowner manual</div>
                  </Link>
                  <Link
                    href="/top-7-things-to-consider-before-a-new-bathroom-installation-in-birmingham"
                    className="block p-2.5 rounded-xl hover:bg-[#e46222]/15 text-gray-200 hover:text-white transition-colors"
                  >
                    <div className="text-xs font-bold">7 Bathroom Considerations</div>
                    <div className="text-[11px] text-gray-400">Essential planning & budget guide</div>
                  </Link>
                  <Link
                    href="/step-by-step-guide-to-cooker-installation"
                    className="block p-2.5 rounded-xl hover:bg-[#e46222]/15 text-gray-200 hover:text-white transition-colors"
                  >
                    <div className="text-xs font-bold">Cooker Setup Guide</div>
                    <div className="text-[11px] text-gray-400">Gas safety compliance & checklist</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className="text-gray-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e46222] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Action CTA Pill */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/447900401035?text=Hi%20GSHSB%2C%20I%20need%20a%20quote%20for%20gas%2Fheating%2Fplumbing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emergency-pill animate-pulse-glow flex items-center gap-2 text-xs uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>WhatsApp: +44 7900 401035</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#e46222]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 space-y-4 pb-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[#e46222] text-sm font-semibold"
            >
              Home
            </Link>

            <div className="space-y-2 pl-2 border-l border-white/10">
              <div className="text-xs text-[#e46222] font-mono uppercase tracking-wider">Our Services</div>
              <Link
                href="/domestic-plumbing"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                Domestic Plumbing
              </Link>
              <Link
                href="/boiler-installation"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                Boiler Installation
              </Link>
              <Link
                href="/cooker-installation"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                Cooker Installation
              </Link>
              <Link
                href="/radiator-installation"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                Radiator Installation
              </Link>
              <Link
                href="/new-bathroom-installations"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                New Bathroom Installations
              </Link>
            </div>

            <div className="space-y-2 pl-2 border-l border-white/10">
              <div className="text-xs text-[#e46222] font-mono uppercase tracking-wider">Guides</div>
              <Link
                href="/new-boiler-installation-birmingham-guide"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                Boiler Guide
              </Link>
              <Link
                href="/top-7-things-to-consider-before-a-new-bathroom-installation-in-birmingham"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                7 Bathroom Tips
              </Link>
              <Link
                href="/step-by-step-guide-to-cooker-installation"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                Cooker Guide
              </Link>
            </div>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[#e46222] text-sm font-semibold"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/447900401035?text=Hi%20GSHSB%2C%20I%20need%20a%20quote%20for%20gas%2Fheating%2Fplumbing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emergency-pill w-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp: +44 7900 401035</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
