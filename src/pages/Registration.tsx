import React from 'react';
import { QrCode, FileText, Link as LinkIcon, CheckCircle, Info } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Registration: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <ScrollReveal variant="3d" direction="down" className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 sm:mb-4">Registration</h1>
          <div className="w-20 sm:w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-500 font-medium">Please follow the guidelines carefully for successful submission.</p>
        </ScrollReveal>

        <div className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-lg sm:shadow-xl shadow-slate-200/60 p-5 sm:p-8 md:p-12 border border-slate-100">

          {/* Submission Guidelines */}
          <ScrollReveal variant="3d" direction="up" className="mb-10 sm:mb-16">
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <div className="p-2 bg-sky-100 rounded-lg text-sky-600 flex-shrink-0">
                <Info className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800">Submission Guidelines</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-sky-400 md:hover:shadow-md transition-shadow">
                  <strong className="text-slate-900 block mb-1 sm:mb-2">Review Process & Indexing:</strong>
                  The full paper must be submitted through <strong>Microsoft CMT</strong>. Email submissions are accepted by exception only. All papers undergo a strict blind peer review process.
                </p>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-sky-400 md:hover:shadow-md transition-shadow">
                  <strong className="text-slate-900 block mb-1 sm:mb-2">Plagiarism & Limits:</strong>
                  The maximum allowed pages are 5 (extra pages at ₹1000/page). Plagiarism must be <strong>less than 10%</strong>. Accepted papers will be submitted for Scopus indexing.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links Row */}
          <ScrollReveal variant="3d" direction="up" delay={100} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
            {[
              { label: 'Paper Format', icon: FileText, color: 'text-blue-600' },
              { label: 'CMT Link', icon: LinkIcon, color: 'text-purple-600' },
              { label: 'Registration Link', icon: CheckCircle, color: 'text-green-600' },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="group flex items-center justify-center p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-100 bg-white shadow-sm md:hover:-translate-y-1.5 md:hover:shadow-xl md:hover:border-sky-300 md:hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <item.icon className={`h-5 w-5 mr-3 flex-shrink-0 ${item.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`} />
                <span className="font-bold text-sm sm:text-base text-slate-700 group-hover:text-sky-600 transition-colors">{item.label}</span>
              </a>
            ))}
          </ScrollReveal>

          {/* Tables Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-16">
            {/* Important Dates */}
            <ScrollReveal variant="3d" direction="up" delay={150}>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6 flex items-center">
                <div className="w-2 h-5 sm:h-6 bg-sky-500 rounded-full mr-3 flex-shrink-0"></div> Important Dates
              </h3>
              <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm md:hover:shadow-md transition-shadow">
                <table className="w-full text-left text-xs sm:text-sm whitespace-nowrap sm:whitespace-normal">
                  <tbody>
                    {[
                      { event: 'Paper Submission Open', date: 'Live Now', highlight: true },
                      { event: 'Submission Closes', date: '15th November 2026', highlight: true },
                      { event: 'Acceptance Notification', date: '25th November 2026', highlight: true },
                      { event: 'Final Camera-Ready Paper', date: '30th November 2026', highlight: true },
                      { event: 'Final Registration Deadline', date: '05th December 2026', highlight: true },
                      { event: 'Conference Dates', date: '28th to 29th  December 2026', highlight: true },
                    ].map((row, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'} hover:bg-sky-50/40 transition-colors`}>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-slate-700">{row.event}</td>
                        <td className={`px-4 sm:px-6 py-3 sm:py-4 font-bold ${row.highlight ? 'text-sky-600' : 'text-slate-500'}`}>{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* Registration Fees */}
            <ScrollReveal variant="3d" direction="up" delay={200}>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6 flex items-center">
                <div className="w-2 h-5 sm:h-6 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div> Registration Fees
              </h3>
              <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm md:hover:shadow-md transition-shadow">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">Category</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">Indian</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">Foreign</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-sky-50/60 transition-colors">
                      <td className="px-4 sm:px-6 py-3.5 sm:py-5 font-medium text-slate-700">Industry</td>
                      <td className="px-4 sm:px-6 py-3.5 sm:py-5 font-black text-slate-900">₹11,000</td>
                      <td className="px-4 sm:px-6 py-3.5 sm:py-5 font-black text-slate-900">USD 150</td>
                    </tr>
                    <tr className="hover:bg-sky-50/60 transition-colors">
                      <td className="px-4 sm:px-6 py-3.5 sm:py-5 font-medium text-slate-700">Academicians</td>
                      <td className="px-4 sm:px-6 py-3.5 sm:py-5 font-black text-slate-900">₹10,000</td>
                      <td className="px-4 sm:px-6 py-3.5 sm:py-5 font-black text-slate-900">USD 110</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>

          {/* Payment Section */}
          <ScrollReveal variant="3d" direction="up" delay={250}>
            <div className="bg-slate-900 rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 text-white flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:hover:shadow-2xl md:hover:shadow-sky-500/20 transition-all duration-500">
              <div className="flex-1 w-full space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-black">Payment Details</h2>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 text-slate-300 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Account Number</span>
                    <span className="text-sky-400 font-mono font-bold">1421350000009470</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>IFSC Code</span>
                    <span className="text-sky-400 font-mono font-bold">KVBL0001412</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Name</span>
                    <span className="text-white font-bold">EISPL, KVB Bank</span>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white/10 rounded-xl border border-white/5 w-full text-center md:hover:bg-white/15 transition-colors">
                  <p className="text-sky-300 font-bold text-xs sm:text-sm">UPI: 9593468716@KCL</p>
                </div>
              </div>

              <div className="flex flex-col items-center flex-shrink-0">
                <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl md:hover:rotate-6 md:hover:scale-110 md:hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <QrCode className="h-28 w-28 sm:h-32 sm:w-32 text-slate-900" />
                </div>
                <p className="mt-3 text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold">Secure Payment Terminal</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
};

export default Registration;