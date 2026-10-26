import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Mail, MessageCircle } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { profileData } from '../../data/profileData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3' 
        : 'bg-navy-950/80 backdrop-blur-sm border-b border-white/5 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a 
            href="#top" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg p-1"
            aria-label="MD Ismail Hossain - Back to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-navy-900 border border-blue-400/30 flex items-center justify-center text-white font-extrabold text-base tracking-wide shadow-md group-hover:border-blue-400 transition-colors">
              IH
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight group-hover:text-blue-400 transition-colors">
                {profileData.name}
              </div>
              <div className="text-slate-400 text-xs font-medium">
                Vendor Manager • Operations
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button & Contact Links */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Send direct email to MD Ismail Hossain"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Email</span>
            </a>

            <a
              href={profileData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Connect on WhatsApp (opens in new tab)"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-navy-950/98 px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
          <div className="py-2 border-b border-white/10 mb-2">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {profileData.status}
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Direct: {profileData.contact.email}
            </a>
            <a
              href={profileData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: +880 1857 777132
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
