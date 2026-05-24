import React from 'react';
import { motion } from 'motion/react';

export default function USPSection() {
  const whyPoints = [
    { 
      title: "Design Clarity Before Execution", 
      desc: "Every decision made with purpose before a single material is ordered."
    },
    { 
      title: "Intelligent Space Planning", 
      desc: "Thoughtful layout modifications for maximum function and flow."
    },
    { 
      title: "On-Site Craftsmanship Control", 
      desc: "Full hands-on governance at every stage of execution."
    },
    { 
      title: "Premium Material Intelligence", 
      desc: "Curated branded finishes for durability and aesthetic longevity."
    },
    { 
      title: "Client Comfort & Transparency", 
      desc: "Calm, professional guidance at every milestone. No surprises."
    }
  ];

  return (
    <div id="usp-section" aria-label="Why Choose Our Design Studio">
      {/* Why Choose Us */}
      <section className="py-32 bg-paper text-ink" aria-label="Our Differentiators">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs font-accent mb-12 block">WHY CLIENTS CHOOSE US</span>
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
                  Design is not decoration.
                </h2>
                <p className="text-3xl md:text-4xl font-serif italic text-ink/70">
                  It is structured thinking made visible.
                </p>
              </div>

              <p className="text-ink/50 max-w-2xl mb-16 font-sans leading-relaxed">
                Aesthetic Eaves Interior Designers is guided by thoughtful planning, spatial clarity, 
                and material understanding. Each project is approached as a structured design 
                journey — not a catalogue exercise.
              </p>

              <div className="space-y-12">
                {whyPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start border-t border-ink/5 pt-8"
                  >
                    <span className="text-[10px] font-accent text-ink/30 mr-12 mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="text-lg font-serif mb-2">{point.title}</h4>
                      <p className="text-ink/50 text-sm font-sans">
                        {point.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-ink text-paper p-12 lg:p-20 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-serif mb-2">Limited Projects.</h3>
                <h3 className="text-3xl font-serif italic text-gold mb-10">Unlimited Attention.</h3>
                
                <p className="text-paper/60 font-sans leading-relaxed mb-12 text-sm">
                  We take a limited number of projects each month to ensure the 
                  quality and personal attention every client deserves. A Discovery Call 
                  is the first step to knowing if we are the right fit for your home.
                </p>

                <a 
                  href="#contact"
                  className="inline-block bg-gold text-paper px-10 py-5 text-[10px] uppercase tracking-[0.2em] hover:bg-gold/90 transition-all font-accent text-center w-full"
                >
                  Apply for Design Discovery Call
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
