import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  ArrowLeft,
  Search,
  Palette,
  Sparkles,
  BookOpen,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Gem,
  Heart,
  Baby,
  Smile,
  Brush,
  Gift,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  activityCategories,
  allActivities,
  originalBrochurePages,
} from '../data/activitiesData';
import { siteConfig } from '../data/siteConfig';

// Map categories to modern distinct icons
const CATEGORY_ICONS = {
  'Classic Canvas & Pottery': Palette,
  'Fluid Expressions': Sparkles,
  'The Artisan Edit': Brush,
  'Mini Memoirs': Heart,
  'The Textured Tales': Gem,
  'Cloth & Colour': Gift,
  'Out of the Ordinary': Smile,
  'Personalised Memoirs': Sparkles,
  'Resin Reflections': Gem,
  'Decoupage Stories': BookOpen,
  'Soft Play & Entry': Baby,
};

export default function ActivitiesPage({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookletOpen, setBookletOpen] = useState(false);
  const [bookletPage, setBookletPage] = useState(0);

  // Keyboard navigation for brochure booklet modal
  useEffect(() => {
    if (!bookletOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setBookletOpen(false);
      if (e.key === 'ArrowRight') {
        setBookletPage((prev) => (prev < originalBrochurePages.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setBookletPage((prev) => (prev > 0 ? prev - 1 : originalBrochurePages.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bookletOpen]);

  // Lock body scroll when booklet modal is open
  useEffect(() => {
    if (bookletOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [bookletOpen]);

  // Group activities by category according to search and active tab
  const categoriesToRender = useMemo(() => {
    const list = activityCategories.filter((c) => c.id !== 'all');

    const activeList = activeCategory === 'all'
      ? list
      : list.filter((c) => c.id === activeCategory);

    const q = searchQuery.toLowerCase().trim();

    return activeList.map((cat) => {
      let items = allActivities.filter((a) => a.category === cat.id);

      if (q) {
        items = items.filter(
          (a) =>
            a.name.toLowerCase().includes(q) ||
            (a.variants && a.variants.toLowerCase().includes(q)) ||
            a.category.toLowerCase().includes(q) ||
            (a.description && a.description.toLowerCase().includes(q))
        );
      }

      return {
        ...cat,
        activities: items,
      };
    }).filter((catGroup) => catGroup.activities.length > 0);
  }, [activeCategory, searchQuery]);

  // Activity counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: allActivities.length };
    allActivities.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter tabs list
  const tabs = [
    { id: 'all', label: 'All Activities' },
    ...activityCategories.filter(c => c.id !== 'all'),
  ];

  const handleActivityEnquiry = (act) => {
    if (typeof onOpenEnquiry === 'function') {
      onOpenEnquiry('activity', act.name);
      return;
    }
    const phone = siteConfig?.contact?.whatsappNumber || '919800000000';
    const text = encodeURIComponent(
      `Hi KaSaa! I would like to enquire about the "${act.name}" workshop (${act.priceDisplay}) at your Vega Circle Mall studio.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      <SEOHead
        title="KaSaa Activity Menu | Creative Workshops & Experiences"
        description="Explore KaSaa Experiences activity menu in Siliguri. Electric pottery wheel, canvas painting, fluid art, textured 3D moon, resin crafts, and soft play with exact prices."
        canonicalPath="/activities"
      />

      {/* -------------------------------------------------------------
          1. HEADER (CENTERED)
          ------------------------------------------------------------- */}
      <div className="space-y-4 pb-8 border-b border-[#E2DDD0] text-center max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#535953]">
          <Link to="/" className="hover:text-[#245449] flex items-center gap-1 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#242824] font-semibold">Activity Menu</span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
          KaSaa Activity Menu
        </h1>

        <p className="text-sm sm:text-base text-[#535953] leading-relaxed">
          Good vibes, creative spark and something wonderful to make and take home.
        </p>

        {/* Clean GST Note */}
        <p className="text-xs text-[#7A827A]">
          * Prices mentioned are exclusive of GST. All raw materials and artist aprons provided.
        </p>

        {/* Quick Action Buttons: View original activity brochure & Download PDF */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setBookletOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-[#F2EDE2] text-[#242824] border border-[#D5CEBF] text-xs sm:text-sm font-semibold shadow-xs transition-all hover:border-[#245449] active:scale-98 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#245449]" />
            <span>View Original Activity Brochure</span>
          </button>
          <a
            href="/KaSaa-Activity-Brochure.pdf"
            download="KaSaa-Activity-Brochure.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#245449] hover:bg-[#1A3D35] text-[#F8F4EB] border border-[#245449] text-xs sm:text-sm font-semibold shadow-xs transition-all active:scale-98 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#E9BF69]" />
            <span>Download Activity Brochure PDF</span>
          </a>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. SEARCH & CATEGORY JUMP TABS
          ------------------------------------------------------------- */}
      <div className="space-y-4">
        {/* Search bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C938C]" />
            <input
              type="text"
              placeholder="Search activities (e.g. pottery, canvas, fluid bear, resin, moon)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-white border border-[#D5CEBF] rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#245449] focus:border-transparent placeholder-[#8C938C] shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C938C] hover:text-[#242824] font-semibold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Scrollable Pill Tabs */}
        <div className="flex items-center sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const count = categoryCounts[tab.id] || 0;
            const isActive = activeCategory === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#245449] text-white shadow-xs'
                    : 'bg-white hover:bg-[#F1ECE1] text-[#4A504A] border border-[#E2DDD0]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#F2EDE2] text-[#6E756E]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* -------------------------------------------------------------
          3. GROUPED CATEGORY SECTIONS (H2 HEADING + ACTIVITY CARDS)
          ------------------------------------------------------------- */}
      <div className="space-y-16">
        {categoriesToRender.map((catGroup) => {
          const IconComponent = CATEGORY_ICONS[catGroup.id] || Palette;

          return (
            <section
              key={catGroup.id}
              id={catGroup.id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="space-y-6"
            >
              {/* Category H2 Section Header */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#E2DDD0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#E9BF69]/20 border border-[#E9BF69]/30 flex items-center justify-center text-[#245449]">
                    <IconComponent className="w-5 h-5 text-[#245449]" />
                  </div>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#242824] tracking-tight">
                    {catGroup.label || catGroup.id}
                  </h2>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#7A827A] border border-[#E2DDD0] shadow-2xs">
                  {catGroup.activities.length} {catGroup.activities.length === 1 ? 'activity' : 'activities'}
                </span>
              </div>

              {/* Grid of Activities for this Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {catGroup.activities.map((act) => (
                  <article
                    key={act.id}
                    onClick={() => handleActivityEnquiry(act)}
                    className="group rounded-3xl bg-white border border-[#E2DDD0] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Activity Photo - Clean image, NO overlays/badges */}
                    <div className="relative aspect-square bg-[#EAE5D9] overflow-hidden">
                      <picture>
                        <source srcSet={act.image} type="image/webp" />
                        <img
                          src={act.fallbackImage || act.image}
                          alt={act.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            if (act.fallbackImage && e.currentTarget.src !== act.fallbackImage) {
                              e.currentTarget.src = act.fallbackImage;
                            }
                          }}
                        />
                      </picture>
                    </div>

                    {/* Activity Info */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 bg-white">
                      <div className="space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif font-bold text-lg text-[#242824] group-hover:text-[#245449] transition-colors leading-snug">
                            {act.name}
                          </h3>
                          <span className="font-bold text-sm sm:text-base text-[#245449] shrink-0">
                            {act.priceDisplay}
                          </span>
                        </div>

                        {/* Variants / Choices displayed as small chips */}
                        {act.variants && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            {act.variants
                              .split(/[/,]/)
                              .map((opt) => opt.trim())
                              .filter(Boolean)
                              .map((opt, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center text-[10.5px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#F4EFE6] text-[#4A504A] border border-[#E4DEC0] capitalize tracking-wide shadow-2xs"
                                >
                                  {opt}
                                </span>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        {categoriesToRender.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E2DDD0] space-y-3">
            <Palette className="w-10 h-10 text-[#8C938C] mx-auto" />
            <h3 className="text-lg font-serif font-bold text-[#242824]">
              No activities matched "{searchQuery}"
            </h3>
            <p className="text-xs text-[#6F776F]">Try searching another name or reset the category filter.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-5 py-2.5 bg-[#245449] text-white text-xs font-semibold rounded-xl hover:bg-[#1B4037] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* -------------------------------------------------------------
          4. GROUP & TEAM SESSIONS BANNER
          ------------------------------------------------------------- */}
      <section className="rounded-3xl bg-[#193B33] text-[#F8F4EB] p-6 sm:p-10 border border-[#2F6D5F]/50 shadow-md">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Authentic Activity Brochure Cover Card */}
          <div className="w-48 sm:w-56 shrink-0 rounded-2xl overflow-hidden border border-[#3E7D6F] shadow-lg bg-[#141814]">
            <picture>
              <source srcSet="/images/brochure/pages/brochure_page_1.webp" type="image/webp" />
              <img
                src="/images/brochure/pages/brochure_page_1.jpg"
                alt="KaSaa Activity Brochure cover - Siliguri"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          {/* Text and Actions */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9BF69]/20 text-[#E9BF69] text-xs font-bold tracking-wider border border-[#E9BF69]/30">
              <span>WORKSHOPS & PRIVATE BOOKINGS</span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#F8F4EB] leading-tight">
              Planning a Group Art Session?
            </h2>

            <p className="text-sm text-[#DCE6D9] leading-relaxed max-w-xl">
              We host friends groups, kitty parties, birthday craft hours, and team bonding sessions. All materials, guided instructions, and dedicated tables reserved for your crew.
            </p>

            <blockquote className="italic text-xs text-[#E9BF69] border-l-2 border-[#E9BF69]/40 pl-3">
              "Art has a way of bringing people closer together." — KaSaa Experiences
            </blockquote>

            <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                type="button"
                onClick={() =>
                  onOpenEnquiry
                    ? onOpenEnquiry('group_activity', 'Group Workshop Booking')
                    : handleActivityEnquiry({ name: 'Group Workshop', priceDisplay: 'Custom Group' })
                }
                className="px-6 py-3 bg-[#E9BF69] hover:bg-[#D4A950] text-[#193B33] text-xs font-bold rounded-xl flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#193B33]" />
                <span>Enquire Group Workshop</span>
              </button>

              <button
                type="button"
                onClick={() => setBookletOpen(true)}
                className="px-5 py-3 bg-[#245449] hover:bg-[#1E453C] text-white border border-[#3E7D6F] text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#E9BF69]" />
                <span>Flip Brochure Booklet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. BOOKLET MODAL (PAGE-BY-PAGE FLIP OF ALL 8 BROCHURE PAGES)
          ------------------------------------------------------------- */}
      {bookletOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Original KaSaa Activity Brochure"
        >
          <div className="relative w-full max-w-2xl bg-[#141814] rounded-3xl border border-[#3E7D6F] overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-[#2A3F36] flex items-center justify-between text-white bg-[#19241E]">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                <BookOpen className="w-4 h-4 text-[#E9BF69]" />
                <span>
                  KaSaa Activity Brochure ({bookletPage + 1} / {originalBrochurePages.length})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/KaSaa-Activity-Brochure.pdf"
                  download="KaSaa-Activity-Brochure.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#245449] hover:bg-[#2D6659] text-white text-xs font-medium border border-[#3E7D6F] transition-colors"
                  title="Download Brochure PDF"
                >
                  <Download className="w-3.5 h-3.5 text-[#E9BF69]" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => setBookletOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close activity brochure"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Active Brochure Page */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/40">
              <div className="max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0C0E0C]">
                <picture>
                  <source srcSet={originalBrochurePages[bookletPage].image} type="image/webp" />
                  <img
                    src={originalBrochurePages[bookletPage].fallbackImage}
                    alt={originalBrochurePages[bookletPage].title}
                    className="w-full h-auto object-contain max-h-[70vh] mx-auto select-none"
                  />
                </picture>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="px-5 py-3 border-t border-[#2A3F36] flex items-center justify-between bg-[#19241E] text-white">
              <button
                type="button"
                onClick={() => setBookletPage((p) => Math.max(0, p - 1))}
                disabled={bookletPage === 0}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Page</span>
              </button>

              <div className="text-xs text-[#E9BF69] font-medium hidden sm:block">
                {originalBrochurePages[bookletPage].title}
              </div>

              <button
                type="button"
                onClick={() => setBookletPage((p) => Math.min(originalBrochurePages.length - 1, p + 1))}
                disabled={bookletPage === originalBrochurePages.length - 1}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
