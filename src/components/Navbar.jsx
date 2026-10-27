import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Calendar,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Palette,
  Droplets,
  Compass,
  Heart,
  Layers,
  Scissors,
  Gift,
  Gem,
  BookOpen,
  Baby,
  PartyPopper,
  Users,
} from 'lucide-react';
import Logo from './Logo';
import { BROCHURE_CATEGORIES } from '../data/brochureActivities';

// Distinctive icons and brief explanatory subtitles for each brochure category
const CATEGORY_META = {
  'classic-canvas': {
    subtitle: 'Easel & acrylic painting',
    icon: Palette,
  },
  'fluid-expressions': {
    subtitle: 'Pouring & bear marbling',
    icon: Droplets,
  },
  'the-artisan-edit': {
    subtitle: 'Lippan art & dot mandalas',
    icon: Compass,
  },
  'mini-memoirs': {
    subtitle: 'Pebbles, frames & cutouts',
    icon: Heart,
  },
  'the-textured-tales': {
    subtitle: 'Palette knife & 3D moon art',
    icon: Layers,
  },
  'cloth-and-colour': {
    subtitle: 'Tote bags, caps & scarves',
    icon: Scissors,
  },
  'out-of-the-ordinary': {
    subtitle: 'Plushies, pots & glasses',
    icon: Gift,
  },
  'personalised-memoirs': {
    subtitle: 'Clay art, charms & candles',
    icon: Sparkles,
  },
  'resin-reflections': {
    subtitle: 'Geode clocks & epoxy jewelry',
    icon: Gem,
  },
  'decoupage-stories': {
    subtitle: 'Vintage bottles & coasters',
    icon: BookOpen,
  },
  'soft-play': {
    subtitle: 'Kids play arena & birthdays',
    icon: Baby,
  },
};

const CELEBRATION_ITEMS = [
  {
    name: 'Bespoke Celebrations',
    subtitle: 'Private setups, cooking dates & proposals',
    path: '/celebrations',
    icon: PartyPopper,
  },
  {
    name: 'Date Plans & Anniversaries',
    subtitle: 'Romantic couple setups & pottery dates',
    path: '/celebrations',
    icon: Heart,
  },
  {
    name: 'Planning a Group Experience?',
    subtitle: 'Birthdays, milestones & reunions',
    path: '/celebrations',
    icon: Users,
  },
  {
    name: 'Signature Experiences',
    subtitle: 'Full planning & custom themes',
    path: '/celebrations',
    icon: Sparkles,
  },
];

