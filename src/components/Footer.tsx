import { MapPin } from 'lucide-react';

export default function Footer({ onLegalClick }: { onLegalClick: (type: 'privacy' | 'terms' | 'refund') => void }) {
  return (
    <footer className="bg-ink text-paper pt-10 pb-8 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-start mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="font-serif text-3xl tracking-tight leading-tight max-w-sm">
              Aesthetic Eaves <br />
              <span className="text-gold/80 italic">Interior Designers</span>
            </div>
            <p className="text-paper/40 text-[10px] uppercase tracking-[0.3em] font-accent leading-relaxed max-w-xs">
              PUNE'S PREMIUM INTERIOR DESIGN STUDIO
            </p>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-gold">
              <MapPin size={14} />
              <span className="text-[10px] uppercase tracking-[0.4em] font-accent">Studio Location</span>
            </div>
            <address className="not-italic text-paper/60 text-base font-sans leading-relaxed max-w-md">
              G-19, Ground Floor, Destination Center-1,<br />
              Nanded City, Sinhagad Road, Pune - 411041.<br />
              Maharashtra, India
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-paper/20 font-accent">
            © {new Date().getFullYear()} Aesthetic Eaves Interior Designers.
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[9px] uppercase tracking-[0.2em] text-paper/40 font-accent">
            <button onClick={() => onLegalClick('privacy')} className="hover:text-gold transition-colors cursor-pointer decoration-gold/0 hover:decoration-gold/40 underline underline-offset-8 transition-all">Privacy Policy</button>
            <button onClick={() => onLegalClick('terms')} className="hover:text-gold transition-colors cursor-pointer decoration-gold/0 hover:decoration-gold/40 underline underline-offset-8 transition-all">Terms & Conditions</button>
            <button onClick={() => onLegalClick('refund')} className="hover:text-gold transition-colors cursor-pointer decoration-gold/0 hover:decoration-gold/40 underline underline-offset-8 transition-all">Refund Policy</button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/3 to-transparent pointer-events-none"></div>
    </footer>
  );
}
