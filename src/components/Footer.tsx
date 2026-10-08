import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

// Custom X (Twitter) Logo
const XLogo = ({ className, size = 24 }: { className?: string; size?: number | string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = 2026;
  const mapUrl = 'https://maps.app.goo.gl/HycRYeAUyQ4kZLA36';

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12 border-b border-white/10 pb-12">

          {/* =====================================================
              Column 1: Branding
          ====================================================== */}
          <ScrollReveal
            variant="3d"
            direction="up"
            className="space-y-4 lg:col-span-1"
          >
            <div className="flex items-center space-x-3">
              {/* ICNGMR Logo */}
              <img
                src="/icngmr.png"
                alt="ICNGMR Logo"
                className="h-10 w-auto object-contain bg-white/90 p-1 rounded-md"
              />
              <h2 className="text-xl font-black tracking-tight">
                Ic<span className="text-sky-400">NGMR</span> 2026
              </h2>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              International Conference on Next-Generation Machine learning
              and Reconfigurable intelligence
            </p>

            <div className="flex items-center space-x-4 pt-2">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/icngmr2026/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  p-2
                  bg-white/5
                  rounded-lg
                  hover:bg-sky-500
                  transition-colors
                  duration-300
                "
              >
                <Instagram size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/icngmr-vbit-949a512b5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  p-2
                  bg-white/5
                  rounded-lg
                  hover:bg-sky-500
                  transition-colors
                  duration-300
                "
              >
                <Linkedin size={18} />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/IcNGMR2026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="
                  p-2
                  bg-white/5
                  rounded-lg
                  hover:bg-sky-500
                  transition-colors
                  duration-300
                "
              >
                <XLogo size={18} />
              </a>

            </div>
          </ScrollReveal>


          {/* =====================================================
              Column 2: Quick Contact
          ====================================================== */}
          <ScrollReveal
            variant="3d"
            direction="up"
            delay={100}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">
              Contact Us
            </h3>

            <ul className="space-y-3">

              {/* Email */}
              <li
                className="
                  flex
                  items-center
                  text-slate-400
                  text-sm
                  hover:text-sky-400
                  transition-colors
                  duration-300
                "
              >
                <Mail
                  size={16}
                  className="mr-3 text-sky-500 flex-shrink-0"
                />

                <a href="mailto:icngmr2026@vbithyd.ac.in">
                  icngmr2026@vbithyd.ac.in
                </a>
              </li>


              {/* Phone */}
              <li
                className="
                  flex
                  items-center
                  text-slate-400
                  text-sm
                  hover:text-sky-400
                  transition-colors
                  duration-300
                "
              >
                <Phone
                  size={16}
                  className="mr-3 text-sky-500 flex-shrink-0"
                />

                <a href="tel:+919246411464">
                  +91 9246411464
                </a>
              </li>

            </ul>
          </ScrollReveal>


          {/* =====================================================
              Column 3: Location
          ====================================================== */}
          <ScrollReveal
            variant="3d"
            direction="up"
            delay={200}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">
              Venue
            </h3>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-start
                group
                text-slate-400
                text-sm
                leading-relaxed
                hover:text-sky-400
                transition-colors
                duration-300
              "
            >

              {/* Location Icon */}
              <div className="relative mr-3 mt-1 shrink-0">

                <MapPin
                  size={20}
                  className="
                    text-sky-500
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    -inset-1
                    bg-sky-500/20
                    rounded-full
                    blur
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />

              </div>


              {/* Venue Information */}
              <p>

                <span
                  className="
                    font-bold
                    text-white
                    group-hover:text-sky-400
                    block
                    mb-1
                    transition-colors
                    duration-300
                  "
                >
                  Vignana Bharathi Institute of Technology (Autonomous)
                </span>

                Aushapur (V), Ghatkesar (M),
                <br />
                Telangana - 501301

                <span
                  className="
                    flex
                    items-center
                    mt-2
                    text-[10px]
                    font-black
                    uppercase
                    tracking-widest
                    text-sky-500/60
                    group-hover:text-sky-400
                    transition-colors
                    duration-300
                  "
                >
                  Open in Maps

                  <ExternalLink
                    size={10}
                    className="ml-1"
                  />
                </span>

              </p>

            </a>
          </ScrollReveal>

          {/* =====================================================
              Column 4: Publication Partner
          ====================================================== */}
          <ScrollReveal
            variant="3d"
            direction="up"
            delay={300}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">
              Publication Partner
            </h3>

            <img
              src="itm.png"
              alt="Publication Partner"
              className="
                h-16 
                w-auto 
                object-contain 
                bg-white/90 
                rounded-lg 
                p-2 
                hover:bg-white 
                transition-colors 
                duration-300
              "
            />
          </ScrollReveal>

          {/* =====================================================
              Column 5: Indexing Partner
          ====================================================== */}
          <ScrollReveal
            variant="3d"
            direction="up"
            delay={400}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">
              Indexing Partner
            </h3>

            {/* <img
              src="scopus.png"
              alt="Indexing Partner 1"
              className="
                h-16 
                w-auto 
                object-contain 
                bg-white/90 
                rounded-lg 
                p-2 
                hover:bg-white 
                transition-colors 
                duration-300
              "
            /> */}
            <img
              src="clarivate.png"
              alt="Indexing Partner 2"
              className="
                h-16 
                w-auto 
                object-contain 
                bg-white/90 
                rounded-lg 
                p-2 
                hover:bg-white 
                transition-colors 
                duration-300
              "
            />
          </ScrollReveal>

        </div>


        {/* =====================================================
            Bottom Bar
        ====================================================== */}
        <ScrollReveal
          variant="default"
          direction="up"
          delay={500}
        >
          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-4
            "
          >

            {/* Copyright */}
            <p
              className="
                text-slate-500
                text-xs
                font-medium
                text-center
                md:text-left
              "
            >
              Copyright © {currentYear} Vignana Bharathi Institute of
              Technology. All rights reserved.
            </p>


            {/* Department */}
            <p
              className="
                text-slate-500
                text-xs
                font-medium
                flex
                items-center
              "
            >
              Managed by

              <span
                className="
                  text-sky-500
                  font-bold
                  ml-1.5
                "
              >
                VBIT CSE Department
              </span>
            </p>

          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
};

export default Footer;