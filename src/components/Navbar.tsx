import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Info,
  Mic,
  Users,
  BookOpen,
  Scale,
  UserPlus,
  Heart,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Calendar,
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isEthicsOpen, setIsEthicsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileEthicsOpen, setIsMobileEthicsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* =========================================================
     SCROLL STATE
     ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
     ========================================================= */

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileEthicsOpen(false);
    setIsEthicsOpen(false);
  }, [location]);

  /* =========================================================
     IMPORTANT DATES
     ========================================================= */

  const handleImportantDatesClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();

    setIsMobileMenuOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById('important-dates');

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      navigate('/#important-dates');
    }
  };

  /* =========================================================
     NAV LINK
     ========================================================= */

  const NavLink = ({
    to,
    icon: Icon,
    children,
    onClick,
  }: {
    to: string;
    icon: React.ElementType;
    children: React.ReactNode;
    onClick?: () => void;
  }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        onClick={onClick}
        className={`
          flex
          items-center
          whitespace-nowrap
          text-[10px]
          lg:text-xs
          font-black
          tracking-wide
          px-2
          lg:px-2.5
          py-2
          rounded-xl
          transition-colors
          duration-300
          ease-out
          ${isActive
            ? 'bg-gradient-to-br from-white to-sky-50 text-slate-900 shadow-lg border-b-2 border-sky-300'
            : 'text-white hover:bg-white/20 hover:backdrop-blur-md'
          }
        `}
      >
        <Icon
          className={`
            h-4
            w-4
            mr-2
            ${isActive
              ? 'text-sky-500'
              : 'text-white'
            }
          `}
        />

        {children}
      </Link>
    );
  };

  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <>
      {/* =====================================================
          1. TOP CONTACT BAR
      ====================================================== */}

      <div
        className={`
          bg-sky-600
          text-white/90
          text-[10px]
          sm:text-xs
          border-b
          border-white/10
          transition-all
          duration-500
          ${isScrolled
            ? 'h-0 opacity-0 overflow-hidden py-0'
            : 'py-2 opacity-100'
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            flex
            justify-between
            items-center
            px-4
            sm:px-6
          "
        >
          {/* Contact Information */}
          <div className="flex items-center space-x-3 sm:space-x-6">

            {/* Phone */}
            <a
              href="tel:+919246411464"
              className="
                flex
                items-center
                hover:text-white
                transition-colors
                duration-300
              "
            >
              <Phone
                className="
                  w-3
                  h-3
                  sm:w-3.5
                  sm:h-3.5
                  mr-1
                  sm:mr-2
                  text-sky-200
                "
              />

              <span>
                +91 9246411464
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:icngmr2026@vbithyd.ac.in"
              className="
                hidden
                xs:flex
                items-center
                hover:text-white
                transition-colors
                duration-300
              "
            >
              <Mail
                className="
                  w-3
                  h-3
                  sm:w-3.5
                  sm:h-3.5
                  mr-1
                  sm:mr-2
                  text-sky-200
                "
              />

              <span className="truncate max-w-[150px] sm:max-w-none">
                icngmr2026@vbithyd.ac.in
              </span>
            </a>
          </div>


          {/* Social Links */}
          <div className="flex items-center space-x-3">

            <div
              className="
                flex
                items-center
                space-x-2
                sm:space-x-3
                border-l
                border-white/20
                pl-3
              "
            >
              <a
                href="#"
                aria-label="Instagram"
                className="
                  hover:text-sky-200
                  transition-colors
                  duration-300
                "
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  hover:text-sky-200
                  transition-colors
                  duration-300
                "
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="
                  hover:text-sky-200
                  transition-colors
                  duration-300
                "
              >
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>

          </div>
        </div>
      </div>


      {/* =====================================================
          2. MAIN BRANDING HEADER
      ====================================================== */}

      <div
        className={`
          bg-white
          transition-all
          duration-500
          ${isScrolled
            ? 'py-2 border-b border-slate-100 shadow-sm'
            : 'py-4 sm:py-6'
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            flex
            flex-col
            lg:flex-row
            justify-between
            items-center
            gap-4
            lg:gap-6
          "
        >

          {/* Branding */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-left">

            <img
              src="/vbit.jpg"
              alt="VBIT Logo"
              className={`
                w-auto
                object-contain
                transition-all
                duration-500
                ${isScrolled
                  ? 'h-10 sm:h-12'
                  : 'h-14 sm:h-20'
                }
              `}
            />

            <div className="border-l-2 border-sky-100 pl-2.5 sm:pl-5">

              <h1
                className="
                  text-[11px]
                  sm:text-sm
                  md:text-lg
                  font-black
                  text-slate-900
                  leading-tight
                  uppercase
                  tracking-tight
                "
              >
                Vignana Bharathi Institute of Technology (Autonomous)
              </h1>

              <div className="mt-0.5 sm:mt-1">

                <p
                  className="
                    text-sky-600
                    font-extrabold
                    text-[8px]
                    sm:text-[10px]
                    md:text-xs
                    uppercase
                    tracking-widest
                    leading-none
                  "
                >
                  International Conference on
                </p>

                <p
                  className="
                    text-slate-600
                    font-bold
                    text-[9px]
                    sm:text-[11px]
                    md:text-[13px]
                    italic
                    leading-tight
                    mt-1
                  "
                >
                  “Next-Generation Machine learning and Reconfigurable intelligence”
                </p>

              </div>
            </div>
          </div>


          {/* Accreditation Logos */}
          <div
            className={`
              hidden
              sm:flex
              items-center
              space-x-4
              md:space-x-8
              transition-all
              duration-500
              ${isScrolled
                ? 'scale-75 origin-right'
                : 'scale-100'
              }
            `}
          >
            <img
              src="/aicte.png"
              alt="aicte"
              className="h-10 sm:h-14 w-auto"
            />

            <img
              src="/NBA.png"
              alt="NBA"
              className="h-12 sm:h-16 w-auto"
            />

            <img
              src="/NAAC.jpeg"
              alt="NAAC"
              className="h-10 sm:h-14 w-auto"
            />

            <img
              src="/ugc.png"
              alt="ugc"
              className="h-10 sm:h-14 w-auto"
            />

            <img
              src="/JNTUH.png"
              alt="JNTUH"
              className="h-10 sm:h-14 w-auto"
            />

          </div>

        </div>
      </div>


      {/* =====================================================
          3. STICKY NAVIGATION
      ====================================================== */}

      <nav
        className={`
          sticky
          top-0
          z-[100]
          transition-all
          duration-500
          ${isScrolled
            ? 'bg-sky-500/95 backdrop-blur-md shadow-2xl py-2'
            : 'bg-sky-500 py-3'
          }
        `}
      >
        <div className="max-w-[98%] mx-auto px-4">

          <div className="flex justify-center items-center">

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <div className="hidden xl:flex items-center justify-center gap-x-1.5">

              <NavLink to="/" icon={Home}>
                Home
              </NavLink>

              <NavLink to="/about" icon={Info}>
                About
              </NavLink>

              <NavLink to="/keynote-speakers" icon={Mic}>
                Keynote Speakers
              </NavLink>

              <NavLink to="/committee" icon={Users}>
                Committee
              </NavLink>

              <NavLink to="/technical-tracks" icon={BookOpen}>
                Tracks
              </NavLink>


              {/* Important Dates */}
              <a
                href="/#important-dates"
                onClick={handleImportantDatesClick}
                className="
                  flex
                  items-center
                  whitespace-nowrap
                  text-[10px]
                  lg:text-xs
                  font-black
                  text-white
                  px-2
                  lg:px-2.5
                  py-2
                  rounded-xl
                  transition-colors
                  duration-300
                  hover:bg-white/20
                "
              >
                <Calendar className="h-4 w-4 mr-2" />

                Important Dates
              </a>


              {/* =================================================
                  ETHICS DROPDOWN
              ================================================== */}

              <div
                className="relative group h-full"
                onMouseEnter={() => setIsEthicsOpen(true)}
                onMouseLeave={() => setIsEthicsOpen(false)}
              >

                <button
                  type="button"
                  onClick={() => setIsEthicsOpen((previous) => !previous)}
                  className={`
                    flex
                    items-center
                    whitespace-nowrap
                    text-[10px]
                    lg:text-xs
                    font-black
                    px-2
                    lg:px-2.5
                    py-2
                    rounded-xl
                    transition-colors
                    duration-300
                    ${location.pathname.includes('guidelines')
                      ? 'bg-gradient-to-br from-white to-sky-50 text-slate-900 shadow-lg border-b-2 border-sky-300'
                      : 'text-white hover:bg-white/20'
                    }
                  `}
                >
                  <Scale
                    className={`
                      h-4
                      w-4
                      mr-2
                      ${location.pathname.includes('guidelines')
                        ? 'text-sky-500'
                        : 'text-white'
                      }
                    `}
                  />

                  Ethics & Malpractices

                  <ChevronDown
                    className={`
                      ml-1
                      h-3
                      w-3
                      transition-transform
                      duration-300
                      ${isEthicsOpen
                        ? 'rotate-180'
                        : ''
                      }
                    `}
                  />
                </button>


                {/* Dropdown Spacer */}
                <div className="absolute h-4 w-full top-full" />


                {/* Dropdown */}
                <div
                  className={`
                    absolute
                    top-[calc(100%+8px)]
                    left-0
                    w-52
                    bg-white
                    rounded-2xl
                    shadow-2xl
                    py-3
                    border
                    border-slate-100
                    transition-all
                    duration-300
                    origin-top
                    ${isEthicsOpen
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                    }
                  `}
                >
                  {[
                    {
                      name: 'Author Guidelines',
                      path: '/author-guidelines',
                    },
                    {
                      name: 'Editor Guidelines',
                      path: '/editor-guidelines',
                    },
                    {
                      name: 'Reviewer Guidelines',
                      path: '/reviewer-guidelines',
                    },
                    {
                      name: 'Review Process',
                      path: '/review-process',
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="
                        flex
                        items-center
                        px-5
                        py-3
                        text-sm
                        text-slate-700
                        hover:bg-sky-50
                        hover:text-sky-600
                        font-bold
                        transition-colors
                        duration-200
                      "
                      onClick={() => setIsEthicsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

              </div>


              <NavLink to="/registration" icon={UserPlus}>
                Registration
              </NavLink>

              <NavLink to="/contact" icon={Phone}>
                Contact
              </NavLink>

              <NavLink to="/acknowledgment" icon={Heart}>
                Acknowledgment
              </NavLink>

            </div>


            {/* =================================================
                MOBILE / TABLET HEADER
            ================================================== */}

            <div className="xl:hidden flex justify-between w-full items-center">

              <div className="flex flex-col">

                <span
                  className="
                    text-white
                    font-black
                    text-base
                    leading-none
                    tracking-tight
                  "
                >
                  ICNGMR 2026
                </span>

                <span
                  className="
                    text-sky-100
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    mt-1
                  "
                >
                  International Conference
                </span>

              </div>


              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label={
                  isMobileMenuOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={isMobileMenuOpen}
                onClick={() =>
                  setIsMobileMenuOpen((previous) => !previous)
                }
                className="
                  text-white
                  p-2.5
                  bg-white/10
                  rounded-xl
                  active:scale-90
                  transition-transform
                  shadow-inner
                "
              >
                {isMobileMenuOpen ? (
                  <X size={26} />
                ) : (
                  <Menu size={26} />
                )}
              </button>

            </div>

          </div>
        </div>


        {/* =====================================================
            MOBILE NAVIGATION DRAWER
        ====================================================== */}

        <div
          className={`
            xl:hidden
            overflow-y-auto
            transition-all
            duration-500
            bg-sky-600
            border-white/10
            ${isMobileMenuOpen
              ? 'max-h-[calc(100vh-80px)] opacity-100 border-t'
              : 'max-h-0 opacity-0 pointer-events-none'
            }
          `}
        >
          <div className="p-6 space-y-2">

            {/* Home */}
            <Link
              to="/"
              className="
                flex
                items-center
                text-white
                p-3
                font-bold
                rounded-xl
                hover:bg-white/10
                transition-colors
                duration-200
              "
            >
              <Home size={18} className="mr-3" />
              Home
            </Link>


            {/* About */}
            <Link
              to="/about"
              className="
                flex
                items-center
                text-white
                p-3
                font-bold
                rounded-xl
                hover:bg-white/10
                transition-colors
                duration-200
              "
            >
              <Info size={18} className="mr-3" />
              About
            </Link>


            {/* Keynote Speakers */}
            <Link
              to="/keynote-speakers"
              className="
                flex
                items-center
                text-white
                p-3
                font-bold
                rounded-xl
                hover:bg-white/10
                transition-colors
                duration-200
              "
            >
              <Mic size={18} className="mr-3" />
              Keynote Speakers
            </Link>


            {/* Committee */}
            <Link
              to="/committee"
              className="
                flex
                items-center
                text-white
                p-3
                font-bold
                rounded-xl
                hover:bg-white/10
                transition-colors
                duration-200
              "
            >
              <Users size={18} className="mr-3" />
              Committee
            </Link>


            {/* Tracks */}
            <Link
              to="/technical-tracks"
              className="
                flex
                items-center
                text-white
                p-3
                font-bold
                rounded-xl
                hover:bg-white/10
                transition-colors
                duration-200
              "
            >
              <BookOpen size={18} className="mr-3" />
              Tracks
            </Link>


            {/* Important Dates */}
            <button
              type="button"
              onClick={handleImportantDatesClick}
              className="
                w-full
                flex
                items-center
                text-white
                p-3
                font-bold
                rounded-xl
                hover:bg-white/10
                text-left
                transition-colors
                duration-200
              "
            >
              <Calendar size={18} className="mr-3" />
              Important Dates
            </button>


            {/* =================================================
                MOBILE ETHICS MENU
            ================================================== */}

            <div className="space-y-1">

              <button
                type="button"
                onClick={() =>
                  setIsMobileEthicsOpen(
                    (previous) => !previous
                  )
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  text-white
                  p-3
                  font-bold
                  rounded-xl
                  hover:bg-white/10
                  transition-colors
                  duration-200
                "
              >
                <div className="flex items-center">
                  <Scale
                    size={18}
                    className="mr-3"
                  />

                  Ethics & Malpractices
                </div>

                <ChevronDown
                  size={16}
                  className={`
                    transition-transform
                    duration-300
                    ${isMobileEthicsOpen
                      ? 'rotate-180'
                      : ''
                    }
                  `}
                />
              </button>


              {isMobileEthicsOpen && (
                <div
                  className="
                    ml-9
                    space-y-1
                    bg-white/5
                    rounded-xl
                    p-2
                  "
                >
                  <Link
                    to="/author-guidelines"
                    className="
                      block
                      p-2
                      text-sky-100
                      text-sm
                      font-medium
                      hover:text-white
                      transition-colors
                    "
                  >
                    Author Guidelines
                  </Link>

                  <Link
                    to="/editor-guidelines"
                    className="
                      block
                      p-2
                      text-sky-100
                      text-sm
                      font-medium
                      hover:text-white
                      transition-colors
                    "
                  >
                    Editor Guidelines
                  </Link>

                  <Link
                    to="/reviewer-guidelines"
                    className="
                      block
                      p-2
                      text-sky-100
                      text-sm
                      font-medium
                      hover:text-white
                      transition-colors
                    "
                  >
                    Reviewer Guidelines
                  </Link>

                  <Link
                    to="/review-process"
                    className="
                      block
                      p-2
                      text-sky-100
                      text-sm
                      font-medium
                      hover:text-white
                      transition-colors
                    "
                  >
                    Review Process
                  </Link>
                </div>
              )}

            </div>


            {/* Contact */}
            <Link
              to="/contact"
              className="
                flex
                items-center
                text-white
                p-3
                font-bold
                rounded-xl
                hover:bg-white/10
                transition-colors
                duration-200
              "
            >
              <Phone size={18} className="mr-3" />
              Contact
            </Link>


            {/* Acknowledgment */}
            <Link
              to="/acknowledgment"
              className="
                flex
                items-center
                text-white
                p-3
                font-bold
                rounded-xl
                hover:bg-white/10
                transition-colors
                duration-200
              "
            >
              <Heart size={18} className="mr-3" />
              Acknowledgment
            </Link>


            {/* Register Button */}
            <div className="pt-4">

              <Link
                to="/registration"
                className="
                  block
                  w-full
                  bg-white
                  text-sky-600
                  text-center
                  py-4
                  rounded-2xl
                  font-black
                  shadow-xl
                  active:scale-95
                  transition-transform
                  duration-200
                "
              >
                <UserPlus
                  size={20}
                  className="inline-block mr-2"
                />

                Register Now
              </Link>

            </div>

          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;