import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const StackedCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/main.png",
      alt: "Auditorium",
      title: "Campus"
    },
    {
      src: "/01.JPG",
      alt: "Main Institute Building",
      title: "Main Campus Building"
    },
    {
      src: "/02.jpg",
      alt: "Campus Overview",
      title: "Prathiba Block"
    },
    {
      src: "/03.JPG",
      alt: "Modern Laboratory",
      title: "Aakash Block"
    },
    {
      src: "/04.JPG",
      alt: "Library Facility",
      title: "Srujan Block"
    },
    {
      src: "/05.JPG",
      alt: "Auditorium",
      title: "Conference Hall"
    },
    {
      src: "/06.JPG",
      alt: "Auditorium",
      title: "Prashasan Block"
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + images.length) % images.length;

    if (position === 0) {
      return {
        transform: 'translateY(0px) scale(1)',
        zIndex: 50,
        opacity: 1,
      };
    } else if (position === 1) {
      return {
        transform: 'translateY(8px) scale(0.98)',
        zIndex: 40,
        opacity: 0.9,
      };
    } else if (position === 2) {
      return {
        transform: 'translateY(16px) scale(0.96)',
        zIndex: 30,
        opacity: 0.8,
      };
    } else {
      return {
        transform: 'translateY(24px) scale(0.94)',
        zIndex: 20,
        opacity: 0.6,
      };
    }
  };

  return (
    <ScrollReveal direction="up" className="w-full max-w-4xl mx-auto px-2 pb-10">
      <div className="relative h-[18rem] sm:h-[24rem] md:h-[28rem] w-full">
        {/* Stacked Cards Container */}
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-500 ease-out cursor-pointer"
            style={getCardStyle(index)}
            onClick={handleNext}
          >
            <div className="bg-white rounded-2xl shadow-md sm:shadow-lg overflow-hidden h-full border border-gray-200">
              <div className="h-[85%] sm:h-[88%] overflow-hidden bg-slate-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&crop=building`;
                  }}
                />
              </div>
              <div className="h-[15%] sm:h-[12%] flex items-center justify-center bg-white px-3">
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-gray-800 text-center leading-tight">
                  {image.title}
                </h3>
              </div>
            </div>
          </div>
        ))}

        {/* Dots Indicator */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-sky-600 w-6' : 'bg-gray-300 w-2'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default StackedCards;