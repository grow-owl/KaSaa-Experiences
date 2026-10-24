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
  'bespoke-celebrations': {
    subtitle: 'Private setups & date nights',
    icon: PartyPopper,
  },
};

export default function Navbar({ onOpenEnquiry, onMobileMenuToggle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const onMobileMenuToggleRef = useRef(onMobileMenuToggle);
  useEffect(() => {
    onMobileMenuToggleRef.current = onMobileMenuToggle;
  }, [onMobileMenuToggle]);

  // Handle scroll state for navbar shadow / styling
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
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Click outside listener for desktop activities dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActivitiesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Smooth hover handlers with grace timeout to prevent accidental closing
  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActivitiesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActivitiesDropdownOpen(false);
    }, 180);
  };

  // Nav links in order requested: Celebrations, DIY Kids, Food Menu, Gallery, Our Story, Visit Us
  const otherNavLinks = [
    { name: 'Celebrations', path: '/#together', hash: 'together' },
    { name: 'DIY Kids', path: '/activities/soft-play' },
    { name: 'Food Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Visit Us', path: '/visit' },
  ];

  const handleLinkClick = (link, e) => {
    setMobileMenuOpen(false);
    setActivitiesDropdownOpen(false);

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
              {/* Activities Dropdown Trigger */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setActivitiesDropdownOpen((prev) => !prev)}
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
                      activitiesDropdownOpen
                        ? 'rotate-180 text-[#245449]'
                        : 'text-[#6F776F]'
                    }`}
                  />
                </button>

                {/* Desktop Dropdown Mega-Panel */}
                {activitiesDropdownOpen && (
                  <div
                    role="menu"
                    aria-label="Activities"
                    className="absolute top-full left-0 mt-1.5 w-[580px] max-w-[calc(100vw-2rem)] bg-[#F8F4EB] rounded-2xl border border-[#E8E0D0] shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2"
                  >
                    {/* 2-Column Grid of 12 Categories */}
                    <div className="p-3 grid grid-cols-2 gap-1.5 max-h-[380px] overflow-y-auto">
                      {BROCHURE_CATEGORIES.map((category) => {
                        const meta = CATEGORY_META[category.slug] || {
                          subtitle: category.tagline,
                          icon: Sparkles,
                        };
                        const IconComponent = meta.icon;
                        const isCurrent =
                          location.pathname === `/activities/${category.slug}`;

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
                    <div className="px-4 py-2.5 bg-[#FAF7F0] border-t border-[#E8E0D0] flex items-center justify-center">
                      <Link
                        to="/activities"
                        onClick={() => setActivitiesDropdownOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245449] hover:text-[#193B33] hover:underline"
                      >
                        <span>View All Activities</span>
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
                  className="px-2 lg:px-3 py-2 text-xs lg:text-sm font-semibold rounded-lg transition-colors text-[#242824] hover:text-[#245449] hover:bg-[#F1ECE1] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245449] whitespace-nowrap"
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
                aria-label="Quick book enquiry via WhatsApp"
                className="px-3.5 py-2 min-h-[40px] bg-[#245449] text-[#F8F4EB] text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5 active:scale-98 cursor-pointer"
              >
                <span>Book</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#242824] hover:bg-[#EAE4D5] focus-visible:ring-2 focus-visible:ring-[#245449] cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Accessible Mobile Drawer Portal (Mounted to document.body to avoid stacking context & clipping) */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-50 md:hidden flex flex-col animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
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
                      12
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
                      <span>Explore All 12 Activities</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="pt-1.5 space-y-0.5 max-h-[260px] overflow-y-auto">
                      {BROCHURE_CATEGORIES.map((cat) => {
                        const meta = CATEGORY_META[cat.slug] || { icon: Sparkles };
                        const IconComp = meta.icon;
                        const isCurrent =
                          location.pathname === `/activities/${cat.slug}`;

                        return (
                          <Link
                            key={cat.id}
                            to={`/activities/${cat.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                              isCurrent
                                ? 'bg-[#245449] text-white'
                                : 'text-[#242824] hover:bg-[#EAE4D5] hover:text-[#245449]'
                            }`}
                          >
                            <div
                              className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                                isCurrent
                                  ? 'bg-white/20 text-white'
                                  : 'bg-white border border-[#E2DDD0] text-[#245449]'
                              }`}
                            >
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                            <span className="truncate">{cat.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Other Direct Nav Links */}
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

            {/* Quick Booking & Location Footer */}
            <div className="p-5 pt-4 border-t border-[#E8E0D0] bg-[#F3EFE6] space-y-3 pb-safe">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('general');
                }}
                aria-label="Open WhatsApp enquiry to book a session"
                className="w-full py-3.5 px-4 bg-[#245449] hover:bg-[#193B33] active:bg-[#143029] text-[#F8F4EB] font-semibold text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#E9BF69]" />
                <span>Book / Enquire via WhatsApp</span>
              </button>
              <div className="text-center text-xs text-[#4D534D] space-y-0.5">
                <p className="font-medium text-[#242824]">Vega Circle Mall, 5th Floor · Siliguri</p>
                <p>Open Daily 11:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

