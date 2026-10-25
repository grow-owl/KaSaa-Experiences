import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Utensils,
  MessageCircle,
  BookOpen,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { allDishes, menuCategories, originalMenuBookPages } from '../data/menuData';

export default function MenuPage({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookletOpen, setBookletOpen] = useState(false);
  const [bookletPage, setBookletPage] = useState(0);

  // Group dishes by category according to search and active tab
  const categoriesToRender = useMemo(() => {
    const list = menuCategories.filter((c) => c.id !== 'all');

    const activeList = activeCategory === 'all'
      ? list
      : list.filter((c) => c.id === activeCategory);

    const q = searchQuery.toLowerCase().trim();

    return activeList.map((cat) => {
      let items = allDishes.filter((d) => d.category === cat.id);

      if (q) {
        items = items.filter(
          (d) =>
            d.name.toLowerCase().includes(q) ||
            d.variants.toLowerCase().includes(q) ||
            d.category.toLowerCase().includes(q) ||
            (d.description && d.description.toLowerCase().includes(q))
        );
      }

      return {
        ...cat,
        dishes: items,
      };
    }).filter((catGroup) => catGroup.dishes.length > 0);
  }, [activeCategory, searchQuery]);

  // Dish counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: allDishes.length };
    allDishes.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter tabs list
  const tabs = [
    { id: 'all', label: 'All Items' },
    ...menuCategories.filter(c => c.id !== 'all'),
  ];

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      <SEOHead
        title="KaSaa Food Menu | Authentic Cafe & Street Food"
        description="Explore KaSaa Experiences food menu in Siliguri. Mumbai pav bhaji, grilled sandwiches, artisan pizzas, steamed momos, Korean ramen, beverages with exact prices."
        canonicalPath="/menu"
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
          <span className="text-[#242824] font-semibold">Food Menu</span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
          KaSaa Food Menu
        </h1>

        <p className="text-sm sm:text-base text-[#535953] leading-relaxed">
          Good food, great company and something delicious to enjoy between all the fun.
        </p>

        {/* Clean GST Note from Original Menu */}
        <p className="text-xs text-[#7A827A]">
          * Prices mentioned are exclusive of GST.
        </p>

        {/* Quick Action Button: View original handwritten chalk menu */}
        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={() => setBookletOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-[#F2EDE2] text-[#242824] border border-[#D5CEBF] text-xs sm:text-sm font-semibold shadow-xs transition-all hover:border-[#245449] active:scale-98 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#245449]" />
            <span>View Original Chalk Menu Book</span>
          </button>
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
              placeholder="Search dishes (e.g. momo, pav bhaji, pizza, ramen, shakes)..."
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
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${isActive
                  ? 'bg-[#245449] text-white shadow-xs'
                  : 'bg-white hover:bg-[#F1ECE1] text-[#4A504A] border border-[#E2DDD0]'
                  }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isActive
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
          3. GROUPED CATEGORY SECTIONS (H2 HEADING + DISH CARDS)
          ------------------------------------------------------------- */}
      <div className="space-y-16">
        {categoriesToRender.map((catGroup) => (
          <section key={catGroup.id} id={catGroup.id.toLowerCase().replace(/\s+/g, '-')} className="space-y-6">
            {/* Category H2 Section Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#E2DDD0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E9BF69]/20 border border-[#E9BF69]/30 flex items-center justify-center text-[#245449]">
                  <Utensils className="w-5 h-5 text-[#245449]" />
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#242824] tracking-tight">
                  {catGroup.label}
                </h2>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#7A827A] border border-[#E2DDD0] shadow-2xs">
                {catGroup.dishes.length} {catGroup.dishes.length === 1 ? 'dish' : 'dishes'}
              </span>
            </div>

            {/* Grid of Dishes for this Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {catGroup.dishes.map((dish) => (
                <article
                  key={dish.id}
                  className="group rounded-3xl bg-white border border-[#E2DDD0] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
                >
                  {/* Dish Photo */}
                  <div className="relative aspect-square bg-[#EAE5D9] overflow-hidden">
                    <picture>
                      <source srcSet={dish.image} type="image/webp" />
                      <img
                        src={dish.fallbackImage}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>

                    {/* Exact Price Pill */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-xl bg-black/75 backdrop-blur-sm text-[#E9BF69] text-xs font-bold tracking-tight shadow-xs">
                      {dish.priceDisplay}
                    </div>
                  </div>

                  {/* Dish Info */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 bg-white">
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif font-bold text-lg text-[#242824] group-hover:text-[#245449] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                        <span className="font-bold text-sm sm:text-base text-[#245449] shrink-0">
                          {dish.priceDisplay}
                        </span>
                      </div>

                      {/* Variants / Choices displayed as small chips */}
                      {dish.variants && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {dish.variants
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
        ))}

        {categoriesToRender.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E2DDD0] space-y-3">
            <Utensils className="w-10 h-10 text-[#8C938C] mx-auto" />
            <h3 className="text-lg font-serif font-bold text-[#242824]">No dishes matched "{searchQuery}"</h3>
            <p className="text-xs text-[#6F776F]">Try searching another name or reset the category filter.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="px-5 py-2.5 bg-[#245449] text-white text-xs font-semibold rounded-xl hover:bg-[#1B4037] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* -------------------------------------------------------------
          4. GROUP CATERING (PAGE 10 THEME & ARTWORK)
          ------------------------------------------------------------- */}
      <section className="rounded-3xl bg-[#193B33] text-[#F8F4EB] p-6 sm:p-10 border border-[#2F6D5F]/50 shadow-md">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Authentic Page 10 Artwork Card */}
          <div className="w-48 sm:w-56 shrink-0 rounded-2xl overflow-hidden border border-[#3E7D6F] shadow-lg bg-[#141814]">
            <picture>
              <source srcSet="/images/menu/menu_page_10.webp" type="image/webp" />
              <img
                src="/images/menu/menu_page_10.jpg"
                alt="Big Group, Bigger Appetite? Customised food menus for 10+ guests at KaSaa"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          {/* Text and Actions */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9BF69]/20 text-[#E9BF69] text-xs font-bold tracking-wider border border-[#E9BF69]/30">
              <span>FOR GROUPS & GATHERINGS</span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#F8F4EB] leading-tight">
              Big Group, Bigger Appetite?
            </h2>

            <p className="text-sm text-[#DCE6D9] leading-relaxed max-w-xl">
              For 10+ guests, we offer customised party and event menus. From momo platters and pizza boxes to curated beverage bars, our kitchen takes care of everything.
            </p>

            <blockquote className="italic text-xs text-[#E9BF69] border-l-2 border-[#E9BF69]/40 pl-3">
              "The best conversations happen over food." — KaSaa Experiences
            </blockquote>

            <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                type="button"
                onClick={() => onOpenEnquiry ? onOpenEnquiry('food_group', 'Group Food Menu') : null}
                className="px-6 py-3 bg-[#E9BF69] hover:bg-[#D4A950] text-[#193B33] text-xs font-bold rounded-xl flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#193B33]" />
                <span>Enquire Custom Group Menu</span>
              </button>

              <button
                type="button"
                onClick={() => setBookletOpen(true)}
                className="px-5 py-3 bg-[#245449] hover:bg-[#1E453C] text-white border border-[#3E7D6F] text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#E9BF69]" />
                <span>Flip Menu Booklet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. BOOKLET MODAL (PAGE-BY-PAGE FLIP OF ALL 10 AUTHENTIC MENU PAGES)
          ------------------------------------------------------------- */}
      {bookletOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Original KaSaa Chalk Menu Book"
        >
          <div className="relative w-full max-w-2xl bg-[#141814] rounded-3xl border border-[#3E7D6F] overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-[#2A3F36] flex items-center justify-between text-white bg-[#19241E]">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                <BookOpen className="w-4 h-4 text-[#E9BF69]" />
                <span>KaSaa Original Chalk Menu ({bookletPage + 1} / {originalMenuBookPages.length})</span>
              </div>
              <button
                type="button"
                onClick={() => setBookletOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close menu booklet"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Active Chalk Page */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/40">
              <div className="max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0C0E0C]">
                <picture>
                  <source srcSet={originalMenuBookPages[bookletPage].webp} type="image/webp" />
                  <img
                    src={originalMenuBookPages[bookletPage].src}
                    alt={originalMenuBookPages[bookletPage].title}
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
                {originalMenuBookPages[bookletPage].title}
              </div>

              <button
                type="button"
                onClick={() => setBookletPage((p) => Math.min(originalMenuBookPages.length - 1, p + 1))}
                disabled={bookletPage === originalMenuBookPages.length - 1}
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
