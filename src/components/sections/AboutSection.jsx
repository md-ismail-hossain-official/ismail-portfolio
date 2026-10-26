import React from 'react';
import { Shield, BookOpen, Clock, CheckCircle2, UserCheck, MapPin, Award, Building } from 'lucide-react';
import { profileData } from '../../data/profileData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Professional Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging US Property Operations with Commercial Negotiation & Outbound Discipline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A results-oriented operations professional specializing in vendor acquisition, work-order logistics, pricing defense, and tenant coordination for United States property management stakeholders.
          </p>
        </div>

        {/* 2-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Elegant Profile Visual / Initials Placeholder Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 p-8 text-white shadow-xl overflow-hidden border border-slate-800">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Initials Placeholder Avatar */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-700 to-navy-900 flex items-center justify-center text-white font-extrabold text-4xl shadow-2xl border-2 border-white/20">
                    IH
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-navy-950 shadow-md" title="Active in Operations">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white">{profileData.name}</h3>
                <p className="text-sm font-medium text-blue-300 mt-1">Vendor Manager</p>
                <p className="text-xs text-slate-400 mt-0.5">LeadCraft IT Solutions</p>

                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{profileData.contact.location}</span>
                </div>

                <div className="mt-6 w-full pt-6 border-t border-white/10 text-left space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Current Focus:</span>
                    <span className="text-slate-200 font-semibold">US Property Ops</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Previous Role:</span>
                    <span className="text-slate-200 font-semibold">B2B Sales (2.5 Yrs)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Outbound Market:</span>
                    <span className="text-slate-200 font-semibold">North America</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Education:</span>
                    <span className="text-slate-200 font-semibold">English Studies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Foundation Box */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-100 text-blue-700 flex-shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Education</h4>
                  <div className="text-sm font-semibold text-blue-700 mt-1">
                    {profileData.education.institution}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {profileData.education.field}
                  </div>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Strong academic foundation in English literature, language mechanics, and professional cross-border communication.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: In-Depth Professional Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed space-y-4">
              <p>
                As a <strong className="text-slate-900 font-semibold">Vendor Manager at LeadCraft IT Solutions</strong>, I manage the operational pulse of US property preservation and maintenance accounts. My primary responsibility is ensuring that maintenance tickets and turnover work orders are assigned to licensed, reliable contractors, negotiated at defensible market rates, and resolved within strict contractual SLAs.
              </p>
              <p>
                Prior to vendor management, I spent <strong className="text-slate-900 font-semibold">2.5 years at Bryan Squad</strong> executing high-volume B2B sales outreach, outbound cold calling, and qualified appointment setting for North American corporate clients. That rigorous sales background directly sharpened my vendor negotiation instincts: whether countering an inflated contractor estimate, securing priority scheduling for an emergency HVAC call, or de-escalating an anxious resident, I combine commercial assertiveness with professional courtesy.
              </p>
            </div>

            {/* Four Operational Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">US Vendor Network Curation</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Vetting trade licensing, insurance minimums, and historical punctuality across US regions.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Pricing & Scope Defense</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scrutinizing material markups, labor rates, and itemized scopes to eliminate budget inflation.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Overdue SLA Interventions</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct phone escalations with field contractors before tickets breach property management deadlines.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Empathetic Resident Care</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear, timely communication with tenants about repair timelines, minimizing repeat inquiries.
                </p>
              </div>
            </div>

            {/* Quick stats / statement */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-blue-900 leading-relaxed">
                <strong className="font-semibold">Compliance & Privacy Commitment:</strong> Operating with strict non-disclosure compliance. Internal employer systems, client rosters, and resident private data are safeguarded at all times.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
