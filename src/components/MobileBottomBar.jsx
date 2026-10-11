import React, { useState, useEffect } from 'react';
import { MessageCircle, Compass } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

/**
 * MobileBottomBar component
 * Provides accessible, thumb-friendly sticky quick actions on mobile.
 * Carefully engineered to:
 * 1. Only show past the hero section (scrollY > 280px)
 * 2. Automatically hide when modal or mobile menu is active
 * 3. Never overlap footer links or form inputs (page bottom padding applied)
 * 4. Respect iPhone/Android device safe areas (pb-safe)
 */
export default function MobileBottomBar({ onOpenEnquiry, isHidden = false }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once scrolled past the initial hero viewport
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isHidden || !isVisible) return null;

  return (
    <aside
      aria-label="Quick mobile booking actions"
      className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-[#F8F4EB]/95 backdrop-blur-md border-t border-[#E2DDD0] px-4 py-2.5 pb-safe shadow-lg transition-transform duration-300"
    >
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => onOpenEnquiry('general')}
          aria-label="Open WhatsApp enquiry to book an experience"
          className="flex-1 py-3 px-4 bg-[#245449] active:bg-[#193B33] text-[#F8F4EB] font-semibold text-xs rounded-xl shadow-xs flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4 text-[#E9BF69]" />
          <span>Enquire / Book Slot</span>
        </button>

        <a
          href={siteConfig.location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions to KaSaa Experiences on Google Maps"
          className="py-3 px-3.5 bg-white active:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5"
        >
          <Compass className="w-4 h-4 text-[#C86F50]" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
}
