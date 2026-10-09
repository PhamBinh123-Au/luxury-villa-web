"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Villa } from "@/types";
import { VillaCard } from "./VillaCard";
import { Sparkles, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VillaShowcaseProps {
  onSelectVilla: (villa: Villa) => void;
  onReserveVilla: (villa: Villa) => void;
}

export const VillaShowcase: React.FC<VillaShowcaseProps> = ({
  onSelectVilla,
  onReserveVilla,
}) => {
  const [filter, setFilter] = useState<string>("all");

  const filteredVillas = siteConfig.villas.filter((villa) => {
    if (filter === "all") return true;
    if (filter === "4br") return villa.bedrooms === 4;
    if (filter === "2br") return villa.bedrooms === 2;
    if (filter === "sontra") return villa.district.toLowerCase().includes("son tra");
    if (filter === "nguhanhson") return villa.district.toLowerCase().includes("ngu hanh son");
    return true;
  });

  const filterOptions = [
    { id: "all", label: "All Residences (4)" },
    { id: "4br", label: "4-Bedroom Villas (3)" },
    { id: "2br", label: "2-Bedroom Retreat (1)" },
    { id: "sontra", label: "Son Tra Coast (2)" },
    { id: "nguhanhson", label: "Ngu Hanh Son (2)" },
  ];

  return (
    <section id="villas" className="py-24 bg-stone-50/70 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-amber-700 bg-amber-100/70 px-4 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>The Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-4">
            Four Unique Sanctuaries, Infinite Memories
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Each villa in the B Villa portfolio features a private pool, modern architecture, and tailored privacy.
            Select your preferred residence to view complete details or submit a reservation inquiry.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white rounded-full border border-stone-200/80 shadow-sm flex-wrap justify-center gap-1">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === opt.id
                    ? "bg-stone-900 text-white shadow-md"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/60"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Villa Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {filteredVillas.map((villa) => (
              <VillaCard
                key={villa.id}
                villa={villa}
                onSelectVilla={onSelectVilla}
                onReserveVilla={onReserveVilla}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

