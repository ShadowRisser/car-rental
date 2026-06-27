'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }
    setSubmitting(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    toast({ title: 'Message Sent', description: 'Our team will respond within 24 hours.' });
    setForm({ name: '', email: '', phone: '', message: '' });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contact <span className="text-gold-gradient">Our Team</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
            Whether you&apos;re planning a special occasion, a business trip, or simply want to experience 
            automotive excellence — our concierge team is ready to assist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Showroom image */}
            <div className="rounded-lg overflow-hidden aspect-[16/10]">
              <img
                src="/images/brand/showroom.png"
                alt="MAJESTIC Motors showroom"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Visit Our Showroom', lines: ['1200 Wilshire Boulevard', 'Suite 500, Los Angeles, CA 90025'] },
                { icon: Phone, title: 'Call Us', lines: ['+1 (800) 555-1234', '+1 (310) 555-5678'] },
                { icon: Mail, title: 'Email Us', lines: ['reservations@majesticmotors.com', 'concierge@majesticmotors.com'] },
                { icon: Clock, title: 'Hours of Operation', lines: ['Mon — Sat: 8:00 AM — 10:00 PM', 'Sun: 10:00 AM — 8:00 PM'] },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#d4a853]" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold text-sm mb-1">{item.title}</div>
                    {item.lines.map((line) => (
                      <div key={line} className="text-muted-foreground text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Message *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-[#d4a853]/50 transition-colors placeholder:text-muted-foreground/50 resize-none"
                  placeholder="Tell us about your ideal rental experience..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-luxury text-background font-semibold text-sm tracking-[0.1em] uppercase px-10 py-3.5 rounded-sm flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}