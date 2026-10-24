import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Star,
  ArrowRight,
  Heart,
  Users,
  PartyPopper,
  Calendar,
  MessageCircle,
  Clock,
  Compass,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Music,
  Phone,
  Utensils,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Check,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Accordion from '../components/Accordion';
import { siteConfig } from '../data/siteConfig';
import { BROCHURE_CATEGORIES } from '../data/brochureActivities';
import { celebrationOfferings } from '../data/celebrations';
import { reviews, bookingSteps } from '../data/reviews';
import { faqs } from '../data/faqs';
import { galleryItems, galleryCategories } from '../data/gallery';
import { landingMenuFeatured, allDishes } from '../data/menuData';

// 13 Authentic KaSaa Experience Slides with tailored alignment
const HERO_SLIDES = [
  {
    id: 1,
    src: '/images/hero-carousel/slide_1.jpeg',
    alt: 'Birthday celebration with handcrafted photo frames at KaSaa Experiences',
    title: 'Celebrations & Birthday Parties',
    objectPosition: 'center 62%',
  },
  {
    id: 2,
    src: '/images/hero-carousel/slide_2.jpeg',
    alt: 'Handcrafted personalized denim heart charm making at KaSaa Experiences',
    title: 'Handmade Charms & DIY Crafts',
    objectPosition: 'center 35%',
  },
  {
    id: 3,
    src: '/images/hero-carousel/slide_3.jpeg',
    alt: 'Guided canvas painting workshop at KaSaa Experiences Siliguri',
    title: 'Canvas Painting Workshops',
    objectPosition: 'center 30%',
  },
  {
    id: 4,
    src: '/images/hero-carousel/slide_4.jpeg',
    alt: 'Wearable textile art and customized painted cap at KaSaa',
    title: 'Wearable Textile & Cap Art',
    objectPosition: 'center 38%',
  },
  {
    id: 5,
    src: '/images/hero-carousel/slide_5.jpeg',
    alt: 'Friends creating personalized tote bags and jewelry at KaSaa',
    title: 'Personalized Tote Bag Art',
    objectPosition: 'center 42%',
  },
  {
    id: 6,
    src: '/images/hero-carousel/slide_6.jpeg',
    alt: 'Cake decorating celebration party gathering at KaSaa',
    title: 'Cake Decorating Parties',
    objectPosition: 'center center',
  },
  {
    id: 7,
    src: '/images/hero-carousel/slide_7.jpeg',
    alt: 'Creative date outing for couples with pottery and art at KaSaa',
    title: 'Couples & Creative Date Ideas',
    objectPosition: 'center 45%',
  },
  {
    id: 8,
    src: '/images/hero-carousel/slide_8.jpeg',
    alt: 'Kids workshop making plushies and crafts at KaSaa',
    title: 'Kids DIY Workshops & Plushies',
    objectPosition: 'center 60%',
  },
  {
    id: 9,
    src: '/images/hero-carousel/slide_9.jpeg',
    alt: 'Friends holding painted pebble art in front of our kind of MAGIC neon at KaSaa',
    title: 'Pebble Art & Creative Memories',
    objectPosition: 'center 35%',
  },
  {
    id: 10,
    src: '/images/hero-carousel/slide_10.jpeg',
    alt: 'Friends enjoying charm bracelet making and cafe ambiance at KaSaa',
    title: 'Charm Bracelets & Bestie Outings',
    objectPosition: 'center 50%',
  },
  {
    id: 11,
    src: '/images/hero-carousel/slide_11.jpeg',
    alt: 'Vision board collage workshop at KaSaa Experiences',
    title: 'Vision Boards & Collage Art',
    objectPosition: 'center 45%',
  },
  {
    id: 12,
    src: '/images/hero-carousel/slide_12.jpeg',
    alt: 'Couple enjoying pizza making date at KaSaa Experiences cafe',
    title: 'Artisan Pizza Dates & Cafe Treats',
    objectPosition: 'center 48%',
  },
  {
    id: 13,
    src: '/images/hero-carousel/slide_13.jpeg',
    alt: 'Vintage decoupage and letter art group workshop at KaSaa',
    title: 'Vintage Decoupage & Paper Crafts',
    objectPosition: 'center 60%',
  },
];

