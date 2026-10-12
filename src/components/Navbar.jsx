import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenEnquiry, onMobileMenuToggle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
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
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Activities & Workshops', path: '/#experiences', hash: 'experiences' },
    { name: 'Dates & Celebrations', path: '/#together', hash: 'together' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Food Menu', path: '/menu' },
    { name: 'Visit Us', path: '/visit' },
  ];

  const handleLinkClick = (link, e) => {
    setMobileMenuOpen(false);

    if (link.hash) {
      if (location.pathname === '/') {
        e?.preventDefault();
        const el = document.getElementById(link.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Router will navigate to /#hash and ScrollToTop will handle smooth scroll
        navigate(`/#${link.hash}`);
      }
    }
  };

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
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleLinkClick(link, e)}
                  className="px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors text-[#242824] hover:text-[#245449] hover:bg-[#F1ECE1] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245449]"
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
            <div className="px-5 py-5 space-y-1">
              <p className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-[#963E23]">
                Explore KaSaa
              </p>
              {navLinks.map((link) => (
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
