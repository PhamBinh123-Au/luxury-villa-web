"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Calendar, Users, Home, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onQuickInquire: (selectedVillaId: string, checkIn: string, checkOut: string, guests: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickInquire }) => {
  const [selectedVilla, setSelectedVilla] = useState(siteConfig.villas[0].id);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickInquire(selectedVilla, checkIn, checkOut, guests);
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-stone-950 text-white">
      {/* Background imagery with luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/villa-b1.jpg"
          alt="B Villa Collection Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] contrast-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(10,10,10,0.8)_100%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-200 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{siteConfig.brandSubtitle} • Da Nang, Vietnam</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white max-w-4xl leading-[1.15] mb-6"
        >
          Curated Sanctuaries of{" "}
          <span className="italic font-light text-amber-200">Pure Serenity</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-stone-300 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10"
        >
          Discover 4 private pool villas nestled in Son Tra Peninsula and Ngu Hanh Son.
          Modern architectural simplicity paired with discreet five-star hospitality.
        </motion.p>

        {/* Scientific & Interactive Quick Reservation Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="w-full max-w-4xl"
        >
          <form
            onSubmit={handleSubmit}
            className="p-3 sm:p-4 rounded-3xl bg-stone-900/80 backdrop-blur-xl border border-stone-700/60 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left"
          >
            {/* Villa Selector */}
            <div className="bg-stone-800/80 hover:bg-stone-800 rounded-2xl p-3 border border-stone-700/50 transition-colors">
              <label className="flex items-center space-x-1.5 text-[11px] font-semibold tracking-wider uppercase text-amber-300 mb-1">
                <Home className="w-3.5 h-3.5" />
                <span>Villa Selection</span>
              </label>
              <select
                value={selectedVilla}
                onChange={(e) => setSelectedVilla(e.target.value)}
                className="w-full bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer"
              >
                {siteConfig.villas.map((v) => (
                  <option key={v.id} value={v.id} className="bg-stone-900 text-white">
                    {v.code} - {v.bedrooms}BR ({v.district})
                  </option>
                ))}
              </select>
            </div>

            {/* Check-in Date */}
            <div className="bg-stone-800/80 hover:bg-stone-800 rounded-2xl p-3 border border-stone-700/50 transition-colors">
              <label className="flex items-center space-x-1.5 text-[11px] font-semibold tracking-wider uppercase text-amber-300 mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Check-in</span>
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer [color-scheme:dark]"
              />
            </div>

            {/* Check-out Date */}
            <div className="bg-stone-800/80 hover:bg-stone-800 rounded-2xl p-3 border border-stone-700/50 transition-colors">
              <label className="flex items-center space-x-1.5 text-[11px] font-semibold tracking-wider uppercase text-amber-300 mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Check-out</span>
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer [color-scheme:dark]"
              />
            </div>

            {/* Action Button */}
            <div className="flex items-center">
              <button
                type="submit"
                className="w-full h-full min-h-[52px] bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 text-stone-950 font-semibold rounded-2xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-amber-400/20 active:scale-[0.98]"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Feature Highlights Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-stone-400"
        >
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
            <span>100% Private Swimming Pools</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
            <span>Prime Coastal Da Nang Locations</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
            <span>24/7 Dedicated Concierge Care</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

