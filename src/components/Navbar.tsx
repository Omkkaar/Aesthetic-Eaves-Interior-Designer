import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
  export function jsxDEV(type: any, props: any, key?: any): any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-paper/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`flex flex-col transition-all duration-700 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <span className={`font-serif text-2xl tracking-[0.2em] uppercase leading-none transition-colors duration-500 ${isScrolled ? 'text-ink' : 'text-paper'}`}>
            Aesthetic Eaves Interior Designers
          </span>
          <span className={`text-[10px] uppercase tracking-[0.4em] font-sans mt-1 transition-colors duration-500 ${isScrolled ? 'text-brand-red' : 'text-gold'}`}>
            PUNE'S PREMIUM INTERIOR DESIGN STUDIO
          </span>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center space-x-12 transition-all duration-700 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <a 
            href="#contact"
            className={`px-8 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 font-accent rounded-sm shadow-lg ${
              isScrolled 
                ? 'bg-brand-red text-paper hover:bg-brand-red/90' 
                : 'bg-paper text-brand-red hover:bg-gold hover:text-paper shadow-paper/10'
            }`}
          >
            Book Site Visit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          id="mobile-menu-toggle"
          className={`md:hidden transition-colors duration-500 ${isScrolled ? 'text-ink' : 'text-paper'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-paper shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              <a 
                href="#contact"
                className="bg-brand-red text-paper py-4 text-center uppercase tracking-widest text-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Site Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
