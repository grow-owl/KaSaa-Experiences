import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageCircle, Compass, ExternalLink, ShieldCheck, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Logo from './Logo';

export default function Footer({ onOpenEnquiry }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#193B33] text-[#F8F4EB] pt-16 pb-12 border-t border-[#2F6D5F]/40" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2F6D5F]/50">
          {/* Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo footer={true} />
            <p className="text-sm text-[#DCE6D9]/85 max-w-sm leading-relaxed">
              Siliguri's dedicated studio for hands-on pottery workshops, canvas painting sessions, and meaningful shared moments for couples, friends, and celebrations.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEnquiry('general')}
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-lg transition-all flex items-center gap-2 shadow-sm active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Enquiry</span>
              </button>
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KaSaa Experiences on Instagram"
                  className="p-2.5 rounded-lg bg-[#245449] hover:bg-[#E1306C] border border-[#3E7D6F] text-white transition-all shadow-xs flex items-center justify-center group active:scale-98"
                >
                  <svg
                    className="w-4 h-4 text-white transition-transform group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Explore Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif font-semibold text-base text-[#F8F4EB] tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#DCE6D9]/80">
              <li>
                <a href="/#experiences" className="hover:text-[#E9BF69] transition-colors">
                  Creative Experiences
                </a>
              </li>
              <li>
                <Link to="/activities" className="hover:text-[#E9BF69] transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/celebrations" className="hover:text-[#E9BF69] transition-colors">
                  Celebrations
                </Link>
              </li>
              <li>
                <Link to="/diy-kits" className="hover:text-[#E9BF69] transition-colors">
                  DIY Kits
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#E9BF69] transition-colors">
                  Food Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#E9BF69] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-[#E9BF69] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-[#E9BF69] transition-colors">
                  Visit Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Hours & Verification (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif font-semibold text-base text-[#F8F4EB] tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E9BF69]" />
              Operating Hours
            </h3>
            <div className="text-sm space-y-1.5 text-[#DCE6D9]/85">
              <p className="font-medium text-[#F8F4EB]">{siteConfig.hours.days}</p>
              <p className="text-base text-[#E9BF69] font-semibold">{siteConfig.hours.display}</p>
            </div>
          </div>

          {/* Location & Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif font-semibold text-base text-[#F8F4EB] tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C86F50]" />
              Studio Location
            </h3>
            <address className="not-italic text-sm text-[#DCE6D9]/85 space-y-1 leading-relaxed">
              <p>{siteConfig.location.floor}</p>
              <p>{siteConfig.location.building}, {siteConfig.location.street}</p>
              <p>{siteConfig.location.city}, {siteConfig.location.state}</p>
            </address>

            <div className="pt-2 space-y-2.5 border-t border-[#2F6D5F]/40">
              {siteConfig.contact.phone && (
                <div className="flex items-center gap-2 text-xs text-[#DCE6D9]">
                  <Phone className="w-3.5 h-3.5 text-[#E9BF69] shrink-0" />
                  <span className="text-[#DCE6D9]/75">Call / WhatsApp:</span>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="font-bold text-[#F8F4EB] hover:text-[#E9BF69] transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              )}
              <a
                href={siteConfig.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E9BF69] hover:underline"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Get Directions via Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DCE6D9]/60 gap-4">
          <p>© {currentYear} {siteConfig.businessName}. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/booking-cancellation-policy" className="hover:text-[#F8F4EB] transition-colors">
              Booking & Rescheduling Terms
            </Link>
            <Link to="/privacy-policy" className="hover:text-[#F8F4EB] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
