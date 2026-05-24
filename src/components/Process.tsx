import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Design Discovery Call",
    desc: "A brief conversation to understand your vision, requirements, and provide a preliminary cost estimate."
  },
  {
    num: "02",
    title: "Studio Visit / Site Visit",
    desc: "Deep dive into your property's potential followed by the retainer agreement and formal startup."
  },
  {
    num: "03",
    title: "Moodboard & Direction",
    desc: "Establishing the visual language of your home through curated materials, colors, and textures."
  },
  {
    num: "04",
    title: "Layout & Space Planning",
    desc: "Technical blueprints focusing on flow, functionality, and intelligent storage solutions."
  },
  {
    num: "05",
    title: "Material Finalization",
    desc: "Hands-on selection of every single finish, fabric, and fixture with expert guidance."
  },
  {
    num: "06",
    title: "Execution & Handover",
    desc: "Continuous site governance ensuring that what was designed is exactly what is delivered."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-paper relative" aria-label="Our Design Journey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 text-center">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-accent mb-6 block">HOW WE WORK</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Our Design Process</h2>
          <p className="text-ink/60 font-sans leading-relaxed">
            From the first call to the final handover, our process is structured for clarity, 
            transparency, and zero surprises.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold/20 hidden lg:block -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative lg:h-48 flex items-center">
                {/* Connector dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-paper border-2 border-brand-red rounded-full z-10 hidden lg:block"></div>
                
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-24 lg:text-right' : 'lg:pl-24 lg:ml-auto'}`}
                >
                  <div className="flex flex-col lg:items-start lg:w-full items-center text-center lg:text-left">
                    <span className="text-4xl font-serif text-brand-red/10 mb-4">{step.num}</span>
                    <h3 className="text-xl font-serif mb-4 text-ink">{step.title}</h3>
                    <p className="text-ink/60 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic CTA - Placement after process steps */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto bg-ink p-12 text-center relative border border-gold/20"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold/10 p-2 rounded-full border border-gold/30">
            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-paper font-serif italic text-xl">
              ?
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-paper mb-6">Ready to see your space's potential?</h3>
          <p className="text-paper/60 font-sans mb-10 max-w-lg mx-auto text-sm leading-relaxed">
            The first step is a Discovery Call where we discuss your vision, budget, and feasibility. 
            No commitment required.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-gold text-paper px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-accent hover:bg-gold/90 transition-all gold-shimmer-hover shadow-2xl"
          >
            Book Site Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
