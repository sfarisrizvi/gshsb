'use client';

import React from 'react';
import { PhoneCall, ShieldAlert, Clock, CheckCircle2 } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <section className="py-16 site-container relative z-10">
      <div>
        <div className="relative overflow-hidden rounded-30 bg-gradient-to-r from-[#520701] via-[#1a0808] to-[#0d0d12] border border-[#e46222]/40 p-8 sm:p-12 shadow-[0_0_50px_rgba(228,98,34,0.3)]">
          {/* Background Ambient Flame Overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e46222]/15 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#e46222] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>24/7 Emergency Gas & Plumbing Response</span>
              </div>
              <h2 className="font-epic text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                BOILER DOWN OR LEAK IN BIRMINGHAM? <br />
                <span className="text-gradient-flame">WE DISPATCH WITHIN 45 MINUTES.</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
                No call-out fee surprises. Gas Safe certified engineers equipped for instant emergency diagnostics, burst pipe repairs, gas leak isolation, and boiler restarts.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e46222]" />
                  <span>Gas Safe Register ID #948123</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e46222]" />
                  <span>Zero Call-Out Fee During Regular Hours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e46222]" />
                  <span>100% Fixed Quote Before Work</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
              <a
                href="https://wa.me/447900401035?text=Hi%20GSHSB%2C%20I%20have%20an%20emergency%20gas%2Fplumbing%20issue."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emergency-pill text-base sm:text-lg w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-3 tracking-wider shadow-[0_0_35px_#e46222]"
              >
                <PhoneCall className="w-6 h-6 animate-bounce" />
                <span>+44 7900 401035</span>
              </a>
              <span className="text-xs text-gray-400 font-mono text-center lg:text-right block w-full">
                24/7 WhatsApp: <strong className="text-white">+44 7900 401035</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