export default function Navbar({ onOpenEnquiry, onMobileMenuToggle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
  const [mobileCelebrationsOpen, setMobileCelebrationsOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);
  const [celebrationsDropdownOpen, setCelebrationsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activitiesDropdownRef = useRef(null);
  const celebrationsDropdownRef = useRef(null);
  const activitiesTimeoutRef = useRef(null);
  const celebrationsTimeoutRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const onMobileMenuToggleRef = useRef(onMobileMenuToggle);
  useEffect(() => {
    onMobileMenuToggleRef.current = onMobileMenuToggle;
  }, [onMobileMenuToggle]);

  // Elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActivitiesDropdownOpen(false);
    setCelebrationsDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll only when mobile menu is open & notify parent
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      onMobileMenuToggleRef.current?.(true);
    } else {
      document.body.style.overflow = '';
      onMobileMenuToggleRef.current?.(false);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActivitiesDropdownOpen(false);
        setCelebrationsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Click outside listener for desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activitiesDropdownRef.current && !activitiesDropdownRef.current.contains(e.target)) {
        setActivitiesDropdownOpen(false);
      }
      if (celebrationsDropdownRef.current && !celebrationsDropdownRef.current.contains(e.target)) {
        setCelebrationsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (activitiesTimeoutRef.current) clearTimeout(activitiesTimeoutRef.current);
      if (celebrationsTimeoutRef.current) clearTimeout(celebrationsTimeoutRef.current);
    };
  }, []);

  // Hover handlers for Activities
  const handleActivitiesMouseEnter = () => {
    if (activitiesTimeoutRef.current) clearTimeout(activitiesTimeoutRef.current);
    setActivitiesDropdownOpen(true);
    setCelebrationsDropdownOpen(false);
  };

  const handleActivitiesMouseLeave = () => {
    activitiesTimeoutRef.current = setTimeout(() => {
      setActivitiesDropdownOpen(false);
    }, 180);
  };

  // Hover handlers for Celebrations
  const handleCelebrationsMouseEnter = () => {
    if (celebrationsTimeoutRef.current) clearTimeout(celebrationsTimeoutRef.current);
    setCelebrationsDropdownOpen(true);
    setActivitiesDropdownOpen(false);
  };

  const handleCelebrationsMouseLeave = () => {
    celebrationsTimeoutRef.current = setTimeout(() => {
      setCelebrationsDropdownOpen(false);
    }, 180);
  };

  // Nav links: DIY Kits, Food Menu, Gallery, Our Story, Visit Us
  const otherNavLinks = [
    { name: 'DIY Kits', path: '/diy-kits' },
    { name: 'Food Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Visit Us', path: '/visit' },
  ];

  const handleLinkClick = (link, e) => {
    setMobileMenuOpen(false);
    setActivitiesDropdownOpen(false);
    setCelebrationsDropdownOpen(false);

    if (link.path === '/') {
      if (location.pathname === '/') {
        e?.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (link.hash) {
      if (location.pathname === '/') {
        e?.preventDefault();
        const el = document.getElementById(link.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${link.hash}`);
      }
    }
  };

  const isActivitiesActive =
    activitiesDropdownOpen || location.pathname.startsWith('/activities');
  const isCelebrationsActive =
    celebrationsDropdownOpen || location.pathname.startsWith('/celebrations') || location.pathname === '/together';

  // Filter out any bespoke celebrations from activities brochure categories
  const craftCategories = BROCHURE_CATEGORIES.filter((c) => c.slug !== 'bespoke-celebrations');

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F4EB]/95 backdrop-blur-md shadow-xs border-b border-[#E8E0D0] py-3.5'
            : 'bg-[#F8F4EB] py-4 md:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Brand Logo */}
            <Logo isScrolled={isScrolled} />

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1.5 xl:gap-2">
              {/* Home Link */}
              <Link
                to="/"
                onClick={(e) => handleLinkClick({ path: '/' }, e)}
                className="px-2 lg:px-2.5 xl:px-3 py-1.5 lg:py-2 text-xs lg:text-[13px] xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap text-[#242824] hover:text-[#245449] hover:bg-[#F1ECE1] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245449]"
              >
                Home
              </Link>

              {/* 1. Activities Dropdown Trigger */}
              <div
                className="relative"
                ref={activitiesDropdownRef}
                onMouseEnter={handleActivitiesMouseEnter}
                onMouseLeave={handleActivitiesMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActivitiesDropdownOpen((prev) => !prev);
                    setCelebrationsDropdownOpen(false);
                  }}
                  aria-expanded={activitiesDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Activities menu"
                  className={`px-2.5 lg:px-3 py-2 text-xs lg:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245449] ${
                    isActivitiesActive
                      ? 'text-[#245449] bg-[#F1ECE1]'
                      : 'text-[#242824] hover:text-[#245449] hover:bg-[#F1ECE1]'
                  }`}
                >
                  <span>Activities</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activitiesDropdownOpen ? 'rotate-180 text-[#245449]' : 'text-[#6F776F]'
                    }`}
                  />
                </button>

                {/* Desktop Dropdown Panel for Activities */}
                {activitiesDropdownOpen && (
                  <div
                    role="menu"
                    aria-label="Activities"
                    className="absolute top-full left-0 mt-1.5 w-[560px] max-w-[calc(100vw-2rem)] bg-[#F8F4EB] rounded-2xl border border-[#E8E0D0] shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2"
                  >
                    <div className="p-3 grid grid-cols-2 gap-1.5 max-h-[380px] overflow-y-auto">
                      {craftCategories.map((category) => {
                        const meta = CATEGORY_META[category.slug] || {
                          subtitle: category.tagline,
                          icon: Sparkles,
                        };
                        const IconComponent = meta.icon;
                        const isCurrent = location.pathname === `/activities/${category.slug}`;

                        return (
                          <Link
                            key={category.id}
                            to={`/activities/${category.slug}`}
                            onClick={() => setActivitiesDropdownOpen(false)}
                            role="menuitem"
                            className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                              isCurrent
                                ? 'bg-[#EBF1E9] text-[#245449] ring-1 ring-[#245449]/20'
                                : 'hover:bg-[#F3EFE6] text-[#242824]'
                            }`}
                          >
                            <div
                              className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                isCurrent
                                  ? 'bg-[#245449] text-white'
                                  : 'bg-white border border-[#E2DDD0] text-[#245449] group-hover:bg-[#245449] group-hover:text-white group-hover:border-[#245449]'
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-semibold leading-tight group-hover:text-[#245449] truncate">
                                {category.name}
                              </div>
                              <div className="text-[11px] text-[#6F776F] leading-tight truncate mt-0.5">
                                {meta.subtitle}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom Link to All Activities */}
                    <div className="px-4 py-2.5 bg-[#FAF7F0] border-t border-[#E8E0D0] flex items-center justify-between">
                      <span className="text-[11px] text-[#6F776F]">11 Hands-on Creative Workshops</span>
                      <Link
                        to="/activities"
                        onClick={() => setActivitiesDropdownOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245449] hover:text-[#193B33] hover:underline"
                      >
                        <span>Explore All Activities Menu</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Celebrations Dropdown Trigger */}
              <div
                className="relative"
                ref={celebrationsDropdownRef}
                onMouseEnter={handleCelebrationsMouseEnter}
                onMouseLeave={handleCelebrationsMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => {
                    setCelebrationsDropdownOpen((prev) => !prev);
                    setActivitiesDropdownOpen(false);
                  }}
                  aria-expanded={celebrationsDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Celebrations menu"
                  className={`px-2.5 lg:px-3 py-2 text-xs lg:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245449] ${
                    isCelebrationsActive
                      ? 'text-[#245449] bg-[#F1ECE1]'
                      : 'text-[#242824] hover:text-[#245449] hover:bg-[#F1ECE1]'
                  }`}
                >
                  <span>Celebrations</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      celebrationsDropdownOpen ? 'rotate-180 text-[#245449]' : 'text-[#6F776F]'
                    }`}
                  />
                </button>

                {/* Desktop Dropdown Panel for Celebrations */}
                {celebrationsDropdownOpen && (
                  <div
                    role="menu"
                    aria-label="Celebrations"
                    className="absolute top-full left-0 mt-1.5 w-[380px] max-w-[calc(100vw-2rem)] bg-[#F8F4EB] rounded-2xl border border-[#E8E0D0] shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2"
                  >
                    <div className="p-3 space-y-1.5">
                      {CELEBRATION_ITEMS.map((item) => {
                        const IconComponent = item.icon;

                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setCelebrationsDropdownOpen(false)}
                            role="menuitem"
                            className="group flex items-start gap-3 p-2.5 rounded-xl transition-all hover:bg-[#F3EFE6] text-[#242824]"
                          >
                            <div className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-white border border-[#E2DDD0] text-[#B37B15] group-hover:bg-[#245449] group-hover:text-white group-hover:border-[#245449] transition-colors">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-semibold leading-tight group-hover:text-[#245449] truncate">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-[#6F776F] leading-tight truncate mt-0.5">
                                {item.subtitle}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom Link to All Celebrations */}
                    <div className="px-4 py-2.5 bg-[#FAF7F0] border-t border-[#E8E0D0] flex items-center justify-between">
                      <span className="text-[11px] text-[#6F776F]">Milestones & Gatherings</span>
                      <Link
                        to="/celebrations"
                        onClick={() => setCelebrationsDropdownOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245449] hover:text-[#193B33] hover:underline"
                      >
                        <span>Explore Celebrations Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              {otherNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleLinkClick(link, e)}
                  className="px-2 lg:px-2.5 xl:px-3 py-1.5 lg:py-2 text-xs lg:text-[13px] xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap text-[#242824] hover:text-[#245449] hover:bg-[#F1ECE1] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245449]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Primary CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEnquiry('general')}
                aria-label="Book a creative workshop or enquiry"
                className="px-5 py-2.5 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-sm font-semibold rounded-xl shadow-xs transition-all duration-200 hover:shadow-md active:scale-98 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#245449] focus-visible:ring-offset-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#E9BF69]" />
                <span>Book an Experience</span>
              </button>
            </div>

            {/* Mobile Quick Action & Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenEnquiry('general')}
                aria-label="Quick booking enquiry"
                className="px-3.5 py-1.5 min-h-[44px] bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E9BF69]" />
                <span>Book</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#242824] hover:bg-[#F1ECE1] active:bg-[#EAE4D5] transition-colors focus-visible:ring-2 focus-visible:ring-[#245449] cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? 'Close main navigation menu' : 'Open main navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* =============================================================
          MOBILE NAVIGATION DRAWER
          ============================================================= */}
      {mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-start">
            {/* Dark Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Content Panel */}
            <div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              className="relative z-10 w-full bg-[#F8F4EB] border-b border-[#E8E0D0] shadow-2xl flex flex-col max-h-[92dvh] overflow-y-auto"
            >
              {/* Drawer Header with Logo & Close Button */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E0D0] bg-[#F8F4EB]">
                <div onClick={() => setMobileMenuOpen(false)}>
                  <Logo />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#242824] hover:bg-[#EAE4D5] active:scale-95 transition-colors focus-visible:ring-2 focus-visible:ring-[#245449] cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="px-5 py-5 space-y-2">
                <p className="px-3 pb-1 text-xs font-bold uppercase tracking-wider text-[#963E23]">
                  Explore KaSaa
                </p>

                {/* Home Link */}
                <Link
                  to="/"
                  onClick={(e) => handleLinkClick({ path: '/' }, e)}
                  className="w-full text-left px-4 py-3.5 rounded-xl text-base font-semibold text-[#242824] hover:bg-[#EAE4D5] hover:text-[#245449] active:bg-[#E2DDD0] transition-colors flex items-center justify-between"
                >
                  <span>Home</span>
                  <span className="text-[#963E23] text-sm opacity-60">→</span>
                </Link>

                {/* Activities Accordion in Mobile */}
                <div className="rounded-xl overflow-hidden border border-[#E8E0D0] bg-[#FAF7F0]">
                  <button
                    type="button"
                    onClick={() => setMobileActivitiesOpen((prev) => !prev)}
                    className="w-full text-left px-4 py-3.5 text-base font-semibold text-[#242824] hover:bg-[#EAE4D5] active:bg-[#E2DDD0] transition-colors flex items-center justify-between cursor-pointer"
                    aria-expanded={mobileActivitiesOpen}
                  >
                    <div className="flex items-center gap-2">
                      <span>Activities</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EBF1E9] text-[#245449] border border-[#DCE6D9]">
                        11
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#963E23] transition-transform duration-200 ${
                        mobileActivitiesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Submenu for Activities */}
                  {mobileActivitiesOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1 border-t border-[#E8E0D0] bg-[#F4EFE6]/60">
                      <Link
                        to="/activities"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold bg-[#245449] text-white hover:bg-[#193B33] transition-colors shadow-2xs"
                      >
                        <span>Explore All 11 Activities</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="pt-1 grid grid-cols-1 gap-0.5 max-h-[220px] overflow-y-auto">
                        {craftCategories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/activities/${category.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-3 py-2 rounded-lg text-xs font-semibold text-[#242824] hover:bg-[#EAE4D5] transition-colors flex items-center justify-between"
                          >
                            <span>{category.name}</span>
                            <span className="text-[10px] text-[#6F776F]">p. {category.brochurePage}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Celebrations Accordion in Mobile */}
                <div className="rounded-xl overflow-hidden border border-[#E8E0D0] bg-[#FAF7F0]">
                  <button
                    type="button"
                    onClick={() => setMobileCelebrationsOpen((prev) => !prev)}
                    className="w-full text-left px-4 py-3.5 text-base font-semibold text-[#242824] hover:bg-[#EAE4D5] active:bg-[#E2DDD0] transition-colors flex items-center justify-between cursor-pointer"
                    aria-expanded={mobileCelebrationsOpen}
                  >
                    <div className="flex items-center gap-2">
                      <span>Celebrations</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E9BF69]/20 text-[#7D5B18] border border-[#E9BF69]/30">
                        Dates & Events
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#963E23] transition-transform duration-200 ${
                        mobileCelebrationsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Submenu for Celebrations */}
                  {mobileCelebrationsOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1 border-t border-[#E8E0D0] bg-[#F4EFE6]/60">
                      <Link
                        to="/celebrations"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold bg-[#245449] text-white hover:bg-[#193B33] transition-colors shadow-2xs"
                      >
                        <span>Explore All Celebrations Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="pt-1 space-y-0.5">
                        {CELEBRATION_ITEMS.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-3 py-2 rounded-lg text-xs font-semibold text-[#242824] hover:bg-[#EAE4D5] transition-colors flex items-center justify-between"
                          >
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Other Nav Links */}
                {otherNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => handleLinkClick(link, e)}
                    className="w-full text-left px-4 py-3.5 rounded-xl text-base font-semibold text-[#242824] hover:bg-[#EAE4D5] hover:text-[#245449] active:bg-[#E2DDD0] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#963E23] text-sm opacity-60">→</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Drawer Footer CTA */}
              <div className="mt-auto px-5 py-4 border-t border-[#E8E0D0] bg-[#FAF7F0] space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry('general');
                  }}
                  className="w-full py-3.5 bg-[#245449] hover:bg-[#193B33] text-white font-bold text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#E9BF69]" />
                  <span>Book an Experience</span>
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
