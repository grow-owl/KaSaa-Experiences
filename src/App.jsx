import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import { buildEnquiryMessage, getWhatsAppUrl } from './utils/whatsapp';

import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import MenuPage from './pages/MenuPage';
import VisitPage from './pages/VisitPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import BookingPolicyPage from './pages/BookingPolicyPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top or anchor target helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = React.useCallback((isOpen) => {
    setIsMobileMenuOpen(isOpen);
  }, []);

  const handleOpenEnquiry = (activity = 'general', occasion = '') => {
    const message = buildEnquiryMessage({
      type: activity,
      occasion: occasion,
    });
    const url = getWhatsAppUrl(message);
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F4EB] text-[#242824] pb-14 md:pb-0">
      <ScrollToTop />

      {/* Primary Sticky Navbar */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onMobileMenuToggle={handleMobileMenuToggle}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
          {/* External page routes removed per user request: redirect to respective homepage sections */}
          <Route path="/experiences" element={<Navigate to="/#experiences" replace />} />
          <Route path="/together" element={<Navigate to="/#together" replace />} />
          <Route path="/menu" element={<MenuPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/visit" element={<VisitPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/booking-cancellation-policy" element={<BookingPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Primary Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Mobile Sticky Quick Booking Control (Hidden when mobile drawer is active) */}
      <MobileBottomBar
        onOpenEnquiry={handleOpenEnquiry}
        isHidden={isMobileMenuOpen}
      />
    </div>
  );
}
