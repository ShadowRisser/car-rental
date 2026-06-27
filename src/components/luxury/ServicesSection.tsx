'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, MapPin, Headphones, KeyRound, Award, Gem, Truck } from 'lucide-react';

const services = [
  {
    icon: Gem,
    title: 'Curated Collection',
    description: 'Every vehicle is hand-selected from the world\'s finest manufacturers, ensuring only pristine, low-mileage examples enter our fleet.',
  },
  {
    icon: Shield,
    title: 'Comprehensive Insurance',
    description: 'Full coverage included with every rental. Drive with complete peace of mind knowing you\'re fully protected against any eventuality.',
  },
  {
    icon: KeyRound,
    title: 'White-Glove Delivery',
    description: 'Your chosen vehicle delivered to your location — airport, hotel, residence, or office — by our professional chauffeurs.',
  },
  {
    icon: Clock,
    title: '24/7 Concierge',
    description: 'Round-the-clock dedicated support from our luxury automotive specialists. We\'re always just one call away.',
  },
  {
    icon: MapPin,
    title: 'Flexible Locations',
    description: 'Pick up and drop off across multiple cities. Seamless multi-city tours arranged with precision and elegance.',
  },
  {
    icon: Headphones,
    title: 'Personal Advisor',
    description: 'A dedicated rental advisor to help you select the perfect vehicle for your occasion, ensuring an unforgettable experience.',
  },
];

const stats = [
  { icon: Award, value: '200+', label: 'Premium Vehicles' },
  { icon: Truck, value: '15K+', label: 'Successful Rentals' },
  { icon: Shield, value: '100%', label: 'Insured Fleet' },
  { icon: Gem, value: '4.9/5', label: 'Average Rating' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a853]/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            The MAJESTIC <span className="text-gold-gradient">Difference</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
            We don&apos;t just rent cars — we deliver transformative experiences. Every detail, 
            from the moment you inquire to the second you return, is orchestrated to perfection.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-lg p-8 group hover:border-[#d4a853]/20 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-lg bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center mb-6 group-hover:bg-[#d4a853]/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-[#d4a853]" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-lg p-8 sm:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4a853]/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#d4a853]" />
                  </div>
                </div>
                <div className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-gold-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}