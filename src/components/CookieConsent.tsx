'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import Link from 'next/link';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'gshsb_cookie_consent';

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  // Apply consent updates to Google tag
  const applyConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied',
      });
    }

    const consentData: ConsentPreferences = {
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
    } catch (e) {
      console.warn('Unable to save cookie preferences to localStorage', e);
    }
  };

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // User hasn't chosen yet: show banner
        setIsOpen(true);
      } else {
        const parsed: ConsentPreferences = JSON.parse(stored);
        setAnalyticsAllowed(parsed.analytics);
        setMarketingAllowed(parsed.marketing);
        // Ensure gtag is updated with previous consent
        applyConsent(parsed.analytics, parsed.marketing);
      }
    } catch (e) {
      setIsOpen(true);
    }

    // Allow reopening cookie preferences via custom window event
    const handleOpenSettings = () => {
      setShowPreferences(true);
      setIsOpen(true);
    };

    window.addEventListener('gshsb-open-cookie-settings', handleOpenSettings);
    return () => {
      window.removeEventListener('gshsb-open-cookie-settings', handleOpenSettings);
    };
  }, []);

  const handleAcceptAll = () => {
    setAnalyticsAllowed(true);
    setMarketingAllowed(true);
    applyConsent(true, true);
    setIsOpen(false);
    setShowPreferences(false);
  };

  const handleRejectNonEssential = () => {
    setAnalyticsAllowed(false);
    setMarketingAllowed(false);
    applyConsent(false, false);
    setIsOpen(false);
    setShowPreferences(false);
  };

  const handleSaveCustom = () => {
    applyConsent(analyticsAllowed, marketingAllowed);
    setIsOpen(false);
    setShowPreferences(false);
  };

  if (!mounted || !isOpen) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent and privacy preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[9999] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="relative bg-[#0d0d10]/95 backdrop-blur-xl border border-white/10 rounded-24 p-5 sm:p-6 shadow-2xl shadow-black/80 text-white space-y-4">
        {/* Glow ambient highlight */}
        <div className="absolute top-0 left-1/4 w-32 h-20 bg-[#e46222]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e46222] shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white tracking-wide">
                Cookie Preferences
              </h3>
              <p className="text-xs text-gray-400">
                GSHSB Privacy & Analytics
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Dismiss cookie notice"
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body text */}
        <p className="text-xs leading-relaxed text-gray-300 relative z-10">
          We use cookies and Google Analytics to understand website traffic, monitor performance, and enhance your experience in accordance with UK GDPR and Google Consent Mode v2 standards.
        </p>

        {/* Granular Preferences Accordion */}
        {showPreferences && (
          <div className="space-y-3 pt-2 border-t border-white/10 text-xs relative z-10">
            {/* Necessary */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div>
                <span className="font-medium text-white block">Strictly Necessary</span>
                <span className="text-[11px] text-gray-400">Essential for site security, navigation & core functionality.</span>
              </div>
              <span className="text-[10px] font-semibold tracking-wider text-emerald-400 uppercase px-2 py-1 bg-emerald-500/10 rounded">
                Always Active
              </span>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="pr-4">
                <span className="font-medium text-white block">Analytics Cookies</span>
                <span className="text-[11px] text-gray-400">Anonymous Google Analytics data to help us improve heating guides & services.</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsAllowed}
                  onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#e46222]"></div>
              </label>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="pr-4">
                <span className="font-medium text-white block">Marketing & Ads</span>
                <span className="text-[11px] text-gray-400">Used for measuring Google campaign effectiveness & personalization.</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingAllowed}
                  onChange={(e) => setMarketingAllowed(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#e46222]"></div>
              </label>
            </div>
          </div>
        )}

        {/* Buttons / Actions */}
        <div className="space-y-2 relative z-10 pt-1">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAcceptAll}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#e46222] to-[#b94411] hover:from-[#f06e2e] hover:to-[#cb4e15] text-white text-xs font-semibold tracking-wide transition-all shadow-lg shadow-[#e46222]/20 active:scale-[0.98]"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-xs font-medium transition-colors active:scale-[0.98]"
            >
              Reject Non-Essential
            </button>
          </div>

          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="text-[11px] text-gray-400 hover:text-[#e46222] flex items-center gap-1 transition-colors underline-offset-4 hover:underline"
            >
              {showPreferences ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  Hide details
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  Customise preferences
                </>
              )}
            </button>

            {showPreferences && (
              <button
                onClick={handleSaveCustom}
                className="py-1 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition-colors"
              >
                Save Preferences
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
