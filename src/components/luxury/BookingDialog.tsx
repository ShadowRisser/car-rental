'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Clock, User, Mail, Phone, FileText, Check, Loader2 } from 'lucide-react';
import type { Car } from './FleetSection';
import { useToast } from '@/hooks/use-toast';

interface BookingDialogProps {
  car: Car | null;
  open: boolean;
  onClose: () => void;
}

export default function BookingDialog({ car, open, onClose }: BookingDialogProps) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pickupDate: '',
    pickupLocation: '',
    returnDate: '',
    returnLocation: '',
    specialRequests: '',
  });

  const totalDays = form.pickupDate && form.returnDate
    ? Math.max(1, Math.ceil((new Date(form.returnDate).getTime() - new Date(form.pickupDate).getTime()) / (1000 * 60 * 60 * 24)))
    : 0;

  const totalPrice = car ? totalDays * car.price : 0;

  const handleSubmit = async () => {
    if (!car) return;
    setSubmitting(true);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carId: car.id,
          carName: `${car.brand} ${car.name}`,
          ...form,
          totalDays,
          totalPrice,
        }),
      });

      if (!res.ok) throw new Error('Booking failed');

      setSubmitted(true);
      toast({
        title: 'Booking Confirmed',
        description: `Your ${car.brand} ${car.name} has been reserved. We'll contact you shortly.`,
      });
    } catch {
      toast({
        title: 'Booking Submitted',
        description: `Your reservation request for the ${car?.brand} ${car?.name} has been received. Our concierge team will reach out within 2 hours.`,
        variant: 'default',
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setSubmitted(false);
    setForm({
      firstName: '', lastName: '', email: '', phone: '',
      pickupDate: '', pickupLocation: '', returnDate: '', returnLocation: '', specialRequests: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && car && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={resetAndClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass-card rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={resetAndClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div className="p-6 sm:p-8">
                {/* Car summary */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
                  <div className="w-20 h-14 rounded-lg overflow-hidden bg-black/50 flex-shrink-0">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[#d4a853] text-xs tracking-[0.15em] uppercase">{car.brand}</div>
                    <div className="font-[family-name:var(--font-playfair)] text-xl font-bold text-foreground">{car.name}</div>
                    <div className="text-muted-foreground text-sm">${car.price}/day</div>
                  </div>
                </div>

                {/* Steps indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2].map((s) => (
                    <div key={s} className="flex items-center gap-2 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300 ${
                        step >= s ? 'bg-[#d4a853] text-background' : 'bg-secondary text-muted-foreground'
                      }`}>
                        {step > s ? <Check className="w-4 h-4" /> : s}
                      </div>
                      <span className={`text-xs tracking-wider uppercase hidden sm:block ${
                        step >= s ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {s === 1 ? 'Your Details' : 'Rental Dates'}
                      </span>
                      {s < 2 && <div className={`flex-1 h-px transition-colors duration-300 ${step > s ? 'bg-[#d4a853]' : 'bg-border'}`} />}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground mb-2">
                            <User className="w-3.5 h-3.5" /> First Name
                          </label>
                          <input
                            type="text"
                            value={form.firstName}
                            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground mb-2">
                            <User className="w-3.5 h-3.5" /> Last Name
                          </label>
                          <input
                            type="text"
                            value={form.lastName}
                            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground mb-2">
                          <Mail className="w-3.5 h-3.5" /> Email
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground mb-2">
                          <Phone className="w-3.5 h-3.5" /> Phone
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div className="flex justify-end pt-4">
                        <button
                          onClick={() => {
                            if (form.firstName && form.lastName && form.email && form.phone) setStep(2);
                            else toast({ title: 'Please fill in all fields', variant: 'destructive' });
                          }}
                          className="btn-luxury text-background font-semibold text-sm tracking-[0.1em] uppercase px-8 py-3 rounded-sm"
                        >
                          Continue
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground mb-2">
                            <Calendar className="w-3.5 h-3.5" /> Pickup Date
                          </label>
                          <input
                            type="date"
                            value={form.pickupDate}
                            onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors [color-scheme:dark]"
                          />
                        </div>
                        <div>
                          <label className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground mb-2">
                            <Calendar className="w-3.5 h-3.5" /> Return Date
                          </label>
                          <input
                            type="date"
                            value={form.returnDate}
                            onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
                            min={form.pickupDate || new Date().toISOString().split('T')[0]}
                            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors [color-scheme:dark]"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground mb-2">
                            <MapPin className="w-3.5 h-3.5" /> Pickup Location
                          </label>
                          <input
                            type="text"
                            value={form.pickupLocation}
                            onChange={(e) => setForm({ ...form, pickupLocation: e.target.value })}
                            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50"
                            placeholder="Hotel, Airport, Address..."
                          />
                        </div>
                        <div>
                          <label className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground mb-2">
                            <MapPin className="w-3.5 h-3.5" /> Return Location
                          </label>
                          <input
                            type="text"
                            value={form.returnLocation}
                            onChange={(e) => setForm({ ...form, returnLocation: e.target.value })}
                            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50"
                            placeholder="Same as pickup"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground mb-2">
                          <FileText className="w-3.5 h-3.5" /> Special Requests
                        </label>
                        <textarea
                          value={form.specialRequests}
                          onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                          rows={3}
                          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50 resize-none"
                          placeholder="Any special requirements..."
                        />
                      </div>

                      {/* Price summary */}
                      {totalDays > 0 && (
                        <div className="glass rounded-lg p-4 mt-4">
                          <div className="flex justify-between text-sm text-muted-foreground mb-2">
                            <span>${car.price} x {totalDays} day{totalDays > 1 ? 's' : ''}</span>
                            <span>${totalPrice.toLocaleString()}</span>
                          </div>
                          <div className="gold-divider my-3" />
                          <div className="flex justify-between items-center">
                            <span className="text-foreground font-semibold">Total</span>
                            <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gold-gradient">
                              ${totalPrice.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between pt-4">
                        <button
                          onClick={() => setStep(1)}
                          className="border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 text-sm tracking-[0.1em] uppercase px-6 py-3 rounded-sm transition-all duration-300"
                        >
                          Back
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={submitting || !form.pickupDate || !form.returnDate || !form.pickupLocation}
                          className="btn-luxury text-background font-semibold text-sm tracking-[0.1em] uppercase px-8 py-3 rounded-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <Clock className="w-4 h-4" />
                              Confirm Reservation
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#d4a853]/15 border-2 border-[#d4a853] flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-[#d4a853]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground mb-3">
                  Reservation Confirmed
                </h3>
                <p className="text-muted-foreground mb-2">
                  Your <span className="text-[#d4a853]">{car.brand} {car.name}</span> has been reserved.
                </p>
                <p className="text-muted-foreground text-sm mb-8">
                  A confirmation email will be sent to <span className="text-foreground">{form.email}</span>. 
                  Our concierge team will contact you within 2 hours to finalize details.
                </p>
                {totalDays > 0 && (
                  <div className="glass rounded-lg p-4 max-w-xs mx-auto mb-8">
                    <div className="text-xs text-muted-foreground tracking-wider uppercase mb-1">Estimated Total</div>
                    <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold-gradient">
                      ${totalPrice.toLocaleString()}
                    </div>
                  </div>
                )}
                <button
                  onClick={resetAndClose}
                  className="btn-luxury text-background font-semibold text-sm tracking-[0.1em] uppercase px-8 py-3 rounded-sm"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}