"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Menu, X, Phone, ShieldCheck, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBooking: (villaId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-stone-900/90 backdrop-blur-md shadow-lg border-b border-stone-800/60 py-3.5"
            : "bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex flex-col group">
              <span className="font-serif text-2xl sm:text-3xl tracking-widest text-white font-medium group-hover:text-amber-200 transition-colors">
                {siteConfig.brandName}
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-200/80 uppercase font-light">
                {siteConfig.brandSubtitle}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-200">
              <a
                href="#villas"
                className="hover:text-amber-200 transition-colors tracking-wide"
              >
                The Villas
              </a>
              <a
                href="#experience"
                className="hover:text-amber-200 transition-colors tracking-wide"
              >
                Experience
              </a>
              <a
                href="#amenities"
                className="hover:text-amber-200 transition-colors tracking-wide"
              >
                Amenities
              </a>
              <a
                href="#contact"
                className="hover:text-amber-200 transition-colors tracking-wide"
              >
                Contact
              </a>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\s+/g, "")}`}
                className="flex items-center space-x-2 text-xs text-stone-300 hover:text-white px-3 py-2 rounded-full border border-stone-700/60 hover:border-amber-300/40 transition-all"
                title="Direct Concierge Line"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>{siteConfig.contact.hotline}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="relative group overflow-hidden bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 text-stone-950 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-amber-300/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Stay</span>
                </span>
              </button>

              <a
                href="/admin"
                className="text-stone-400 hover:text-amber-200 p-2 rounded-full transition-colors"
                title="Admin Portal"
              >
                <ShieldCheck className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-amber-300 text-stone-950 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
              >
                Reserve
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-200 hover:text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 bg-stone-950/95 backdrop-blur-xl border-b border-stone-800 p-6 md:hidden text-white"
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#villas"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-stone-200 hover:text-amber-200 py-1 border-b border-stone-800/80"
              >
                The Villas (B1, B2, B3, B4)
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-stone-200 hover:text-amber-200 py-1 border-b border-stone-800/80"
              >
                Coastal Experience
              </a>
              <a
                href="#amenities"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-stone-200 hover:text-amber-200 py-1 border-b border-stone-800/80"
              >
                Exclusive Amenities
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-stone-200 hover:text-amber-200 py-1 border-b border-stone-800/80"
              >
                Contact & Concierge
              </a>
              <div className="pt-2 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-amber-300 text-stone-950 py-3 rounded-xl font-semibold text-sm uppercase tracking-wider text-center"
                >
                  Reserve Your Stay
                </button>
                <div className="flex items-center justify-between pt-2 text-xs text-stone-400">
                  <a
                    href={`tel:${siteConfig.contact.hotline.replace(/\s+/g, "")}`}
                    className="flex items-center space-x-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>{siteConfig.contact.hotline}</span>
                  </a>
                  <a
                    href="/admin"
                    className="flex items-center space-x-1 text-stone-400 hover:text-amber-300"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Admin Access</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

