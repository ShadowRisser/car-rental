'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexander V.',
    role: 'CEO, Vanguard Capital',
    rating: 5,
    text: 'MAJESTIC Motors delivered a Rolls-Royce Ghost to my hotel in Dubai with the kind of attention to detail I\'ve only experienced at five-star hospitality brands. The car was immaculate, the concierge service flawless. This is how luxury car rental should be.',
    location: 'Dubai, UAE',
  },
  {
    name: 'Sophia Chen',
    role: 'Fashion Designer',
    rating: 5,
    text: 'I rented the Ferrari 488 GTB for a photoshoot in Monaco. Not only was the car a showstopper, but the team went above and beyond to accommodate our tight schedule. The experience was truly world-class.',
    location: 'Monaco',
  },
  {
    name: 'James Harrington III',
    role: 'Private Equity Partner',
    rating: 5,
    text: 'I\'ve used luxury car rental services across Europe and the Middle East. MAJESTIC Motors stands in a league of its own. The Bentley Continental GT was delivered with a personal walkthrough, and every question was answered before I could ask.',
    location: 'London, UK',
  },
  {
    name: 'Isabella Moretti',
    role: 'Art Gallery Owner',
    rating: 5,
    text: 'For my gallery\'s anniversary event, I wanted something extraordinary. The Lamborghini Aventador turned heads the moment it arrived. MAJESTIC Motors understood the assignment perfectly. Impeccable taste, flawless execution.',
    location: 'Milan, Italy',
  },
  {
    name: 'David Rothschild',
    role: 'Real Estate Developer',
    rating: 5,
    text: 'The AMG GT 63 S was the perfect companion for my weekend in the Swiss Alps. Arrived on time, in perfect condition, and the team arranged a scenic route that made the drive unforgettable. Truly premium service.',
    location: 'Zurich, Switzerland',
  },
  {
    name: 'Victoria Ashford',
    role: 'Lifestyle Influencer',
    rating: 5,
    text: 'I\'ve worked with many car rental companies for content creation, and MAJESTIC Motors is the only one I recommend to my audience. The cars are showroom-perfect, the service is discreet and professional, and the overall experience is unmatched.',
    location: 'Los Angeles, USA',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-4 block">
            Client Experiences
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            What Our <span className="text-gold-gradient">Clients</span> Say
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <div className="absolute -top-4 left-8 sm:left-16 z-0">
            <Quote className="w-20 h-20 text-[#d4a853]/10" />
          </div>

          <div className="relative glass-card rounded-lg p-8 sm:p-12 min-h-[320px] flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4a853] text-[#d4a853]" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-semibold text-foreground text-base">{t.name}</div>
                    <div className="text-[#d4a853] text-sm">{t.role}</div>
                  </div>
                  <div className="text-sm text-muted-foreground tracking-wider">
                    {t.location}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border hover:border-[#d4a853]/40 flex items-center justify-center text-muted-foreground hover:text-[#d4a853] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-[#d4a853] w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border hover:border-[#d4a853]/40 flex items-center justify-center text-muted-foreground hover:text-[#d4a853] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}