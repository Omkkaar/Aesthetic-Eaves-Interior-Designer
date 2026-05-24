import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Upload } from 'lucide-react';

export default function Hero() {
  const [logo, setLogo] = useState<string | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const ref = useRef(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogo(url);
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 scale-110"
      >
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury living room interior design by Aesthetic Eaves in Pune" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-red/40 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/80"></div>
      </motion.div>

      {/* Content Overlay - Structured for Premium Flow */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-20 px-6">
        
        {/* TOP ROW: Logo and Company Info */}
        <div className="w-full flex items-start justify-between max-w-7xl">
          {/* Logo - Top Left */}
          <div 
            onClick={() => logoInputRef.current?.click()}
            className="group relative cursor-pointer flex items-center justify-center border border-dashed border-paper/10 hover:border-gold/40 transition-all duration-700 p-3 min-w-[100px] min-h-[100px] backdrop-blur-[2px] bg-paper/5 rounded-sm"
          >
            {logo ? (
              <img src={logo} alt="Studio Logo" className="max-h-16 w-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            ) : (
              <div className="flex flex-col items-center">
                <Upload className="text-paper/20 group-hover:text-gold transition-colors" size={20} />
                <span className="text-[7px] uppercase tracking-[0.2em] text-paper/20 mt-2 font-accent">Logo</span>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-ink/60 backdrop-blur-[1px]">
              <span className="text-[7px] uppercase tracking-widest text-paper font-accent">Edit</span>
            </div>
            <input 
              type="file" 
              ref={logoInputRef}
              onChange={handleLogoUpload}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Company Name - Middle Top (Centered Relatively) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-24 text-center space-y-2 w-full px-6">
            <h2 className="text-paper font-serif text-sm md:text-base tracking-[0.4em] uppercase font-light">
              Aesthetic Eaves <span className="italic opacity-80">Interior Designers</span>
            </h2>
            <div className="flex items-center justify-center space-x-3">
              <div className="h-[1px] w-3 bg-gold/30"></div>
              <span className="text-gold uppercase tracking-[0.6em] text-[7px] sm:text-[8px] font-accent">
                PUNE'S PREMIUM INTERIOR DESIGN STUDIO
              </span>
              <div className="h-[1px] w-3 bg-gold/30"></div>
            </div>
          </div>

          {/* Placeholder for balance - Top Right (empty) */}
          <div className="w-[100px] hidden lg:block"></div>
        </div>

        {/* CENTER: Main Hook */}
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-paper text-5xl sm:text-7xl md:text-[95px] leading-[1] font-serif font-light tracking-tight px-4 mb-4">
              Crafting Spaces <br className="hidden md:block" />
              That <span className="italic text-gold">Tell Your Story</span>
            </h1>
            <p className="text-paper/60 text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase">
              Exclusive Luxury Interior Design & Bespoke Styling
            </p>
          </motion.div>
        </div>

        {/* BOTTOM: CTA and Details */}
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center space-y-8">
            <motion.a 
              href="#contact"
              animate={{
                boxShadow: [
                  "0 20px 50px rgba(0,0,0,0.3)",
                  "0 0 30px rgba(201,162,74,0.6)",
                  "0 20px 50px rgba(0,0,0,0.3)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="gold-shimmer-hover group relative inline-flex items-center justify-center px-16 py-7 bg-gold text-ink rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-gold/50 transition-all duration-700 overflow-hidden border border-gold/20"
            >
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <span className="relative z-10 font-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs">
                Apply for Design Discovery Call
              </span>
            </motion.a>
            
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="h-px w-10 bg-gold/30 mb-4"></div>
              <span className="text-[10px] text-paper/40 uppercase tracking-[0.3em]">
                Limited Monthly Engagements
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-paper/50 to-transparent"
        />
      </div>
    </section>
  );
}