export default function HomePage({ onOpenEnquiry }) {
  const navigate = useNavigate();

  // Hero auto-changing image carousel state
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  useEffect(() => {
    if (isHeroPaused) return;
    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isHeroPaused]);

  // Experience Match Finder state (Single line, custom interactive dropdowns)
  const [matchCategory, setMatchCategory] = useState('');
  const [matchPrice, setMatchPrice] = useState('all');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const categoryDropdownRef = useRef(null);
  const priceDropdownRef = useRef(null);

  const categoryOptions = [
    { value: '', label: 'Category', sublabel: 'All creative offerings' },
    { value: 'Food', label: 'Food', sublabel: 'Fresh cafe menu & treats' },
    { value: 'Activities', label: 'Activities', sublabel: '12 Workshop categories' },
    { value: 'Celebrations', label: 'Celebrations', sublabel: 'Dates, birthdays & groups' },
  ];

  const priceOptions = [
    { value: 'all', label: 'Price Range', sublabel: 'Any budget' },
    { value: 'under-300', label: 'Under ₹300', sublabel: 'Pocket-friendly sessions' },
    { value: '300-700', label: '₹300 – ₹700', sublabel: 'Popular workshops' },
    { value: '700-1500', label: '₹700 – ₹1500', sublabel: 'Signature art experiences' },
    { value: '1500-plus', label: '₹1500+', sublabel: 'Curated celebration setups' },
  ];

  const categoryLabel =
    categoryOptions.find((c) => c.value === matchCategory)?.label || 'Category';
  const priceLabel =
    priceOptions.find((p) => p.value === matchPrice)?.label || 'Price Range';

  // Close dropdowns on outside click or Escape
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target)
      ) {
        setIsCategoryOpen(false);
      }
      if (
        priceDropdownRef.current &&
        !priceDropdownRef.current.contains(event.target)
      ) {
        setIsPriceOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsCategoryOpen(false);
        setIsPriceOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMatchSubmit = (e) => {
    e.preventDefault();
    setIsCategoryOpen(false);
    setIsPriceOpen(false);

    if (matchCategory === 'Food') {
      const el = document.getElementById('menu-preview');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/menu');
      }
      return;
    }

    if (matchCategory === 'Celebrations') {
      const el = document.getElementById('together');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Activities or general
    const el = document.getElementById('experiences');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/activities');
    }
  };

  // Gallery filtering state
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState('all');

  const filteredGallery =
    selectedGalleryCategory === 'all'
      ? galleryItems.slice(0, 6)
      : galleryItems.filter((item) => item.category === selectedGalleryCategory).slice(0, 6);

  const dateOffering = celebrationOfferings.find((c) => c.id === 'dates');
  const friendsOffering = celebrationOfferings.find((c) => c.id === 'friends');
  const familyOffering = celebrationOfferings.find((c) => c.id === 'family');
  const birthdayOffering = celebrationOfferings.find((c) => c.id === 'birthdays');

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Pottery, Painting & Creative Moments in Siliguri"
        description="Discover hands-on pottery workshops, canvas painting, and memorable creative time together for couples, friends, and celebrations at Vega Circle Mall, Siliguri."
        canonicalPath="/"
      />

      {/* -------------------------------------------------------------
          1. HERO SECTION (Editorial Desktop / Compact Mobile)
          ------------------------------------------------------------- */}
      <section className="relative py-14 sm:py-18 lg:py-20 pb-16 sm:pb-24 border-b border-[#E8E0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions (Desktop ~48%, 6 cols in 12-col grid) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Main Heading */}
              <h1 className="font-serif font-bold text-5xl sm:text-5xl lg:text-6xl text-[#242824] tracking-tight leading-[1.12]">
                Make Something. <br />
                <span className="text-[#963E23] italic font-normal">Make Memories.</span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-[#4D534D] leading-relaxed max-w-xl">
                Discover pottery, painting, and creative experiences that bring people together. Step away from the usual routine, get your hands creative, and enjoy meaningful moments with the people who matter.
              </p>

              {/* Primary & Secondary Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href="#experiences"
                  aria-label="Explore creative workshops and activities"
                  className="px-6 py-3.5 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] font-semibold text-sm rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 group hover:shadow-md active:scale-98"
                >
                  <span>Explore DIY Activities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#together"
                  aria-label="View creative date ideas and celebration options"
                  className="px-6 py-3.5 bg-white hover:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-98"
                >
                  <Heart className="w-4 h-4 text-[#963E23]" />
                  <span>Date Ideas & Celebrations</span>
                </a>
              </div>

              {/* Verified Rating */}
              <div className="pt-4 border-t border-[#E8E0D0] flex items-center gap-2.5 text-xs text-[#4D534D]">
                <div className="flex items-center text-[#E9BF69]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E9BF69]" />
                  ))}
                </div>
                <span className="font-bold text-[#242824] text-sm">4.9 / 5.0</span>
                <span className="text-[#6D756D]"> Verified Customer Rating</span>
              </div>
            </div>

            {/* Right Column: Auto-changing Hero Image Carousel */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-none space-y-3.5 flex flex-col items-center">
                {/* Carousel Container */}
                <div
                  className="relative w-full aspect-[4/5] sm:aspect-[4/5] max-h-[480px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#EAE5D9] group select-none"
                  onMouseEnter={() => setIsHeroPaused(true)}
                  onMouseLeave={() => setIsHeroPaused(false)}
                  role="region"
                  aria-label="KaSaa Experiences Photo Highlights"
                >
                  {/* Stacked Slides for Smooth Cross-fade */}
                  {HERO_SLIDES.map((slide, index) => {
                    const isActive = index === heroSlideIndex;
                    return (
                      <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                      >
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          style={{ objectPosition: slide.objectPosition }}
                          className="w-full h-full object-cover transition-transform duration-7000 ease-out transform scale-100 group-hover:scale-102"
                          loading={index === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Pill Badge */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FAF7F0] border border-[#E2DDD0] text-xs font-semibold text-[#193B33] shadow-xs">
                  <span>SILIGURI'S HAPPY PLACE(ISH)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sentence Match Finder Widget (Reference Design - Single Line) */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E8E0D0] text-center">
            <div className="max-w-3xl mx-auto px-2">
              <form onSubmit={handleMatchSubmit} className="space-y-4 sm:space-y-5">
                {/* Sentence: Single line on desktop/tablet, refined smaller font */}
                <div className="font-light text-base sm:text-lg md:text-xl lg:text-[22px] text-[#242824] leading-relaxed tracking-tight flex items-center justify-center flex-wrap sm:flex-nowrap gap-x-2 sm:gap-x-2.5 gap-y-2">
                  <span className="whitespace-nowrap">I’m looking for</span>

                  {/* Dropdown 1: Category */}
                  <div className="relative inline-block" ref={categoryDropdownRef}>
                    <button
                      type="button"
                      onClick={() => {
                        setIsCategoryOpen((prev) => !prev);
                        setIsPriceOpen(false);
                      }}
                      aria-expanded={isCategoryOpen}
                      aria-label="Select category"
                      className="inline-flex items-center gap-1 sm:gap-1.5 border-b-2 border-[#7E909B] hover:border-[#245449] pb-0.5 text-[#526B73] hover:text-[#245449] font-normal transition-colors cursor-pointer group whitespace-nowrap focus:outline-none"
                    >
                      <span>{categoryLabel}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#526B73] group-hover:text-[#245449] transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    {/* Category Popover Menu (Scroll-type) */}
                    {isCategoryOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-60 sm:w-64 max-h-44 sm:max-h-48 overflow-y-auto bg-[#FAF7F0] border border-[#D5CEBF] rounded-xl shadow-xl z-50 p-1 text-left animate-in fade-in zoom-in-95 duration-150 overscroll-contain"
                        role="listbox"
                      >
                        {categoryOptions.map((opt) => {
                          const isSelected = matchCategory === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => {
                                setMatchCategory(opt.value);
                                setIsCategoryOpen(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${isSelected
                                ? 'bg-[#245449] text-white font-medium shadow-xs'
                                : 'text-[#242824] hover:bg-[#EAE4D5]'
                                }`}
                            >
                              <div>
                                <div className="font-medium">{opt.label}</div>
                                <div
                                  className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[#6D756D]'
                                    }`}
                                >
                                  {opt.sublabel}
                                </div>
                              </div>
                              {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0 ml-2" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <span className="whitespace-nowrap">within</span>

                  {/* Dropdown 2: Price Range */}
                  <div className="relative inline-block" ref={priceDropdownRef}>
                    <button
                      type="button"
                      onClick={() => {
                        setIsPriceOpen((prev) => !prev);
                        setIsCategoryOpen(false);
                      }}
                      aria-expanded={isPriceOpen}
                      aria-label="Select price range"
                      className="inline-flex items-center gap-1 sm:gap-1.5 border-b-2 border-[#7E909B] hover:border-[#245449] pb-0.5 text-[#526B73] hover:text-[#245449] font-normal transition-colors cursor-pointer group whitespace-nowrap focus:outline-none"
                    >
                      <span>{priceLabel}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#526B73] group-hover:text-[#245449] transition-transform duration-200 ${isPriceOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    {/* Price Range Popover Menu (Scroll-type) */}
                    {isPriceOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-60 sm:w-64 max-h-44 sm:max-h-48 overflow-y-auto bg-[#FAF7F0] border border-[#D5CEBF] rounded-xl shadow-xl z-50 p-1 text-left animate-in fade-in zoom-in-95 duration-150 overscroll-contain"
                        role="listbox"
                      >
                        {priceOptions.map((opt) => {
                          const isSelected = matchPrice === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => {
                                setMatchPrice(opt.value);
                                setIsPriceOpen(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${isSelected
                                ? 'bg-[#245449] text-white font-medium shadow-xs'
                                : 'text-[#242824] hover:bg-[#EAE4D5]'
                                }`}
                            >
                              <div>
                                <div className="font-medium">{opt.label}</div>
                                <div
                                  className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[#6D756D]'
                                    }`}
                                >
                                  {opt.sublabel}
                                </div>
                              </div>
                              {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0 ml-2" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Action Button */}
                <div>
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#9AA5A8] hover:bg-[#245449] text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase rounded-none shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    <span>MEET YOUR ART MATCH</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. EXPLORE WORKSHOPS & ACTIVITIES — 12 CATEGORIES GRID
          ------------------------------------------------------------- */}
      <section id="experiences" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
            Explore All Activities
          </h2>
          <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
            Curated hands-on workshop categories from our official Activity Brochure. All materials provided for every session.
          </p>
        </div>

        {/* 12 Activity Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BROCHURE_CATEGORIES.map((category) => (
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
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Category Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-[#242824] group-hover:text-[#245449] transition-colors leading-snug">
                    {category.name}
                  </h3>

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
      </section>

      {/* -------------------------------------------------------------
          3. TOGETHERNESS / DATES & CELEBRATIONS SECTION
          ------------------------------------------------------------- */}
      <section id="together" className="py-16 lg:py-24 bg-[#EBF1E9] border-y border-[#DCE6D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#245449]">
              Meaningful Moments Together
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
              Time Well Spent, Together
            </h2>
            <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
              Step away from the usual dinner-and-movie routine. Experience side-by-side creativity for romantic dates, friend reunions, and memorable group milestones.
            </p>
          </div>

          {/* 1. FEATURED: DATES & ANNIVERSARIES SPOTLIGHT (Full-width horizontal card, perfectly balanced) */}
          {dateOffering && (
            <div className="bg-white rounded-3xl border border-[#D5CEBF] shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              {/* Image Column */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <ImagePlaceholder
                  src="/images/daiting_1.webp"
                  alt="Couple enjoying pottery and painting together on a date"
                  title="Creative Date Outing"
                  type="together"
                  aspectRatio="4/3"
                  objectPosition="center 25%"
                  className="shadow-md rounded-2xl w-full"
                />
              </div>

              {/* Text & Action Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C86F50]/15 text-[#963E23]">
                  <Heart className="w-3.5 h-3.5 fill-[#C86F50]" />
                  <span>Couples & Special Occasions</span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#242824]">
                    {dateOffering.title}
                  </h3>
                  <p className="font-serif italic text-sm sm:text-base text-[#963E23] mt-1">
                    {dateOffering.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
                  {dateOffering.description}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('date', 'Date or Anniversary Experience')}
                    aria-label="Plan a Date or Anniversary experience enquiry via WhatsApp"
                    className="py-3.5 px-6 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-98"
                  >
                    <Heart className="w-4 h-4 text-[#E9BF69]" />
                    <span>Plan a Date or Anniversary</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. GROUP EXPERIENCES (Friends, Family & Milestones in a balanced 3-column row) */}
          <div className="space-y-6 pt-4">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h3 className="font-serif font-bold text-2xl text-[#242824]">
                Friends & Group Celebrations
              </h3>
              <p className="text-xs sm:text-sm text-[#4D534D]">
                Shared tables, guided creative workshops, and screen-free bonding for every gathering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Friends Card */}
              {friendsOffering && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D5CEBF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#DCE6D9] text-[#193B33] border border-[#BFD0BC]">
                        Friends & Groups
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#E2DDD0] flex items-center justify-center text-[#963E23]">
                        <Users className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-xl text-[#242824]">
                        {friendsOffering.title}
                      </h4>
                      <p className="font-serif italic text-xs text-[#963E23] mt-1">
                        {friendsOffering.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4D534D] leading-relaxed">
                      {friendsOffering.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F1ECE1] mt-6">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry('celebration', 'Friends Group Outing')}
                      aria-label="Plan a Friends Outing enquiry via WhatsApp"
                      className="w-full py-3 px-4 bg-[#DCE6D9] hover:bg-[#C2D2BD] text-[#193B33] text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 text-[#245449]" />
                      <span>Plan a Friends Outing</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Family Card */}
              {familyOffering && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D5CEBF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EBF0E7] text-[#245449] border border-[#BFD0BC]">
                        Family & All Ages
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#E2DDD0] flex items-center justify-center text-[#E9BF69]">
                        <Sparkles className="w-4 h-4 text-[#963E23]" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-xl text-[#242824]">
                        {familyOffering.title}
                      </h4>
                      <p className="font-serif italic text-xs text-[#963E23] mt-1">
                        {familyOffering.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4D534D] leading-relaxed">
                      {familyOffering.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F1ECE1] mt-6">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry('celebration', 'Family Creative Time')}
                      aria-label="Plan a Family Outing enquiry via WhatsApp"
                      className="w-full py-3 px-4 bg-[#F8F4EB] hover:bg-[#EAE4D5] text-[#193B33] border border-[#D5CEBF] text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 text-[#245449]" />
                      <span>Plan Family Outing</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Birthday Card */}
              {birthdayOffering && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D5CEBF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C86F50]/15 text-[#963E23] border border-[#C86F50]/30">
                        Milestones & Private Events
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#E2DDD0] flex items-center justify-center text-[#963E23]">
                        <PartyPopper className="w-4 h-4 text-[#963E23]" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-xl text-[#242824]">
                        {birthdayOffering.title}
                      </h4>
                      <p className="font-serif italic text-xs text-[#963E23] mt-1">
                        {birthdayOffering.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4D534D] leading-relaxed">
                      {birthdayOffering.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F1ECE1] mt-6">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry('celebration', 'Birthday / Private Celebration')}
                      aria-label="Plan a Celebration enquiry via WhatsApp"
                      className="w-full py-3 px-4 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 active:scale-98 shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-[#E9BF69]" />
                      <span>Plan a Celebration</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. CURATED GALLERY PREVIEW
          ------------------------------------------------------------- */}
      <section id="gallery" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#963E23]">
              Visual Showcase
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
              A Little Peek Inside KaSaa
            </h2>
            <p className="text-sm text-[#4D534D] max-w-lg">
              Authentic glimpses of clay spinning on wheels, fresh acrylic canvases, and visitors creating together on the 5th floor of Vega Circle Mall.
            </p>
          </div>

          {/* Category Filter Chips (3 on line 1, 2 on line 2 on mobile) */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2" role="tablist" aria-label="Gallery category filters">
            {/* Mobile Line 1: 3 filters */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {galleryCategories.slice(0, 3).map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedGalleryCategory === cat.id}
                  onClick={() => setSelectedGalleryCategory(cat.id)}
                  className={`px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${selectedGalleryCategory === cat.id
                    ? 'bg-[#245449] text-[#F8F4EB] shadow-xs'
                    : 'bg-[#F1ECE1] hover:bg-[#E5DEC9] text-[#4D534D]'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mobile Line 2: 2 filters */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {galleryCategories.slice(3, 5).map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedGalleryCategory === cat.id}
                  onClick={() => setSelectedGalleryCategory(cat.id)}
                  className={`px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${selectedGalleryCategory === cat.id
                    ? 'bg-[#245449] text-[#F8F4EB] shadow-xs'
                    : 'bg-[#F1ECE1] hover:bg-[#E5DEC9] text-[#4D534D]'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-white border border-[#E2DDD0] shadow-xs hover:shadow-md transition-shadow flex flex-col"
            >
              <ImagePlaceholder
                src={`/images/${item.filename}`}
                alt={item.alt}
                title={item.title}
                type={item.category === 'pottery-painting' ? 'pottery' : item.category}
                aspectRatio={item.aspectRatio || '3/4'}
                className="rounded-b-none"
              />
              <div className="p-4 bg-white border-t border-[#F1ECE1] flex items-center justify-between mt-auto">
                <div className="min-w-0 pr-2">
                  <h3 className="font-serif font-semibold text-sm text-[#242824] truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4D534D] line-clamp-1">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] font-semibold text-sm rounded-xl transition-all shadow-xs"
          >
            <span>View All Photos & Studio Captions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------------
          FOOD MENU PREVIEW SECTION (EXACTLY 3 IMAGES + SHOW MORE)
          Placed directly above "Loved by People Who Visit"
          ------------------------------------------------------------- */}
      {/* -------------------------------------------------------------
          FOOD MENU SHOWCASE (HERO MENU CARD + RIGHT DESCRIPTION)
          Placed directly above "Loved by People Who Visit"
          ------------------------------------------------------------- */}
      <section id="menu-preview" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F0] border border-[#E2DDD0] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs hover:shadow-sm transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Food Menu Card (Bada Size) */}
            <div className="lg:col-span-5 flex justify-center">
              <Link
                to="/menu"
                className="group relative block w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-[#141814] border border-[#3E473E]"
              >
                <picture>
                  <source srcSet="/images/menu/menu_page_1.webp" type="image/webp" />
                  <img
                    src="/images/menu/menu_page_1.jpg"
                    alt="KaSaa Food Menu Card"
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#245449]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#242824] text-xs sm:text-sm font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>Click to Explore Menu</span>
                    <ArrowRight className="w-4 h-4 text-[#245449]" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Right: Rich Minimal Description & Details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9BF69]/20 text-[#7D5B18] text-xs font-bold tracking-wider border border-[#E9BF69]/30">
                  <Utensils className="w-3.5 h-3.5 text-[#B37B15]" />
                  <span>FOOD IS OUR LOVE LANGUAGE</span>
                </div>

                <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#242824] tracking-tight leading-tight">
                  Food Like Never Before
                </h2>

                <p className="font-serif italic text-base sm:text-lg text-[#963E23]">
                  "Good vibe, great food. The best conversations happen over food."
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
                At KaSaa Experiences, creativity and taste come together. Whether you are spinning clay on the pottery wheel,
                painting a canvas, or enjoying an intimate date or birthday celebration, our studio cafe offers freshly made street
                favorites, hot momos, crisp grilled sandwiches, artisan pizzas, comforting ramen bowls, desserts, and refreshing coolers.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-[#343A34]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245449] shrink-0" />
                  <span>41 Handcrafted Dishes & Drinks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245449] shrink-0" />
                  <span>Street Favs to Artisan Pizzas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245449] shrink-0" />
                  <span>Freshly Prepared While You Create</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245449] shrink-0" />
                  <span>Custom Menus for 10+ Guests</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#245449] hover:bg-[#1B4037] text-white font-semibold text-sm rounded-xl transition-all shadow-sm hover:shadow-md active:scale-98"
                >
                  <span>View Complete Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. CUSTOMER REVIEWS + COMPACT BOOKING EXPLAINER
          ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 bg-[#F2EDE2] border-y border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Reviews Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#245449]">
              Verified Feedback
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
              Loved by People Who Visit
            </h2>
            <p className="text-sm text-[#4D534D]">
              Authentic feedback left by visitors who spent creative afternoons with us in Siliguri.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-[#E2DDD0] shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center text-[#E9BF69]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E9BF69]" />
                    ))}
                  </div>
                  <blockquote className="text-xs sm:text-sm text-[#242824] leading-relaxed italic">
                    "{rev.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#F1ECE1] mt-4 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-[#242824]">{rev.author}</p>
                    <p className="text-[11px] text-[#4D534D]">{rev.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Read more on GBP */}
          <div className="text-center">
            <a
              href={siteConfig.social.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read verified reviews on Google Business Profile"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] text-xs font-semibold shadow-xs"
            >
              <span>Read Verified Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#4D534D]" />
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. FAQS ACCORDION (Side-by-side on desktop)
          ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#963E23]">
              Helpful Information
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#4D534D] leading-relaxed">
              Clear, honest answers about our workshops, beginner sessions, reservations, and location.
            </p>

            <div className="pt-4 border-t border-[#E8E0D0] space-y-2">
              <p className="text-xs font-semibold text-[#242824]">Still have a question?</p>
              <button
                type="button"
                onClick={() => onOpenEnquiry('general')}
                aria-label="Ask custom question via WhatsApp enquiry"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#245449] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat with our studio team on WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. VISIT US SECTION
          ------------------------------------------------------------- */}
      <section className="py-16 lg:py-20 bg-[#FAF7F0] border-t border-[#E8E0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Address & Hours details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#245449]">
                  Studio Location & Hours
                </span>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824]">
                  Plan Your Visit to KaSaa
                </h2>
                <p className="text-sm text-[#4D534D] leading-relaxed">
                  Located comfortably inside Vega Circle Mall on Sevoke Road, Siliguri. Enjoy ample mall parking, escalators, and a calm artistic sanctuary on the 5th floor.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location card */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2DDD0] flex flex-col justify-between space-y-3 shadow-xs">
                  <div>
                    <div className="flex items-center gap-2 text-[#245449] mb-2">
                      <MapPin className="w-4 h-4 text-[#963E23]" />
                      <h3 className="font-serif font-bold text-base text-[#242824]">Studio Address</h3>
                    </div>
                    <p className="text-xs text-[#4D534D] leading-relaxed">
                      {siteConfig.location.fullAddress}
                    </p>
                  </div>

                </div>

                {/* Hours & Contact card */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2DDD0] flex flex-col justify-between space-y-3 shadow-xs">
                  <div>
                    <div className="flex items-center gap-2 text-[#245449] mb-2">
                      <Clock className="w-4 h-4 text-[#8C6A1E]" />
                      <h3 className="font-serif font-bold text-base text-[#242824]">Studio Hours</h3>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <p className="text-base font-bold text-[#242824]">
                        {siteConfig.hours.display}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-[#F1ECE1] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-[#245449] font-semibold">
                      <Phone className="w-3.5 h-3.5 text-[#245449]" />
                      <span>Call / WhatsApp:</span>
                    </div>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-[#242824] hover:text-[#245449] transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={siteConfig.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to KaSaa Experiences on Google Maps"
                  className="px-5 py-3 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-xs font-semibold rounded-xl flex items-center gap-2 shadow-xs transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#E9BF69]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry('general')}
                  aria-label="Enquire about visit timings via WhatsApp"
                  className="px-5 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp: {siteConfig.contact.phone}</span>
                </button>
              </div>
            </div>

            {/* Visual Studio Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-3xl border border-[#E2DDD0] shadow-xs space-y-4">
                <ImagePlaceholder
                  src="/images/gallery-studio-interior.webp"
                  alt="KaSaa Experiences studio space at Vega Circle Mall Siliguri"
                  title="5th Floor Studio Space"
                  type="space"
                  aspectRatio="16/10"
                />

                <div className="space-y-1.5 text-xs text-[#4D534D]">
                  <p className="font-semibold text-[#242824]">
                    How to find us inside Vega Circle Mall:
                  </p>
                  <p>
                    Take the main atrium elevators or escalators up to the <strong>5th Floor</strong> near INOX cinema. Follow signs for KaSaa Experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
