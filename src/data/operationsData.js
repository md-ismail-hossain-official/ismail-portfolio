export const operationsData = {
  disclaimer: "Demonstration interface — sample data for portfolio purposes.",
  
  // Configurable operational snapshot models
  simulationScenarios: {
    growthModel: {
      id: "growthModel",
      label: "Operational Ramp-Up (Sample Model)",
      description: "Simulated demonstration showing operational scaling across consecutive tracking cycles.",
      month1: {
        cycle: "Cycle 1 (Baseline)",
        workOrders: 4,
        marginPct: 8.4,
        avgCompletionHours: 42,
        onTimeRate: "88%"
      },
      month2: {
        cycle: "Cycle 2 (Optimized)",
        workOrders: 23,
        marginPct: 28.6,
        avgCompletionHours: 26,
        onTimeRate: "96%"
      },
      // Note: Calculated as 20.2 percentage points (NOT described as a percentage increase)
      marginDifferencePoints: "+20.2 percentage points",
      volumeDifference: "+19 work orders managed",
      statusNote: "Simulated scenario for operational workflow demonstration only."
    },
    steadyStateModel: {
      id: "steadyStateModel",
      label: "Steady-State Maintenance (Sample Model)",
      description: "Standard ongoing US property maintenance portfolio distribution.",
      month1: {
        cycle: "Cycle A (Regular)",
        workOrders: 18,
        marginPct: 22.0,
        avgCompletionHours: 30,
        onTimeRate: "92%"
      },
      month2: {
        cycle: "Cycle B (High Volume)",
        workOrders: 31,
        marginPct: 25.5,
        avgCompletionHours: 27,
        onTimeRate: "95%"
      },
      marginDifferencePoints: "+3.5 percentage points",
      volumeDifference: "+13 work orders managed",
      statusNote: "Simulated scenario for operational workflow demonstration only."
    }
  },

  // Simulated Work-Order Database for the interactive dashboard
  sampleWorkOrders: [
    {
      id: "WO-8841",
      trade: "HVAC Repair",
      location: "Dallas-Fort Worth, TX",
      vendor: "Apex Climate Systems (Simulated)",
      status: "In Progress",
      priority: "High",
      budget: "$680",
      negotiatedCost: "$575",
      savings: "$105",
      eta: "Today, 3:00 PM CST",
      overdueRisk: "Low",
      scopeNotes: "Compressor diagnostic and capacitor replacement on primary unit."
    },
    {
      id: "WO-8842",
      trade: "Emergency Plumbing",
      location: "Atlanta Metro, GA",
      vendor: "MetroFlow Solutions (Simulated)",
      status: "Dispatched",
      priority: "Critical",
      budget: "$450",
      negotiatedCost: "$390",
      savings: "$60",
      eta: "Today, 5:30 PM EST",
      overdueRisk: "Medium",
      scopeNotes: "Main line cleanout and leak mitigation under second-floor bathroom."
    },
    {
      id: "WO-8843",
      trade: "Turnover Scope / Paint",
      location: "Columbus, OH",
      vendor: "Buckeye Turnkey Services (Simulated)",
      status: "Follow-up Required",
      priority: "Medium",
      budget: "$1,400",
      negotiatedCost: "$1,180",
      savings: "$220",
      eta: "Pending Crew Schedule",
      overdueRisk: "High",
      scopeNotes: "Overdue verification: drywall patch review and color matching sign-off."
    },
    {
      id: "WO-8844",
      trade: "Electrical Service",
      location: "Tampa Bay, FL",
      vendor: "Suncoast Electric Crew (Simulated)",
      status: "Completed",
      priority: "Medium",
      budget: "$320",
      negotiatedCost: "$280",
      savings: "$40",
      eta: "Inspected & Closed",
      overdueRisk: "None",
      scopeNotes: "Breaker panel replacement and GFCI verification in kitchen/utility."
    },
    {
      id: "WO-8845",
      trade: "Roofing Tarp & Repair",
      location: "Charlotte, NC",
      vendor: "Carolina Shield Roofing (Simulated)",
      status: "Completed",
      priority: "High",
      budget: "$950",
      negotiatedCost: "$820",
      savings: "$130",
      eta: "Work Completed",
      overdueRisk: "None",
      scopeNotes: "Emergency tarp deployment and subsequent shingle patch after wind damage."
    },
    {
      id: "WO-8846",
      trade: "Locksmith / Access",
      location: "Indianapolis, IN",
      vendor: "Midwest Key & Security (Simulated)",
      status: "Pending Invoice",
      priority: "Standard",
      budget: "$180",
      negotiatedCost: "$150",
      savings: "$30",
      eta: "Work Completed",
      overdueRisk: "None",
      scopeNotes: "Smart lock installation and rekey for incoming tenant move-in."
    }
  ],

  // 7-Stage Vendor Lifecycle Management Workflow
  vendorLifecycle: [
    {
      stage: 1,
      title: "Vendor Sourcing",
      iconName: "Search",
      summary: "Strategic discovery of licensed regional service providers across targeted US geographic zones.",
      details: [
        "Leverage digital contractor directories, local trade networks, and direct outbound discovery.",
        "Screen for geographic proximity to target property clusters to minimize trip charges.",
        "Target essential trades: HVAC, plumbing, electrical, turnover cleaning, and structural repairs."
      ]
    },
    {
      stage: 2,
      title: "Evaluation & Compliance",
      iconName: "ShieldCheck",
      summary: "Multi-point vetting of insurance coverage, licenses, references, and operational capacity.",
      details: [
        "Verify General Liability, Workers' Comp, and appropriate state contractor licensing.",
        "Check background references and previous turnaround dependability.",
        "Evaluate response readiness for urgent and emergency dispatch scenarios."
      ]
    },
    {
      stage: 3,
      title: "Onboarding & Terms",
      iconName: "FileCheck",
      summary: "Standardizing service agreements, SLA expectations, and itemized baseline pricing schedules.",
      details: [
        "Establish standardized rate agreements for standard labor and emergency callouts.",
        "Set strict expectations for photographic evidence (Before / During / After completion).",
        "Align on payment terms and portal check-in/check-out guidelines."
      ]
    },
    {
      stage: 4,
      title: "Work-Order Assignment",
      iconName: "Send",
      summary: "Precision ticket dispatch based on contractor trade rating, location, and immediate availability.",
      details: [
        "Match ticket urgency (Emergency vs. Standard vs. Turnover) to appropriate vendor tiers.",
        "Provide thorough work-order scopes, tenant contact rules, and arrival confirmation windows.",
        "Coordinate tenant permission-to-enter protocols to eliminate wasted trips."
      ]
    },
    {
      stage: 5,
      title: "Pricing Negotiation",
      iconName: "DollarSign",
      summary: "Detailed scope verification and competitive price alignment prior to work authorization.",
      details: [
        "Review itemized contractor estimates against regional material and labor benchmarks.",
        "Negotiate bundled rates for multi-unit properties and repetitive service calls.",
        "Protect client operational budgets while ensuring fair contractor compensation."
      ]
    },
    {
      stage: 6,
      title: "Progress Follow-Up & Overdue Resolution",
      iconName: "Clock",
      summary: "Continuous milestone monitoring and rapid intervention for stalled or overdue work orders.",
      details: [
        "Automated and manual cadence checks at 24h, 48h, and 72h ticket milestones.",
        "Immediate direct phone outreach to vendors for tickets nearing SLA thresholds.",
        "Proactively communicate delays to property managers before tenants escalate."
      ]
    },
    {
      stage: 7,
      title: "Completion Tracking & Quality Sign-Off",
      iconName: "CheckCircle",
      summary: "Rigorous photographic proof inspection, invoice reconciliation, and tenant satisfaction confirmation.",
      details: [
        "Audit timestamped photo verification showing completed repair scope.",
        "Conduct post-service follow-up check to ensure resident satisfaction.",
        "Reconcile final invoice against negotiated quote before approving for client payment."
      ]
    }
  ],

  // B2B Sales Case Study (Bryan Squad - 2.5 Years Experience)
  b2bSalesCaseStudy: {
    company: "Bryan Squad",
    duration: "2.5 Years Experience",
    targetMarket: "North American B2B Enterprises & Corporate Decision Makers",
    corePillars: [
      {
        title: "Cold Calling & Outbound Cadence",
        description: "Executing structured daily outreach campaigns targeting C-level executives, operations heads, and facility managers across the US and Canada."
      },
      {
        title: "Pattern Interruption & Value Framing",
        description: "Engaging prospects in the critical first 15 seconds by addressing specific operational bottlenecks rather than reciting scripted sales pitches."
      },
      {
        title: "Rigorous Objection Handling",
        description: "De-escalating resistance around existing vendor contracts, timing constraints, and budget gates to uncover true buying criteria."
      },
      {
        title: "Qualified Appointment Setting",
        description: "Qualifying leads against BANT (Budget, Authority, Need, Timeline) criteria before scheduling high-converting calendar appointments."
      }
    ],
    objectionFramework: [
      {
        objection: "\"We already work with an existing provider.\"",
        responseStrategy: "Acknowledge their established partnership and position the conversation as a risk-free benchmark to compare SLA response times and pricing transparency."
      },
      {
        objection: "\"Just send me an email with your information.\"",
        responseStrategy: "Agree to send relevant materials, but clarify one tailored question first to ensure the documentation matches their exact property scale."
      },
      {
        objection: "\"We don't have the budget for changes right now.\"",
        responseStrategy: "Clarify that the goal is not immediate spend, but exploring operational cost containment and pricing efficiency for upcoming contract cycles."
      }
    ],
    // Strictly labeled illustrative figures
    illustrativeFunnel: {
      disclaimer: "Illustrative operational cadence for demonstration purposes (not audited individual performance).",
      metrics: [
        { label: "Outbound Dials", value: "100", note: "Daily Cadence Target (Illustrative)" },
        { label: "Meaningful Connects", value: "15 - 20", note: "Decision Maker Conversations" },
        { label: "Qualified Pipelines", value: "4 - 6", note: "Needs & Timeline Identified" },
        { label: "Booked Demos / Calls", value: "2 - 3", note: "Confirmed Executive Meetings" }
      ]
    }
  },

  // Tenant Satisfaction Recognition
  tenantSatisfaction: {
    title: "Tenant Satisfaction & Maintenance Excellence",
    badge: "Internal Team Recognition",
    rating: "5.0 / 5.0 Rating",
    category: "US Property Management Support",
    context: "Recognized internally by operational leadership for managing and resolving a high-priority resident maintenance request with prompt coordination, courteous communication, and diligent vendor follow-through.",
    highlights: [
      {
        label: "Rapid Initial Response",
        desc: "Tenant contacted within minutes of ticket receipt to confirm problem symptoms and establish expectations."
      },
      {
        label: "Vendor Dispatch Coordination",
        desc: "Expedited an authorized emergency technician with clear instructions and verified arrival window."
      },
      {
        label: "Proactive Status Updates",
        desc: "Kept the resident and property manager informed at every step until full repair resolution."
      },
      {
        label: "Internal Recognition",
        desc: "Commended by internal leadership following documented five-star tenant satisfaction feedback."
      }
    ],
    privacyNotice: "Factual representation of internal recognition. Tenant name, exact property address, and client identifiers are withheld to protect privacy."
  }
};
