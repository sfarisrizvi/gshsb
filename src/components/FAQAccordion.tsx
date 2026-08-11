'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({ items, title = "Frequently Asked Questions", subtitle = "Got questions about heating, gas certification, or bathroom fitting? We have answers." }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 site-container relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#520701]/60 border border-[#e46222]/40 px-4 py-1.5 rounded-full text-xs font-semibold text-[#e46222]">
            <HelpCircle className="w-4 h-4" />
            <span>Expert Assistance</span>
          </div>
          <h2 className="font-epic text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-card transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#e46222]/60 shadow-[0_0_25px_rgba(228,98,34,0.2)] bg-[#121218]/90' : 'bg-[#0f0f13]/60'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-semibold text-white text-base sm:text-lg">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                      isOpen
                        ? 'bg-[#e46222] border-[#e46222] text-white rotate-180 shadow-[0_0_12px_#e46222]'
                        : 'bg-white/5 border-white/10 text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
