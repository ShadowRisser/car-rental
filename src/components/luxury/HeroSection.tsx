'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: ((i * 37 + 13) % 97) + 1.5,
  top: ((i * 53 + 7) % 95) + 2.5,
  duration: 3 + (i % 7) * 0.6,
  delay: (i % 5) * 1.1,
}));

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-main.png"
          alt="Luxury supercar on coastal highway"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Ambient particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 rounded-full bg-[#d4a853]/30"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a853]/30 text-[#d4a853] text-xs tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#d4a853] animate-pulse-dot" />
            Established 2012 — Prestige Redefined
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
        >
          <span className="block text-foreground">Drive the</span>
          <span className="block text-gold-shimmer mt-2">Extraordinary</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-10"
        >
          From the thunderous roar of a Lamborghini to the whisper-quiet elegance of a Rolls-Royce — 
          experience the world&apos;s most coveted automobiles, curated for those who accept nothing less than perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#fleet"
            className="btn-luxury group flex items-center gap-3 text-background font-semibold text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm w-full sm:w-auto justify-center"
          >
            Explore the Fleet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#booking"
            className="group flex items-center gap-3 border border-[#d4a853]/40 text-[#d4a853] hover:bg-[#d4a853]/10 font-medium text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '200+', label: 'Luxury Vehicles' },
            { value: '15K+', label: 'Happy Clients' },
            { value: '12', label: 'Years of Excellence' },
            { value: '98%', label: 'Satisfaction Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-gold-gradient">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#d4a853]" />
        </motion.div>
      </motion.div>
    </section>
  );
}