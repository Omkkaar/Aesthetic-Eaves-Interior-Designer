import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already contacted via WhatsApp on this device
    const contacted = localStorage.getItem('whatsapp_contacted');
    if (contacted) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when cursor leaves the top of the viewport
      // It will trigger again if they close it and leave again, until they click WhatsApp
      if (e.clientY <= 0 && !isOpen) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isOpen]);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919028774254";
    const message = encodeURIComponent("I was exploring Aesthetic Eaves website for my home interiors");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    // Permanently mark as contacted only when they click the button
    localStorage.setItem('whatsapp_contacted', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-ink/80 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white z-[101] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-gold/20"
          >
            {/* Visual Header */}
            <div className="relative h-32 bg-brand-red overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red via-transparent to-transparent"></div>
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-paper/50 hover:text-paper transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-accent">Direct Protocol</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 pt-6">
              <h3 className="text-2xl font-serif text-ink mb-2">Not ready to fill details?</h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-8 font-light">
                Premium design consultation doesn't always need a form. Continue our conversation on WhatsApp for instantaneous assistance.
              </p>

              <button
                onClick={handleWhatsAppRedirect}
                className="w-full flex items-center justify-center space-x-3 bg-ink text-paper py-5 px-8 rounded-sm hover:bg-ink/90 transition-all font-accent text-xs uppercase tracking-[0.2em] border border-white/5 shadow-2xl gold-shimmer-hover group"
              >
                <MessageCircle className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                <span>👉 Continue on WhatsApp</span>
              </button>

              <button 
                onClick={() => setIsOpen(false)}
                className="w-full mt-4 text-ink/30 text-[10px] uppercase tracking-widest font-accent hover:text-ink/50 transition-colors"
              >
                Maybe Later
              </button>
            </div>

            {/* Trust Footer */}
            <div className="bg-paper/50 py-4 border-t border-ink/5 text-center">
              <p className="text-[9px] uppercase tracking-[0.3em] text-ink/40 font-accent">
                Bespoke Excellence Guaranteed
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
