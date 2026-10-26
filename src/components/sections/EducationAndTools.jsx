import React from 'react';
import { 
  GraduationCap, 
  Wrench, 
  FileSpreadsheet, 
  PhoneCall, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Building,
  Terminal,
  Cpu
} from 'lucide-react';
import { profileData } from '../../data/profileData';

const toolCategories = [
  {
    category: "Property & Work-Order Portals",
    icon: Building,
    description: "Dispatch systems, contractor tracking boards, and maintenance request logging.",
    tools: ["Work-Order Dispatch Systems", "Vendor Portals", "Maintenance Ticket Trackers", "SLA Monitoring Boards"]
  },
  {
    category: "Commercial & Data Analysis",
    icon: FileSpreadsheet,
    description: "Spreadsheet modeling, line-item pricing audits, and operational variance reporting.",
    tools: ["Advanced Excel & Google Sheets", "Cost Savings Formulas", "Variance Analysis Logs", "Operational KPI Dashboards"]
  },
  {
    category: "Outbound & B2B Communication",
    icon: PhoneCall,
    description: "High-volume business calling, email correspondence, and multi-channel follow-up.",
    tools: ["VoIP & Dialer Systems", "Cold Outreach Cadences", "CRM Pipeline Tracking", "Appointment Scheduling Tools"]
  },
  {
    category: "Direct Resident & Team Collaboration",
    icon: MessageSquare,
    description: "Cross-timezone client updates, resident maintenance coordination, and team syncs.",
    tools: ["WhatsApp Business", "Slack & Asana", "Google Workspace", "Tenant Notice Portals"]
  }
];

export default function EducationAndTools() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Operational Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education & Operational Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A solid academic foundation in English studies complemented by practical mastery of vendor dispatch portals, analytical spreadsheets, and outbound B2B communication tools.
          </p>
        </div>

        {/* 2-Column Grid: Education Box & Systems Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left 4 Columns: Verified Education Card */}
          <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-7 border border-slate-200/90 shadow-subtle space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                  Higher Education
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Academic Studies
                </h3>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs text-slate-400 font-medium">Institution</div>
              <div className="text-sm font-bold text-slate-900 leading-tight">
                {profileData.education.institution}
              </div>
              
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Field of Study:</span>
                <span className="font-semibold text-blue-700">{profileData.education.field}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Studying English provided advanced fluency in professional syntax, cross-cultural business negotiation, and written communication essential for working with North American clients and US contractors.
            </p>

            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-[11px] text-emerald-800 flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Strict compliance: Factual verification without unconfirmed credential claims.</span>
            </div>
          </div>

          {/* Right 8 Columns: Tooling & Systems Grid */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                <span>Workflow Software & Core Competency Stack</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium">Hands-On Experience</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {toolCategories.map((cat, idx) => {
                const CategoryIcon = cat.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:shadow-subtle transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
                        <CategoryIcon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">
                        {cat.category}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {cat.tools.map((t, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Proficiency tags */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-700 block mb-2.5">
                Core Competencies & Operational Tags:
              </span>
              <div className="flex flex-wrap gap-2">
                {profileData.toolsAndSystems.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{item.name}</span>
                    <span className="text-[10px] text-slate-400">({item.level})</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
