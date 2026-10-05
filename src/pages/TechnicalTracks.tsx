import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Cpu, Brain, Microscope, Bot, Star, Target } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const TechnicalTracks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  const tracks = [
    {
      id: 'nlp',
      title: 'Neuromorphic Computing & Spiking Neural Networks (SNNs)',
      icon: <Brain className="h-6 w-6 sm:h-7 sm:w-7" />,
      color: 'from-sky-500 to-sky-400',
      accentColor: 'text-sky-600',
      bgColor: 'bg-sky-50',
      topics: [
        'Foundations of Neuromorphic Computing',
        'Spiking Neural Network (SNN) Models and Learning Rules',
        'Neuromorphic Hardware and Accelerators',
        'Event-Driven Sensors and Data Processing',
        'Spike Encoding and Neural Coding Techniques',
        'Training Algorithms for Spiking Neural Networks',
        'Energy-Efficient AI and Edge Neuromorphic Systems',
        'Brain-Inspired Computing and Cognitive Architectures',
        'Applications of SNNs in Vision, Robotics, and IoT',
        'Challenges, Explainability, and Future Directions in Neuromorphic AI',
      ]
    },
    {
      id: 'genai',
      title: 'Agentic AI and Machine Learning Algorithms',
      icon: <Cpu className="h-6 w-6 sm:h-7 sm:w-7" />,
      color: 'from-indigo-500 to-indigo-400',
      accentColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      topics: [
        'Agentic AI: Diffusion, Transformers, GANs',
        'Foundation Models (Text, Vision, Code, Multimodal)',
        'Supervised, Unsupervised, and Reinforcement Learning',
        'Meta-Learning and Continual Learning',
        'Neural Architecture Search and AutoML',
        'Explainable and Trustworthy Machine Learning',
        'Synthetic Data Generation and Augmentation',
        'Few-Shot, Zero-Shot, and Transfer Learning',
        'ML Model Compression and Optimization',
        'Federated and Distributed Learning Systems',
      ]
    },
    {
      id: 'reconfigurable',
      title: 'Reconfigurable Intelligence and Adaptive AI Systems',
      icon: <Microscope className="h-6 w-6 sm:h-7 sm:w-7" />,
      color: 'from-sky-600 to-indigo-500',
      accentColor: 'text-sky-700',
      bgColor: 'bg-slate-50',
      topics: [
        'Foundations of Reconfigurable Intelligence and Adaptive AI',
        'Modular and Reconfigurable Neural Architectures',
        'Adaptive Learning and Continual Learning Systems',
        'Dynamic Model Reconfiguration and Self-Adaptive AI',
        'Neuromorphic Computing and Brain-Inspired Intelligence',
        'Edge AI, TinyML, and Real-Time Intelligent Systems',
        'Hardware-Software Co-Design for Adaptive Computing',
        'Robustness, Fault Tolerance, and Explainable Adaptive AI',
        'Cloud-Edge-IoT Integration for Intelligent Systems',
        'Adaptive AI for Smart Healthcare and Emergency Response',
        'Intelligent Agriculture and Autonomous Farming Systems',
        'Adaptive AI for Smart Cities, Urban Mobility, and Digital Twins',
      ]
    },
    {
      id: 'communication-robotics',
      title: 'Communication and Robotics',
      icon: <Bot className="h-6 w-6 sm:h-7 sm:w-7" />,
      color: 'from-slate-800 to-slate-700',
      accentColor: 'text-slate-800',
      bgColor: 'bg-slate-100',
      topics: [
        'Robotic Communication Systems (5G/6G, V2X)',
        'Swarm Robotics and Decentralized Communication',
        'IoT-Enabled Robots and Embedded Platforms',
        'Autonomous Construction and Smart Infrastructure',
        'Mechatronic Systems and Actuation Mechanisms',
        'AI-Driven Multi-Robot Systems for Industrial Automation',
        'Medical and Assistive Robotics for Healthcare',
        'Human-Robot Collaboration and Safety',
        'Digital Twins and Cyber-Physical Robotic Systems',
        'Edge AI for Real-Time Robotic Decision Making',
      ]
    },
  ];

  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleTrack = (trackId: string) => {
    setExpandedTrack(expandedTrack === trackId ? null : trackId);
  };

  return (
    <div className="min-h-screen bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <ScrollReveal variant="3d" direction="down" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-sky-50 rounded-full text-sky-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 border border-sky-100">
            <Target className="h-3.5 w-3.5" />
            <span>Research Domains</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Technical <span className="text-sky-500">Tracks</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Explore our specialized research tracks covering the future of Neuromorphic Computing & Spiking Neural Networks (SNNs), Agentic AI, and intelligent robotics.
          </p>
        </ScrollReveal>

        {/* Modern Search Bar */}
        <ScrollReveal variant="3d" direction="up" delay={100} className="mb-10 sm:mb-16 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-md sm:shadow-lg overflow-hidden px-4 sm:px-6">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-sky-500 transition-colors flex-shrink-0" />
              <input
                type="text"
                placeholder="Search topics (e.g. 'Deep Learning', 'SNN')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-3 sm:pl-4 py-3.5 sm:py-5 border-none focus:ring-0 text-slate-700 text-sm sm:text-base font-medium placeholder-slate-400 outline-none"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Broadened Track Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          {filteredTracks.map((track, index) => (
            <ScrollReveal
              key={track.id}
              variant="3d"
              direction="up"
              delay={index * 120}
              className="h-full"
            >
              <div
                className="group flex flex-col bg-white rounded-2xl sm:rounded-[2.5rem] shadow-lg sm:shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden h-full md:hover:-translate-y-2.5 md:hover:shadow-2xl md:hover:shadow-sky-500/25 md:hover:border-sky-300 md:hover:scale-[1.01] transition-all duration-500 cursor-default sm:cursor-pointer"
              >
                {/* Header */}
                <div className={`p-6 sm:p-8 lg:p-10 bg-gradient-to-br ${track.color} text-white relative overflow-hidden`}>
                  <div className="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-700 pointer-events-none">
                    {React.cloneElement(track.icon as React.ReactElement, { size: 100 })}
                  </div>
                  <div className="relative z-10 flex items-start space-x-4 sm:space-x-6">
                    <div className="p-3 sm:p-4 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-inner flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      {track.icon}
                    </div>
                    <h2 className="text-lg sm:text-2xl font-black leading-snug sm:leading-tight pt-1">{track.title}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10 flex-grow flex flex-col justify-between">
                  {searchTerm ? (
                    <div className="space-y-2.5 sm:space-y-3">
                      {track.topics
                        .filter(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((topic, i) => (
                          <div key={i} className="flex items-center p-3 sm:p-4 bg-sky-50 rounded-xl border border-sky-100 hover:border-sky-300 hover:bg-sky-100/50 transition-colors">
                            <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${track.color} mr-3 sm:mr-4 flex-shrink-0`} />
                            <span className="text-slate-700 font-bold text-xs sm:text-sm">{topic}</span>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <>
                      <div className="mb-6 sm:mb-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 sm:mb-4">Core Focus Areas</p>
                        <div className="flex flex-wrap gap-2">
                          {track.topics.slice(0, 4).map((t, i) => (
                            <span key={i} className="px-2.5 sm:px-3 py-1 bg-slate-50 text-slate-600 text-[10px] sm:text-[11px] font-bold rounded-lg border border-slate-100 italic hover:border-sky-300 hover:bg-sky-50 transition-colors">
                              {t}
                            </span>
                          ))}
                          <span className="px-2.5 sm:px-3 py-1 text-sky-600 text-[10px] sm:text-[11px] font-black">+{track.topics.length - 4} More</span>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleTrack(track.id)}
                        className={`w-full flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-black text-xs sm:text-sm transition-all duration-300 ${
                          expandedTrack === track.id
                            ? 'bg-slate-900 text-white shadow-lg'
                            : `${track.bgColor} ${track.accentColor} hover:brightness-95`
                        }`}
                      >
                        <span>{expandedTrack === track.id ? 'Close Track Details' : 'Explore Sub-topics'}</span>
                        {expandedTrack === track.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>

                      <div className={`mt-6 space-y-2.5 sm:space-y-3 overflow-hidden transition-all duration-500 ${expandedTrack === track.id ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        {track.topics.map((topic, i) => (
                          <div key={i} className="flex items-center p-3 sm:p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-sky-300 hover:bg-sky-50/40 hover:translate-x-1 transition-all">
                            <Star className="h-3 w-3 text-sky-400 mr-3 flex-shrink-0" />
                            <span className="text-slate-600 text-xs sm:text-sm font-medium">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer Note */}
        <ScrollReveal variant="3d" direction="up" className="mt-16 sm:mt-24 text-center">
          <div className="w-16 sm:w-20 h-1 bg-slate-200 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-xl font-medium text-slate-400 italic">
            ...and other related domains falling under the conference theme.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default TechnicalTracks;