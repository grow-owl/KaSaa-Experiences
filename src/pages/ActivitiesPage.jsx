import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Search, 
  Sparkles, 
  ChevronRight, 
  MessageCircle, 
  Palette, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { BROCHURE_CATEGORIES, getBrochureWhatsAppUrl } from '../data/brochureActivities';
import { siteConfig } from '../data/siteConfig';

export default function ActivitiesPage({ onOpenEnquiry }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return BROCHURE_CATEGORIES;
    return BROCHURE_CATEGORIES.filter((cat) => {
      const matchName = cat.name.toLowerCase().includes(q);
      const matchTagline = cat.tagline?.toLowerCase().includes(q);
      const matchItems = cat.items?.some((item) => 
        item.name.toLowerCase().includes(q) || item.description?.toLowerCase().includes(q)
      );
      return matchName || matchTagline || matchItems;
    });
  }, [searchQuery]);

  const handleGeneralEnquiry = () => {
    if (typeof onOpenEnquiry === 'function') {
      onOpenEnquiry('general', 'All Activities & Workshops');
      return;
    }
    const message = `Hi KaSaa! I'd like to enquire about creative activities and workshops at your Vega Circle Mall studio in Siliguri.`;
    const url = getBrochureWhatsAppUrl(message);
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SEOHead
        title="Creative Workshops & Activities | KaSaa Experiences Siliguri"
        description="Explore 12 hands-on creative workshop categories from KaSaa's official Activity Brochure in Siliguri. Canvas painting, fluid art, resin crafts, soft play, and celebrations."
        canonicalPath="/activities"
      />

      {/* -------------------------------------------------------------
          1. MINIMAL PREMIUM HEADER (CENTERED)
          ------------------------------------------------------------- */}
      <div className="space-y-4 pb-8 border-b border-[#E2DDD0] text-center max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#535953]">
          <Link to="/" className="hover:text-[#245449] flex items-center gap-1 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#242824] font-semibold">Activities & Workshops</span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
          Creative Workshops & Activities
        </h1>

        <p className="text-sm sm:text-base text-[#535953] leading-relaxed">
          12 curated hands-on creative workshop categories from the official KaSaa Activity Brochure. All materials provided for every session.
        </p>

        {/* Search Bar */}
        <div className="pt-2 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C938C]" />
            <input
              type="text"
              placeholder="Search activities (e.g. canvas, resin, fluid, tote bag, soft play)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-white border border-[#D5CEBF] rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#245449] focus:border-transparent placeholder-[#8C938C] shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C938C] hover:text-[#242824] font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. ACTIVITY CATEGORIES GRID
          ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCategories.map((category) => (
          <article
            key={category.id}
            className="group rounded-3xl bg-white border border-[#E2DDD0] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
          >
            {/* Category Hero Image */}
            <div className="relative aspect-4/3 bg-[#EAE5D9] overflow-hidden">
              <img
                src={category.heroImage}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>

            {/* Category Content */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h2 className="font-serif font-bold text-xl text-[#242824] group-hover:text-[#245449] transition-colors leading-snug">
                  {category.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#535953] leading-relaxed line-clamp-2">
                  {category.tagline}
                </p>

                {/* Sub-items count & brief inclusions */}
                <div className="pt-2 flex items-center gap-2 text-xs text-[#245449] font-medium">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#FAF7F0] border border-[#E2DDD0] text-[11px] font-semibold text-[#6E5528]">
                    {category.items?.length || 0} Session Options
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to={`/activities/${category.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF7F0] hover:bg-[#245449] text-[#242824] hover:text-white border border-[#D5CEBF] hover:border-[#245449] text-xs font-semibold transition-all group-hover:bg-[#245449] group-hover:text-white group-hover:border-[#245449]"
              >
                <span>View Activities & Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E2DDD0] space-y-3">
          <Palette className="w-10 h-10 text-[#8C938C] mx-auto" />
          <h3 className="text-lg font-serif font-bold text-[#242824]">No activities matched "{searchQuery}"</h3>
          <p className="text-xs text-[#6F776F]">Try searching another keyword or reset the search.</p>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="px-4 py-2 text-xs font-semibold text-[#245449] underline"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* -------------------------------------------------------------
          3. GROUP BOOKINGS & QUESTIONS
          ------------------------------------------------------------- */}
      <div className="rounded-3xl bg-[#FAF7F0] border border-[#E2DDD0] p-6 sm:p-10 text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#242824]">
          Planning a Group Session or Celebration?
        </h2>
        <p className="text-sm text-[#535953] leading-relaxed max-w-xl mx-auto">
          We host birthdays, couple dates, family days, and team outings. Connect with our studio team on WhatsApp for availability and pre-orders.
        </p>
        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={handleGeneralEnquiry}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#245449] hover:bg-[#1B3E36] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#E9BF69]" />
            <span>Enquire for Group Booking</span>
          </button>
        </div>
      </div>
    </div>
  );
}
