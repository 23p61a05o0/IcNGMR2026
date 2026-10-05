import React from 'react';
import { Layers, FileText, Search, UserCheck, Activity, Key, CheckCircle, RefreshCcw, BookOpen, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ReviewProcess: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <ScrollReveal variant="3d" direction="down" className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4 border border-sky-200">
            <Layers className="h-3 w-3" />
            <span>Evaluation Framework</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Review <span className="text-sky-500">Process</span>
          </h1>
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 text-left md:hover:shadow-md transition-shadow">
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              The peer review process is a fundamental component of academic and professional conferences, ensuring the quality, relevance, and integrity of the submissions. It involves several stages, where expert reviewers assess the work against a variety of criteria. Below is a comprehensive overview of the process, highlighting the key aspects reviewers focus on during their evaluations:
            </p>
          </div>
        </ScrollReveal>

        <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-lg sm:shadow-xl shadow-slate-200/50 p-5 sm:p-8 md:p-12 border border-slate-50">

          {/* Process Steps */}
          <div className="space-y-8 sm:space-y-12">

            {/* Step 1 */}
            <ScrollReveal variant="3d" direction="up" className="group flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-start p-4 sm:p-6 rounded-2xl md:hover:bg-slate-50 md:hover:shadow-lg md:hover:-translate-y-1 transition-all duration-300 cursor-default sm:cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-sky-100 text-sky-600 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-lg sm:text-2xl shadow-inner border border-sky-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                01
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-3 flex items-center group-hover:text-sky-600 transition-colors">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-sky-500 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  Manuscript Submission
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                  Authors submit their research papers, abstracts, or proposals through an online CMT platform provided by the conference organizers. The submissions must adhere to strict formatting and ethical standards, ensuring originality and alignment with the conference themes.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal variant="3d" direction="up" delay={100} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-start p-4 sm:p-6 rounded-2xl md:hover:bg-slate-50 md:hover:shadow-lg md:hover:-translate-y-1 transition-all duration-300 cursor-default sm:cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 text-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-lg sm:text-2xl shadow-inner border border-indigo-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                02
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-3 flex items-center group-hover:text-indigo-600 transition-colors">
                  <Search className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-500 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  Preliminary Screening
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed mb-4">
                  The conference's editorial or organizing team performs an initial screening to verify that the submissions meet basic requirements. Submissions that pass this screening proceed to the review stage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    "Plagiarism: 0% AI plagiarism must be considered",
                    "Relevance: Alignment with the conference scope",
                    "Formatting Compliance: Adherence to guidelines",
                    "Originality: Absence of ethical violations"
                  ].map((req, i) => (
                    <div key={i} className="flex items-start space-x-2.5 sm:space-x-3 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-100 shadow-sm md:hover:border-indigo-300 transition-colors">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-bold text-slate-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal variant="3d" direction="up" delay={150} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-start p-4 sm:p-6 rounded-2xl md:hover:bg-slate-50 md:hover:shadow-lg md:hover:-translate-y-1 transition-all duration-300 cursor-default sm:cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 text-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-lg sm:text-2xl shadow-inner border border-purple-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                03
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-3 flex items-center group-hover:text-purple-600 transition-colors">
                  <UserCheck className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  Reviewer Assignment
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                  Accepted submissions are assigned to expert reviewers within the relevant domain. Typically, a double-blind review process is employed, ensuring anonymity for both authors and reviewers.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal variant="3d" direction="up" delay={200} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-start p-4 sm:p-6 rounded-2xl md:hover:bg-slate-50 md:hover:shadow-lg md:hover:-translate-y-1 transition-all duration-300 cursor-default sm:cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-rose-100 text-rose-600 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-lg sm:text-2xl shadow-inner border border-rose-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                04
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-3 flex items-center group-hover:text-rose-600 transition-colors">
                  <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-rose-500 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  Review Process: Evaluation Criteria
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed mb-4 sm:mb-6">
                  Reviewers evaluate submissions based on the following detailed criteria:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { t: "Scope", d: "Does the submission align with the conference focus in ML, robotics, adaptive computing or intelligent systems?" },
                    { t: "Novelty", d: "Does the submission offer new insights, innovative methodologies, or original contributions?" },
                    { t: "Validity", d: "Are the research methods scientifically sound and suitable for the study?" },
                    { t: "Data and Results", d: "Are data accurately presented and reproducible, and are limitations addressed?" },
                    { t: "Clarity", d: "Is the paper well-structured and coherent with precise terminology?" },
                    { t: "Compliance", d: "Does the paper adhere to ethical standards, proper citation, and formatting guidelines?" }
                  ].map((crit, i) => (
                    <div key={i} className="p-4 sm:p-5 bg-rose-50/50 rounded-xl border border-rose-100 md:hover:-translate-y-1 md:hover:border-rose-300 md:hover:shadow-md transition-all">
                      <h4 className="font-black text-rose-700 text-sm sm:text-base mb-1.5">{crit.t}</h4>
                      <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">{crit.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Step 5 */}
            <ScrollReveal variant="3d" direction="up" delay={250} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-start p-4 sm:p-6 rounded-2xl md:hover:bg-slate-50 md:hover:shadow-lg md:hover:-translate-y-1 transition-all duration-300 cursor-default sm:cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 text-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-lg sm:text-2xl shadow-inner border border-amber-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                05
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-3 flex items-center group-hover:text-amber-600 transition-colors">
                  <Key className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  Reviewer Feedback and Recommendations
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed mb-4">
                  Reviewers provide constructive feedback with recommendations typically categorized as:
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-700 font-bold text-xs sm:text-sm rounded-lg border border-green-200 md:hover:scale-105 transition-transform">Accept</span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 font-bold text-xs sm:text-sm rounded-lg border border-blue-200 md:hover:scale-105 transition-transform">Accept with Minor revisions</span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-100 text-amber-700 font-bold text-xs sm:text-sm rounded-lg border border-amber-200 md:hover:scale-105 transition-transform">Reject</span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-100 text-red-700 font-bold text-xs sm:text-sm rounded-lg border border-red-200 md:hover:scale-105 transition-transform">Desk Reject</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 6 */}
            <ScrollReveal variant="3d" direction="up" delay={300} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-start p-4 sm:p-6 rounded-2xl md:hover:bg-slate-50 md:hover:shadow-lg md:hover:-translate-y-1 transition-all duration-300 cursor-default sm:cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 text-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-lg sm:text-2xl shadow-inner border border-teal-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                06
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-3 flex items-center group-hover:text-teal-600 transition-colors">
                  <RefreshCcw className="h-5 w-5 sm:h-6 sm:w-6 text-teal-500 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-110 group-hover:rotate-180 transition-all duration-700" />
                  Author Revisions and Resubmission
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed mb-4">
                  For papers requiring revisions, authors receive feedback and are given a timeframe to address the issues raised.
                </p>
                <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl md:hover:shadow-xl transition-shadow">
                  <h4 className="font-black text-sm sm:text-base mb-2.5">Authors must:</h4>
                  <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-300">
                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 mr-2.5 flex-shrink-0" /> Revise methodology, analysis, or arguments based on comments.</li>
                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 mr-2.5 flex-shrink-0" /> Clarify ambiguities and address specific reviewer concerns.</li>
                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 mr-2.5 flex-shrink-0" /> Ensure full compliance with ethical and formatting guidelines.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Final Step */}
            <ScrollReveal variant="3d" direction="up" delay={350} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-start p-4 sm:p-6 rounded-2xl md:hover:bg-slate-50 md:hover:shadow-lg md:hover:-translate-y-1 transition-all duration-300 cursor-default sm:cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-lg sm:text-2xl shadow-inner border border-blue-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                07
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-3 flex items-center group-hover:text-blue-600 transition-colors">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  Final Decision & Transparency
                </h3>
                <div className="space-y-3 sm:space-y-4 text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                  <p>
                    <strong className="text-slate-900 flex items-center gap-1.5 mb-1"><BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0"/> Final Decision by the Program Committee:</strong>
                    The committee consolidates feedback and makes the final decision. Accepted papers are scheduled for presentation.
                  </p>
                  <p>
                    <strong className="text-slate-900 flex items-center gap-1.5 mb-1"><ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0"/> Transparency and Ethical Oversight:</strong>
                    Authors receive summary rationales. Ethical concerns are flagged and resolved according to highest standards.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Significance */}
          <ScrollReveal variant="3d" direction="up" delay={400} className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6 text-center">Significance of the Review Process</h2>
            <div className="bg-sky-50 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 border border-sky-100 md:hover:shadow-lg md:hover:border-sky-300 transition-all duration-300">
              <p className="text-slate-700 text-xs sm:text-sm md:text-base font-medium leading-relaxed mb-6 sm:mb-8 text-left sm:text-justify">
                The review process is a cornerstone of academic integrity and quality assurance at IcNGMR 2026. All submitted papers undergo a rigorous peer-review procedure conducted by experts from academia and industry to ensure technical accuracy, originality, relevance, and clarity.
              </p>

              <h3 className="text-base sm:text-lg font-black text-sky-900 mb-3 sm:mb-4">The peer review process ensures:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { t: "Quality Assurance", d: "Only high-quality, impactful research is presented." },
                  { t: "Constructive Development", d: "Authors receive valuable feedback to improve their work." },
                  { t: "Integrity", d: "Ethical standards are upheld, protecting credibility." },
                  { t: "Community Growth", d: "Fosters collaboration and advances knowledge." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-3.5 sm:p-4 rounded-xl shadow-sm border border-slate-100 md:hover:-translate-y-1 md:hover:border-sky-300 md:hover:shadow-md transition-all">
                    <span className="font-bold text-sky-600 text-xs sm:text-sm block mb-1">{item.t}</span>
                    <span className="text-slate-600 text-xs sm:text-sm font-medium">{item.d}</span>
                  </div>
                ))}
              </div>
              <p className="text-center font-bold text-xs sm:text-sm text-slate-800 mt-6 sm:mt-8">
                This rigorous evaluation framework ensures that the conference serves as a premier platform for transformative research.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
};

export default ReviewProcess;
