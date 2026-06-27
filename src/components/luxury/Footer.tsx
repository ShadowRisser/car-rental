'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const footerLinks = {
  'Fleet': ['Supercars', 'Sports Cars', 'Grand Tourers', 'Ultra Luxury', 'SUVs', 'Convertibles'],
  'Services': ['Daily Rental', 'Weekly Rental', 'Monthly Rental', 'Chauffeur Service', 'Airport Transfer', 'Special Events'],
  'Company': ['About Us', 'Our Story', 'Careers', 'Press', 'Partners', 'Blog'],
  'Support': ['FAQ', 'Contact Us', 'Terms of Service', 'Privacy Policy', 'Insurance', 'Route Planning'],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative mt-auto">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />

      {/* CTA banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4a853]/5 via-[#d4a853]/10 to-[#d4a853]/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to <span className="text-gold-gradient">Experience</span> Luxury?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Contact our concierge team today and let us curate the perfect luxury driving experience for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-3 border border-[#d4a853]/40 text-[#d4a853] hover:bg-[#d4a853]/10 font-medium text-sm tracking-[0.1em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Our Concierge
              </a>
              <a
                href="#booking"
                className="btn-luxury text-background font-semibold text-sm tracking-[0.1em] uppercase px-8 py-3.5 rounded-sm"
              >
                Reserve a Vehicle
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {/* Brand column */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border-2 border-[#d4a853] rounded-sm flex items-center justify-center">
                  <span className="font-[family-name:var(--font-playfair)] text-[#d4a853] font-bold text-lg">M</span>
                </div>
                <div>
                  <span className="font-[family-name:var(--font-playfair)] text-gold-gradient text-xl font-bold tracking-[0.15em] leading-tight block">
                    MAJESTIC
                  </span>
                  <span className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase leading-tight block">
                    Motors
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                The world&apos;s premier luxury car rental service. Experience automotive excellence, curated for the discerning driver.
              </p>
              <div className="space-y-2 mb-6">
                <a href="tel:+18005551234" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#d4a853] transition-colors">
                  <Phone className="w-3.5 h-3.5" /> +1 (800) 555-1234
                </a>
                <a href="mailto:info@majesticmotors.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#d4a853] transition-colors">
                  <Mail className="w-3.5 h-3.5" /> info@majesticmotors.com
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" /> Los Angeles, CA
                </div>
              </div>
              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-border hover:border-[#d4a853]/40 flex items-center justify-center text-muted-foreground hover:text-[#d4a853] transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-[family-name:var(--font-playfair)] text-foreground font-semibold text-sm mb-4 tracking-wider uppercase">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground text-sm hover:text-[#d4a853] transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} MAJESTIC Motors. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#d4a853] text-background flex items-center justify-center shadow-lg shadow-[#d4a853]/20 hover:bg-[#d4a853]/90 transition-all duration-300 hover:scale-105"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}