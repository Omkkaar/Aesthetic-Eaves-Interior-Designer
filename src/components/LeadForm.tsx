import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if form was already submitted on this device
    const submissionStatus = localStorage.getItem('expedify_form_submitted');
    if (submissionStatus === 'true') {
      setIsSubmitted(true);
    }

    // Listen for completion message from Expedify iframe if they support postMessage
    const handleMessage = (event: MessageEvent) => {
      // Expedify usually sends success signals or changes URL
      // We listen for any indicator of success
      if (event.origin.includes('expedify.ai')) {
        // form submission messages
        if (event.data === 'form-submitted' || (typeof event.data === 'string' && event.data.includes('success'))) {
          localStorage.setItem('expedify_form_submitted', 'true');
          setIsSubmitted(true);
        }

        // auto-resize: Expedify may post a message like { type: 'expedify-height', height: 1200 }
        try {
          const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
          if (data && typeof data === 'object' && (data.height || data.type === 'expedify-height')) {
            const h = data.height || data.value || data.h;
            if (h && iframeRef.current) {
              setIframeHeight(`${Number(h)}px`);
            }
          }
        } catch (e) {
          // ignore JSON parse errors for non-JSON messages
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [iframeHeight, setIframeHeight] = useState<string>('80vh');

  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-brand-red text-paper relative overflow-hidden" aria-label="Contact and Application Form">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <div id="contact" className="max-w-4xl mx-auto px-4 md:px-6 scroll-mt-24 md:scroll-mt-32">
        <motion.div 
          initial={{ opacity: 0.3, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative w-full"
        >
          {/* Luxury Frame Accents */}
          <div className="absolute -inset-1 bg-gradient-to-br from-gold/40 via-transparent to-gold/40 rounded-[20px] blur-sm opacity-50 hidden sm:block"></div>
          
          <div className="bg-white shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] relative rounded-xl overflow-hidden border border-gold/20 w-full min-h-[400px] flex flex-col">
            {/* Top Bar Decoration */}
            <div className="h-1.5 bg-gradient-to-r from-gold/10 via-gold to-gold/10 w-full shrink-0"></div>
            
            <div className="w-full">
              {isSubmitted ? (
                <div className="flex-grow w-full flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 px-8 text-center max-w-lg mx-auto"
                  >
                    <div className="mb-8 relative inline-block">
                      <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl animate-pulse"></div>
                      <CheckCircle2 className="w-20 h-20 text-gold relative z-10" strokeWidth={1} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-ink mb-4">Application Received</h3>
                    <div className="w-12 h-px bg-gold/30 mx-auto mb-6"></div>
                    <p className="text-ink/60 text-sm leading-relaxed mb-8 font-light">
                      Our team has received your inquiry. To maintain the highest standards of bespoke service, 
                      we review each application individually. A Principal Designer will be in touch within 24-48 hours.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-paper p-4 border border-gold/10 rounded-sm">
                        <Clock className="w-4 h-4 text-gold mx-auto mb-2" />
                        <p className="text-[10px] uppercase tracking-widest text-ink/40 font-accent">Review Time</p>
                        <p className="text-xs text-ink font-medium">24-48 Hours</p>
                      </div>
                      <div className="bg-paper p-4 border border-gold/10 rounded-sm">
                        <ShieldCheck className="w-4 h-4 text-gold mx-auto mb-2" />
                        <p className="text-[10px] uppercase tracking-widest text-ink/40 font-accent">Status</p>
                        <p className="text-xs text-ink font-medium">Verified</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ) : (
                <div className="w-full overflow-hidden">
                  <iframe
                    ref={iframeRef}
                    src="https://app.expedify.ai/forms/id/edb8d6c4-f4fc-4ee0-a4ca-d7849783c227/07d8aeea-6b9d-4d42-9cd9-5b3a632442eb"
                    className="w-full border-none block"
                    frameBorder="0"
                    title="Expedify CRM Lead Form"
                    scrolling="no"
                    style={{ width: '100%', height: iframeHeight, minHeight: '700px' }}
                  />
                </div>
              )}
            </div>
            
            <div className="bg-paper/80 backdrop-blur-sm py-4 px-6 border-t border-gold/10 shrink-0">
              {isSubmitted ? (
                <div className="flex items-center justify-center space-x-2 md:space-x-3">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gold"></div>
                  <p className="text-ink/50 text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-center font-accent">
                    Application Locked to this Device
                  </p>
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gold"></div>
                </div>
              ) : (
                <div className="flex items-start border-l-2 border-brand-red py-2 pl-4 max-w-2xl mx-auto">
                  <p className="text-ink/60 text-[10px] md:text-xs leading-relaxed">
                    <span className="text-brand-red font-medium">Please note —</span> If your planned investment is below ₹20 Lakhs, this studio may not be the right fit at this stage. We would love to connect when your project is ready.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Footer note for context under the form */}
          <p className="text-paper/40 text-[8px] md:text-[9px] uppercase tracking-widest text-center mt-2 font-accent px-4 leading-relaxed">
            Confidential Application  •  Bespoke Excellence Guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
