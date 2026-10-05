import React from 'react';
import { Eye, ShieldCheck, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ReviewerGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <ScrollReveal variant="3d" direction="down" className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4 border border-sky-200">
            <Eye className="h-3 w-3" />
            <span>Peer Review Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-2 tracking-tight">
            Reviewer <span className="text-sky-500">Guidelines</span>
          </h1>
        </ScrollReveal>

        <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-lg sm:shadow-xl shadow-slate-200/50 p-5 sm:p-8 md:p-12 border border-slate-50">

          {/* Reviewer Responsibilities */}
          <div className="mb-4 sm:mb-8">
            <ScrollReveal variant="3d" direction="up" className="group flex items-center space-x-3 sm:space-x-4 mb-6">
              <div className="p-2 sm:p-2.5 bg-sky-500 rounded-xl shadow-md text-white flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">Reviewers' Responsibilities</h2>
            </ScrollReveal>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Confidentiality",
                  desc: "Reviewers must treat manuscripts as confidential and not share or discuss them with others unless authorized by the editor."
                },
                {
                  title: "Acknowledgment of Sources",
                  desc: "Reviewers should identify relevant published work that the authors have not cited and should alert the authors if similar work has been reported elsewhere."
                },
                {
                  title: "Standards of Objectivity",
                  desc: "Reviews should be objective and devoid of personal criticism. Reviewers should present their opinions clearly, with supporting evidence."
                },
                {
                  title: "Promptness",
                  desc: "Reviewers who feel unqualified to review a manuscript or unable to do so promptly should notify the editor and excuse themselves from the process."
                },
                {
                  title: "Disclosure and Conflict of Interest",
                  desc: "Unpublished materials from submitted manuscripts must not be used in a reviewer’s own research without the author’s explicit consent. Confidential information gained through peer review must not be used for personal benefit."
                }
              ].map((item, index) => (
                <ScrollReveal
                  key={index}
                  variant="3d"
                  direction="up"
                  delay={index * 90}
                >
                  <div className="group p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden flex items-start space-x-3 sm:space-x-4 md:hover:-translate-y-1 md:hover:border-sky-300 md:hover:bg-white md:hover:shadow-md transition-all duration-300 cursor-default sm:cursor-pointer">
                    <div className="bg-sky-100 text-sky-600 rounded-lg p-1.5 sm:p-2 mt-0.5 flex-shrink-0 group-hover:bg-sky-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5"/>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewerGuidelines;