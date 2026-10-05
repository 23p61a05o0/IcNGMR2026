import React from 'react';
import { Scale, Edit3, Shield } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const EditorGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <ScrollReveal variant="3d" direction="down" className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4 border border-sky-200">
            <Scale className="h-3 w-3" />
            <span>Editorial Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-2 tracking-tight">
            Editor <span className="text-sky-500">Guidelines</span>
          </h1>
        </ScrollReveal>

        <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-lg sm:shadow-xl shadow-slate-200/50 p-5 sm:p-8 md:p-12 border border-slate-50">

          {/* Editorial Responsibilities */}
          <div className="mb-6 sm:mb-12">
            <ScrollReveal variant="3d" direction="up" className="group flex items-center space-x-3 sm:space-x-4 mb-6">
              <div className="p-2 sm:p-2.5 bg-sky-500 rounded-xl shadow-md text-white flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <Edit3 className="h-5 w-5" />
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">Editors' Responsibilities</h2>
            </ScrollReveal>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {[
                {
                  title: "Publication Decisions",
                  desc: "The editor is responsible for deciding which articles to publish in the conference proceedings. This decision should be guided by the validity and relevance of the work for the scientific community."
                },
                {
                  title: "Fair Play",
                  desc: "Manuscripts must be evaluated solely based on their intellectual content, without regard to the authors’ race, gender, sexual orientation, religious belief, ethnicity, citizenship, or political affiliation."
                },
                {
                  title: "Confidentiality",
                  desc: "The editor and editorial staff must not disclose information about a manuscript to anyone other than the corresponding author, reviewers, potential reviewers, or relevant editorial advisors."
                },
                {
                  title: "Disclosure and Conflicts of Interest",
                  desc: "Unpublished material disclosed in a submitted manuscript must not be used in the editor’s research without the author’s written consent. Privileged information obtained through peer review must be kept confidential."
                }
              ].map((item, index) => (
                <ScrollReveal
                  key={index}
                  variant="3d"
                  direction="up"
                  delay={index * 100}
                >
                  <div className="group p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm md:hover:-translate-y-1 md:hover:border-sky-300 md:hover:bg-white md:hover:shadow-md transition-all duration-300 cursor-default sm:cursor-pointer">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 flex items-center group-hover:text-sky-600 transition-colors">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed ml-4 sm:ml-5">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal variant="3d" direction="up" delay={450}>
              <div className="group bg-sky-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-sky-100 flex items-start space-x-3 sm:space-x-4 md:hover:border-sky-300 md:hover:shadow-md transition-all">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600 flex-shrink-0 mt-0.5 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                <p className="text-slate-700 text-xs sm:text-sm md:text-base font-bold leading-relaxed">
                  By adhering to these ethical guidelines, ICNGMR 2026 seeks to uphold the integrity and quality of its conference proceedings, fostering a culture of trust, respect, and academic excellence.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorGuidelines;