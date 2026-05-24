/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderAuthority from './components/FounderAuthority';
import MicroFilter from './components/MicroFilter';
import Portfolio from './components/Portfolio';
import USPSection from './components/USPSection';
import StudioApart from './components/StudioApart';
import Process from './components/Process';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import GoogleReviews from './components/GoogleReviews';
import ExitIntentPopup from './components/ExitIntentPopup';
import LimitedAvailability from './components/LimitedAvailability';
import LegalPage from './components/LegalPage';
import Footer from './components/Footer';

export default function App() {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  useEffect(() => {
    // Smooth Scroll Behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div id="landing-page" className="selection:bg-gold/30 selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <FounderAuthority />
        <MicroFilter />
        <Portfolio />
        <USPSection />
        <StudioApart />
        <Process />
        <LeadForm />
        <GoogleReviews />
        <FAQ />
      </main>
      <Footer onLegalClick={setLegalType} />
      
      <ExitIntentPopup />

      <AnimatePresence>
        {legalType && (
          <LegalPage type={legalType} onBack={() => setLegalType(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

