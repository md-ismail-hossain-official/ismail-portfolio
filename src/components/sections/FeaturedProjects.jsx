import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  GitMerge, 
  PhoneOutgoing, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';
import DemoDisclaimer from '../common/DemoDisclaimer';

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 'dashboard',
      code: 'Project A',
      title: 'Vendor Operations Dashboard & Work-Order Control',
      badge: 'Interactive Dashboard Demo',
      badgeVariant: 'primary',
      category: 'Operations',
      icon: LayoutDashboard,
      description: 'A realistic, simulated operational control center displaying US work orders, SLA thresholds, status filters, contractor trade evaluations, and cost-savings variance.',
      highlights: [
        'Filterable tickets across HVAC, Plumbing, Roofing, and Turnover scopes',
        'Cost containment tracking: Negotiated quotes vs. initial estimates',
        'Configurable cycle comparison demonstrating operational scale'
      ],
      targetAnchor: '#operations-demo',
      ctaText: 'Launch Interactive Simulator',
      accentColor: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'lifecycle',
      code: 'Project B',
      title: '7-Stage US Vendor Lifecycle Management',
      badge: 'Interactive Workflow',
      badgeVariant: 'success',
      category: 'Strategy',
      icon: GitMerge,
      description: 'An interactive operational framework mapping contractor relations from sourcing and license verification through rate negotiation, follow-up, and photo inspection.',
      highlights: [
        'Vetting checklist: Insurance, licensing, and reference audits',
        'Direct pricing negotiation guidelines to safeguard client margin',
        'Systematic follow-up cadence for overdue and high-risk work orders'
      ],
      targetAnchor: '#vendor-lifecycle',
      ctaText: 'Explore Lifecycle Stages',
      accentColor: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'b2b-sales',
      code: 'Project C',
      title: 'B2B Outbound Sales & Appointment Setting',
      badge: 'Case Study • 2.5 Yrs',
      badgeVariant: 'purple',
      category: 'Sales',
      icon: PhoneOutgoing,
      description: 'Outbound sales methodology developed over 2.5 years at Bryan Squad for North American B2B targets, featuring objection-handling blueprints and illustrative call funnel dynamics.',
      highlights: [
        'Pattern interrupt cold call structure for senior decision-makers',
        'BANT qualification framework to maximize account executive conversion',
        'Battle-tested objection responses for contract and timing hesitations'
      ],
      targetAnchor: '#sales-methodology',
      ctaText: 'Review Sales Framework',
      accentColor: 'from-purple-600 to-pink-700'
    },
    {
      id: 'tenant-satisfaction',
      code: 'Project D',
      title: 'Tenant Satisfaction & Maintenance Excellence',
      badge: 'Internal Recognition',
      badgeVariant: 'warning',
      category: 'Service',
      icon: Star,
      description: 'Documented internal recognition following 5.0/5.0 resident feedback on urgent maintenance coordination, combining empathy, urgent contractor dispatch, and regular status updates.',
      highlights: [
        'Immediate resident contact to verify repair symptoms and reduce stress',
        'Expedited technician dispatch with verified time-window commitments',
        'Internal operational commendation for exemplary resident care'
      ],
      targetAnchor: '#recognition',
      ctaText: 'View Recognition Details',
      accentColor: 'from-amber-500 to-orange-600'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Demonstrated Project Portfolios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Case Studies & Operations Systems
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore four comprehensive domains spanning live simulated dashboards, vendor workflows, corporate B2B outbound execution, and tenant service standards.
            </p>
          </div>

          <DemoDisclaimer />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            All Work ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('operations')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'operations'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Operations & Control
          </button>
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'strategy'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Vendor Strategy
          </button>
          <button
            onClick={() => setActiveTab('sales')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'sales'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            B2B Sales
          </button>
          <button
            onClick={() => setActiveTab('service')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'service'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Tenant Recognition
          </button>
        </div>

        {/* 4 Polished Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Card Top Banner */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.accentColor} flex items-center justify-center text-white shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                          {project.code}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          {project.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-7 sm:px-8 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Category: <strong className="text-slate-700">{project.category}</strong>
                  </span>

                  <a
                    href={project.targetAnchor}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group/btn"
                  >
                    <span>{project.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
