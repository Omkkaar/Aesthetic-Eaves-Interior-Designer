import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  key?: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="border-b border-gold/15 last:border-b-0 py-6"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group focus:outline-none py-2"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg md:text-xl text-ink group-hover:text-gold transition-colors duration-300 pr-4 leading-tight">
          {question}
        </span>
        <span className="shrink-0 p-2 border border-gold/15 group-hover:border-gold rounded-full text-gold group-hover:bg-gold/5 transition-all duration-300">
          {isOpen ? (
            <Minus size={14} className="stroke-[1.5]" />
          ) : (
            <Plus size={14} className="stroke-[1.5]" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              marginTop: 16,
              transition: { height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2, delay: 0.05 } }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              marginTop: 0,
              transition: { height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } }
            }}
            className="overflow-hidden"
          >
            <p className="text-ink/70 text-sm md:text-base font-light leading-relaxed max-w-3xl pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the Interior Design timeline?",
      answer: "Our 3-month Interior Design service agreement ensures structured planning, smooth execution, and controlled timelines without delays."
    },
    {
      question: "What material quality do you use?",
      answer: "We recommend E0 waterproof boards for wet areas and E1 grade boards elsewhere. All finishes are bacteria-free, formaldehyde-free, and safe for indoor environments."
    },
    {
      question: "Is on-site execution involved or factory modular systems?",
      answer: "We recommend 100% on-site custom craftsmanship, ensuring precision and design integrity, We also provide modular factory systems if client want to have."
    },
    {
      question: "Can clients visit the site during execution?",
      answer: "Yes. One pre-scheduled weekly visit, accompanied by an AE designer, is permitted to ensure transparency and updates."
    },
    {
      question: "Do you offer EMI flexibility?",
      answer: "Yes. EMI options are available based on client's bank terms and credit card eligibility to make luxury design more accessible."
    },
    {
      question: "How do we begin?",
      answer: "Start with a one-on-one Design Discovery Call to understand your project scope, our process, and the next steps clearly."
    }
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-cream relative overflow-hidden" aria-label="Frequently Asked Questions">
      {/* Decorative premium-spatial grid or lines */}
      <div className="absolute inset-0 premium-spatial-grid opacity-30 pointer-events-none"></div>
      
      {/* Visual luxury accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] font-accent text-gold block mb-4">
            Curated Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-ink tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mt-6"></div>
        </div>

        <div className="bg-paper/40 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="divide-y divide-gold/15">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Minimal Assistive CTA below FAQs */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-ink/50 text-xs md:text-sm font-light mb-4">
            Have a project-specific query not answered here?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-accent text-gold hover:text-ink transition-colors duration-300"
          >
            <span>Ask a Principal Designer</span>
            <span className="text-xs">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
