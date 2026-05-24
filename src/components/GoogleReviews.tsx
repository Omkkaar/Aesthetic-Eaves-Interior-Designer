import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Vikram R.",
    role: "VILLA OWNER",
    text: "The on-site craftsmanship is superior to any factory-made furniture I have seen."
  },
  {
    name: "Priya K.",
    role: "APARTMENT INTERIOR",
    text: "They respected our budget without compromising on the look."
  },
  {
    name: "Aditi S.",
    role: "HOMEOWNER",
    text: "Aesthetic Eaves transformed our home with absolute clarity in design and execution."
  },
  {
    name: "Rajesh M.",
    role: "RESIDENTIAL CLIENT",
    text: "Professional behavior and excellent space management. Highly recommended."
  },
  {
    name: "Sneha T.",
    role: "FLAT OWNER",
    text: "Loved the moodboards and the final outcome matched them 100%."
  }
];

export default function GoogleReviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextReview = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevReview = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextReview]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="py-32 bg-paper overflow-hidden" aria-label="Google Customer Testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6 italic">Testimonials</h2>
          <div className="flex justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-gold text-gold" />
            ))}
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-accent text-brand-red">5-Star Google Reviews</span>
        </div>

        <div className="relative max-w-4xl mx-auto h-[450px] md:h-[350px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            >
              <div className="mb-8">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-serif text-ink italic leading-relaxed max-w-2xl">
                  "{reviews[index].text}"
                </blockquote>
              </div>
              
              <div className="h-px w-12 bg-gold/30 mb-6"></div>
              
              <div>
                <div className="font-serif text-xl text-ink tracking-widest">{reviews[index].name}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-ink/40 mt-2 font-accent">
                  {reviews[index].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 hidden md:flex">
            <button 
              onClick={prevReview}
              className="p-3 border border-gold/20 text-gold hover:bg-gold hover:text-paper transition-all duration-500 pointer-events-auto rounded-full"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextReview}
              className="p-3 border border-gold/20 text-gold hover:bg-gold hover:text-paper transition-all duration-500 pointer-events-auto rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-[2px] transition-all duration-500 ${
                i === index ? 'w-12 bg-gold' : 'w-4 bg-ink/10 hover:bg-ink/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
