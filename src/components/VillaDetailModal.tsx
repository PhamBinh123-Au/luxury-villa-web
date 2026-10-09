"use client";

import React from "react";
import { Villa } from "@/types";
import { X, Bed, Users, Waves, MapPin, Check, Sparkles, Shield, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VillaDetailModalProps {
  villa: Villa | null;
  onClose: () => void;
  onReserve: (villa: Villa) => void;
}

export const VillaDetailModal: React.FC<VillaDetailModalProps> = ({
  villa,
  onClose,
  onReserve,
}) => {
  if (!villa) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-200 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-stone-950/70 hover:bg-stone-950 text-white p-2.5 rounded-full transition-colors backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Media */}
          <div className="relative aspect-[16/9] w-full bg-stone-900">
            <img
              src={villa.image}
              alt={villa.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 text-xs font-semibold tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{villa.badge || "Luxury Villa"}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-1">
                {villa.name}
              </h2>
              <div className="flex items-center space-x-2 text-stone-300 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{villa.location}, {villa.district}, Da Nang</span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
            {/* Quick Specs */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200/80 text-center">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">Bedrooms</p>
                <p className="text-base sm:text-lg font-serif font-semibold text-stone-900">{villa.bedrooms} King Beds</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">Occupancy</p>
                <p className="text-base sm:text-lg font-serif font-semibold text-stone-900">Up to {villa.maxGuests} Guests</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">Pool</p>
                <p className="text-base sm:text-lg font-serif font-semibold text-stone-900">Private Pool</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">The Residence Experience</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                {villa.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-3">Architectural Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {villa.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Amenities */}
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-3">Complimentary Villa Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-stone-600">
                {villa.amenities.map((amenity, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-stone-100/70 border border-stone-200/60 font-medium flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer with Direct Reserve Button */}
          <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-stone-600 text-xs">
              <span className="font-medium text-stone-900">100% Guaranteed Privacy</span> • Instant confirmation via WhatsApp & Email
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-3 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider hover:bg-stone-100 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onReserve(villa);
                }}
                className="w-1/2 sm:w-auto px-8 py-3 rounded-full bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-lg hover:shadow-stone-950/20 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Reserve This Villa</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

