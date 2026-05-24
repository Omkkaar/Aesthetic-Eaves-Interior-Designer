import React from 'react';
import { motion } from 'motion/react';

export default function LimitedAvailability() {
  return (
    <section className="py-24 bg-ink text-white relative overflow-hidden border-t border-gold/10">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gold uppercase tracking-[0.4em] text-[10px] font-accent mb-6 block"
        >
          READY TO START?
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif leading-tight mb-8"
        >
          Apply for Your Design <br /> 
          <span className="italic text-gold">Discovery Call</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/50 text-sm font-sans leading-relaxed max-w-2xl mx-auto mb-12"
        >
          We take a limited number of projects each month to ensure absolute quality and attention to detail. Check your eligibility now.
        </motion.p>
        
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12 text-left border-y border-white/5 py-8">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <span className="text-gold text-xs font-accent">01</span>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-paper mb-1">Takes less than 30 seconds</div>
              <div className="text-white/40 text-[10px] leading-relaxed">Quick and frictionless application</div>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <span className="text-gold text-xs font-accent">02</span>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-paper mb-1">Direct Designer Access</div>
              <div className="text-white/40 text-[10px] leading-relaxed">No middle-men, direct consultation</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="#contact"
            className="inline-block bg-gold text-paper px-12 py-5 text-[10px] sm:text-xs uppercase tracking-[0.3em] hover:bg-gold/90 transition-all font-accent text-center gold-shimmer-hover shadow-2xl"
          >
            Apply for Design Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
