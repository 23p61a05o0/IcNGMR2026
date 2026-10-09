import React from 'react';
import { Award, Cloud, FileCheck, Code2, ExternalLink, Heart, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

// Microsoft Logo component
const MicrosoftLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 23 23" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="10.8" height="10.8" fill="#F25022" />
    <rect x="12.2" width="10.8" height="10.8" fill="#7FBA00" />
    <rect y="12.2" width="10.8" height="10.8" fill="#00A4EF" />
    <rect x="12.2" y="12.2" width="10.8" height="10.8" fill="#FFB900" />
  </svg>
);

const CmtAck: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <ScrollReveal variant="3d" direction="down" className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-sky-100 rounded-full text-sky-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 border border-sky-200 shadow-sm">
            <Award className="h-3.5 w-3.5 text-sky-600" />
            <span>Official Conference Service Recognition</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-3 tracking-tight">
            CMT <span className="text-sky-500">Acknowledgment</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Acknowledging Microsoft for their generous support in enabling our peer-review and paper management ecosystem.
          </p>
        </ScrollReveal>

        {/* Primary Acknowledgment Statement Card */}
        <ScrollReveal variant="3d" direction="up" delay={100} className="mb-8 sm:mb-12">
          <div className="group bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-6 sm:p-10 md:p-14 border border-slate-100 relative overflow-hidden md:hover:shadow-2xl md:hover:shadow-sky-500/10 md:hover:border-sky-200 transition-all duration-500">
            {/* Background Decorative Cloud Watermark */}
            <div className="absolute top-0 right-0 p-8 sm:p-12 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-125 group-hover:-rotate-6 transition-all duration-700 pointer-events-none">
              <Cloud size={240} className="text-sky-600" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              {/* Partner Badge */}
              <div className="inline-flex items-center space-x-2.5 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200/80 mb-6 group-hover:border-sky-200 transition-colors">
                <MicrosoftLogo className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-black text-slate-800 tracking-wide">
                  Microsoft Conference Management Toolkit (CMT)
                </span>
              </div>

              {/* Exact Quotation Statement */}
              <div className="relative my-4 sm:my-6 px-2 sm:px-6">
                <span className="text-4xl sm:text-6xl text-sky-400 font-serif leading-none select-none block -mb-4 opacity-50">
                  “
                </span>
                <blockquote className="text-base sm:text-xl md:text-2xl font-bold text-slate-800 leading-relaxed md:leading-loose tracking-normal">
                  The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                </blockquote>
                <span className="text-4xl sm:text-6xl text-sky-400 font-serif leading-none select-none block -mt-4 opacity-50">
                  ”
                </span>
              </div>

              {/* Action / Verified Tag */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Complimentary Academic Sponsorship</span>
                </div>

                <a
                  href="https://cmt3.research.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-1.5 bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-500 hover:text-white rounded-full text-xs font-bold transition-all duration-300"
                >
                  <span>About Microsoft CMT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Highlighted Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Pillar 1: Peer-Review Workflow */}
          <ScrollReveal variant="3d" direction="up" delay={150} className="h-full">
            <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md sm:shadow-lg shadow-slate-200/50 h-full md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-sky-500/15 md:hover:border-sky-200 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center mb-5 text-sky-600 shadow-inner group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 group-hover:text-sky-600 transition-colors">
                  Peer-Review Management
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                  End-to-end management of academic submissions, double-blind peer review assignments, reviewer feedback, and camera-ready handling.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                Full Workflow Integrity
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 2: Microsoft Azure Cloud */}
          <ScrollReveal variant="3d" direction="up" delay={200} className="h-full">
            <div className="group bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden h-full shadow-lg md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-sky-500/20 transition-all duration-500 flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-700 pointer-events-none">
                <Cloud size={90} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center mb-5 text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Cloud className="h-6 w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-2.5 group-hover:text-sky-400 transition-colors">
                  Azure Cloud Infrastructure
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                  Microsoft fully bore all hosting expenses on Microsoft Azure, providing 24/7 high availability, scalable compute, and reliable data security.
                </p>
              </div>
              <div className="relative z-10 mt-4 pt-4 border-t border-slate-800 text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                100% Cloud Sponsored
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 3: Software Dev & Support */}
          <ScrollReveal variant="3d" direction="up" delay={250} className="h-full">
            <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md sm:shadow-lg shadow-slate-200/50 h-full md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-indigo-500/15 md:hover:border-indigo-200 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-5 text-indigo-600 shadow-inner group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
                  Engineering & Support
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                  Continuous platform updates, active engineering enhancements, and dependable administrative support provided at zero cost to the conference.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                Dedicated Software Support
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Closing Phrase */}
        <ScrollReveal variant="3d" direction="up" delay={300} className="mt-10 sm:mt-14 text-center">
          <div className="w-16 h-1 bg-slate-200 mx-auto mb-4 rounded-full" />
          <div className="inline-flex items-center space-x-2 text-rose-500 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
            <Heart className="w-4 h-4 fill-current" />
            <span>Gratitude to Microsoft Research & CMT</span>
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-400 italic">
            "Fostering Academic Research & Peer-Review Integrity."
          </p>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default CmtAck;
