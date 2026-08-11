'use client';

import React from 'react';
import { MessageSquare, Flame } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/447900401035?text=Hi%20GSHSB%2C%20I%20need%20a%20quote%20for%20gas%2Fheating%2Fplumbing%20services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp +44 7900 401035"
        className="group relative flex items-center gap-3 bg-[#128C7E] hover:bg-[#25D366] text-white px-4 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_40px_rgba(37,211,102,0.9)] transition-all duration-300 transform hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block">24/7 WhatsApp: +44 7900 401035</span>
        <span className="sm:hidden font-mono">+44 7900 401035</span>
      </a>
    </div>
  );
}
