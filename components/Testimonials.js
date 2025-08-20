"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section className="py-12 bg-blush-pink">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display text-navy text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-lg font-body text-navy italic mb-4">
                &quot;{testimonialsData[current].quote}&quot;
              </p>
              <p className="font-body text-navy">
                - {testimonialsData[current].name}, {testimonialsData[current].event}
              </p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gold text-navy px-4 py-2 rounded"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gold text-navy px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;