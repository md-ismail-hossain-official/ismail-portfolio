import React from 'react';
import { ArrowRight, MessageCircle, Mail, ShieldCheck, CheckCircle2, Building2, PhoneCall, TrendingUp } from 'lucide-react';
import { profileData } from '../../data/profileData';

export default function HeroSection() {
  return (
    <section 
      id="top" 
      className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-white/10"
    >
      {/* Decorative Grid and Radial Accents */}
      <div className="absolute inset-0 navy-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-medium text-slate-200">
            {profileData.status}
          </span>
        </div>

        {/* Name and Professional Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            {profileData.name}
          </h1>
          <p className="mt-4 text-xl sm:text-2xl lg:text-3xl font-medium text-blue-300">
            {profileData.headline}
          </p>

          {/* Supporting Specialties Badges */}
          <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
            {profileData.specialties.map((spec) => (
              <span
                key={spec}
                className="inline-flex items-center px-3 py-1 rounded-md bg-blue-950/70 border border-blue-400/20 text-xs sm:text-sm text-blue-200 font-medium"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* High-Impact Value Proposition */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Currently orchestrating contractor evaluation, pricing negotiation, and work-order dispatch at{' '}
            <strong className="text-white font-semibold">LeadCraft IT Solutions</strong> for US property preservation and property management portfolios. Backed by{' '}
            <strong className="text-white font-semibold">2.5 years of B2B sales & cold calling</strong> experience at{' '}
            <strong className="text-white font-semibold">Bryan Squad</strong> for North American businesses.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#operations-demo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Explore Operations Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={profileData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-sm border border-white/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Mail className="w-4 h-4 text-blue-300" />
              <span>Direct Email</span>
            </a>
          </div>

          {/* Quick Credibility Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <Building2 className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Current Role</span>
              </div>
              <div className="text-sm font-bold text-white">Vendor Manager</div>
              <div className="text-xs text-slate-400">LeadCraft IT Solutions</div>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <PhoneCall className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Prior Track Record</span>
              </div>
              <div className="text-sm font-bold text-white">2.5 Years B2B Sales</div>
              <div className="text-xs text-slate-400">Bryan Squad (North America)</div>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Industry Focus</span>
              </div>
              <div className="text-sm font-bold text-white">US Property Ops</div>
              <div className="text-xs text-slate-400">Preservation & Maintenance</div>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Negotiation</span>
              </div>
              <div className="text-sm font-bold text-white">Cost Containment</div>
              <div className="text-xs text-slate-400">Line-Item Scope Audits</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
