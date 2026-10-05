import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Brain,
  Cpu,
  Cog,
  AlertCircle,
  Bot,
  FileUp,
  MailCheck,
  Zap,
  History,
  CheckCircle
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function TabbedInterface() {
  const [activeTab, setActiveTab] = useState("tracks");
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash === '#important-dates' || location.hash === '#important-dates') {
      setActiveTab('dates');
    }
  }, [location]);

  const technicalTracks = [
    { id: 'nlp', title: 'Neuromorphic Computing & Spiking Neural Networks (SNNs)', icon: Cpu },
    { id: 'genai', title: 'Agentic AI and Machine Learning Algorithms', icon: Brain },
    { id: 'reconfigurable', title: 'Reconfigurable Intelligence and Adaptive AI Systems', icon: Cog },
    { id: 'communication', title: 'Communication and Robotics', icon: Bot },
  ];

  const importantDates = [
    {
      event: "Paper Submission Open",
      date: "Live Now",
      icon: FileUp,
      color: "text-sky-600",
      bg: "bg-sky-100",
      glow: "shadow-sky-200"
    },
    {
      event: "Submission Closes",
      date: "15th November 2026",
      icon: AlertCircle,
      color: "text-rose-600",
      bg: "bg-rose-100",
      glow: "shadow-rose-200"
    },
    {
      event: "Acceptance Notification",
      date: "25th November 2026",
      icon: MailCheck,
      color: "text-amber-600",
      bg: "bg-amber-100",
      glow: "shadow-amber-200"
    },
    {
      event: "Final Camera Ready Paper",
      date: "30th November 2026",
      icon: Zap,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      glow: "shadow-indigo-200"
    },
    {
      event: "Final Registration Deadline",
      date: "05th December 2026",
      icon: History,
      color: "text-purple-600",
      bg: "bg-purple-100",
      glow: "shadow-purple-200"
    },
    {
      event: "Conference Dates",
      date: "28th to 29th  December 2026",
      icon: CheckCircle,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      glow: "shadow-emerald-200"
    }
  ];

  return (
    <div className="bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Brochure Button */}
        <ScrollReveal variant="3d" direction="up" className="flex justify-center mb-8 sm:mb-12">
          <a
            href="/brochure.pdf"
            target="_blank"
            className="group px-6 sm:px-8 py-3 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest bg-slate-900 text-white shadow-xl md:hover:bg-sky-600 md:hover:-translate-y-1 md:hover:shadow-2xl md:hover:shadow-sky-500/30 transition-all duration-300 flex items-center"
          >
            <FileUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:animate-bounce" />
            Download Brochure
          </a>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal variant="3d" direction="up" delay={100} className="flex justify-center mb-8 sm:mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-1 sm:p-1.5 flex border border-slate-100 max-w-full overflow-x-auto">
            {['tracks', 'dates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold transition-all duration-300 text-xs sm:text-sm uppercase tracking-tight whitespace-nowrap ${activeTab === tab
                  ? "bg-sky-500 text-white shadow-md scale-105"
                  : "text-slate-500 hover:text-sky-500"
                  }`}
              >
                {tab === 'tracks' ? 'Technical Tracks' : 'Important Dates'}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tab Content */}
        <div className="min-h-[380px]">
          {activeTab === "tracks" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {technicalTracks.map((track, index) => (
                <ScrollReveal
                  key={index}
                  variant="3d"
                  direction="up"
                  delay={index * 100}
                  className="h-full"
                >
                  <div className="group bg-white p-5 sm:p-6 rounded-2xl sm:rounded-[2rem] border border-slate-100 shadow-md sm:shadow-xl shadow-slate-200/40 md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-sky-500/20 md:hover:border-sky-300 transition-all duration-300 h-full cursor-default sm:cursor-pointer">
                    <div className="flex items-center space-x-4 sm:space-x-5">
                      <div className="bg-sky-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-sky-600 flex-shrink-0 group-hover:bg-sky-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <track.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-800 leading-snug group-hover:text-sky-600 transition-colors duration-300">{track.title}</h3>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {activeTab === "dates" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {importantDates.map((item, index) => (
                <ScrollReveal
                  key={index}
                  variant="3d"
                  direction="up"
                  delay={index * 80}
                  className="h-full"
                >
                  <div
                    className="group bg-white p-5 sm:p-6 rounded-2xl sm:rounded-[2rem] border border-slate-100 shadow-md sm:shadow-xl shadow-slate-200/40 md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-sky-500/20 md:hover:border-sky-300 transition-all duration-300 h-full cursor-default sm:cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`mb-3 sm:mb-4 p-3 sm:p-4 rounded-2xl ${item.bg} ${item.color} ${item.glow} shadow-md group-hover:scale-115 group-hover:rotate-6 transition-all duration-500`}>
                        <item.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-sky-600 transition-colors duration-300">{item.event}</h3>
                      <p className="text-lg sm:text-xl font-black text-slate-800 tracking-tight group-hover:text-sky-700 transition-colors duration-300">{item.date}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}