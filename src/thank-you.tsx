import React, { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import {
  Check,
  Calendar,
  MapPin,
  Star,
  Clock,
  ChevronRight,
  ShieldCheck,
  Home,
  UserCheck
} from 'lucide-react';
import './index.css';

const AestheticEavesThankYou = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFAF7] overflow-x-hidden selection:bg-brand-red selection:text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-brand-red/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] select-none p-12">
          <img
            src="https://images.unsplash.com/photo-1521791136368-1a46827db3ad?q=80&w=1600&auto=format&fit=crop"
            alt="Premium Handshake Backdrop"
            className="w-full max-w-4xl h-auto object-contain max-h-[85vh] filter grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1
            }
          }
        }}
        className="relative z-10"
      >
        <header className="p-8 md:p-12 text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="inline-block"
          >
            <h1 className="font-display text-2xl md:text-3xl tracking-[0.2em] text-brand-red uppercase font-semibold">
              Aesthetic Eaves
            </h1>
            <div className="h-[1px] w-full bg-brand-gold mt-1" />
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-stone-500 uppercase mt-2">Interior Designers</p>
          </motion.div>
        </header>

        <section className="px-6 pb-16 md:pb-24 max-w-4xl mx-auto text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.5 }}
                className="w-20 h-20 rounded-full bg-brand-red flex items-center justify-center text-white relative z-10"
              >
                <Check size={36} strokeWidth={3} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-[-10px] rounded-full border border-brand-red/30 z-0"
              />
            </div>
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="font-display text-4xl md:text-6xl text-stone-900 mb-6 leading-tight"
          >
            Thank You for Your <br className="hidden md:block" /> Submission
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Our Client Relations Executive will call you within the next <span className="font-medium text-brand-red">5 minutes</span> to schedule your consultation.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="mb-12"
          >
            <motion.a
              href="https://wa.me/919028774254?text=I%20have%20booked%20your%20Design%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-red text-white font-display text-lg tracking-widest rounded-full shadow-lg hover:bg-[#8B2323] transition-colors duration-300 group"
            >
              Continue to WhatsApp
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="bg-white/50 backdrop-blur-sm border border-stone-200 rounded-2xl p-6 md:p-8 luxury-shadow mb-12"
          >
            <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-8">
              Please keep your phone available. We’ll guide you through the next steps based on your project requirements, timeline, and consultation preference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                { icon: ShieldCheck, text: 'Design Discovery Call' },
                { icon: Home, text: 'Studio Visit Scheduling' },
                { icon: MapPin, text: 'Site Visit Scheduling' },
                { icon: UserCheck, text: 'Personalized Planning Guidance' }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <item.icon size={16} />
                  </div>
                  <span className="text-stone-700 font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="max-w-xs mx-auto"
          >
            <div className="h-1 w-full bg-stone-200 rounded-full overflow-hidden mb-3">
              <motion.div
                className="h-full bg-brand-gold"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold animate-pulse">
              Preparing your consultation experience…
            </p>
          </motion.div>
        </section>

        <section className="bg-brand-red py-24 px-6 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
              }}
              className="font-display text-3xl md:text-5xl text-center mb-16"
            >
              What Happens Next?
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Requirement Analysis',
                  description: 'Our Client Relations Executive will understand your project scope, requirements, and preferences.'
                },
                {
                  step: '02',
                  title: 'Meeting Scheduling',
                  description: 'We’ll schedule your Design Discovery Call, Studio Visit, or Site Visit based on your convenience.'
                },
                {
                  step: '03',
                  title: 'Founder Guidance',
                  description: 'Our founder-led team will guide you through planning, design direction, and execution clarity.'
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
                  }}
                  whileHover={{ y: -10 }}
                  className="group bg-white/10 border border-white/20 p-8 rounded-2xl transition-all duration-500 hover:bg-white/15"
                >
                  <span className="font-display text-4xl text-brand-gold/60 block mb-6 transition-colors group-hover:text-brand-gold">{step.step}</span>
                  <h4 className="text-xl font-display mb-4">{step.title}</h4>
                  <p className="text-stone-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 max-w-6xl mx-auto">
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="font-display text-3xl md:text-4xl text-center mb-12 text-stone-900"
          >
            Thoughtfully Designed Premium <br className="hidden md:block" /> Homes Across Pune
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1000&auto=format&fit=crop'
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
                }}
                className="aspect-[4/5] overflow-hidden rounded-2xl luxury-shadow group"
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-stone-200">
            {[
              { label: '50+ Homes Designed', icon: Home },
              { label: '14+ Years Experience', icon: Clock },
              { label: '5.0★ Google Rating', icon: Star },
              { label: '100% Personal Guidance', icon: UserCheck }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
                }}
                className="text-center"
              >
                <div className="text-brand-gold mb-3 flex justify-center">
                  <stat.icon size={24} />
                </div>
                <p className="text-xs md:text-sm font-semibold text-stone-900 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 px-6 bg-white text-stone-900 text-center border-y border-stone-100">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-8" />
            <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-brand-red">
              “At Aesthetic Eaves Interior Designers, we believe beautiful interiors begin with thoughtful planning, material clarity, and execution precision — before the actual work even starts.”
            </p>
            <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-8" />
          </motion.div>
        </section>

        <footer className="py-24 px-6 bg-[#FCFAF7] border-t border-stone-200 text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-red mx-auto mb-8">
              <Star size={32} />
            </div>
            <p className="text-stone-600 leading-relaxed font-light text-lg">
              We take a <span className="font-medium text-brand-red">limited number of projects</span> each month to ensure personalized guidance, attention to detail, and a refined design experience for every home.
            </p>
            <div className="mt-16 pt-12 border-t border-stone-100">
              <p className="text-[10px] tracking-[0.4em] text-stone-400 uppercase">
                © {new Date().getFullYear()} Aesthetic Eaves Interior Designers | Pune, India
              </p>
            </div>
          </motion.div>
        </footer>
      </motion.div>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
  <StrictMode>
    <AestheticEavesThankYou />
  </StrictMode>
);
