'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/luxury/Navbar';
import HeroSection from '@/components/luxury/HeroSection';
import FleetSection, { type Car } from '@/components/luxury/FleetSection';
import BrandSection from '@/components/luxury/BrandSection';
import ServicesSection from '@/components/luxury/ServicesSection';
import TestimonialsSection from '@/components/luxury/TestimonialsSection';
import ContactSection from '@/components/luxury/ContactSection';
import BookingDialog from '@/components/luxury/BookingDialog';
import Footer from '@/components/luxury/Footer';

function SectionDivider() {
  return <div className="gold-divider max-w-xs mx-auto" />;
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [bookingCar, setBookingCar] = useState<Car | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBookCar = (car: Car) => {
    setBookingCar(car);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SectionDivider />
        <FleetSection onBookCar={handleBookCar} />
        <SectionDivider />
        <BrandSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
      <BookingDialog
        car={bookingCar}
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}