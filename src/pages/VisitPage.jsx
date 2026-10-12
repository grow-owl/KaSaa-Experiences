import { ArrowLeft, MapPin, Clock, Compass, ExternalLink, MessageCircle, Car, Info, ShieldAlert, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { siteConfig } from '../data/siteConfig';

export default function VisitPage({ onOpenEnquiry }) {
  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SEOHead
        title="Visit Us, Location & Studio Hours"
        description="Find directions and visiting hours for KaSaa Experiences on the 5th Floor, INOX, Vega Circle Mall, Sevoke Road, Siliguri. Open daily 11 AM - 8 PM."
        canonicalPath="/visit"
      />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs text-[#4D534D]">
          <Link to="/" className="hover:text-[#245449] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#242824] font-medium">Visit</span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
          Plan Your Visit to KaSaa Experiences
        </h1>

        <p className="text-base sm:text-lg text-[#4D534D] leading-relaxed">
          Find us on the 5th floor inside Vega Circle Mall, right along Sevoke Road in Siliguri. Here is everything you need to know about getting here, finding the studio inside the mall, and coordinating your workshop.
        </p>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Hours & Address (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Address Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD0] shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#245449]">
              <span className="p-2 rounded-xl bg-[#DCE6D9] text-[#245449]">
                <MapPin className="w-5 h-5 text-[#963E23]" />
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#242824]">
                Location & Address
              </h2>
            </div>

            <address className="not-italic text-sm sm:text-base text-[#242824] leading-relaxed space-y-1">
              <p className="font-bold text-[#245449]">{siteConfig.location.floor}</p>
              <p>{siteConfig.location.building}</p>
              <p>{siteConfig.location.street}</p>
              <p>{siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}</p>
            </address>

            <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#E2DDD0] text-xs text-[#4D534D] space-y-1">
              <strong className="text-[#242824] block">How to find our floor inside the mall:</strong>
              <p>
                Enter Vega Circle Mall from Sevoke Road. Take the central elevators or escalators up to the <strong>5th Floor</strong> near INOX cinema.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open directions to Vega Circle Mall on Google Maps"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-xs font-semibold rounded-xl shadow-xs transition-colors"
              >
                <Compass className="w-4 h-4 text-[#E9BF69]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD0] shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#245449]">
              <span className="p-2 rounded-xl bg-[#DCE6D9] text-[#245449]">
                <Clock className="w-5 h-5 text-[#8C6A1E]" />
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#242824]">
                Operating Hours
              </h2>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between border-b border-[#F1ECE1] pb-2">
                <span className="text-sm font-semibold text-[#242824]">{siteConfig.hours.days}</span>
                <span className="text-base font-bold text-[#245449]">{siteConfig.hours.display}</span>
              </div>
            </div>

            {siteConfig.hours.isProvisional && (
              <div className="p-3.5 rounded-xl bg-[#FFF8E7] border border-[#E9BF69]/60 text-xs text-[#7A5B18] space-y-1 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#963E23] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#61450C]">Provisional Hours Note:</strong>
                  <span>
                    Hours are currently sourced from public directory listings (11:00 AM – 8:00 PM daily). Final confirmation from the studio owner will be verified prior to official launch.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Direct Call & WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD0] shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#245449]">
              <span className="p-2 rounded-xl bg-[#DCE6D9] text-[#245449]">
                <Phone className="w-5 h-5 text-[#245449]" />
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#242824]">
                Direct Call & WhatsApp
              </h2>
            </div>

            <div className="space-y-1">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="text-xl sm:text-2xl font-bold text-[#245449] hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
              <p className="text-xs sm:text-sm text-[#4D534D]">
                Get in touch directly with our studio team for immediate session availability and group workshop bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Studio Guide & WhatsApp CTA (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#E2DDD0] space-y-5">
            <ImagePlaceholder
              src="/images/gallery-studio-interior.webp"
              alt="Interior of KaSaa Experiences on 5th floor Vega Circle Mall"
              title="Studio Space · 5th Floor"
              type="space"
              aspectRatio="16/10"
            />

            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#242824] flex items-center gap-2">
                <Car className="w-4 h-4 text-[#963E23]" />
                Parking & Accessibility
              </h3>
              <p className="text-xs sm:text-sm text-[#4D534D] leading-relaxed">
                Vega Circle Mall provides covered basement multi-level parking for both four-wheelers and two-wheelers, with full elevator access directly to the 5th floor.
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#E2DDD0]">
              <h3 className="font-serif font-bold text-lg text-[#242824] flex items-center gap-2">
                <Info className="w-4 h-4 text-[#245449]" />
                Advance Coordination
              </h3>
              <p className="text-xs sm:text-sm text-[#4D534D] leading-relaxed">
                Pottery wheels and workshop tables have limited simultaneous seating. Sending a quick WhatsApp enquiry ahead of your arrival guarantees your station is ready.
              </p>

              <button
                type="button"
                onClick={() => onOpenEnquiry('general')}
                aria-label="Enquire about current session availability via WhatsApp"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-99"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp: {siteConfig.contact.phone}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
