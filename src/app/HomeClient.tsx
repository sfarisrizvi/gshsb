'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Flame,
  Wrench,
  ShieldCheck,
  Zap,
  ArrowRight,
  Star,
  Sparkles,
  ThermometerSun,
  ChevronRight,
  MessageSquare,
  Award,
} from 'lucide-react';
import EmergencyBanner from '@/components/EmergencyBanner';
import FAQAccordion from '@/components/FAQAccordion';
import LottieIcon from '@/components/LottieIcon';

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  viewport: { once: true },
};

interface HomeClientProps {
  faqs: { question: string; answer: string }[];
}

export default function HomeClient({ faqs }: HomeClientProps) {
  const whatsappUrl = "https://wa.me/447900401035?text=Hi%20GSHSB%2C%20I%20need%20a%20quote%20for%20gas%2Fheating%2Fplumbing%20services.";

  const testimonials = [
    {
      name: "Michael",
      role: "Homeowner in Edgbaston",
      comment: "GSHSB completed my annual boiler service, issued the CP12 certificate, and installed my gas hob — very efficient, knowledgeable, and reasonably priced service.",
      avatar: "/client-michael.png",
      stars: 5,
    },
    {
      name: "Abigail",
      role: "Landlord in Harborne",
      comment: "Excellent new bathroom installation in Birmingham by GSHSB! Professional, tidy, and efficient service with great attention to detail and customer care throughout.",
      avatar: "/client-abigail.png",
      stars: 5,
    },
    {
      name: "Emma",
      role: "Resident in Solihull",
      comment: "Fast and reliable boiler breakdown & repair in Birmingham by GSHSB. Great service, fair pricing — highly recommend Gas Safety & Heating Solution Birmingham.",
      avatar: "/client-emma.png",
      stars: 5,
    },
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center site-container overflow-hidden pt-8">
        {/* Hero Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-hero-gradient pointer-events-none opacity-80 blur-3xl" />

        <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#520701]/80 border border-[#e46222]/40 px-4 py-1.5 rounded-full text-xs font-semibold text-[#e46222] shadow-[0_0_15px_rgba(228,98,34,0.3)]">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>BIRMINGHAM'S CINEMATIC HEATING & GAS EXPERTS</span>
            </div>

            <h1 className="font-epic text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
              PRECISION GAS & <br />
              <span className="text-gradient-flame">HEATING SOLUTIONS</span> <br />
              <span className="text-gradient-white-gray">THAT WARMS LIVES</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              High-efficiency boiler replacements, emergency gas diagnostics, designer radiator networks, and luxury bathroom engineering. Built for ultimate reliability with Gas Safe certified precision.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emergency-pill text-sm sm:text-base flex items-center gap-3 tracking-wider shadow-[0_0_30px_#e46222]"
              >
                <MessageSquare className="w-5 h-5 animate-bounce" />
                <span>24/7 WHATSAPP: +44 7900 401035</span>
              </a>

              <Link
                href="/boiler-installation"
                className="glass-card px-6 py-3.5 text-sm font-semibold text-gray-200 hover:text-white flex items-center gap-2 border border-white/10 hover:border-[#e46222]/50 transition-all"
              >
                <span>Instant Boiler Quote</span>
                <ArrowRight className="w-4 h-4 text-[#e46222]" />
              </Link>
            </div>

            {/* Micro Metrics Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl">
              <div>
                <div className="font-epic text-2xl sm:text-3xl font-extrabold text-white">98%</div>
                <div className="text-xs text-gray-400 font-mono">First-Time Fix Rate</div>
              </div>
              <div>
                <div className="font-epic text-2xl sm:text-3xl font-extrabold text-[#e46222]">24/7</div>
                <div className="text-xs text-gray-400 font-mono">WhatsApp Dispatch</div>
              </div>
              <div>
                <div className="font-epic text-2xl sm:text-3xl font-extrabold text-white">10K+</div>
                <div className="text-xs text-gray-400 font-mono">Homes Warmed</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Interactive Card Feature with Black & White Filtered Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="glass-card-flame p-8 relative overflow-hidden group">
              {/* Cinematic Black & White Engineer Image background overlay */}
              <div className="absolute inset-0 opacity-15 mix-blend-luminosity pointer-events-none overflow-hidden">
                <Image
                  src="/engineer-heating.jpg"
                  alt="Senior Heating Engineer Birmingham"
                  fill
                  className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute top-0 right-0 p-4 z-20">
                <span className="text-[10px] font-mono text-[#e46222] uppercase tracking-widest border border-[#e46222]/30 px-2 py-1 rounded bg-[#520701]/60">
                  LIVE DISPATCH
                </span>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 rounded-24 bg-[#520701] border border-[#e46222] flex items-center justify-center shadow-[0_0_20px_rgba(228,98,34,0.5)]">
                  <Flame className="w-7 h-7 text-[#e46222] animate-pulse" />
                </div>

                <div>
                  <h3 className="font-epic text-2xl font-bold text-white mb-2">
                    EXPERT HEATING & EMERGENCY SAFETY
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Experiencing low boiler pressure, cold radiators, or a suspected gas leak? Our certified mobile units cover all Birmingham postcodes.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-[#e46222]/30 text-xs text-gray-200">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#e46222]" />
                      Gas Safe Registered
                    </span>
                    <span className="font-mono text-[#e46222]">VERIFIED #948123</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-[#e46222]/30 text-xs text-gray-200">
                    <span className="flex items-center gap-2">
                      <ThermometerSun className="w-4 h-4 text-[#e46222]" />
                      Smart Boiler Diagnostics
                    </span>
                    <span className="font-mono text-emerald-400">READY</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-[#e46222]/30 text-xs text-gray-200">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#e46222]" />
                      WhatsApp Response
                    </span>
                    <span className="font-mono text-white">&lt; 5 MINS</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-emergency-pill text-xs flex items-center justify-center gap-2 uppercase tracking-wider text-center"
                >
                  <span>Chat on WhatsApp (+44 7900 401035)</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCED ENGINEERS & SHOWCASE SECTION */}
      <section className="site-container relative z-10">
        <motion.div
          {...fadeInUp}
          className="glass-card p-8 sm:p-14 border border-white/10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative min-h-[420px] rounded-24 overflow-hidden border border-white/10 bg-[#07070a]/90 flex items-center justify-center group p-4">
              <Image
                src="/boiler-repair-tech.webp"
                alt="GSHSB Experienced Heating Engineer in Birmingham"
                fill
                className="object-contain p-2 grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 rounded-24 bg-[#0f0f13]/90 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <Image
                    src="/gas-safe-official-logo.jpg"
                    alt="Gas Safe Register Official Certification"
                    width={50}
                    height={35}
                    className="h-9 w-auto object-contain grayscale brightness-125 rounded"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Gas Safe Certified</span>
                    <span className="text-[10px] text-[#e46222] font-mono">Registration ID #948123</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 font-mono">5+ Years Bham Experience</div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#520701]/60 border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
                <Award className="w-3.5 h-3.5" />
                <span>TRUSTED BIRMINGHAM GAS ENGINEERS</span>
              </div>
              <h2 className="font-epic text-3xl sm:text-5xl font-black text-white leading-tight">
                EXPERIENCED HEATING ENGINEERS <br />
                <span className="text-gradient-flame">SERVING BIRMINGHAM 5+ YEARS</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                With over 5 years of professional experience, GSHSB delivers trusted boiler, bathroom, gas, and heating services across Birmingham. Our Gas Safe registered engineers provide reliable, high-quality workmanship with a strong focus on safety, customer satisfaction, and long-lasting solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
                  <ShieldCheck className="w-4 h-4 text-[#e46222]" />
                  <span>Certified Handymen</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
                  <ShieldCheck className="w-4 h-4 text-[#e46222]" />
                  <span>24/7 WhatsApp Response</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
                  <ShieldCheck className="w-4 h-4 text-[#e46222]" />
                  <span>Fair & Upfront Pricing</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
                  <ShieldCheck className="w-4 h-4 text-[#e46222]" />
                  <span>Full Work Guarantees</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emergency-pill text-xs inline-flex items-center gap-2 uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Call or WhatsApp +44 7900 401035</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES GRID SECTION */}
      <section className="site-container relative z-10">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-gray-300">
            <Wrench className="w-3.5 h-3.5 text-[#e46222]" />
            <span>OUR CORE SERVICES</span>
          </div>
          <h2 className="font-epic text-3xl sm:text-5xl font-black text-white tracking-tight">
            ENGINEERED FOR <span className="text-[#e46222]">PERFORMANCE</span> & SAFETY
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            From single-appliance cooker fittings to complete central heating overhaul and bespoke wetroom fitting.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Domestic Plumbing */}
          <motion.div variants={fadeInUp} className="glass-card p-8 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-24 bg-[#520701]/60 border border-[#e46222]/40 p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LottieIcon src="plumbing.json" className="w-12 h-12" />
              </div>
              <h3 className="font-epic text-xl font-bold text-white group-hover:text-[#e46222] transition-colors">
                Domestic Plumbing
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Emergency burst pipe repair, hidden leak detection, drainage unblocking, stopcock replacement, and mains water pressure boosting across Birmingham.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
              <span className="text-xs text-[#e46222] font-mono">24/7 Callout Ready</span>
              <Link href="/domestic-plumbing" className="text-xs font-semibold text-white hover:text-[#e46222] flex items-center gap-1">
                Explore <ArrowRight className="w-3.5 h-3.5 text-[#e46222]" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Boiler Installation */}
          <motion.div variants={fadeInUp} className="glass-card-flame p-8 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-24 bg-[#520701] border border-[#e46222] p-2 flex items-center justify-center shadow-[0_0_15px_rgba(228,98,34,0.4)] group-hover:scale-110 transition-transform">
                <LottieIcon src="boiler.json" className="w-12 h-12" />
              </div>
              <h3 className="font-epic text-xl font-bold text-white group-hover:text-[#e46222] transition-colors">
                Boiler Installation
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                High-efficiency Worcester Bosch, Baxi, and Vaillant combi & system boilers with up to 12 years guarantee and energy-saving smart thermostats.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs text-[#e46222] font-mono">Up to 12 Yr Warranty</span>
              <Link href="/boiler-installation" className="text-xs font-semibold text-white hover:text-[#e46222] flex items-center gap-1">
                Explore <ArrowRight className="w-3.5 h-3.5 text-[#e46222]" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Cooker Installation */}
          <motion.div variants={fadeInUp} className="glass-card p-8 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-24 bg-[#520701]/60 border border-[#e46222]/40 p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LottieIcon src="cooker.json" className="w-12 h-12" />
              </div>
              <h3 className="font-epic text-xl font-bold text-white group-hover:text-[#e46222] transition-colors">
                Cooker Installation
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Safe connection of freestanding gas cookers, gas hobs, and range ovens with stability chain fitting, gas leak check, and official certificate.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
              <span className="text-xs text-[#e46222] font-mono">Certified Safe</span>
              <Link href="/cooker-installation" className="text-xs font-semibold text-white hover:text-[#e46222] flex items-center gap-1">
                Explore <ArrowRight className="w-3.5 h-3.5 text-[#e46222]" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4: Radiator Installation */}
          <motion.div variants={fadeInUp} className="glass-card p-8 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-24 bg-[#520701]/60 border border-[#e46222]/40 p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LottieIcon src="radiator.json" className="w-12 h-12" />
              </div>
              <h3 className="font-epic text-xl font-bold text-white group-hover:text-[#e46222] transition-colors">
                Radiator Installation
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Modern column radiators, towel rails, smart thermostatic radiator valves (TRVs), and magnetic power flushing for maximum heat output.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
              <span className="text-xs text-[#e46222] font-mono">Max Thermal Efficiency</span>
              <Link href="/radiator-installation" className="text-xs font-semibold text-white hover:text-[#e46222] flex items-center gap-1">
                Explore <ArrowRight className="w-3.5 h-3.5 text-[#e46222]" />
              </Link>
            </div>
          </motion.div>

          {/* Card 5: New Bathroom Installations */}
          <motion.div variants={fadeInUp} className="glass-card p-8 flex flex-col justify-between group lg:col-span-2">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-24 bg-[#520701]/60 border border-[#e46222]/40 p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LottieIcon src="bathroom.json" className="w-12 h-12" />
              </div>
              <h3 className="font-epic text-xl font-bold text-white group-hover:text-[#e46222] transition-colors">
                New Bathroom Installations
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xl">
                Bespoke luxury bathrooms, walk-in wetrooms, rainfall shower plumbing, custom vanity units, and precision tiling. Designed and fitted end-to-end by experienced Birmingham craftsmen.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
              <span className="text-xs text-[#e46222] font-mono">Turnkey Luxury Fitting</span>
              <Link href="/new-bathroom-installations" className="text-xs font-semibold text-white hover:text-[#e46222] flex items-center gap-1">
                Explore <ArrowRight className="w-3.5 h-3.5 text-[#e46222]" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CLIENT TESTIMONIALS SECTION */}
      <section className="site-container relative z-10 space-y-12">
        <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#520701]/60 border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
            <Star className="w-3.5 h-3.5 fill-[#e46222]" />
            <span>CLIENT REVIEWS</span>
          </div>
          <h2 className="font-epic text-3xl sm:text-4xl font-extrabold text-white">
            TESTIMONIALS FROM OUR HAPPY CLIENTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="glass-card p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e46222] text-[#e46222]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#e46222]">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} - ${t.role}`}
                    fill
                    className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-[11px] text-gray-400 font-mono">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRAND MILESTONES & VALUES */}
      <section className="site-container relative z-10">
        <motion.div {...fadeInUp} className="glass-card p-8 sm:p-14 border border-white/10 space-y-12">
          <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="text-xs font-mono text-[#e46222] uppercase tracking-widest block mb-2">
                PIONEERING FIRE & GAS TECHNOLOGY
              </span>
              <h2 className="font-epic text-3xl sm:text-5xl font-black text-white">
                CRAFTSMANSHIP, SAFETY & INNOVATION
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Bringing cutting-edge heating performance, clean combustion tech, and flawless safety standards to residential and commercial properties in Birmingham.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 border-l-2 border-[#e46222] pl-6">
              <span className="font-mono text-sm text-[#e46222] font-bold">01</span>
              <h3 className="font-epic text-lg text-white font-bold">FOUNDATION & PRECISION</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Strict adherence to UK Gas Safe standards and building regulations. Every installation undergoes rigorous pressure testing and carbon monoxide verification.
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-[#e46222] pl-6">
              <span className="font-mono text-sm text-[#e46222] font-bold">02</span>
              <h3 className="font-epic text-lg text-white font-bold">SMART THERMAL CONTROL</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Integration with Nest, Hive, and Tado smart thermostats to cut household energy bills by up to 30% while ensuring custom zone temperature comfort.
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-[#e46222] pl-6">
              <span className="font-mono text-sm text-[#e46222] font-bold">03</span>
              <h3 className="font-epic text-lg text-white font-bold">SUSTAINABLE COMBUSTION</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Installing hydrogen-blend ready boilers and low-emission burners engineered for lower carbon impact and long-term heating efficiency.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* EMERGENCY BANNER COMPONENT */}
      <EmergencyBanner />

      {/* GUIDES & ARTICLES SECTION */}
      <section className="site-container relative z-10 space-y-12">
        <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#e46222] uppercase tracking-widest block mb-2">
              KNOWLEDGE & GUIDANCE
            </span>
            <h2 className="font-epic text-3xl sm:text-4xl font-extrabold text-white">
              BIRMINGHAM HEATING & PLUMBING GUIDES
            </h2>
          </div>
          <span className="text-xs text-gray-400 max-w-sm">
            Expert insights to help you make informed decisions on new boilers, cooker safety, and bathroom budgeting.
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <Link
              href="/new-boiler-installation-birmingham-guide"
              className="glass-card p-6 flex flex-col justify-between group hover:border-[#e46222]/50 transition-all h-full"
            >
              <div className="space-y-4">
                <div className="relative h-44 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/guide-boiler.jpg"
                    alt="New Boiler Installation Birmingham Guide"
                    fill
                    className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <span className="text-[11px] font-mono text-[#e46222] uppercase block">Homeowner Guide</span>
                <h3 className="font-epic text-lg font-bold text-white group-hover:text-[#e46222] transition-colors">
                  New Boiler Installation Birmingham Guide
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Everything you need to know about combi vs system boilers, sizing, costs, and Gas Safe registration requirements in Birmingham.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#e46222]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Link
              href="/top-7-things-to-consider-before-a-new-bathroom-installation-in-birmingham"
              className="glass-card p-6 flex flex-col justify-between group hover:border-[#e46222]/50 transition-all h-full"
            >
              <div className="space-y-4">
                <div className="relative h-44 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/guide-bathroom.jpg"
                    alt="Top 7 Considerations Before Bathroom Installation"
                    fill
                    className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <span className="text-[11px] font-mono text-[#e46222] uppercase block">Planning & Budgeting</span>
                <h3 className="font-epic text-lg font-bold text-white group-hover:text-[#e46222] transition-colors">
                  Top 7 Considerations Before Bathroom Installation
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Water pressure checks, ventilation, tile choices, wetroom waterproofing, and budgeting tips before fitting a new bathroom.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#e46222]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <Link
              href="/step-by-step-guide-to-cooker-installation"
              className="glass-card p-6 flex flex-col justify-between group hover:border-[#e46222]/50 transition-all h-full"
            >
              <div className="space-y-4">
                <div className="relative h-44 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/guide-cooker.jpg"
                    alt="Step-by-Step Guide to Gas Cooker Installation"
                    fill
                    className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <span className="text-[11px] font-mono text-[#e46222] uppercase block">Gas Safety Manual</span>
                <h3 className="font-epic text-lg font-bold text-white group-hover:text-[#e46222] transition-colors">
                  Step-by-Step Guide to Gas Cooker Installation
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Why DIY gas fitting is illegal in the UK, how Gas Safe engineers isolate lines, test flame stability, and issue compliance certificates.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#e46222]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQAccordion items={faqs} />
    </div>
  );
}
