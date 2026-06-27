'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fuel, Gauge, Settings2, Users, ArrowRight, Calendar } from 'lucide-react';

interface Car {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  specs: {
    hp: string;
    acceleration: string;
    transmission: string;
    seats: number;
    fuel: string;
  };
  available: boolean;
}

const cars: Car[] = [
  {
    id: 'ferrari-488',
    name: '488 GTB',
    brand: 'Ferrari',
    category: 'Supercar',
    price: 1899,
    image: '/images/cars/ferrari-488.png',
    specs: { hp: '661 HP', acceleration: '0-60 in 2.9s', transmission: '7-Speed DCT', seats: 2, fuel: 'V8 Twin-Turbo' },
    available: true,
  },
  {
    id: 'lamborghini-aventador',
    name: 'Aventador SVJ',
    brand: 'Lamborghini',
    category: 'Supercar',
    price: 2499,
    image: '/images/cars/lamborghini-aventador.png',
    specs: { hp: '770 HP', acceleration: '0-60 in 2.8s', transmission: '7-Speed ISR', seats: 2, fuel: 'V12 NA' },
    available: true,
  },
  {
    id: 'rolls-royce-ghost',
    name: 'Ghost',
    brand: 'Rolls-Royce',
    category: 'Ultra Luxury',
    price: 1599,
    image: '/images/cars/rolls-royce-ghost.png',
    specs: { hp: '563 HP', acceleration: '0-60 in 4.6s', transmission: '8-Speed Auto', seats: 5, fuel: 'V12 Twin-Turbo' },
    available: true,
  },
  {
    id: 'porsche-911',
    name: '911 GT3 RS',
    brand: 'Porsche',
    category: 'Sports Car',
    price: 1299,
    image: '/images/cars/porsche-911.png',
    specs: { hp: '518 HP', acceleration: '0-60 in 3.0s', transmission: '7-Speed PDK', seats: 2, fuel: 'Flat-6 NA' },
    available: false,
  },
  {
    id: 'bentley-continental',
    name: 'Continental GT',
    brand: 'Bentley',
    category: 'Grand Tourer',
    price: 1199,
    image: '/images/cars/bentley-continental.png',
    specs: { hp: '650 HP', acceleration: '0-60 in 3.5s', transmission: '8-Speed DCT', seats: 4, fuel: 'W12 Twin-Turbo' },
    available: true,
  },
  {
    id: 'mercedes-amg',
    name: 'AMG GT 63 S',
    brand: 'Mercedes-Benz',
    category: 'Grand Tourer',
    price: 999,
    image: '/images/cars/mercedes-amg.png',
    specs: { hp: '630 HP', acceleration: '0-60 in 3.1s', transmission: '9-Speed AMG', seats: 4, fuel: 'V8 Biturbo' },
    available: true,
  },
];

const categories = ['All', 'Supercar', 'Sports Car', 'Grand Tourer', 'Ultra Luxury'];

interface FleetSectionProps {
  onBookCar: (car: Car) => void;
}

export default function FleetSection({ onBookCar }: FleetSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCars = activeCategory === 'All'
    ? cars
    : cars.filter((car) => car.category === activeCategory);

  return (
    <section id="fleet" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />

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
            The Collection
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-gold-gradient">Exclusive</span> Fleet
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
            Each vehicle in our collection is hand-selected, meticulously maintained, and presented in pristine condition. 
            Only the finest examples qualify for the MAJESTIC Motors experience.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-sm text-xs sm:text-sm tracking-[0.1em] uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#d4a853] border-[#d4a853] text-background font-semibold'
                  : 'border-border text-muted-foreground hover:border-[#d4a853]/40 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Car grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="car-card-glow glass-card rounded-lg overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.name}`}
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase font-medium ${
                      car.available
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${car.available ? 'bg-emerald-400 animate-pulse-dot' : 'bg-red-400'}`} />
                      {car.available ? 'Available' : 'Reserved'}
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase font-medium bg-[#d4a853]/15 text-[#d4a853] border border-[#d4a853]/25">
                      {car.category}
                    </span>
                  </div>

                  {/* Price overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="text-foreground/60 text-xs tracking-wider uppercase">From</div>
                    <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold-gradient">
                      ${car.price}
                    </div>
                    <div className="text-foreground/50 text-xs tracking-wider">per day</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-1 text-[#d4a853] text-xs tracking-[0.2em] uppercase font-medium">
                    {car.brand}
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-4">
                    {car.name}
                  </h3>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Gauge className="w-3.5 h-3.5 text-[#d4a853]/70" />
                      <span className="text-xs">{car.specs.hp}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Settings2 className="w-3.5 h-3.5 text-[#d4a853]/70" />
                      <span className="text-xs">{car.specs.acceleration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Fuel className="w-3.5 h-3.5 text-[#d4a853]/70" />
                      <span className="text-xs">{car.specs.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-3.5 h-3.5 text-[#d4a853]/70" />
                      <span className="text-xs">{car.specs.seats} Seats</span>
                    </div>
                  </div>

                  {/* Action */}
                  <button
                    onClick={() => car.available && onBookCar(car)}
                    disabled={!car.available}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-sm text-sm tracking-[0.1em] uppercase font-semibold transition-all duration-300 ${
                      car.available
                        ? 'btn-luxury text-background group-hover:gap-3'
                        : 'bg-secondary text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    {car.available ? (
                      <>
                        <Calendar className="w-4 h-4" />
                        Reserve This Vehicle
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : (
                      'Currently Unavailable'
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export type { Car };