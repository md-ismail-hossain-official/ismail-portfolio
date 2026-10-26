import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  ExternalLink, 
  MessageCircle, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  Globe, 
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { profileData } from '../../data/profileData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('Operations / Vendor Management Inquiry');
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
    subject + (senderOrg ? ` - ${senderOrg}` : '')
  )}&body=${encodeURIComponent(
    `Hello Ismail,\n\n${message || 'I would like to discuss potential vendor management and business operations opportunities.'}\n\nBest regards,\n${senderName || 'Prospective Client / Partner'}`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication & Hiring Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect for US Operations & Vendor Management
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you need a dedicated Vendor Manager for US property maintenance or want to explore remote operational support, reach out directly through any of the channels below.
          </p>
        </div>

        {/* 2-Column Main Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left 5 Columns: Verified Contact Channels & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy Helper */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-subtle">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Primary Email
                </span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                  Fastest Response
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-500 block">Direct Address</span>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors block truncate"
                  >
                    {profileData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open Client</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Direct Card */}
            <a
              href={profileData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct message on WhatsApp (opens in new tab)"
              className="group p-6 bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:border-emerald-300 hover:shadow-card transition-all block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Instant Messaging
                </span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                  WhatsApp Direct
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">WhatsApp Number</span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {profileData.contact.whatsapp}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors ml-auto" />
              </div>
            </a>

            {/* LinkedIn & Upwork Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn Profile (opens in new tab)"
                className="group p-5 bg-white rounded-xl border border-slate-200 hover:border-blue-300 shadow-2xs transition-all block"
              >
                <div className="flex items-center justify-between mb-2">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  LinkedIn Profile
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Professional Network
                </div>
              </a>

              <a
                href={profileData.contact.upwork}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Upwork Freelancer Profile (opens in new tab)"
                className="group p-5 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 shadow-2xs transition-all block"
              >
                <div className="flex items-center justify-between mb-2">
                  <Globe className="w-5 h-5 text-emerald-600" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Upwork Profile
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Direct Contracting
                </div>
              </a>
            </div>

            {/* Timezone & Availability Badge */}
            <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Operating hours aligned to <strong>US Timezones</strong> (EST / CST / PST).</span>
              </div>
            </div>

          </div>

          {/* Right 7 Columns: Interactive Email Composer (No Backend Required) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                Quick Message Builder
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Draft an Immediate Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your notes below to automatically format a pre-filled email to Ismail with zero waiting or third-party server routing.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoUrl;
              }}
              className="space-y-4 text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder="e.g. Acme Property Management"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="US Vendor Management Contract">US Vendor Management Contract</option>
                  <option value="Work-Order Dispatch Coordination">Work-Order Dispatch Coordination</option>
                  <option value="B2B Sales / Appointment Setting Project">B2B Sales / Appointment Setting Project</option>
                  <option value="General Professional Discussion">General Professional Discussion</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Message / Scope Requirements
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details on your property maintenance portfolio, vendor requirements, or project scope..."
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Pre-Filled Email to Ismail</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero spam, no credentials stored, direct mail client integration.</span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
