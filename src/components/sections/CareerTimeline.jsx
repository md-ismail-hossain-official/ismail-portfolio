import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { profileData } from '../../data/profileData';

export default function CareerTimeline() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Verified Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience & Career Progression
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Continuous operational execution across US property management vendor networks and corporate North American B2B sales pipelines.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
          
          {/* Role 1: Current - LeadCraft IT Solutions */}
          <div className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white">
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>

            <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle hover:shadow-card transition-all">
              
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
                    Current Position
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Vendor Manager
                  </h3>
                  <div className="text-base font-semibold text-blue-700 flex items-center gap-2 mt-0.5">
                    <Building2 className="w-4 h-4" />
                    <span>LeadCraft IT Solutions</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>Present</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">US Property Operations</div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Leading contractor sourcing, work-order logistics, and commercial pricing negotiation for property preservation and residential turnover workflows across several US states.
              </p>

              {/* Verified Responsibilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {profileData.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/70 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-slate-800 block text-xs">
                        {resp.title}
                      </strong>
                      <span className="text-slate-500 text-[11px] leading-tight block mt-0.5">
                        {resp.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Role 2: Previous - Bryan Squad */}
          <div className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-slate-400 border-4 border-white shadow-md flex items-center justify-center text-white">
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>

            <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle hover:shadow-card transition-all">
              
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                    Previous Experience
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    B2B Sales & Appointment Setting
                  </h3>
                  <div className="text-base font-semibold text-slate-700 flex items-center gap-2 mt-0.5">
                    <Building2 className="w-4 h-4" />
                    <span>Bryan Squad</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
                    <Calendar className="w-3.5 h-3.5 text-slate-600" />
                    <span>2.5 Years Track Record</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">North American Market</div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Executed structured outbound cold calling and appointment-setting campaigns targeting North American commercial enterprises, overcoming objections and qualifying prospective clients.
              </p>

              {/* Core Sales Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <h4 className="font-bold text-xs text-slate-900 mb-1">Cold Outreach Cadence</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    High-volume daily dials, pattern interrupts, and value propositions delivered to executive gatekeepers.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <h4 className="font-bold text-xs text-slate-900 mb-1">Objection Handling</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Countering established vendor objections, budget pushbacks, and timing hesitations into scheduled meetings.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <h4 className="font-bold text-xs text-slate-900 mb-1">BANT Qualification</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Ensuring Budget, Authority, Need, and Timeline fit prior to handing leads to account executives.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
