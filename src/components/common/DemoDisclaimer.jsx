import React from 'react';
import { Info } from 'lucide-react';

export default function DemoDisclaimer({ text = "Demonstration interface — sample data for portfolio purposes.", className = "" }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200/80 ${className}`}>
      <Info className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}
