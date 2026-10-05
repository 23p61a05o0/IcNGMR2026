import React from 'react';
import { FileText, Download, Info } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const AuthorGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <ScrollReveal variant="3d" direction="down" className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4 border border-sky-200">
            <FileText className="h-3 w-3" />
            <span>Manuscript Preparation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Author <span className="text-sky-500">Guidelines</span>
          </h1>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 p-5 sm:p-8 text-left md:hover:shadow-md transition-shadow">
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              At the International Conference on Next-Generation Machine learning and Reconfigurable intelligence (ICNGMR 2026), we are committed to upholding the highest standards of integrity and ethical conduct in the publication of our conference proceedings. We expect all authors, reviewers, and editors involved in our publication process to follow the ethical guidelines below, ensuring the credibility, reliability, and academic integrity of the work presented.
            </p>
          </div>
        </ScrollReveal>

        <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-lg sm:shadow-xl shadow-slate-200/50 p-5 sm:p-8 md:p-12 border border-slate-50">

          {/* Authors' Responsibilities summary */}
          <ScrollReveal variant="3d" direction="up" className="mb-8 sm:mb-12">
            <div className="group flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-2.5 bg-sky-500 rounded-xl shadow-md text-white flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <Info className="h-5 w-5" />
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">Authors' Responsibilities</h2>
            </div>

            <div className="bg-sky-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-sky-100 md:hover:border-sky-300 transition-colors">
              <p className="text-slate-700 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                The full paper must be submitted through the platform <strong>Microsoft Conference Management Tool Kit (CMT)</strong> and Email submissions are accepted by exception only. By submitting his paper electronically/or by email, each author confirms that he is aware of the Publication Ethic & Malpractice Statement and the Privacy Policy of the event. Authors are expected to have Scope, Novelty, Validity, data reported, analyzed, and interpreted correctly, Clarity, Compliance, and significant contribution in their articles and must meet the guidelines of format. <strong className="text-rose-600">The maximum number of pages is allowed only 5.</strong>
              </p>
            </div>
          </ScrollReveal>

          {/* Guidelines Grid */}
          <div className="mb-8 sm:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

              {[
                {
                  title: "Originality and Plagiarism",
                  desc: "Authors must ensure their work is entirely original, with proper citation for any sources or influences. Plagiarism in any form is unethical and unacceptable.",
                  highlight: "The maximum allowable AI plagiarism 0%."
                },
                {
                  title: "Acknowledgment of Sources",
                  desc: "Proper acknowledgment must be given for the work of others. Authors should cite all publications that have influenced the development of the reported study."
                },
                {
                  title: "Authorship of the Paper",
                  desc: "Authorship should be limited to those who have made significant contributions to the conception, design, execution, or interpretation of the study. All those who have contributed should be listed as co-authors."
                },
                {
                  title: "Disclosure and Conflicts of Interest",
                  desc: "Authors must disclose any financial or other substantive conflicts of interest that could influence the results or interpretation of their manuscript. All financial support sources should be disclosed."
                },
                {
                  title: "Data Access and Retention",
                  desc: "Authors should be prepared to provide raw data for editorial review and, where feasible, make it publicly accessible. Data should be retained for a reasonable period post-publication."
                },
                {
                  title: "Reporting Standards",
                  desc: "Authors should provide an accurate account of their research and an objective discussion of its significance. The data should be presented accurately with enough detail to allow replication."
                }
              ].map((item, index) => (
                <ScrollReveal
                  key={index}
                  variant="3d"
                  direction="up"
                  delay={index * 80}
                  className="h-full"
                >
                  <div className="group p-5 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 h-full md:hover:-translate-y-1.5 md:hover:border-sky-300 md:hover:bg-white md:hover:shadow-lg transition-all duration-300 cursor-default sm:cursor-pointer">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc} {item.highlight && <strong className="text-rose-600 block mt-1">{item.highlight}</strong>}
                    </p>
                  </div>
                </ScrollReveal>
              ))}

              <ScrollReveal variant="3d" direction="up" delay={500} className="col-span-1 md:col-span-2">
                <div className="group p-5 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 md:hover:-translate-y-1 md:hover:border-sky-300 md:hover:bg-white md:hover:shadow-lg transition-all duration-300 cursor-default sm:cursor-pointer">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    Multiple, Redundant, or Concurrent Publication
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Authors should not submit manuscripts describing essentially the same research to more than one journal or primary publication. Submitting the same manuscript to multiple outlets concurrently is unethical.
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* Download Buttons */}
          <ScrollReveal variant="3d" direction="up" className="pt-6 sm:pt-8 border-t border-slate-100 flex flex-col items-center">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-4 sm:mb-6">Download Templates</h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
              <button className="flex-1 max-w-full sm:max-w-[240px] flex items-center justify-center px-6 py-3.5 sm:py-4 bg-sky-500 text-white rounded-xl font-black text-xs sm:text-sm shadow-md md:hover:bg-sky-600 md:hover:-translate-y-1 md:hover:shadow-xl active:scale-95 transition-all">
                <Download className="h-4 w-4 mr-2" /> Word Template
              </button>
              <button className="flex-1 max-w-full sm:max-w-[240px] flex items-center justify-center px-6 py-3.5 sm:py-4 bg-slate-900 text-white rounded-xl font-black text-xs sm:text-sm shadow-md md:hover:bg-slate-800 md:hover:-translate-y-1 md:hover:shadow-xl active:scale-95 transition-all">
                <Download className="h-4 w-4 mr-2" /> LaTeX Template
              </button>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
};

export default AuthorGuidelines;