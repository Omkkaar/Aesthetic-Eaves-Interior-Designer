import React from 'react';
import { motion } from 'motion/react';

const differentiators = [
  {
    num: "I",
    title: "Personalised Moodboards",
    desc: "Discover your design language before finalizing concepts. Never a generic template."
  },
  {
    num: "II",
    title: "Smart Space Planning",
    desc: "Thoughtful layout modifications for seamless, functional, beautiful homes."
  },
  {
    num: "III",
    title: "Multiple Design Styles",
    desc: "Modern, Minimalist, Contemporary — all tailored precisely to your lifestyle."
  },
  {
    num: "IV",
    title: "On-Site Woodwork",
    desc: "No factory dependency. Full precision execution under direct supervision."
  },
  {
    num: "V",
    title: "Premium Material Selection",
    desc: "Durable branded finishes selected with expert guidance for lasting value."
  },
  {
    num: "VI",
    title: "Structured Investment Planning",
    desc: "Plan your interiors with confidence — clear phasing, no hidden surprises."
  }
];

export default function StudioApart() {
  return (
    <section className="py-32 bg-paper border-t border-gold/10" aria-label="Our Unique Design Approach">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs font-accent mb-6 block">OUR APPROACH</span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight text-ink">
                What Sets the <span className="italic text-brand-red font-serif">Studio Apart</span>
            </h2>
        </div>

        <div className="grid md:grid-cols-3 border-l border-t border-gold/10">
          {differentiators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 border-r border-b border-gold/10 flex flex-col group hover:bg-white hover:scale-[1.02] hover:shadow-2xl hover:z-10 transition-all duration-500 relative bg-paper"
            >
              <span className="text-[10px] font-accent text-ink/20 mb-8 block group-hover:text-gold transition-colors">
                {item.num}
              </span>
              <h3 className="text-xl font-serif mb-4 text-ink">
                {item.title}
              </h3>
              <p className="text-ink/50 text-sm leading-relaxed font-sans">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
