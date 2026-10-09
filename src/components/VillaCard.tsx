"use client";

import React from "react";
import { Villa } from "@/types";
import { Bed, Users, Waves, MapPin, ArrowUpRight, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";

interface VillaCardProps {
  villa: Villa;
  onSelectVilla: (villa: Villa) => void;
  onReserveVilla: (villa: Villa) => void;
}

export const VillaCard: React.FC<VillaCardProps> = ({
  villa,
  onSelectVilla,
  onReserveVilla,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container with Hover Zoom & Badge */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onSelectVilla(villa)}>
        <img
          src={villa.image}
          alt={villa.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3.5 py-1.5 rounded-full bg-stone-950/70 backdrop-blur-md text-amber-200 text-xs font-semibold tracking-wider uppercase border border-amber-300/20">
            {villa.code} Villa
          </span>

          {villa.badge && (
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-[11px] font-medium tracking-wide shadow-sm flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{villa.badge}</span>
            </span>
          )}
        </div>

        {/* Bottom Image Overlay with Location */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
          <div className="flex items-center space-x-1.5 bg-stone-950/60 backdrop-blur-md px-3 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-medium tracking-wide">{villa.location}</span>
          </div>
          <span className="text-[11px] font-medium text-stone-300 tracking-wider uppercase bg-stone-950/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {villa.district}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          {/* Villa Title */}
          <div className="flex items-start justify-between mb-3">
            <h3
              onClick={() => onSelectVilla(villa)}
              className="font-serif text-2xl font-normal text-stone-900 group-hover:text-amber-800 transition-colors cursor-pointer"
            >
              {villa.name}
            </h3>
          </div>

          {/* Key Specifications Bar */}
          <div className="flex flex-wrap items-center gap-3 py-3 border-y border-stone-100 text-xs text-stone-600 mb-4">
            <div className="flex items-center space-x-1.5 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-100">
              <Bed className="w-3.5 h-3.5 text-amber-700" />
              <span className="font-medium">{villa.bedrooms} Bedrooms</span>
            </div>

            <div className="flex items-center space-x-1.5 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-100">
              <Users className="w-3.5 h-3.5 text-amber-700" />
              <span className="font-medium">Up to {villa.maxGuests} Guests</span>
            </div>

            <div className="flex items-center space-x-1.5 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-100">
              <Waves className="w-3.5 h-3.5 text-amber-700" />
              <span className="font-medium">Private Pool</span>
            </div>
          </div>

          {/* Highlights List */}
          <ul className="space-y-2 mb-6">
            {villa.highlights.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-600">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 grid grid-cols-2 gap-3">
          <button
            onClick={() => onSelectVilla(villa)}
            className="w-full py-3 px-3 rounded-2xl border border-stone-300 hover:border-stone-900 text-stone-800 hover:text-stone-950 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center space-x-1"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onReserveVilla(villa)}
            className="w-full py-3 px-3 rounded-2xl bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-stone-950/20 active:scale-[0.98] flex items-center justify-center space-x-1"
          >
            <span>Reserve Stay</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

