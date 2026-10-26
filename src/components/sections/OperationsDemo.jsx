import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Filter, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  CheckCircle2, 
  AlertTriangle, 
  MapPin, 
  FileText, 
  Search,
  SlidersHorizontal,
  Info
} from 'lucide-react';
import { operationsData } from '../../data/operationsData';
import DemoDisclaimer from '../common/DemoDisclaimer';

export default function OperationsDemo() {
  const [selectedScenarioKey, setSelectedScenarioKey] = useState('growthModel');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(operationsData.sampleWorkOrders[0]);

  const activeScenario = operationsData.simulationScenarios[selectedScenarioKey];

  // Filtered sample tickets
  const filteredTickets = operationsData.sampleWorkOrders.filter(ticket => {
    const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
    const matchesSearch = ticket.trade.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ticket.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ticket.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'In Progress':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Dispatched':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Follow-up Required':
        return 'bg-amber-50 text-amber-700 border-amber-200 animate-pulse';
      case 'Pending Invoice':
        return 'bg-slate-100 text-slate-700 border-slate-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'bg-rose-100 text-rose-800 font-bold';
      case 'High':
        return 'bg-amber-100 text-amber-800 font-semibold';
      default:
        return 'bg-slate-100 text-slate-700 font-medium';
    }
  };

  return (
    <section id="operations-demo" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Interactive Operations Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simulated Vendor & Work-Order Operations Simulator
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Experience the control center interface demonstrating how US maintenance work orders are assigned, negotiated for cost reduction, and monitored through to completion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <DemoDisclaimer />
          </div>
        </div>

        {/* Dashboard Frame */}
        <div className="rounded-2xl border border-slate-200 bg-slate-900 shadow-2xl overflow-hidden text-slate-100">
          
          {/* Top Control Bar */}
          <div className="bg-slate-950 p-4 sm:p-5 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="ml-2 text-xs font-mono text-slate-400">
                OPS-PORTAL // SIMULATOR v2.4
              </span>
            </div>

            {/* Scenario Switcher */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <SlidersHorizontal className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-300">Model Dataset:</span>
              <select
                value={selectedScenarioKey}
                onChange={(e) => setSelectedScenarioKey(e.target.value)}
                className="bg-slate-800 text-xs text-white rounded-lg px-3 py-1.5 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Select simulation model"
              >
                <option value="growthModel">Model A: Scaling Cycle (Simulated Demo)</option>
                <option value="steadyStateModel">Model B: Steady-State Maintenance</option>
              </select>
            </div>

          </div>

          {/* KPI Metrics Row */}
          <div className="bg-slate-900/95 p-5 sm:p-6 border-b border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Metric 1: Cycle Comparison & Margin Difference */}
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/70">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Margin Differential</span>
                <span className="text-[10px] uppercase font-bold text-blue-400">Illustrative</span>
              </div>
              <div className="text-2xl font-black text-white mt-1">
                {activeScenario.marginDifferencePoints}
              </div>
              <div className="text-xs text-slate-300 mt-2 flex items-center justify-between">
                <span>{activeScenario.month1.cycle}: <strong className="text-slate-100">{activeScenario.month1.marginPct}%</strong></span>
                <span>&rarr;</span>
                <span>{activeScenario.month2.cycle}: <strong className="text-emerald-400">{activeScenario.month2.marginPct}%</strong></span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1 italic">
                *Stated as percentage-point delta across cycles
              </div>
            </div>

            {/* Metric 2: Work Orders Volume */}
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/70">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Throughput Scale</span>
                <span className="text-[10px] uppercase font-bold text-emerald-400">Volume</span>
              </div>
              <div className="text-2xl font-black text-white mt-1">
                {activeScenario.month2.workOrders} Orders
              </div>
              <div className="text-xs text-slate-300 mt-2">
                Baseline: {activeScenario.month1.workOrders} &rarr; Active: {activeScenario.month2.workOrders} ({activeScenario.volumeDifference})
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Sample operational workload allocation
              </div>
            </div>

            {/* Metric 3: Turnaround Efficiency */}
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/70">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Avg Resolution Time</span>
                <Clock className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-2xl font-black text-white mt-1">
                {activeScenario.month2.avgCompletionHours}h
              </div>
              <div className="text-xs text-slate-300 mt-2">
                Reduced from {activeScenario.month1.avgCompletionHours}h through active vendor follow-up
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Direct phone escalation protocol
              </div>
            </div>

            {/* Metric 4: On-Time SLA Rate */}
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/70">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>On-Time SLA Dispatch</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-2xl font-black text-emerald-400 mt-1">
                {activeScenario.month2.onTimeRate}
              </div>
              <div className="text-xs text-slate-300 mt-2">
                Prior cycle benchmark: {activeScenario.month1.onTimeRate}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Verified contractor arrival windows
              </div>
            </div>

          </div>

          {/* Interactive Workspace Split: Ticket Table & Inspector Drawer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left 7 Columns: Work-Order Table & Filters */}
            <div className="lg:col-span-7 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-800">
              
              {/* Filter controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search trade, location, or simulated vendor..."
                    className="w-full bg-slate-800/90 text-xs text-white pl-9 pr-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400"
                  />
                </div>

                <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                  {['All', 'In Progress', 'Dispatched', 'Follow-up Required', 'Completed'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setStatusFilter(tab)}
                      className={`text-[11px] px-2.5 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
                        statusFilter === tab 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tickets List */}
              <div className="space-y-2.5">
                {filteredTickets.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 text-xs">
                    No simulated work orders match your current filter.
                  </div>
                ) : (
                  filteredTickets.map((ticket) => {
                    const isSelected = selectedTicket.id === ticket.id;
                    return (
                      <div
                        key={ticket.id}
                        onClick={() => setSelectedTicket(ticket)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelectedTicket(ticket);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-pressed={isSelected}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-950/60 border-blue-500 shadow-md ring-1 ring-blue-500/50'
                            : 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-blue-400">
                              {ticket.id}
                            </span>
                            <span className="font-semibold text-xs text-white">
                              {ticket.trade}
                            </span>
                          </div>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getStatusBadge(ticket.status)}`}>
                            {ticket.status}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 gap-y-1">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            <span>{ticket.location}</span>
                          </div>
                          <div>
                            <span className="text-slate-400">Savings: </span>
                            <span className="font-bold text-emerald-400">{ticket.savings}</span>
                          </div>
                        </div>

                        <div className="mt-2 text-[11px] text-slate-400 truncate flex items-center justify-between">
                          <span>{ticket.vendor}</span>
                          <span className="text-slate-400">{ticket.eta}</span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Showing {filteredTickets.length} of {operationsData.sampleWorkOrders.length} sample records</span>
                <span className="italic">Click any record to inspect negotiation data</span>
              </div>

            </div>

            {/* Right 5 Columns: Work-Order Detail Inspector */}
            <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-950/60 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Selected Work Order</span>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{selectedTicket.id}</span>
                      <span className="text-xs text-blue-400 font-normal">({selectedTicket.trade})</span>
                    </h3>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full border ${getStatusBadge(selectedTicket.status)}`}>
                    {selectedTicket.status}
                  </span>
                </div>

                {/* Detail attributes */}
                <div className="space-y-4 text-xs">
                  
                  <div>
                    <label className="text-slate-400 text-[11px] block mb-1">Contractor Assignment (Simulated)</label>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-medium text-slate-200">
                      {selectedTicket.vendor}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-400 text-[11px] block mb-1">US Region</label>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-medium text-slate-200">
                        {selectedTicket.location}
                      </div>
                    </div>
                    <div>
                      <label className="text-slate-400 text-[11px] block mb-1">Priority Level</label>
                      <div className={`p-2.5 rounded-lg border text-center ${getPriorityBadge(selectedTicket.priority)}`}>
                        {selectedTicket.priority}
                      </div>
                    </div>
                  </div>

                  {/* Pricing Negotiation Breakdown */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-blue-500/30 space-y-2">
                    <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider flex items-center justify-between">
                      <span>Commercial Negotiation Audit</span>
                      <DollarSign className="w-3.5 h-3.5" />
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-slate-400">Initial Contractor Quote:</span>
                      <span className="text-slate-300 line-through">{selectedTicket.budget}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Negotiated Authorized Rate:</span>
                      <span className="text-white font-bold">{selectedTicket.negotiatedCost}</span>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-semibold">
                      <span className="text-emerald-400">Operational Savings Secured:</span>
                      <span className="text-emerald-400 text-sm">{selectedTicket.savings}</span>
                    </div>
                  </div>

                  {/* Operational Notes */}
                  <div>
                    <label className="text-slate-400 text-[11px] block mb-1">Work-Order Scope Notes</label>
                    <p className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs leading-relaxed">
                      {selectedTicket.scopeNotes}
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                    <span className="text-slate-400">Overdue Risk Assessment:</span>
                    <span className={`font-semibold ${
                      selectedTicket.overdueRisk === 'High' ? 'text-amber-400' : 
                      selectedTicket.overdueRisk === 'Medium' ? 'text-blue-400' : 'text-emerald-400'
                    }`}>
                      {selectedTicket.overdueRisk}
                    </span>
                  </div>

                </div>
              </div>

              {/* Bottom notice */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
                <Info className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>Simulated demonstration. Contractor names and addresses are illustrative.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
