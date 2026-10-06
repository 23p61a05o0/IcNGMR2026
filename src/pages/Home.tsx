import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Globe,
} from 'lucide-react';

import ConferenceTimeline from '../components/Timeline';
import TabbedInterface from '../components/TabbedInterface';
import StackedCards from '../components/StackedCard';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  const slides = [
    '/night.jpg',
    '/main.png',
    '/01.JPG',
    '/05.JPG',
  ];

  /* =========================================================
     HERO SLIDESHOW
  ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);


  /* =========================================================
     IMPORTANT DATES HASH NAVIGATION
  ========================================================= */

  useEffect(() => {
    const scrollToAnchor = () => {
      if (window.location.hash === '#important-dates') {
        const element = document.getElementById('important-dates');

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
            });
          }, 100);
        }
      }
    };

    scrollToAnchor();

    window.addEventListener('hashchange', scrollToAnchor);

    return () => {
      window.removeEventListener('hashchange', scrollToAnchor);
    };
  }, []);


  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="
          relative
          bg-slate-50
          overflow-hidden
          py-4
          lg:py-8
          border-b
          border-slate-200
        "
      >

        {/* Background Decoration */}
        <div
          className="
            absolute
            top-0
            right-0
            w-1/3
            h-full
            bg-sky-100/30
            skew-x-12
            translate-x-20
          "
        />


        <div
          className="
            relative
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-6
            lg:px-12
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-5
              gap-8
              lg:gap-10
              items-center
            "
          >

            {/* =================================================
                HERO TEXT
            ================================================== */}

            <ScrollReveal
              variant="3d"
              direction="left"
              className="
                lg:col-span-2
                z-10
                text-center
                lg:text-left
              "
            >

              <div
                className="
                  inline-flex
                  items-center
                  px-3
                  sm:px-4
                  py-1.5
                  rounded-full
                  bg-sky-100
                  text-sky-700
                  text-[10px]
                  sm:text-xs
                  font-black
                  tracking-widest
                  uppercase
                  mb-4
                  border
                  border-sky-200
                "
              >
                <Globe className="w-3 h-3 mr-2" />

                International Conference 2026
              </div>


              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-black
                  text-slate-900
                  mb-4
                  tracking-tighter
                "
              >
                Ic<span className="text-sky-500">NGMR</span>
              </h1>


              <h2
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  text-slate-800
                  mb-4
                  leading-tight
                "
              >
                Next-Generation Machine learning and
                Reconfigurable intelligence
              </h2>


              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-slate-500
                  mb-8
                  max-w-xl
                  mx-auto
                  lg:mx-0
                  leading-relaxed
                  font-medium
                "
              >
                Join global thought leaders at VBIT to explore
                the next frontier of adaptive AI architectures.
              </p>


              {/* CTA */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  justify-center
                  lg:justify-start
                "
              >

                <button
                  onClick={() => navigate('/registration')}
                  className="
                    group
                    px-6
                    sm:px-8
                    py-3.5
                    sm:py-4
                    bg-sky-500
                    text-white
                    rounded-xl
                    font-black
                    text-sm
                    sm:text-base
                    shadow-xl
                    shadow-sky-200
                    hover:bg-sky-600
                    hover:-translate-y-0.5
                    active:scale-95
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                  "
                >
                  Register Now

                  <ArrowRight
                    className="
                      ml-2
                      h-5
                      w-5
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </button>

              </div>

            </ScrollReveal>


            {/* =================================================
                CINEMATIC SLIDESHOW
            ================================================== */}

            <ScrollReveal
              variant="3d"
              direction="right"
              delay={150}
              className="
                lg:col-span-3
                relative
                z-10
                flex
                justify-center
              "
            >

              <div className="
                relative
                w-full
                max-w-[800px]
              ">

                {/* Floating Glow */}
                <div
                  className="
                    absolute
                    -top-6
                    -left-6
                    w-32
                    h-32
                    bg-sky-400/20
                    rounded-full
                    blur-[60px]
                    animate-pulse
                  "
                />


                {/* Slideshow */}
                <div
                  className="
                    relative
                    overflow-hidden
                    shadow-2xl
                    h-[300px]
                    sm:h-[400px]
                    md:h-[500px]
                    lg:h-[550px]
                    transition-all
                    duration-700
                  "
                  style={{
                    borderRadius: '20px 80px 20px 80px',
                  }}
                >

                  {slides.map((img, index) => (
                    <div
                      key={index}
                      className={`
                        absolute
                        inset-0
                        transition-opacity
                        duration-1000
                        ease-in-out
                        ${index === currentImage
                          ? 'opacity-100'
                          : 'opacity-0'
                        }
                      `}
                    >

                      <img
                        src={img}
                        alt={`ICNGMR 2026 conference slide ${index + 1}`}
                        className={`
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-[6000ms]
                          ease-linear
                          ${index === currentImage
                            ? 'scale-110'
                            : 'scale-100'
                          }
                        `}
                      />

                    </div>
                  ))}


                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-tr
                      from-slate-900/30
                      via-transparent
                      to-white/10
                      pointer-events-none
                    "
                  />

                </div>


                {/* Progress Indicators */}
                <div
                  className="
                    absolute
                    -bottom-6
                    left-1/2
                    -translate-x-1/2
                    flex
                    space-x-2
                    items-center
                  "
                >

                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`
                        h-1
                        transition-all
                        duration-500
                        rounded-full
                        ${index === currentImage
                          ? 'w-8 bg-sky-500'
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                        }
                      `}
                    />
                  ))}

                </div>

              </div>

            </ScrollReveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT SECTION
      ====================================================== */}

      <section className="py-16 sm:py-20 bg-white">

        <div className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-12
        ">

          {/* Heading */}
          <ScrollReveal
            variant="3d"
            direction="up"
            className="text-center mb-10 sm:mb-14"
          >

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-black
                text-slate-900
              "
            >
              About ICNGMR 2026
            </h2>

            <div
              className="
                w-16
                sm:w-20
                h-1
                bg-sky-500
                rounded-full
                mx-auto
                mt-4
              "
            />

          </ScrollReveal>


          {/* About Content */}
          <ScrollReveal
            variant="3d"
            direction="up"
            delay={100}
            className="max-w-5xl mx-auto"
          >

            <div
              className="
                bg-white
                rounded-2xl
                sm:rounded-3xl
                border
                border-slate-200
                shadow-xl
                p-5
                sm:p-8
                md:p-12
              "
            >

              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  sm:leading-8
                  text-slate-700
                  mb-5
                  sm:mb-6
                  text-left
                  sm:text-justify
                "
              >
                <span className="font-bold text-slate-900">
                  The International Conference on Next-Generation
                  Machine Learning and Reconfigurable Intelligence
                  (ICNGMR 2026)
                </span>{' '}
                is a premier international forum that brings
                together researchers, academicians, scientists,
                industry professionals, innovators and students
                from across the globe to exchange ideas and present
                the latest advances in Artificial Intelligence,
                Machine Learning, Reconfigurable Computing and
                Intelligent Systems.
              </p>


              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  sm:leading-8
                  text-slate-700
                  mb-5
                  sm:mb-6
                  text-left
                  sm:text-justify
                "
              >
                ICNGMR 2026 provides an excellent platform for
                discussing emerging research trends, innovative
                technologies and real-world applications in
                AI-driven systems. The conference features keynote
                addresses by renowned international experts,
                technical paper presentations, workshops, panel
                discussions and networking opportunities that
                foster collaboration between academia, research
                organizations and industry.
              </p>


              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  sm:leading-8
                  text-slate-700
                  text-left
                  sm:text-justify
                "
              >
                Hosted by{' '}
                <span className="font-semibold text-sky-600">
                  Vignana Bharathi Institute of Technology (VBIT),
                  Hyderabad
                </span>
                , the conference is committed to promoting
                interdisciplinary research and encouraging
                innovation that addresses future technological
                challenges through intelligent, adaptive and
                sustainable computing solutions.
              </p>

            </div>

          </ScrollReveal>


          {/* =================================================
              IMPORTANT:
              DO NOT WRAP TIMELINE IN ScrollReveal
          ================================================== */}

          <div className="mt-12 sm:mt-16">
            <ConferenceTimeline />
          </div>

        </div>
      </section>


      {/* =====================================================
          HOST INSTITUTE
      ====================================================== */}

      <section className="py-14 sm:py-16 bg-slate-50">

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-12
          "
        >

          <ScrollReveal
            variant="3d"
            direction="up"
            className="text-center mb-8 sm:mb-10"
          >

            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-black
                text-slate-900
                mb-2
              "
            >
              The Host Institute
            </h2>

            <p
              className="
                text-sky-600
                font-bold
                uppercase
                tracking-widest
                text-[10px]
                sm:text-xs
              "
            >
              Vignana Bharathi Institute of Technology
            </p>

          </ScrollReveal>


          <div className="mb-8 sm:mb-10">
            <StackedCards />
          </div>

        </div>
      </section>


      {/* =====================================================
          INFO CARDS
      ====================================================== */}

      <section className="py-14 sm:py-16 bg-white">

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-12
          "
        >

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-5
              sm:gap-8
            "
          >

            {/* Venue */}
            <ScrollReveal
              variant="3d"
              direction="up"
              className="h-full"
            >

              <div
                className="
                  group
                  bg-white
                  p-5
                  sm:p-8
                  lg:p-10
                  rounded-2xl
                  sm:rounded-[2rem]
                  shadow-xl
                  hover:shadow-sky-100
                  transition-all
                  border
                  border-slate-50
                  h-full
                  md:hover:-translate-y-1
                  duration-300
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    bg-sky-100
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    mb-6
                    text-sky-600
                    group-hover:bg-sky-500
                    group-hover:text-white
                    transition-colors
                  "
                >
                  <MapPin size={24} />
                </div>

                <h3
                  className="
                    font-black
                    text-lg
                    sm:text-xl
                    text-slate-900
                    mb-2
                  "
                >
                  Conference Venue
                </h3>

                <p
                  className="
                    text-slate-500
                    font-medium
                    text-sm
                    sm:text-base
                  "
                >
                  VBIT, Telangana, India
                </p>

              </div>

            </ScrollReveal>


            {/* Dates */}
            <ScrollReveal
              variant="3d"
              direction="up"
              delay={100}
              className="h-full"
            >

              <div
                className="
                  bg-sky-600
                  text-white
                  p-5
                  sm:p-8
                  lg:p-10
                  rounded-2xl
                  sm:rounded-[2rem]
                  shadow-xl
                  shadow-sky-300
                  h-full
                  md:hover:-translate-y-1
                  transition-transform
                  duration-300
                "
              >

                <Calendar
                  size={28}
                  className="mb-6 opacity-90"
                />

                <h3
                  className="
                    font-black
                    text-xl
                    sm:text-2xl
                    mb-2
                  "
                >
                  Dates
                </h3>

                <p
                  className="
                    text-sky-100
                    font-bold
                    text-sm
                    sm:text-base
                  "
                >
                  28 - 29 December 2026
                </p>

              </div>

            </ScrollReveal>


            {/* Scope */}
            <ScrollReveal
              variant="3d"
              direction="up"
              delay={200}
              className="h-full"
            >

              <div
                className="
                  group
                  bg-white
                  p-5
                  sm:p-8
                  lg:p-10
                  rounded-2xl
                  sm:rounded-[2rem]
                  shadow-xl
                  hover:shadow-sky-100
                  transition-all
                  border
                  border-slate-50
                  h-full
                  md:hover:-translate-y-1
                  duration-300
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    bg-sky-100
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    mb-6
                    text-sky-600
                    group-hover:bg-sky-500
                    group-hover:text-white
                    transition-colors
                  "
                >
                  <Users size={24} />
                </div>

                <h3
                  className="
                    font-black
                    text-lg
                    sm:text-xl
                    text-slate-900
                    mb-2
                  "
                >
                  Scope
                </h3>

                <p
                  className="
                    text-slate-500
                    font-medium
                    text-sm
                    sm:text-base
                  "
                >
                  AI, ML, Data Science and Agentic AI
                </p>

              </div>

            </ScrollReveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          IMPORTANT DATES / TABS
      ====================================================== */}

      <section
        id="important-dates"
        className="
          py-14
          sm:py-16
          bg-slate-50
        "
      >

        {/* IMPORTANT:
            TabbedInterface has its own content/interaction.
            Do not wrap the entire component in ScrollReveal.
        */}
        <TabbedInterface />

      </section>

    </div>
  );
};

export default Home;