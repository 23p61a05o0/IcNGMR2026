import React from 'react';
import {
  Target,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  const leadership = [
    {
      name: 'Dr. N. Goutham Rao',
      title: 'Chairman, VBIT',
      image: '/Dr-N.-Goutham-Rao.jpg',
      objectPosition: 'object-center',
    },
    {
      name: 'Dr. G. Manohar Reddy',
      title: 'Secretary, VBIT',
      image: '/Dr-G.-Manohar-Reddy.jpg',
      objectPosition: 'object-right',
    },
    {
      name: 'Dr. P. V. S. Srinivas',
      title: 'Principal, VBIT',
      image: '/pvs.jpg',
      objectPosition: 'object-center',
    },
    {
      name: 'Y.V.S.S.S.V. Prasada Rao',
      title: 'Director, VBIT',
      image: '/prasad.jpg',
      objectPosition: 'object-center',
    },
  ];

  const focusAreas = [
    'Intelligent System Optimization',
    'Scalable AI Architectures',
    'Socio-Environmental Impact',
    'Energy Efficient Computing',
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative bg-slate-900 py-10 sm:py-14 lg:py-20 overflow-hidden">

        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">

          <div
            className="
              absolute
              top-0
              right-0
              w-1/2
              h-full
              bg-sky-500/10
              skew-x-12
              translate-x-32
            "
          />

          <div
            className="
              absolute
              -top-32
              -left-32
              w-72
              h-72
              sm:w-96
              sm:h-96
              bg-sky-500/10
              rounded-full
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-1/4
              w-64
              h-64
              bg-indigo-500/10
              rounded-full
              blur-3xl
            "
          />

        </div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              sm:gap-16
              items-center
            "
          >

            {/* =================================================
                HERO CONTENT
            ================================================== */}

            <ScrollReveal
              variant="3d"
              direction="left"
              className="z-10"
              rootMargin="-35% 0px -35% 0px"
            >

              <span
                className="
                  inline-flex
                  items-center
                  px-3.5
                  py-1.5
                  rounded-full
                  bg-sky-500/20
                  text-sky-400
                  text-[10px]
                  sm:text-xs
                  font-bold
                  tracking-widest
                  uppercase
                  mb-4
                  sm:mb-6
                  border
                  border-sky-500/30
                "
              >
                <Sparkles className="w-3 h-3 mr-2" />
                Conference Overview
              </span>


              <h1
                className="
                  text-3xl
                  sm:text-5xl
                  lg:text-6xl
                  font-black
                  text-white
                  mb-4
                  sm:mb-8
                  leading-[1.1]
                "
              >
                Advancing{' '}
                <span className="text-sky-400">
                  Reconfigurable
                </span>{' '}
                Intelligence
              </h1>


              <p
                className="
                  text-sm
                  sm:text-lg
                  md:text-xl
                  text-slate-300
                  mb-6
                  sm:mb-10
                  leading-relaxed
                  font-medium
                  max-w-2xl
                "
              >
                IcNGMR 2026 is a premier global forum dedicated to
                exploring groundbreaking innovations across
                Neuromorphic Computing &amp; Spiking Neural Networks
                (SNNs), Agentic AI, and adaptive computing
                architectures.
              </p>


              {/* Focus Areas */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-3
                  sm:gap-4
                "
              >
                {focusAreas.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      text-slate-400
                      font-medium
                      text-xs
                      sm:text-sm
                    "
                  >
                    <CheckCircle
                      className="
                        h-4
                        w-4
                        sm:h-5
                        sm:w-5
                        text-sky-500
                        mr-2.5
                        sm:mr-3
                        flex-shrink-0
                      "
                    />

                    {item}
                  </div>
                ))}
              </div>

            </ScrollReveal>


            {/* =================================================
                HERO IMAGE
            ================================================== */}

            <ScrollReveal
              variant="3d"
              direction="right"
              delay={150}
              className="relative"
              rootMargin="-35% 0px -35% 0px"
            >

              <div
                className="
                  relative
                  rounded-2xl
                  sm:rounded-[2rem]
                  overflow-hidden
                  border
                  border-white/10
                  shadow-2xl
                "
              >

                <img
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  alt="Technology conference"
                  className="
                    w-full
                    h-[280px]
                    sm:h-[380px]
                    lg:h-[480px]
                    object-cover
                    scroll-motion-image
                    md:group-hover:scale-105
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-tr
                    from-slate-950/50
                    via-transparent
                    to-sky-500/10
                    pointer-events-none
                  "
                />

                {/* Image Caption */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    sm:p-7
                    bg-gradient-to-t
                    from-slate-950/80
                    to-transparent
                  "
                >
                  <p
                    className="
                      text-white
                      text-sm
                      sm:text-base
                      font-black
                    "
                  >
                    Innovation • Intelligence • Impact
                  </p>

                  <p
                    className="
                      text-slate-300
                      text-xs
                      sm:text-sm
                      mt-1
                    "
                  >
                    Exploring the future of adaptive intelligent
                    systems.
                  </p>
                </div>

              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>


      {/* =====================================================
          LEADERSHIP SECTION
      ====================================================== */}

      <section className="py-16 sm:py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Section Header */}
          <ScrollReveal
            variant="3d"
            direction="down"
            className="text-center mb-12 sm:mb-20"
            rootMargin="-35% 0px -35% 0px"
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                bg-white
                border
                border-slate-200
                text-sky-600
                text-[10px]
                font-black
                uppercase
                tracking-widest
                mb-4
              "
            >
              <Sparkles size={12} />
              Institutional Leadership
            </div>

            <h2
              className="
                text-2xl
                sm:text-4xl
                font-black
                text-slate-900
                mb-3
              "
            >
              Our Leadership
            </h2>

            <p
              className="
                text-slate-500
                text-sm
                sm:text-base
                max-w-2xl
                mx-auto
              "
            >
              Leadership that supports innovation, research and
              academic excellence at VBIT.
            </p>

            <div
              className="
                w-24
                sm:w-36
                h-1.5
                bg-sky-500
                rounded-full
                mx-auto
                mt-5
              "
            />

          </ScrollReveal>


          {/* Leadership Cards */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-6
              sm:gap-8
            "
          >

            {leadership.map((leader, index) => (
              <ScrollReveal
                key={index}
                variant="3d"
                direction="up"
                delay={index * 100}
                className="h-full"
                rootMargin="-35% 0px -35% 0px"
              >

                <div
                  className="
                    group
                    bg-white
                    rounded-2xl
                    sm:rounded-[2.5rem]
                    p-6
                    sm:p-8
                    border
                    border-slate-100
                    shadow-md
                    sm:shadow-xl
                    shadow-slate-200/50
                    h-full
                    flex
                    flex-col
                    items-center

                    md:hover:-translate-y-3
                    md:hover:shadow-2xl
                    md:hover:scale-[1.02]
                    md:hover:border-sky-200

                    transition-all
                    duration-500
                  "
                >

                  {/* Portrait */}
                  <div
                    className="
                      relative
                      mb-6
                      sm:mb-8
                      mx-auto
                      w-32
                      h-32
                      sm:w-40
                      sm:h-40
                    "
                  >

                    <div
                      className="
                        absolute
                        inset-0
                        bg-sky-50
                        rounded-full
                        scale-105
                      "
                    />

                    <div
                      className="
                        relative
                        w-full
                        h-full
                        rounded-full
                        overflow-hidden
                        border-4
                        border-white
                        shadow-md
                      "
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className={`
                          w-full
                          h-full
                          object-cover
                          scroll-motion-image
                          ${leader.objectPosition}

                          md:group-hover:scale-105

                          transition-transform
                          duration-500
                        `}
                      />
                    </div>

                  </div>


                  {/* Information */}
                  <div className="text-center">

                    <h3
                      className="
                        text-base
                        sm:text-lg
                        font-extrabold
                        text-slate-900
                        mb-1.5
                        leading-tight

                        md:group-hover:text-sky-600

                        transition-colors
                        duration-300
                      "
                    >
                      {leader.name}
                    </h3>

                    <p
                      className="
                        text-sky-600
                        font-bold
                        text-[10px]
                        sm:text-xs
                        tracking-wide
                        uppercase
                      "
                    >
                      {leader.title}
                    </p>

                  </div>

                </div>

              </ScrollReveal>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          DETAILED ABOUT SECTION
      ====================================================== */}

      <section
        className="
          py-16
          sm:py-24
          bg-white
          overflow-hidden
        "
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              lg:gap-20
              items-center
            "
          >

            {/* =================================================
                IMAGE
            ================================================== */}

            <ScrollReveal
              variant="3d"
              direction="right"
              className="relative order-2 lg:order-1"
              rootMargin="-35% 0px -35% 0px"
            >

              <div
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  sm:rounded-[2.5rem]
                  shadow-xl
                  sm:shadow-2xl
                  border
                  border-slate-100
                "
              >

                <img
                  src="/hod.jpg"
                  alt="Conference discussion"
                  className="
                    w-full
                    object-cover
                    scroll-motion-image

                    md:group-hover:scale-105

                    transition-transform
                    duration-700
                  "
                />

              </div>

            </ScrollReveal>


            {/* =================================================
                CONTENT
            ================================================== */}

            <ScrollReveal
              variant="3d"
              direction="left"
              delay={150}
              className="
                order-1
                lg:order-2
                space-y-6
                sm:space-y-8
              "
              rootMargin="-35% 0px -35% 0px"
            >

              {/* Label */}
              <div
                className="
                  inline-flex
                  items-center
                  px-3.5
                  py-1.5
                  bg-sky-50
                  rounded-xl
                  border
                  border-sky-100
                "
              >

                <Target
                  className="
                    h-4
                    w-4
                    sm:h-5
                    sm:w-5
                    text-sky-600
                    mr-2.5
                    sm:mr-3
                    flex-shrink-0
                  "
                />

                <span
                  className="
                    text-sky-700
                    font-bold
                    text-xs
                    sm:text-sm
                    uppercase
                  "
                >
                  About IcNGMR
                </span>

              </div>


              {/* Heading */}
              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-black
                  text-slate-900
                  leading-tight
                "
              >
                Fostering Excellence &amp;

                <br className="hidden sm:inline" />

                <span className="text-sky-500">
                  {' '}Cross-Disciplinary
                </span>{' '}
                Impact
              </h2>


              {/* Description */}
              <div
                className="
                  space-y-4
                  sm:space-y-6
                  text-slate-600
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                "
              >

                <p>
                  IcNGMR 2026 addresses both foundational advances
                  and real-world applications. We recognize the
                  rising demand for intelligent, scalable solutions
                  that drive innovation from language technologies
                  to personalized systems.
                </p>

                <p>
                  Our focus remains on promoting research that has
                  a tangible impact on sustainable development goals
                  and fostering a community where academicians and
                  industry experts converge.
                </p>

              </div>


              {/* Divider */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  pt-1
                "
              >
                <div className="w-10 h-1 bg-sky-500 rounded-full" />

                <div className="w-2 h-1 bg-sky-200 rounded-full" />

                <div className="w-2 h-1 bg-sky-200 rounded-full" />

                <ArrowRight
                  size={16}
                  className="text-sky-500"
                />
              </div>

            </ScrollReveal>

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;