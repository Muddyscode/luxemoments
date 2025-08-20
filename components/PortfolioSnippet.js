"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const PortfolioSnippet = () => {
  const images = [
    { src: '/images/wedding-decor-floral-arch.webp', alt: 'Wedding Decor' },
    { src: '/images/corporate-event-stage-backdrop.webp', alt: 'Corporate Event' },
    { src: '/images/birthday-party-balloon-arch.webp', alt: 'Birthday Party' },
    { src: '/images/event-planning-timeline-board.webp', alt: 'Event Planning' },
  ];

  return (
    <section className="py-12 bg-ivory">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display text-navy text-center mb-8">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={200}
                className="object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSnippet;