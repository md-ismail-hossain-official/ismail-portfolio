import React from 'react';
import { 
  Users, 
  DollarSign, 
  Send, 
  AlertCircle, 
  HeartHandshake, 
  FileText, 
  BarChart3, 
  PhoneCall, 
  CheckCircle2, 
  Wrench,
  ShieldCheck
} from 'lucide-react';
import { profileData } from '../../data/profileData';

const expertiseItems = [
  {
    icon: Users,
    title: "US Vendor Sourcing & Vetting",
    category: "Vendor Relations",
    description: "Proactively locating, screening, and evaluating licensed trade contractors across US municipalities. Checking general liability coverage, trade certifications, and service references.",
    badge: "Core Specialty",
    accent: "blue"
  },
  {
    icon: DollarSign,
    title: "Commercial Pricing Negotiation",
    category: "Cost Containment",
    description: "Line-by-line quote breakdown and counter-negotiation against regional labor indices. Eliminating contractor scope-creep and securing favorable rate commitments without compromising quality.",
    badge: "Cost Efficiency",
    accent: "emerald"
  },
  {
    icon: Send,
    title: "Work-Order Dispatch & Logistics",
    category: "Dispatch",
    description: "Routing service calls (HVAC, plumbing, electrical, turnovers) according to priority level, proximity, and specialty. Managing arrival windows and entry authorizations.",
    badge: "Operations",
    accent: "indigo"
  },
  {
    icon: AlertCircle,
    title: "Overdue Work-Order Escalation",
    category: "SLA Management",
    description: "Rigorous follow-up on stalled, delayed, or unresolved tickets. Direct outreach to trade technicians to diagnose blockers, reset expectations, and restore SLA compliance.",
    badge: "Critical Path",
    accent: "amber"
  },
  {
    icon: HeartHandshake,
    title: "Tenant Maintenance Communication",
    category: "Tenant Relations",
    description: "Empathetic, clear communication with residents experiencing maintenance disruptions. Managing scheduling access, troubleshooting initial symptoms, and confirming post-repair satisfaction.",
    badge: "Customer Care",
    accent: "purple"
  },
  {
    icon: FileText,
    title: "Client & Property Manager Reporting",
    category: "Stakeholder Management",
    description: "Keeping institutional property managers and offshore stakeholders informed with transparent, timestamped project logs, photographic proof, and expense reconciliation.",
    badge: "Communication",
    accent: "blue"
  },
  {
    icon: BarChart3,
    title: "Operational Data & Variance Analysis",
    category: "Analytics",
    description: "Compiling and analyzing throughput metrics, cost variances, turnaround times, and contractor reliability scores to drive process optimizations across cycles.",
    badge: "Data Reporting",
    accent: "slate"
  },
  {
    icon: PhoneCall,
    title: "B2B Outbound Sales & Appointment Setting",
    category: "Sales Background",
    description: "2.5 years of disciplined cold calling for North American B2B targets at Bryan Squad. Pattern interruptions, BANT qualification, and strategic objection handling.",
    badge: "2.5 Yrs Bryan Squad",
    accent: "rose"
  }
];

export default function CoreExpertise() {
  const getAccentClasses = (accent) => {
    switch (accent) {
      case 'emerald':
        return {
          iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          border: 'hover:border-emerald-300'
        };
      case 'amber':
        return {
          iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
          badge: 'bg-amber-50 text-amber-700 border-amber-200',
          border: 'hover:border-amber-300'
        };
      case 'purple':
        return {
          iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
          badge: 'bg-purple-50 text-purple-700 border-purple-200',
          border: 'hover:border-purple-300'
        };
      case 'rose':
        return {
          iconBg: 'bg-rose-50 text-rose-600 border-rose-200',
          badge: 'bg-rose-50 text-rose-700 border-rose-200',
          border: 'hover:border-rose-300'
        };
      case 'indigo':
        return {
          iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
          badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          border: 'hover:border-indigo-300'
        };
      default:
        return {
          iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
          badge: 'bg-blue-50 text-blue-700 border-blue-200',
          border: 'hover:border-blue-300'
        };
    }
  };

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Operational Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Core Competencies & Responsibilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Proven execution across high-touch property maintenance logistics, commercial contractor negotiation, and disciplined business communications.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => {
            const styles = getAccentClasses(item.accent);
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border border-slate-200 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between ${styles.border}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${styles.iconBg}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${styles.badge}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>{item.category}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
