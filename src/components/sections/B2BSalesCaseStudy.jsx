import React, { useState } from 'react';
import { 
  PhoneOutgoing, 
  Target, 
  MessageSquare, 
  CheckCircle2, 
  HelpCircle, 
  TrendingUp, 
  CalendarCheck, 
  Building2,
  AlertCircle,
  ShieldAlert
} from 'lucide-react';
import { operationsData } from '../../data/operationsData';
import DemoDisclaimer from '../common/DemoDisclaimer';

export default function B2BSalesCaseStudy() {
  const [selectedObjectionIndex, setSelectedObjectionIndex] = useState(0);
  const { b2bSalesCaseStudy } = operationsData;

  return (
    <section id="sales-methodology" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <PhoneOutgoing className="w-3.5 h-3.5" />
              <span>Project C • Outbound Methodology & Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              B2B Cold Calling, Objection Handling & Appointment Setting
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Refined over 2.5 years at <strong className="text-slate-900 font-semibold">Bryan Squad</strong> conducting outbound prospecting across the United States and Canada. High-touch discovery, pattern interruption, and strict BANT qualification.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">
            <Building2 className="w-4 h-4 text-purple-600" />
            <span>Bryan Squad • 2.5 Years Verified Experience</span>
          </div>
        </div>

        {/* 4 Pillars of Outbound Sales Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {b2bSalesCaseStudy.corePillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-subtle hover:shadow-card transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2-Column Deep Dive: Objection Handling Framework & Illustrative Funnel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 Columns: Objection Handling Interactive Lab */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">
                  Interactive Framework
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Live Objection-Handling Simulator
                </h3>
              </div>
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </div>

            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Select a frequent corporate gatekeeper objection below to examine the tactical psychology and response script used to preserve prospect engagement:
            </p>

            {/* Objection Selection Tabs */}
            <div className="space-y-2 mb-6">
              {b2bSalesCaseStudy.objectionFramework.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedObjectionIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs font-semibold flex items-center justify-between ${
                    selectedObjectionIndex === idx
                      ? 'bg-purple-50/90 border-purple-400 text-purple-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="truncate">{item.objection}</span>
                  <span className="text-[10px] uppercase font-bold text-purple-600 flex-shrink-0 ml-2">
                    {selectedObjectionIndex === idx ? 'Inspecting' : 'Select'}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Objection Strategic Playbook */}
            <div className="bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 mb-2 uppercase tracking-wide">
                <Target className="w-4 h-4" />
                <span>Tactical Response Script & Strategy</span>
              </div>
              <blockquote className="text-sm font-medium text-white italic border-l-2 border-purple-500 pl-3 my-3 leading-relaxed">
                {b2bSalesCaseStudy.objectionFramework[selectedObjectionIndex].responseStrategy}
              </blockquote>
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 flex items-center justify-between">
                <span>Objective: Soft pivot to low-commitment discovery call</span>
                <span className="text-emerald-400 font-semibold">BANT Gate Approved</span>
              </div>
            </div>

          </div>

          {/* Right 5 Columns: Illustrative Funnel Architecture */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                  Illustrative Funnel
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Outbound Conversion Flow
                </h3>
              </div>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>

            {/* Crucial required disclaimer notice */}
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-800 leading-tight mb-5 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Illustrative figures:</strong> The funnel metrics below represent a standard illustrative outbound sales model for portfolio demonstration and are not presented as audited personal claims.
              </span>
            </div>

            {/* Funnel Stages Stack */}
            <div className="space-y-3">
              {b2bSalesCaseStudy.illustrativeFunnel.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      {metric.label}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {metric.note}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-purple-700 block">
                      {metric.value}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      Sample Target
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>Duration at Bryan Squad: <strong>2.5 Years</strong></span>
              <span className="text-purple-600 font-semibold">North American B2B</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
