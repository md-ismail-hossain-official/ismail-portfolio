import React, { useState } from 'react';
import { 
  GitMerge, 
  Search, 
  ShieldCheck, 
  FileCheck, 
  Send, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { operationsData } from '../../data/operationsData';
import DemoDisclaimer from '../common/DemoDisclaimer';

const iconMap = {
  Search,
  ShieldCheck,
  FileCheck,
  Send,
  DollarSign,
  Clock,
  CheckCircle
};

export default function VendorLifecycle() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = operationsData.vendorLifecycle[activeStageIndex];
  const IconComponent = iconMap[currentStage.iconName] || GitMerge;

  return (
    <section id="vendor-lifecycle" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <GitMerge className="w-3.5 h-3.5" />
              <span>Project B • Interactive Operations Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              7-Stage US Vendor Lifecycle Management
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Click any stage below to inspect the standard operating procedure (SOP) used to discover, evaluate, negotiate, and audit field contractors across the United States.
            </p>
          </div>

          <DemoDisclaimer />
        </div>

        {/* 7-Stage Horizontal Stepper (Scrollable on Mobile) */}
        <div className="mb-10 overflow-x-auto pb-4">
          <div className="flex items-center gap-2 min-w-[750px]">
            {operationsData.vendorLifecycle.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              const StageIcon = iconMap[stage.iconName] || GitMerge;

              return (
                <button
                  key={stage.stage}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`flex-1 p-3 rounded-xl border text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-[1.02]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                      Stage 0{stage.stage}
                    </span>
                    <StageIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <div className="text-xs font-bold truncate">
                    {stage.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage In-Depth Inspector Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 5 Columns: Stage Badge & Summary */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
                <span>Stage 0{currentStage.stage} of 07</span>
                <span>•</span>
                <span>Standard Operating Procedure</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {currentStage.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    US Property Maintenance Protocol
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed pt-2">
                {currentStage.summary}
              </p>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 pt-4">
                <button
                  onClick={() => setActiveStageIndex(Math.max(0, activeStageIndex - 1))}
                  disabled={activeStageIndex === 0}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  &larr; Previous Stage
                </button>
                <button
                  onClick={() => setActiveStageIndex(Math.min(operationsData.vendorLifecycle.length - 1, activeStageIndex + 1))}
                  disabled={activeStageIndex === operationsData.vendorLifecycle.length - 1}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next Stage &rarr;
                </button>
              </div>
            </div>

            {/* Right 7 Columns: Action Checklist & Execution Points */}
            <div className="lg:col-span-7 bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center justify-between">
                <span>Operational Execution Checklist</span>
                <span className="text-blue-600 font-mono text-[11px]">SOP AUDIT POINTS</span>
              </h4>

              <div className="space-y-3.5">
                {currentStage.details.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Objective: Complete compliance before ticket handover</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  Verified SLA Guard
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
