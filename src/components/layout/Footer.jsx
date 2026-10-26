import React from 'react';
import { Mail, Linkedin, ExternalLink, MessageCircle, ShieldCheck, ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { navLinks } from '../../data/navigation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Identity & Professional Role */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm">
                IH
              </div>
              <div>
                <span className="text-white font-bold text-base block">{profileData.name}</span>
                <span className="text-xs text-blue-400 font-medium">Vendor Manager</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Managing US vendor networks, pricing negotiations, and work-order resolution at{' '}
              <strong className="text-slate-200">LeadCraft IT Solutions</strong>. Previously 2.5 years in B2B sales and appointment setting at <strong className="text-slate-200">Bryan Squad</strong>.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Verified Experience & Work History</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Sections
            </h3>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Connect Directly
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="truncate">{profileData.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={profileData.contact.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-emerald-400" />
                  <span>Upwork Freelancer Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp (+880 1857 777132)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance & Disclaimer */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Data & Ethics Notice
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
              All interactive dashboards, contractor workflows, and case studies displayed use simulated sample data for portfolio demonstration only. No confidential client records or internal employer pricing records are disclosed.
            </p>
            <div className="mt-4 text-[11px] text-slate-400">
              Education: English Studies at Government Shahid Suhrawardy College.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} MD Ismail Hossain. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/md-ismail-hossain-official/ismail-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-700">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors p-1"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
