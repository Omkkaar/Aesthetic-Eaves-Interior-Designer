import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const initialProjects = [
  {
    title: "Bold Children Bedroom",
    category: "Residential Interior",
    image: "/img/1bold-children-bedroom.jpg",
    ratio: "aspect-[4/5]"
  },
  {
    title: "Modern Master Bedroom",
    category: "Modern Living",
    image: "https://raw.githubusercontent.com/Omkkaar/Aesthetic-Eaves-Interior-Designer/refs/heads/main/img/4%20Modern%20Master%20Bedroom.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Modern Bedroom",
    category: "Luxury Housing",
    image: "https://raw.githubusercontent.com/Omkkaar/Aesthetic-Eaves-Interior-Designer/refs/heads/main/img/2%20Modern%20Bedroom.jpg",
    ratio: "aspect-[4/5]"
  },
  {
    title: "Modern Living Hall",
    category: "Premium Apartment",
    image: "https://raw.githubusercontent.com/Omkkaar/Aesthetic-Eaves-Interior-Designer/refs/heads/main/img/5%20Modern%20Living%20Hall.jpg",
    ratio: "aspect-[1/1.2]"
  },
  {
    title: "Classic Bedroom",
    category: "Contemporary Space",
    image: "https://raw.githubusercontent.com/Omkkaar/Aesthetic-Eaves-Interior-Designer/refs/heads/main/img/3%20Classic%20Bedroom.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Contemporary Living",
    category: "Premium Residence",
    image: "https://raw.githubusercontent.com/Omkkaar/Aesthetic-Eaves-Interior-Designer/refs/heads/main/img/6%20Contemporary%20Living.jpg",
    ratio: "aspect-[4/5]"
  }
];

function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ y, scale: 1.25 }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-130"
      />
    </div>
  );
}

export default function Portfolio() {
  const projects = initialProjects;

  return (
    <section id="portfolio" className="py-32 bg-paper" aria-label="Interior Design Portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-accent mb-6 block">Interior Portfolio</span>
            <h2 className="text-2xl font-serif italic inline-block pb-2 border-b border-gold/40">
              Selected Interior Design Projects in Pune
            </h2>
          </div>
          <p className="text-ink/60 max-w-sm mt-6 md:mt-0 font-sans leading-relaxed">
            Every project starts with deep spatial planning before a single material is chosen. Here's a glimpse into our precision-led execution.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid mb-12 group cursor-pointer relative"
            >
              <div className={`relative ${project.ratio} overflow-hidden mb-6 bg-ink/5`}>
                <ParallaxImage 
                  src={project.image} 
                  alt={`${project.title} - ${project.category} project by Aesthetic Eaves`} 
                  className="w-full h-full"
                />

                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-8 text-paper pointer-events-none backdrop-blur-[2px]">
                  <div className="border border-gold/40 w-full h-full absolute inset-4 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-accent text-gold scale-90 group-hover:scale-100 transition-transform duration-700">View Showcase</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-ink/40 mb-1">{project.category}</span>
                <h3 className="text-lg font-serif italic group-hover:text-gold transition-colors underline decoration-gold/20 underline-offset-4">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic CTA - Placement after viewing portfolio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <p className="text-ink/60 font-serif italic text-lg mb-10 max-w-xl">
              "Your home should be a reflection of your journey. Let us help you tell that story with precision."
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact"
                className="gold-shimmer-hover bg-brand-red text-paper px-12 py-6 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-accent shadow-xl hover:shadow-brand-red/20 transition-all border border-paper/10"
              >
                Book Site Visit
              </a>
              <a 
                href="#contact"
                className="border border-gold/40 text-gold px-12 py-6 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-accent hover:bg-gold hover:text-paper transition-all"
              >
                Apply for Design Discovery Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
