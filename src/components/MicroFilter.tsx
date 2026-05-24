import React from 'react';
import { motion } from 'motion/react';

export default function MicroFilter() {
  return (
    <section className="bg-brand-red py-32 overflow-hidden relative" aria-label="Target Audience Qualifier">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-1 border border-gold/30 rounded-full mb-8">
            <span className="text-gold text-[10px] uppercase tracking-[0.3em]">Exclusivity & Distinction</span>
          </div>
          <h2 className="text-paper text-2xl md:text-4xl font-serif leading-relaxed px-4">
            If you're ready to <span className="text-gold italic">Invest 20L+</span> On Interiors & If you are looking for <span className="text-gold">thoughtful planning</span>, premium materials, and long-term usability — <span className="underline decoration-gold/50 underline-offset-8">you're in the right place.</span>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <a 
              href="#contact"
              className="inline-block bg-paper text-brand-red px-14 py-6 text-[10px] sm:text-xs uppercase tracking-[0.4em] font-accent shadow-2xl hover:bg-gold hover:text-paper transition-all gold-shimmer-hover rounded-sm"
            >
              Apply for Design Discovery Call
            </a>
            <p className="text-paper/40 text-[9px] uppercase tracking-[0.25em] mt-8 font-accent">
              Direct Access to Principal Designer
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
