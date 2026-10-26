import React from 'react';
import { Star, ShieldCheck, CheckCircle2, HeartHandshake, UserCheck, Lock } from 'lucide-react';
import { operationsData } from '../../data/operationsData';
import DemoDisclaimer from '../common/DemoDisclaimer';

export default function TenantSatisfaction() {
  const { tenantSatisfaction } = operationsData;

  return (
    <section id="recognition" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Project D • Service Recognition Case Study</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tenant Satisfaction & Maintenance Excellence
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Factual case summary of internal leadership recognition following documented five-star resident feedback for high-urgency maintenance dispatch and customer service.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Documented 5.0 / 5.0 Rating</span>
          </div>
        </div>

        {/* Featured Recognition Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left 4 Columns: Badge & Score Graphic */}
              <div className="lg:col-span-4 bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 text-white rounded-2xl p-8 text-center flex flex-col items-center justify-center border border-slate-800 shadow-md">
                
                {/* 5-Star Rating Display */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  5.0 / 5.0
                </div>

                <div className="text-sm font-semibold text-amber-300 mt-2">
                  Top-Tier Tenant Feedback
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 w-full text-xs text-slate-400 space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Category:</span>
                    <strong className="text-white">Maintenance Ops</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Recognition:</span>
                    <strong className="text-emerald-400">Internal Team Commendation</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Resolution:</span>
                    <strong className="text-white">Prompt Closure</strong>
                  </div>
                </div>

              </div>

              {/* Right 8 Columns: Factual Case Narrative & Privacy Protection */}
              <div className="lg:col-span-8 space-y-6">
                
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                    Recognition Overview
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                    {tenantSatisfaction.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3">
                    {tenantSatisfaction.context}
                  </p>
                </div>

                {/* 4 Execution Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {tenantSatisfaction.highlights.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Strict privacy and non-disclosure banner */}
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
                  <Lock className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Strict Privacy & Verification Protocol:</strong> {tenantSatisfaction.privacyNotice} Fictionalized representation of service methodology without disclosing confidential client contracts or private tenant records.
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
