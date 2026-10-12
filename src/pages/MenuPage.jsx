import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Search, 
  Sparkles, 
  Info, 
  Utensils, 
  MessageCircle, 
  BookOpen, 
  X,
  ChevronLeft,
  ChevronRight,
  Flame,
  Star,
  CheckCircle2,
  Clock
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { allDishes, menuCategories, originalMenuBookPages } from '../data/menuData';

export default function MenuPage({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookletOpen, setBookletOpen] = useState(false);
  const [bookletPage, setBookletPage] = useState(0);

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    return allDishes.filter((dish) => {
      let matchesCategory = true;
      if (activeCategory === 'popular') {
        matchesCategory = Boolean(dish.tag);
      } else if (activeCategory !== 'all') {
        matchesCategory = dish.category === activeCategory;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        dish.name.toLowerCase().includes(q) ||
        dish.variants.toLowerCase().includes(q) ||
        dish.category.toLowerCase().includes(q) ||
        (dish.description && dish.description.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Dish counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: allDishes.length, popular: allDishes.filter(d => Boolean(d.tag)).length };
    allDishes.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter tabs list (including Popular / Bestsellers)
  const tabs = [
    { id: 'all', label: 'All Items' },
    { id: 'popular', label: 'Bestsellers & Specials', icon: Flame },
    ...menuCategories.filter(c => c.id !== 'all'),
  ];

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SEOHead
        title="KaSaa Food Menu | Artisan Cafe, Snacks & Drinks"
        description="Explore KaSaa Experiences food menu in Siliguri. Mumbai pav bhaji, grilled sandwiches, artisan pizzas, steamed momos, Korean ramen, beverages with exact prices."
        canonicalPath="/menu"
      />

      {/* -------------------------------------------------------------
          1. MINIMAL PREMIUM HEADER
          ------------------------------------------------------------- */}
      <div className="space-y-6 pb-8 border-b border-[#E2DDD0]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#535953]">
              <Link to="/" className="hover:text-[#245449] flex items-center gap-1 font-medium">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-[#242824] font-semibold">Food Menu</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9BF69]/20 text-[#7D5B18] text-xs font-bold tracking-wider border border-[#E9BF69]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#B37B15]" />
              <span>FOOD IS OUR LOVE LANGUAGE</span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
              KaSaa Food Menu
            </h1>

            <p className="text-sm sm:text-base text-[#535953] leading-relaxed">
              Food like never before. Good vibe, great food. Also, food is our love language.
            </p>
          </div>

          {/* Quick Action Button: View original handwritten chalk menu */}
          <div className="shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={() => setBookletOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-[#F2EDE2] text-[#242824] border border-[#D5CEBF] text-xs sm:text-sm font-semibold shadow-xs transition-all hover:border-[#245449] active:scale-98"
            >
              <BookOpen className="w-4 h-4 text-[#245449]" />
              <span>View Original Chalk Menu Book</span>
            </button>
          </div>
        </div>

        {/* Clean GST Note */}
        <p className="text-xs text-[#7A827A]">
          * Prices mentioned are exclusive of GST, as on the official menu card.
        </p>
      </div>

      {/* -------------------------------------------------------------
          2. MINIMAL SEARCH & CATEGORY FILTER TABS
          ------------------------------------------------------------- */}
      <div className="space-y-4">
        {/* Search bar + Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="relative w-full sm:max-w-md">
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
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C938C] hover:text-[#242824] font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          <p className="text-xs text-[#6F776F] font-medium">
            Showing <span className="font-bold text-[#242824]">{filteredDishes.length}</span> dishes
            {activeCategory !== 'all' && (
              <span> in <span className="font-semibold text-[#245449]">{activeCategory === 'popular' ? 'Bestsellers' : activeCategory}</span></span>
            )}
          </p>
        </div>

        {/* Category Scrollable Pill Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const count = categoryCounts[tab.id] || 0;
            const isActive = activeCategory === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-[#245449] text-white shadow-xs'
                    : 'bg-white hover:bg-[#F1ECE1] text-[#4A504A] border border-[#E2DDD0]'
                }`}
              >
                {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E9BF69]' : 'text-[#C86F50]'}`} />}
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
          3. INDIVIDUAL DISH CARDS (MINIMAL & ULTRA-PREMIUM)
          ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredDishes.map((dish) => (
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
                  loading="eager"
                />
              </picture>

              {/* Tag / Badge */}
              {dish.tag && (
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#245449]/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase shadow-xs flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 fill-[#E9BF69] text-[#E9BF69]" />
                  <span>{dish.tag}</span>
                </div>
              )}

              {/* Exact Price Pill */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-xl bg-black/75 backdrop-blur-sm text-[#E9BF69] text-xs font-bold tracking-tight shadow-xs">
                {dish.priceDisplay}
              </div>
            </div>

            {/* Dish Info */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 bg-white">
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-[#8C938C] uppercase tracking-wider">
                  {dish.category}
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif font-bold text-lg text-[#242824] group-hover:text-[#245449] transition-colors leading-snug">
                    {dish.name}
                  </h3>
                  <span className="font-bold text-sm sm:text-base text-[#245449] shrink-0">
                    {dish.priceDisplay}
                  </span>
                </div>

                {/* Variants / Choices */}
                {dish.variants && (
                  <div className="pt-0.5">
                    <span className="inline-block text-[11px] px-2.5 py-0.5 rounded-lg bg-[#F5EFE4] text-[#4F564F] font-medium border border-[#EBE4D5]">
                      <span className="text-[#8C938C]">Options: </span>
                      <span className="italic">{dish.variants}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredDishes.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#E2DDD0] space-y-3">
          <Utensils className="w-10 h-10 text-[#8C938C] mx-auto" />
          <h3 className="text-lg font-serif font-bold text-[#242824]">No dishes matched "{searchQuery}"</h3>
          <p className="text-xs text-[#6F776F]">Try searching another name or reset the category filter.</p>
          <button
            type="button"
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            className="px-5 py-2.5 bg-[#245449] text-white text-xs font-semibold rounded-xl hover:bg-[#1B4037] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

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
                alt="KaSaa Group Custom Menu - Page 10 Artwork"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </picture>
          </div>

          {/* Details & CTA */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#F8F4EB] leading-tight">
              Big Group, Bigger Appetite? We've Got You.
            </h2>

            <p className="text-sm sm:text-base text-[#DCE6D9]/90 leading-relaxed">
              For 10+ guests, we offer customised menus — just reach out!
            </p>

            <p className="font-serif italic text-sm text-[#E9BF69]">
              "The best conversations happen over food."
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenEnquiry ? onOpenEnquiry('celebration', 'group_dining') : null}
                className="px-7 py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-sm active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Enquire Group Custom Menu</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. ORIGINAL HANDWRITTEN CHALK MENU BOOKLET MODAL
          ------------------------------------------------------------- */}
      {bookletOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
          onClick={() => setBookletOpen(false)}
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-4xl flex items-center justify-between text-white pb-3 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-white/20 rounded-md text-xs font-semibold">
                Original Chalk Menu Page {bookletPage + 1} of {originalMenuBookPages.length}
              </span>
              <span className="text-sm font-semibold hidden sm:inline">
                {originalMenuBookPages[bookletPage].title}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setBookletOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Booklet Page Display */}
          <div
            className="relative max-w-3xl max-h-[82vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={originalMenuBookPages[bookletPage].image}
              alt={originalMenuBookPages[bookletPage].title}
              className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setBookletPage((p) => (p - 1 + originalMenuBookPages.length) % originalMenuBookPages.length);
              }}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all border border-white/20"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setBookletPage((p) => (p + 1) % originalMenuBookPages.length);
              }}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all border border-white/20"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
