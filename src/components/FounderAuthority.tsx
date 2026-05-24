import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Check, Upload } from 'lucide-react';

export default function FounderAuthority() {
  const [photo, setPhoto] = useState("https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhoto(url);
    }
  };

  const points = [
    "Holistic site & budget planning",
    "Interior detailing with technical precision",
    "Hands-on site governance",
    "Premium material intelligence"
  ];

  return (
    <section id="about" className="py-32 bg-paper relative overflow-hidden" aria-label="About the Founder">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group/photo"
          >
            <div className="aspect-[4/5] bg-ink/5 overflow-hidden transition-all duration-700 relative">
              <img 
                src={photo} 
                alt="Omkkaar Kulkarni - Principal Interior Designer & Founder of Aesthetic Eaves" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Upload Overlay */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-ink/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer backdrop-blur-[2px]"
              >
                <div className="bg-paper p-4 rounded-full text-ink mb-3 transform scale-90 group-hover/photo:scale-100 transition-transform">
                  <Upload size={24} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-paper font-accent">Upload New Portrait</span>
              </div>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-red p-8 shadow-2xl hidden lg:block border border-gold/20 z-10">
              <div className="font-serif text-3xl mb-1 text-paper">14+</div>
              <div className="text-[10px] uppercase tracking-widest text-gold font-accent">Years Intellectual Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-widest text-xs font-accent mb-6 block">DESIGN LEADERSHIP</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight text-ink">
              Omkkaar Kulkarni
            </h2>
            <p className="text-brand-red font-accent font-medium text-xs uppercase tracking-widest mb-8">
              Principal Interior Designer & Founder
            </p>
            
            <div className="text-lg text-ink/70 leading-relaxed mb-10 border-l-2 border-gold pl-8 italic">
              "With 14+ years of experience working with reputed industry names, Aesthetic Eaves Interior Designers brings together design clarity, technical precision, and execution expertise."
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1 bg-gold/10 p-1 rounded-full text-gold">
                    <Check size={14} />
                  </div>
                  <span className="text-sm text-ink/80 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact"
                className="bg-ink text-paper px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-accent hover:bg-ink/90 transition-all border border-white/10 text-center"
              >
                Apply for Design Discovery Call
              </a>
              <div className="flex items-center text-ink/40 text-[10px] uppercase font-accent tracking-widest pl-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse mr-3"></div>
                Principal Designer Review
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
