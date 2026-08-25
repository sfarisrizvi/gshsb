'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCheck, Sparkles, PhoneCall, Flame } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  const [hasUnread, setHasUnread] = useState(true);
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);

  const whatsappNumber = "447900401035";
  const welcomeMessage = "Hello! 👋 Welcome to GSHSB (Gas Services & Heating Solutions Birmingham). How can we help you today with your boiler, heating, or plumbing needs?";

  // Auto focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const finalMsg = userQuery.trim() ? userQuery.trim() : "Hi GSHSB, I would like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickTopics = [
    "🔥 Boiler Quote",
    "🚨 Emergency Repair",
    "🍳 Cooker Installation",
    "🛁 Bathroom Plumbing"
  ];

  const handleTopicClick = (topic: string) => {
    const text = `Hi GSHSB team, I'm interested in ${topic.replace(/^[^\s]+\s*/, '')}. Could you please share details and pricing?`;
    setUserQuery(text);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Floating Sticky Rounded WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close WhatsApp Chat" : "Open WhatsApp Chat"}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_35px_rgba(37,211,102,0.9)] transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black"
        >
          {/* Animated ping ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

          {/* Unread notification badge */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] font-bold text-white items-center justify-center shadow">
                1
              </span>
            </span>
          )}

          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-200 rotate-90" />
          ) : (
            <svg
              className="w-7 h-7 fill-current transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          )}
        </button>
      </div>

      {/* Interactive Chat Window Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[400px] rounded-2xl overflow-hidden border border-emerald-500/20 bg-[#0d1418] shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(37,211,102,0.15)] flex flex-col font-sans"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-black/40 border border-emerald-400/40 flex items-center justify-center text-amber-400">
                    <Flame className="w-6 h-6 fill-amber-500 stroke-amber-400 animate-pulse" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#075E54]"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                    GSHSB Support
                    <span className="text-[10px] bg-emerald-400/20 text-emerald-300 font-mono px-1.5 py-0.5 rounded border border-emerald-400/30">Gas Safe</span>
                  </h3>
                  <p className="text-xs text-emerald-100/80 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Typically replies in minutes
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div 
              className="p-4 flex-1 max-h-[340px] overflow-y-auto space-y-3 bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px] bg-[#0b141a]"
            >
              {/* Timestamp label */}
              <div className="text-center my-1">
                <span className="text-[10px] text-gray-400 bg-black/40 px-2 py-0.5 rounded-full border border-white/5">
                  Today
                </span>
              </div>

              {/* Incoming Welcome Message */}
              <div className="flex items-end gap-2 max-w-[88%]">
                <div className="bg-[#202c33] text-gray-100 p-3 rounded-2xl rounded-bl-none text-xs leading-relaxed border border-white/5 shadow-md">
                  <p className="font-semibold text-emerald-400 text-[11px] mb-1">GSHSB Team</p>
                  <p>{welcomeMessage}</p>
                  <div className="flex items-center justify-end gap-1 mt-1.5 text-[9px] text-gray-400">
                    <span>Just now</span>
                    <CheckCheck className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Quick Prompt Chips */}
              <div className="pt-2">
                <p className="text-[10px] text-emerald-400/80 uppercase font-semibold tracking-wider mb-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Quick topics
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quickTopics.map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => handleTopicClick(topic)}
                      className="text-[11px] bg-[#182229] hover:bg-[#202c33] text-emerald-200 hover:text-white px-2.5 py-1 rounded-full border border-emerald-500/20 hover:border-emerald-500/50 transition-all text-left"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input & Send Form */}
            <form onSubmit={handleSend} className="p-3 bg-[#111b21] border-t border-white/5 flex flex-col gap-2">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message or query here..."
                  rows={2}
                  className="flex-1 bg-[#202c33] text-white placeholder-gray-400 text-xs rounded-xl p-2.5 border border-white/10 focus:border-emerald-500 focus:outline-none resize-none transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Send via WhatsApp"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold p-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(37,211,102,0.4)] flex items-center justify-center shrink-0"
                >
                  <Send className="w-4 h-4 fill-black stroke-black" />
                </button>
              </div>

              <div className="flex items-center justify-between text-[10px] text-gray-400 px-1 pt-0.5">
                <span className="flex items-center gap-1 text-emerald-400/90">
                  <PhoneCall className="w-3 h-3" /> +44 7900 401035
                </span>
                <span>Press Enter to send via WhatsApp</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

