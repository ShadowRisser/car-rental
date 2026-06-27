'use client';

import { motion } from 'framer-motion';
import { Award, Clock, MapPin, Star, TrendingUp, Users } from 'lucide-react';

const milestones = [
  { year: '2012', title: 'Founded in Beverly Hills', description: 'MAJESTIC Motors was born from a passion for automotive excellence and a vision to redefine luxury car rental.' },
  { year: '2015', title: 'Expanded to Dubai & Monaco', description: 'International expansion brought our signature white-glove service to the world\'s most prestigious destinations.' },
  { year: '2018', title: 'Fleet Surpassed 100 Vehicles', description: 'Our curated collection grew to include the rarest and most sought-after automobiles from around the globe.' },
  { year: '2021', title: '10,000th Client Served', description: 'A milestone that speaks to the trust our clients place in delivering exceptional automotive experiences.' },
  { year: '2024', title: 'Global Excellence Award', description: 'Recognized as the world\'s leading luxury car rental service by the International Automotive Prestige Association.' },
];

const brandValues = [
  { icon: Award, title: 'Uncompromising Quality', desc: 'Every vehicle meets our 150-point inspection standard before entering the fleet.' },
  { icon: Users, title: 'Client-First Philosophy', desc: 'Your experience is our obsession. Every interaction is designed to exceed expectations.' },
  { icon: Star, title: 'Exclusivity Guaranteed', desc: 'Limited fleet size ensures personalized attention and pristine vehicle condition.' },
  { icon: TrendingUp, title: 'Constantly Evolving', desc: 'We continuously refresh our collection with the latest and most coveted models.' },
];

export default function BrandSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a853]/[0.015] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-4 block">
              Our Legacy
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Decade of <span className="text-gold-gradient">Automotive</span> Excellence
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Since our founding, MAJESTIC Motors has been the trusted choice of discerning individuals who demand 
              nothing less than perfection. Our commitment to quality, discretion, and exceptional service has 
              earned us the loyalty of executives, celebrities, and automotive enthusiasts worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {brandValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a853]/20 transition-colors duration-300">
                      <value.icon className="w-5 h-5 text-[#d4a853]" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold text-sm mb-1">{value.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a853]/50 via-[#d4a853]/20 to-transparent" />

            <div className="space-y-10">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-[9px] sm:left-[17px] top-1 w-[14px] h-[14px] rounded-full border-2 border-[#d4a853] bg-background" />
                  <div className="absolute left-[13px] sm:left-[21px] top-[5px] w-[6px] h-[6px] rounded-full bg-[#d4a853]" />

                  <span className="font-[family-name:var(--font-playfair)] text-[#d4a853] text-lg font-bold">{milestone.year}</span>
                  <h3 className="text-foreground font-semibold mt-1 mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}