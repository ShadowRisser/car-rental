'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 border-2 border-[#d4a853] rounded-sm flex items-center justify-center group-hover:bg-[#d4a853]/10 transition-colors duration-300">
                <span className="font-[family-name:var(--font-playfair)] text-[#d4a853] font-bold text-lg">M</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-playfair)] text-gold-gradient text-xl font-bold tracking-[0.15em] leading-tight">
                MAJESTIC
              </span>
              <span className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase leading-tight">
                Motors
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#d4a853] group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+18005551234"
              className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-[#d4a853] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="tracking-wider">+1 (800) 555-1234</span>
            </a>
            <a
              href="#booking"
              className="hidden sm:inline-flex btn-luxury text-background font-semibold text-sm tracking-[0.1em] uppercase px-6 py-2.5 rounded-sm"
            >
              Reserve Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-[family-name:var(--font-playfair)] tracking-[0.1em] uppercase text-foreground hover:text-[#d4a853] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="gold-divider my-4" />
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="btn-luxury text-background font-semibold text-center text-sm tracking-[0.1em] uppercase px-6 py-3.5 rounded-sm"
              >
                Reserve Now
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (800) 555-1234</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}