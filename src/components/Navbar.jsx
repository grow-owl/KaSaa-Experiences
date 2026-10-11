import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenEnquiry, onMobileMenuToggle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    if (onMobileMenuToggle) onMobileMenuToggle(false);
  }, [location.pathname, onMobileMenuToggle]);

  // Lock body scroll only when mobile menu is open & notify parent
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (onMobileMenuToggle) onMobileMenuToggle(true);
    } else {
      document.body.style.overflow = '';
      if (onMobileMenuToggle) onMobileMenuToggle(false);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen, onMobileMenuToggle]);

  const navLinks = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'Visit Us', path: '/visit' },
  ];

  const handleLinkClick = (link, e) => {
    if (link.hash && location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(link.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
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
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(link, e)}
                className="px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors text-[#242824] hover:text-[#245449] hover:bg-[#F1ECE1] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245449]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry('general')}
              aria-label="Book a creative workshop or enquiry"
              className="px-5 py-2.5 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-sm font-semibold rounded-xl shadow-xs transition-all duration-200 hover:shadow-md active:scale-98 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#245449] focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4 text-[#E9BF69]" />
              <span>Book an Experience</span>
            </button>
          </div>

          {/* Mobile Quick Action & Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry('general')}
              aria-label="Quick book enquiry via WhatsApp"
              className="px-3.5 py-2 min-h-[40px] bg-[#245449] text-[#F8F4EB] text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5 active:scale-98"
            >
              <span>Book</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#242824] hover:bg-[#EAE4D5] focus-visible:ring-2 focus-visible:ring-[#245449]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-x-0 top-[69px] bottom-0 z-50 bg-[#F8F4EB] border-t border-[#E8E0D0] px-6 py-6 pb-safe overflow-y-auto flex flex-col justify-between md:hidden shadow-xl"
        >
          <div className="space-y-2">
            <div className="pb-3 mb-2 border-b border-[#E8E0D0]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#963E23]">
                Explore KaSaa
              </p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  handleLinkClick(link, e);
                  setMobileMenuOpen(false);
                }}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-[#242824] hover:bg-[#EAE4D5] hover:text-[#245449] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E8E0D0] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry('general');
              }}
              aria-label="Open WhatsApp enquiry to book a session"
              className="w-full py-3.5 px-4 bg-[#245449] text-[#F8F4EB] font-semibold text-center rounded-xl shadow-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#E9BF69]" />
              <span>Book / Enquire via WhatsApp</span>
            </button>
            <div className="text-center text-xs text-[#4D534D]">
              Vega Circle Mall, 5th Floor · Siliguri
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
