import React from 'react';
import { Globe, Award, Mic2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const KeynoteSpeakers: React.FC = () => {
  const internationalSpeakers = [
    {
      name: 'Prof. Dr. Midhunchakkaravarthy Janarthanan',
      title:
        'Dean, School of AI Computing and Multimedia\nLincoln University College\nSelangor, Malaysia',
      image: '/mithun.png',
    },
    {
      name: 'Dr. Anuj Kumar Goel',
      title:
        'Professor in IT Applications\nWestern Community College\nSurrey, British Columbia, Canada',
      image: '/anujgoel.png',
    },
    {
      name: 'Dr. Bhavani Prasad Yalagala',
      title:
        'James Watt School of Engineering\n(Electronic & Nanoscale Engineering)\nResearch Manager\nUniversity of Glasgow, Scotland, U.K',
      image: '/bhavani.jpg',
    },
  ];

  const nationalSpeakers = [
    {
      name: 'Dr. A Govardhan',
      title:
        'Senior Professor and Vice-Chancellor I/c.,\nIIIT, RGUKT Basara, Telangana, India',
      image: '/Govardhan.jpg',
    },
    {
      name: 'Dr. Mallikarjun Rao',
      title:
        'Scientist, Research Centre Imarat (RCI)\nDr. APJ Abdul Kalam Missile Complex\nDRDO, Hyderabad, India',
      image: '/mallikarjun.png',
    },
  ];

  /* =========================================================
     SPEAKER CARD

     Desktop:
     - Hover lift
     - Subtle shadow
     - Small image zoom

     Mobile:
     - ScrollReveal
     - No hover dependency
     - Each card reveals independently
  ========================================================= */

  const SpeakerCard = ({
    speaker,
    type,
    index,
  }: {
    speaker: {
      name: string;
      title: string;
      image: string;
    };
    type: 'intl' | 'nat';
    index: number;
  }) => {
    return (
      <ScrollReveal
        variant="3d"
        direction="up"
        delay={index * 100}
        threshold={0.05}
        rootMargin="0px 0px -15% 0px"
        triggerOnce={true}
        className="w-full sm:w-auto flex justify-center"
      >
        <div
          className="
            group

            w-full
            max-w-[320px]
            sm:max-w-[340px]

            bg-white

            rounded-2xl
            sm:rounded-[2rem]

            p-5
            sm:p-6

            border
            border-slate-100

            shadow-md
            shadow-slate-200/50

            flex
            flex-col
            items-center

            transition-all
            duration-500
            ease-out

            /* Desktop hover only */
            md:hover:-translate-y-2
            md:hover:shadow-xl
            md:hover:shadow-slate-300/40
            md:hover:border-sky-200
          "
        >

          {/* =================================================
              PHOTO
          ================================================== */}

          <div
            className="
              relative
              mb-5
              w-32
              h-32
              sm:w-40
              sm:h-40
            "
          >

            {/* Subtle colored ring */}
            <div
              className={`
                absolute
                inset-0
                rounded-full

                opacity-[0.08]

                transition-all
                duration-500
                ease-out

                md:group-hover:opacity-[0.14]
                md:group-hover:scale-105

                ${type === 'intl'
                  ? 'bg-sky-500'
                  : 'bg-indigo-500'
                }
              `}
            />

            {/* Image */}
            <div
              className="
                relative
                w-full
                h-full

                rounded-full
                overflow-hidden

                border-2
                border-white

                shadow-md

                bg-slate-100
              "
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover

                  transition-transform
                  duration-700
                  ease-out

                  md:group-hover:scale-[1.05]
                "
              />
            </div>


            {/* Speaker Type */}
            <div
              className="
                absolute
                bottom-1
                right-1

                bg-white

                p-1.5
                sm:p-2

                rounded-full

                shadow-sm

                border
                border-slate-100

                transition-transform
                duration-300

                md:group-hover:scale-105
              "
            >
              {type === 'intl' ? (
                <Globe
                  className="
                    h-3.5
                    w-3.5
                    sm:h-4
                    sm:w-4
                    text-sky-500
                  "
                />
              ) : (
                <Award
                  className="
                    h-3.5
                    w-3.5
                    sm:h-4
                    sm:w-4
                    text-indigo-500
                  "
                />
              )}
            </div>

          </div>


          {/* =================================================
              DETAILS
          ================================================== */}

          <div className="text-center">

            <h3
              className="
                text-base
                sm:text-lg

                font-black
                text-slate-900

                mb-2

                tracking-tight
                leading-snug

                transition-colors
                duration-300

                md:group-hover:text-sky-600
              "
            >
              {speaker.name}
            </h3>


            <p
              className="
                text-slate-500

                text-[10px]
                sm:text-[11px]

                leading-relaxed

                whitespace-pre-line

                font-bold
                uppercase

                tracking-tight
              "
            >
              {speaker.title}
            </p>

          </div>

        </div>
      </ScrollReveal>
    );
  };


  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        py-8
        sm:py-10
        lg:py-12
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-12
        "
      >

        {/* =====================================================
            INTERNATIONAL SPEAKERS
        ====================================================== */}

        <section className="mb-14 sm:mb-16">

          <ScrollReveal
            variant="3d"
            direction="down"
            threshold={0.05}
            rootMargin="0px 0px -15% 0px"
            className="
              flex
              flex-col
              items-center
              text-center
              mb-8
              sm:mb-10
            "
          >

            {/* Label */}
            <div
              className="
                inline-flex
                items-center

                px-3
                py-1

                bg-sky-100
                rounded-full

                text-sky-700

                text-[10px]
                font-bold

                uppercase
                tracking-widest

                mb-3
                sm:mb-4

                border
                border-sky-200
              "
            >
              <Mic2 className="h-3 w-3 mr-2" />

              <span>Global Expertise</span>
            </div>


            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl

                font-black
                text-slate-900

                mb-3
              "
            >
              International Keynote Speakers
            </h2>


            {/* Minimal divider */}
            <div
              className="
                w-12
                sm:w-16
                h-1

                bg-sky-500

                rounded-full
              "
            />

          </ScrollReveal>


          {/* Cards */}
          <div
            className="
              flex
              flex-wrap
              justify-center

              gap-5
              sm:gap-7
              lg:gap-8
            "
          >
            {internationalSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.name}
                speaker={speaker}
                type="intl"
                index={index}
              />
            ))}
          </div>

        </section>


        {/* =====================================================
            NATIONAL SPEAKERS
        ====================================================== */}

        <section>

          <ScrollReveal
            variant="3d"
            direction="down"
            threshold={0.05}
            rootMargin="0px 0px -15% 0px"
            className="
              flex
              flex-col
              items-center
              text-center
              mb-8
              sm:mb-10
            "
          >

            {/* Label */}
            <div
              className="
                inline-flex
                items-center

                px-3
                py-1

                bg-indigo-100
                rounded-full

                text-indigo-700

                text-[10px]
                font-bold

                uppercase
                tracking-widest

                mb-3
                sm:mb-4

                border
                border-indigo-200
              "
            >
              <Award className="h-3 w-3 mr-2" />

              <span>National Excellence</span>
            </div>


            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl

                font-black
                text-slate-900

                mb-3
              "
            >
              National Keynote Speakers
            </h2>


            {/* Minimal divider */}
            <div
              className="
                w-12
                sm:w-16
                h-1

                bg-indigo-500

                rounded-full
              "
            />

          </ScrollReveal>


          {/* Cards */}
          <div
            className="
              flex
              flex-wrap
              justify-center

              gap-5
              sm:gap-7
              lg:gap-8
            "
          >
            {nationalSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.name}
                speaker={speaker}
                type="nat"
                index={index}
              />
            ))}
          </div>

        </section>

      </div>
    </div>
  );
};

export default KeynoteSpeakers;