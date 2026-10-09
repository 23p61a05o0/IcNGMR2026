import React from 'react';
import { Heart, Star, Users, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Acknowledgment: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <ScrollReveal variant="3d" direction="down" className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4 border border-sky-200">
            <Heart className="h-3 w-3 text-rose-500" />
            <span>Expressing Gratitude</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-2 tracking-tight">
            Acknowledgment
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Heartfelt gratitude to the visionaries and partners who make ICNGMR 2026 a reality.
          </p>
        </ScrollReveal>

        {/* Main Gratitude Card */}
        <ScrollReveal variant="3d" direction="up" delay={100} className="mb-6 sm:mb-10">
          <div className="group bg-white rounded-2xl sm:rounded-[2rem] shadow-lg sm:shadow-xl shadow-slate-200/50 p-6 sm:p-8 md:p-12 border border-slate-50 relative overflow-hidden text-center md:hover:shadow-2xl md:hover:shadow-rose-500/10 md:hover:border-rose-100 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-700 pointer-events-none">
              <Heart size={150} fill="currentColor" className="text-rose-500" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-inner group-hover:scale-115 group-hover:rotate-6 transition-transform duration-500">
                <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-rose-500" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 sm:mb-4 group-hover:text-rose-600 transition-colors">Heartfelt Appreciation</h2>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                ICNGMR 2026 is made possible through the generous support of our sponsors, partners,
                and the dedicated efforts of our organizing committee. We are deeply grateful for
                the commitment shown toward advancing research in Agentic AI.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Special Thanks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-10">
          <ScrollReveal variant="3d" direction="up" delay={150} className="h-full">
            <div className="group bg-slate-900 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden h-full shadow-lg md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-sky-500/20 transition-all duration-500 cursor-default sm:cursor-pointer">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-700 pointer-events-none">
                <Users size={80} />
              </div>
              <div className="relative z-10">
                <div className="p-2 sm:p-2.5 bg-sky-500 rounded-xl w-fit mb-3 sm:mb-4 shadow-md text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 group-hover:text-sky-400 transition-colors">Organizing Committee</h3>
                <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                  Our tireless team has worked around the clock. Their expertise and attention to detail have been instrumental in creating this world-class environment.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="3d" direction="up" delay={200} className="h-full">
            <div className="group bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 border border-slate-100 shadow-md sm:shadow-xl shadow-slate-200/50 h-full md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-indigo-500/20 md:hover:border-indigo-200 transition-all duration-500 cursor-default sm:cursor-pointer">
              <div className="p-2 sm:p-2.5 bg-indigo-500 rounded-xl w-fit mb-3 sm:mb-4 shadow-md text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors">Reviewers & Volunteers</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                We appreciate the rigorous efforts of our reviewers and student volunteers who managed the operational and technical excellence of the event.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Host Institute Section */}
        <ScrollReveal variant="3d" direction="up" delay={250}>
          <div className="group bg-white rounded-2xl sm:rounded-[2.5rem] shadow-lg sm:shadow-2xl shadow-slate-200/60 p-6 sm:p-8 md:p-12 border border-slate-50 relative overflow-hidden md:hover:shadow-sky-400/20 transition-all duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md">
                <img
                  src="/night.jpg"
                  alt="Host Institute"
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center space-x-2 text-sky-600 font-black text-[10px] uppercase tracking-widest">
                  <Star className="h-3 w-3" />
                  <span>Our Foundation</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  Vignana Bharathi Institute of Technology
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                  We acknowledge the support of VBIT. Their world-class infrastructure and commitment to academic excellence provide the perfect backdrop for this dialogue.
                </p>
                <div className="pt-2 flex items-center space-x-4 sm:space-x-6">
                  <img
                    src="/aicte.png"
                    alt="aicte"
                    className="h-7 sm:h-8 w-auto group-hover:scale-105 transition-transform"
                  />
                  <img
                    src="/NBA.png"
                    alt="NBA"
                    className="h-8 sm:h-10 w-auto group-hover:scale-105 transition-transform"
                  />
                  <img
                    src="/NAAC.jpeg"
                    alt="NAAC"
                    className="h-7 sm:h-8 w-auto group-hover:scale-105 transition-transform"
                  />
                  <img
                    src="/ugc.png"
                    alt="ugc"
                    className="h-7 sm:h-8 w-auto group-hover:scale-105 transition-transform"
                  />
                  <img
                    src="/JNTUH.png"
                    alt="JNTUH"
                    className="h-7 sm:h-8 w-auto group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Closing Phrase */}
        <ScrollReveal variant="3d" direction="up" delay={300} className="mt-12 sm:mt-16 text-center">
          <div className="w-16 h-1 bg-slate-200 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg font-bold text-slate-400 italic">
            "Advancing Intelligence, Together."
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Acknowledgment;