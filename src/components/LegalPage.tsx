import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'terms' | 'privacy' | 'refund';
  onBack: () => void;
}

export default function LegalPage({ type, onBack }: LegalPageProps) {
  const content = {
    terms: {
      title: "Terms and Conditions",
      effective: "November 2025",
      sections: [
        {
          title: "1. GENERAL OVERVIEW AND ACCEPTANCE",
          text: "By engaging with Aesthetic Eaves Interior Designers, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services."
        },
        {
          title: "2. SCOPE OF SERVICES",
          text: "Aesthetic Eaves Interior Designers provides comprehensive architectural and interior design services, including: Concept development and design consultation, planning and layout drawings, detailed design drawings and specifications, material and color selection guidance, 3D visualizations and renderings, site supervision during implementation, and project coordination and client support."
        },
        {
          title: "3. APPOINTMENT OF CONTRACTORS AND VENDORS",
          text: "While Aesthetic Eaves Interior Designers may assist clients in selecting contractors, vendors, suppliers, and OEMs, these third parties are independently responsible for quality of work, project timelines, safety compliance, and any incidents on-site. Aesthetic Eaves Interior Designers is not liable for any actions, omissions, or failures of these third parties."
        },
        {
          title: "4. INTELLECTUAL PROPERTY AND DESIGN RIGHTS",
          text: "All designs, drawings, concepts, specifications, and materials created by Aesthetic Eaves Interior Designers remain the intellectual property of Aesthetic Eaves Interior Designers and Omkkaar Kulkarni. Clients are granted a limited license to use these designs solely for the specified project. Clients may not reproduce, duplicate, share designs with third parties without written consent."
        },
        {
          title: "5. PROJECT SCOPE AND CHANGES",
          text: "Changes in project scope must be submitted in writing and are subject to approval by Aesthetic Eaves Interior Designers. Services beyond the agreed-upon scope will be billed separately."
        },
        {
          title: "8. PAYMENT TERMS AND CONDITIONS",
          text: "All service fees will be as specified in the individual Service Agreement. Payments must be made according to the schedule outlined in the Service Agreement. Failure to make timely payments may result in suspension of services or termination."
        },
        {
          title: "12. DISPUTE RESOLUTION AND GOVERNING LAW",
          text: "These Terms and Conditions are governed by the laws of India, specifically Pune, Maharashtra. Disputes shall be resolved through direct negotiation, mediation, or arbitration/litigation in Pune, Maharashtra courts."
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      effective: "November 2025",
      sections: [
        {
          title: "1. INTRODUCTION",
          text: "At Aesthetic Eaves Interior Designers, we are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services."
        },
        {
          title: "2. INFORMATION WE COLLECT",
          text: "We collect Personal Data including Name, email address, phone number, billing address, project details and design preferences, payment information, and communication records. We also collect Automatic Data such as browser type, IP address, pages visited, and device type."
        },
        {
          title: "3. USE OF YOUR INFORMATION",
          text: "Your information is used to process design service requests, generate invoices, respond to inquiries, monitor site usage and trends, verify user information and prevent fraud, manage service delivery, and send marketing communications (only with your consent)."
        },
        {
          title: "4. DISCLOSURE OF YOUR INFORMATION",
          text: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers assisting us, or for legal requirements when required by law."
        },
        {
          title: "5. SECURITY OF YOUR INFORMATION",
          text: "We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is completely secure."
        }
      ]
    },
    refund: {
      title: "Refund Policy",
      effective: "November 2025",
      sections: [
        {
          title: "1. GENERAL REFUND TERMS",
          text: "Refunds for Aesthetic Eaves Interior Designers' services are generally non-refundable once the design process has commenced. If a project is terminated by the client before design work begins, a partial refund may be issued after deducting any administrative and consultation fees incurred."
        },
        {
          title: "2. REFUNDS FOR DELAYED PROJECTS",
          text: "Aesthetic Eaves Interior Designers provides design and general supervision services only. Any project delays are typically due to factors outside our control (contractors, vendors, suppliers, OEMs). No refunds are provided for delays caused by these third parties."
        },
        {
          title: "3. NO REFUND FOR CHANGE IN SERVICES",
          text: "Once the design phase starts, switching or downgrading service packages forfeits fees paid for the original package."
        },
        {
          title: "4. REFUND PROCESS",
          text: "If you believe you are eligible for a refund, please submit a written request to Omkkaar Kulkarni at Aesthetic Eaves Interior Designers, including project details, reason for request, and supporting documentation."
        },
        {
          title: "6. FINAL DECISION",
          text: "The final decision on all refund matters rests with Aesthetic Eaves Interior Designers and its Founder, Omkkaar Kulkarni."
        }
      ]
    }
  };

  const activeContent = content[type];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-paper overflow-y-auto"
    >
      <div className="max-w-3xl mx-auto px-6 py-24">
        <button 
          onClick={onBack}
          className="flex items-center space-x-3 text-ink/40 hover:text-ink transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-accent">Back to Studio</span>
        </button>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-4">{activeContent.title}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-accent">Effective: {activeContent.effective}</span>
            <span className="w-1 h-1 rounded-full bg-gold/30"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-accent">Aesthetic Eaves</span>
          </div>
        </header>

        <div className="space-y-12">
          {activeContent.sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-lg font-serif text-ink tracking-wide">{section.title}</h2>
              <p className="text-ink/60 font-sans leading-relaxed text-sm">
                {section.text}
              </p>
            </section>
          ))}
        </div>

        <footer className="mt-24 pt-12 border-t border-ink/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.1em] text-ink/30 font-accent">
            © {new Date().getFullYear()} Aesthetic Eaves Interior Designers. All Rights Reserved.
          </p>
        </footer>
      </div>
    </motion.div>
  );
}
