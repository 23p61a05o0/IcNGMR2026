import { useState, useEffect, useRef } from 'react';
import { Calendar, FileText, Bell, UserPlus, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ConferenceTimeline = () => {
  const [containerRef, isInView] = useInView<HTMLDivElement>({
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: true
  });

  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const [scrollActiveIndex, setScrollActiveIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData = [
    {
      title: "Paper Submission Open",
      date: "Live Now",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      status: "upcoming",
      description: "Paper submission portal opens"
    },
    {
      title: "Submission Closes",
      date: "15th November 2026",
      icon: FileText,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      status: "upcoming",
      description: "Final deadline for paper submissions"
    },
    {
      title: "Acceptance Notification",
      date: "25th November 2026",
      icon: Bell,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      status: "upcoming",
      description: "Authors will be notified of paper acceptance"
    },
    {
      title: "Final Camera Ready Paper",
      date: "30th November 2026",
      icon: FileText,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      status: "upcoming",
      description: "Deadline for final camera ready paper submission"
    },
    {
      title: "Final Registration Deadline",
      date: "05th December 2026",
      icon: UserPlus,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      status: "upcoming",
      description: "Last day for conference registration"
    },
    {
      title: "Conference Dates",
      date: "28th to 29th  December 2026",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      status: "main-event",
      description: "Two-day conference event"
    }
  ];

  // Animate items sequentially when scrolled into view
  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < timelineData.length) {
        setAnimatedItems(prev => new Set(prev).add(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 180);

    return () => clearInterval(timer);
  }, [isInView, timelineData.length]);

  // Mobile scroll-depth tracker: highlights the card currently in the viewport sweet-spot
  useEffect(() => {
    const handleScroll = () => {
      // Only run scroll calculation on mobile / touch screen
      if (window.innerWidth >= 768) return;

      const viewportCenter = window.innerHeight * 0.45;
      let closestIndex = 0;
      let minDistance = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setScrollActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative perspective-1000">
      {/* Main timeline line */}
      <div
        className="absolute left-5 sm:left-8 top-0 w-1 bg-gradient-to-b from-blue-200 via-green-200 via-orange-200 to-purple-200 rounded-full shadow-sm"
        style={{ height: '88%' }}
      ></div>

      {timelineData.map((item, index) => {
        const IconComponent = item.icon;
        const isAnimated = animatedItems.has(index);
        const isMainEvent = item.status === 'main-event';

        // In desktop mode, active is when hovered; in mobile, active is when scrolled into focal view
        const isHoveredOnDesktop = hoveredIndex === index;
        const isScrollActiveOnMobile = scrollActiveIndex === index;

        return (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            className={`group relative flex items-start mb-8 sm:mb-12 transition-all duration-700 ease-out cursor-default sm:cursor-pointer ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
          >
            {/* Timeline dot */}
            <div
              className={`relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${item.color} shadow-md transition-all duration-500 ${isHoveredOnDesktop
                ? 'scale-115 shadow-xl sm:scale-115'
                : isScrollActiveOnMobile
                  ? 'scale-110 shadow-lg ring-4 ring-sky-300/40'
                  : 'scale-100'
                }`}
            >
              <IconComponent className="w-5 h-5 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:rotate-6" />

              {/* Glowing Pulse Aura on Desktop Hover OR Mobile Scroll focal point */}
              {(isHoveredOnDesktop || isScrollActiveOnMobile) && (
                <div className="absolute -inset-2 sm:-inset-2.5 rounded-full bg-gradient-to-r from-sky-400/50 to-indigo-400/50 animate-pulse blur-sm pointer-events-none" />
              )}
            </div>

            {/* Content card with 3D Depth on scroll & lift on hover */}
            <div
              className={`ml-3 sm:ml-8 flex-1 min-w-0 transition-all duration-500 ease-out ${isHoveredOnDesktop
                ? 'md:translate-x-3 md:-translate-y-1.5 md:scale-[1.015]'
                : isScrollActiveOnMobile
                  ? 'translate-x-1 sm:translate-x-0 -translate-y-1'
                  : 'translate-x-0'
                }`}
            >
              <div
                className={`${item.bgColor} rounded-2xl p-4 sm:p-6 border transition-all duration-500 backdrop-blur-sm ${isHoveredOnDesktop
                  ? 'border-sky-300 shadow-2xl shadow-sky-500/20 ring-2 ring-sky-400/30'
                  : isScrollActiveOnMobile
                    ? 'border-sky-300/70 shadow-xl shadow-sky-500/15 ring-2 ring-sky-300/40'
                    : isMainEvent
                      ? 'border-white/80 ring-2 ring-purple-300/80 shadow-md shadow-purple-100'
                      : 'border-white/70 shadow-md'
                  }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 mb-2">
                  <h3
                    className={`text-base sm:text-xl font-bold leading-snug break-words transition-colors ${isHoveredOnDesktop ? 'text-sky-700' : 'text-gray-800'
                      } ${isMainEvent ? 'text-lg sm:text-2xl text-purple-900 font-black' : ''}`}
                  >
                    {item.title}
                  </h3>
                  {isMainEvent && (
                    <span className="self-start sm:self-auto bg-purple-600 text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm transition-transform group-hover:scale-105">
                      MAIN EVENT
                    </span>
                  )}
                </div>

                <div className="flex items-center text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0 text-slate-500" />
                  <span className="font-semibold">{item.date}</span>
                </div>

                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-3 sm:mt-4 flex items-center">
                  <div className="flex-1 h-1.5 sm:h-2 bg-white/70 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out ${isAnimated ? 'w-full' : 'w-0'
                        }`}
                    ></div>
                  </div>
                  <span className="ml-2.5 sm:ml-3 text-[10px] sm:text-xs text-gray-500 font-semibold flex-shrink-0">
                    {index + 1}/{timelineData.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting line */}
            <div
              className={`absolute left-10 sm:left-16 top-5 sm:top-8 w-3 sm:w-8 h-0.5 bg-gradient-to-r ${item.color} to-transparent transition-all duration-300 ${isHoveredOnDesktop ? 'w-5 sm:w-10 opacity-100' : 'opacity-70'
                }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default ConferenceTimeline;