import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  Share2,
  Copy,
  Check,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { siteConfig } from '../../data/siteConfig';
import {
  BROCHURE_CATEGORIES,
  buildBrochureWhatsAppMessage,
  getBrochureWhatsAppUrl,
} from '../../data/brochureActivities';

export default function ActivityDetailPageLayout({
  category,
  onOpenEnquiry,
  customWhatsAppNumber = '',
}) {
  const [copiedItem, setCopiedItem] = useState(null);

  if (!category) {
    return (
      <div className="py-16 text-center text-[#242824]">
        <h2 className="text-2xl font-serif font-bold">Category Not Found</h2>
        <Link to="/activities" className="text-[#245449] underline mt-4 inline-block">
          Return to Activity Menu
        </Link>
      </div>
    );
  }

  // Handle WhatsApp enquiry click
  const handleItemEnquiry = (itemName = '') => {
    const message = buildBrochureWhatsAppMessage({
      categoryName: category.name,
      itemName,
    });

    if (typeof onOpenEnquiry === 'function') {
      onOpenEnquiry(category.enquiryType || 'general', itemName || category.name);
      return;
    }

    const url = getBrochureWhatsAppUrl(message, customWhatsAppNumber);
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Copy message to clipboard
  const handleCopyMessage = async (itemName = '') => {
    const message = buildBrochureWhatsAppMessage({
      categoryName: category.name,
      itemName,
    });

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(message);
        setCopiedItem(itemName || 'category');
        setTimeout(() => setCopiedItem(null), 2500);
      }
    } catch (e) {
      // Fallback
    }
  };

  const currentNumberDisplay =
    customWhatsAppNumber ||
    import.meta.env.VITE_PHONE_NUMBER ||
    siteConfig?.contact?.phone ||
    '+91 92396 07100';

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      <SEOHead
        title={`${category.name} Activities & Workshops`}
        description={`${category.name} at KaSaa Experiences, Vega Circle Mall, Siliguri. ${category.tagline}`}
        canonicalPath={`/activities/${category.slug}`}
        ogImage={category.heroImage ? `${siteConfig.siteUrl}${category.heroImage}` : undefined}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#4D534D]">
        <Link to="/activities" className="hover:text-[#245449] transition-colors flex items-center gap-1.5 font-semibold text-[#245449] group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Activity Menu</span>
        </Link>
        <span className="text-[#A2AAA2]">/</span>
        <span className="text-[#242824] font-semibold">{category.name}</span>
      </nav>

      {/* Hero Header Section */}
      <header className="relative bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD0] shadow-xs overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DCE6D9]/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#FFF8E7]/60 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF7F0] border border-[#E2DDD0] text-xs font-semibold text-[#245449]">
              <Sparkles className="w-3.5 h-3.5 text-[#C86F50]" />
              <span>Official KaSaa Activity Menu</span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#242824] tracking-tight">
              {category.name}
            </h1>

            <p className="text-base sm:text-xl text-[#245449] font-medium leading-relaxed">
              {category.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed max-w-2xl">
              {category.description}
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleItemEnquiry()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-sm font-semibold rounded-2xl shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                aria-label={`Enquire about ${category.name} on WhatsApp`}
              >
                <MessageCircle className="w-4 h-4 text-[#E9BF69]" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Hero Brochure Feature Thumbnail */}
          {category.heroImage && (
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative group max-w-xs sm:max-w-sm w-full">
                <div className="overflow-hidden rounded-2xl border-2 border-[#E2DDD0] bg-[#F8F4EB] shadow-md transition-transform duration-300 group-hover:shadow-lg">
                  <img
                    src={category.heroImage}
                    alt={`${category.name} visual showcase`}
                    className="w-full h-64 sm:h-72 object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                  />
                </div>
                <div className="mt-2 text-center text-xs text-[#4D534D]">
                  Featured in KaSaa Activity Menu
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Inclusions & Studio Notes Bar */}
      <section aria-label="Session Inclusions and Notes" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inclusions */}
        {category.inclusions && category.inclusions.length > 0 && (
          <div className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#E2DDD0] space-y-3">
            <h2 className="font-serif font-bold text-lg text-[#242824] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#245449]" />
              <span>What's Provided for the Session</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4D534D]">
              {category.inclusions.map((inc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C86F50] mt-2 shrink-0" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Special Brochure Notes */}
        {category.specialNotes && category.specialNotes.length > 0 && (
          <div className="bg-[#FFFDF7] rounded-2xl p-6 border border-[#E9BF69]/60 space-y-3">
            <h2 className="font-serif font-bold text-lg text-[#242824] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#963E23]" />
              <span>Brochure Guidelines & Studio Notes</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4D534D]">
              {category.specialNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A1E] mt-2 shrink-0" />
                  <span className={note.includes('*') ? 'font-semibold text-[#963E23]' : ''}>
                    {note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Activity Cards Catalog */}
      <section aria-labelledby="activity-cards-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E2DDD0] pb-4">
          <div>
            <h2 id="activity-cards-heading" className="font-serif font-bold text-2xl sm:text-3xl text-[#242824]">
              Activities in {category.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#4D534D] mt-1">
              Explore all handcrafted activities and formats available under this category.
            </p>
          </div>
          <div className="text-xs font-medium text-[#245449] bg-[#DCE6D9] px-3 py-1 rounded-full self-start sm:self-auto">
            {category.items?.length || 0} Options Available
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {category.items?.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl border border-[#E2DDD0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden hover:border-[#245449]/40"
            >
              {/* Image Frame */}
              <div className="relative bg-[#FAF7F0] border-b border-[#E2DDD0] p-4 flex items-center justify-center overflow-hidden h-56 sm:h-64">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="text-xs text-[#4D534D] italic">Visual in Brochure</div>
                )}

                {item.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#245449] shadow-xs border border-[#E2DDD0]">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#242824] group-hover:text-[#245449] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4D534D] leading-relaxed">
                    {item.description}
                  </p>

                  {item.note && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#963E23] bg-[#FFF8E7] px-2.5 py-1 rounded-md">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.note}</span>
                    </div>
                  )}
                </div>


              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Studio Venue & WhatsApp Contact Box */}
      <section aria-labelledby="studio-enquiry-heading" className="bg-[#FAF7F0] rounded-3xl p-6 sm:p-10 border border-[#E2DDD0] shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <h2 id="studio-enquiry-heading" className="font-serif font-bold text-2xl sm:text-3xl text-[#242824]">
              Reserve Your Session or Plan a Group Outing
            </h2>
            <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
              We coordinate sessions directly on WhatsApp to confirm timing, instructor availability, and materials for your chosen activity.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#242824] pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#C86F50]" />
                <span>5th Floor, INOX, Vega Circle Mall, Siliguri</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#8C6A1E]" />
                <span>Open Daily 11:00 AM – 8:00 PM</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <button
              type="button"
              onClick={() => handleItemEnquiry()}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-sm font-semibold rounded-2xl shadow-xs transition-colors cursor-pointer w-full text-center"
            >
              <MessageCircle className="w-4 h-4 text-[#E9BF69]" />
              <span>Enquire on WhatsApp</span>
            </button>
            <Link
              to="/visit"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-white hover:bg-[#F1ECE1] border border-[#E2DDD0] text-xs font-semibold text-[#242824] rounded-2xl transition-colors text-center"
            >
              <span>Directions & Parking</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brochure Categories Navigator */}
      <aside aria-label="Other Brochure Categories" className="space-y-4 pt-4 border-t border-[#E2DDD0]">
        <div className="flex items-center justify-between">
          <h2 className="font-serif font-bold text-lg sm:text-xl text-[#242824]">
            Explore Other Brochure Categories
          </h2>
          <span className="text-xs text-[#4D534D]">12 Categories Total</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {BROCHURE_CATEGORIES.map((cat) => {
            const isActive = cat.slug === category.slug;
            return (
              <Link
                key={cat.id}
                to={`/activities/${cat.slug}`}
                className={`p-3 rounded-xl border text-xs text-center transition-all flex items-center justify-center min-h-[44px] ${
                  isActive
                    ? 'bg-[#245449] text-[#F8F4EB] border-[#245449] font-bold shadow-xs'
                    : 'bg-white hover:bg-[#FAF7F0] text-[#242824] border-[#E2DDD0] hover:border-[#245449]/40'
                }`}
              >
                <span className="truncate font-medium">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
