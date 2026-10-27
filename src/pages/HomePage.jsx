import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {

  Sparkles,
  MapPin,
  Star,
  ArrowRight,
  Play,
  Film,
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
import { INSTAGRAM_REELS } from '../data/reelsData';
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

// 10 Best-Selling KaSaa Activities for Side-Scroll Reveal
const TOP_10_ACTIVITIES = [
  {
    id: 'wheel-pottery',
    title: 'Wheel Pottery',
    price: 900,
    duration: '45-60 min',
    image: '/images/wheel-pottery-real.jpg',
  },
  {
    id: 'classic-canvas',
    title: 'Classic Canvas',
    price: 500,
    duration: '60 min',
    image: '/images/brochure/classic-canvas-real.webp',
  },
  {
    id: 'textured-3d-moon',
    title: 'Textured 3D Moon',
    price: 900,
    duration: '60 min',
    image: '/images/brochure/textured-3d-moon.webp',
  },
  {
    id: 'metallic-frame',
    title: 'Metallic Frame',
    price: 800,
    duration: '45 min',
    image: '/images/brochure/metallic-frame.webp',
  },
  {
    id: 'charm-bracelet',
    title: 'Charm Bracelet',
    price: 300,
    duration: '30 min',
    image: '/images/brochure/charm-bracelet.webp',
  },
  {
    id: 'tote-bag-painting',
    title: 'Tote Bag Painting',
    price: 500,
    duration: '45 min',
    image: '/images/brochure/tote-bag-painting.webp',
  },
  {
    id: 'scrapbook-making',
    title: 'Scrapbook Making',
    price: 1000,
    duration: '75 min',
    image: '/images/brochure/scrapbook-making.webp',
  },
  {
    id: 'textured-canvas',
    title: 'Textured Canvas',
    price: 700,
    duration: '60 min',
    image: '/images/brochure/textured-canvas.webp',
  },
  {
    id: 'resin-clock',
    title: 'Resin Clock',
    price: 1500,
    duration: '90 min',
    image: '/images/brochure/resin-clock.webp',
  },
  {
    id: 'fluid-bear',
    title: 'Fluid Bear',
    price: 1000,
    duration: '45 min',
    image: '/images/brochure/fluid-bear.webp',
  },
];

// Couple Date Experiences for "Date Plans, Sorted!" Section
const DATE_PLANS = [
  {
    id: 'table-setup-date',
    title: 'Table Setup Date',
    price: '5,000',
    description: 'A beautifully styled table for your special moments.',
    image: '', // reserved for future upload
  },
  {
    id: 'pottery-date',
    title: 'Pottery Date',
    price: '5,500',
    description: 'Get your hands messy and create something together.',
    image: '', // reserved for future upload
  },
  {
    id: 'canopy-date',
    title: 'Canopy Date',
    price: '7,000',
    description: 'A cosy, dreamy setup made for just the two of you.',
    image: '', // reserved for future upload
  },
  {
    id: 'cooking-date',
    title: 'Cooking Date',
    price: '7,000',
    description: 'Cook up something delicious and make a date of it.',
    image: '', // reserved for future upload
  },
  {
    id: 'movie-night',
    title: 'Movie Night',
    price: '10,000',
    description: 'Your favourite movie, a cosy setup, and quality time together.',
    image: '', // reserved for future upload
  },
  {
    id: 'picnic-date',
    title: 'Picnic Date',
    price: '10,000',
    description: 'All the charm of a picnic, with a setup made for two.',
    image: '', // reserved for future upload
  },
];

// 10 Group Experiences for "Planning a Group, Experience?" Section
const GROUP_EXPERIENCES = [
  {
    id: 'birthdays-milestones',
    title: 'Birthdays & Milestones',
    description: 'Celebrate your special day with hands-on activities, fun experiences, and the people who matter most.',
    image: '', // reserved for future upload
  },
  {
    id: 'baby-showers',
    title: 'Baby Showers',
    description: 'Celebrate the mum-to-be with thoughtful décor, fun activities and all her favourite people.',
    image: '', // reserved for future upload
  },
  {
    id: 'bridal-showers',
    title: 'Bridal Showers',
    description: 'Bring the girls together for a day of crafts, laughter and celebrating the bride-to-be.',
    image: '', // reserved for future upload
  },
  {
    id: 'anniversary-celebrations',
    title: 'Anniversary Celebrations',
    description: 'Celebrate your journey together with a special setup and an experience you’ll both love.',
    image: '', // reserved for future upload
  },
  {
    id: 'private-parties',
    title: 'Private Parties & Get-Togethers',
    description: 'Good company, fun activities and a space to celebrate your way.',
    image: '', // reserved for future upload
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    description: 'Swap the usual office routine for creative workshops, team games and some well-deserved fun.',
    image: '', // reserved for future upload
  },
  {
    id: 'kitty-parties',
    title: 'Kitty Parties',
    description: 'Catch up with your favourite people over games, creative activities and lots of laughter.',
    image: '', // reserved for future upload
  },
  {
    id: 'farewell-parties',
    title: 'Farewell Parties',
    description: 'Make the last get-together extra special with activities, games and memories to take along.',
    image: '', // reserved for future upload
  },
  {
    id: 'festive-celebrations',
    title: 'Festive Celebrations',
    description: 'Bring everyone together for festive activities, creative fun and a little celebration.',
    image: '', // reserved for future upload
  },
  {
    id: 'friends-family-outings',
    title: 'Friends & Family Outings',
    description: 'Spend time together painting, playing games or trying something new at KaSaa.',
    image: '', // reserved for future upload
  },
];

// 10 Featured Food Items for "Yes, We Serve Food Too!" Section
const FEATURED_FOOD_ITEMS = [
  {
    id: 'peri-peri-fries',
    title: 'Peri - Peri Fries',
    price: '250',
    image: '', // reserved for future upload
  },
  {
    id: 'chinese-bhel',
    title: 'Chinese Bhel',
    price: '250',
    image: '', // reserved for future upload
  },
  {
    id: 'korean-ramen',
    title: 'Korean Ramen',
    price: '300',
    image: '', // reserved for future upload
  },
  {
    id: 'maggie-chop',
    title: 'Maggie Chop',
    price: '250',
    image: '', // reserved for future upload
  },
  {
    id: 'noodles',
    title: 'Noodles',
    price: '300',
    image: '', // reserved for future upload
  },
  {
    id: 'farmhouse-pizza',
    title: 'Farmhouse Pizza',
    price: '350',
    image: '', // reserved for future upload
  },
  {
    id: 'white-sauce-pasta',
    title: 'White Sauce Pasta',
    price: '350',
    image: '', // reserved for future upload
  },
  {
    id: 'cheese-garlic-bread',
    title: 'Cheese Garlic Bread',
    price: '250',
    image: '', // reserved for future upload
  },
  {
    id: 'nachos-with-salsa',
    title: 'Nachos with Salsa',
    price: '200',
    image: '', // reserved for future upload
  },
  {
    id: 'wai-wai-bhel',
    title: 'Wai Wai Bhel',
    price: '200',
    image: '', // reserved for future upload
  },
];

// Simple visible section divider with subtle shadow
function SectionDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
      <div className="h-[1.5px] w-full bg-[#D5CEBF] shadow-[0_1px_3px_rgba(0,0,0,0.07)] rounded-full" />
    </div>
  );
}

export default function HomePage({ onOpenEnquiry }) {
  const navigate = useNavigate();

  // Hero auto-changing image carousel state
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  // Top 10 Activities Horizontal Scroll State & Ref
  const activitiesScrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkActivitiesScroll = React.useCallback(() => {
    const container = activitiesScrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const children = container.children;
    if (!children || children.length === 0) return;

    // Boundary snap overrides for instant accuracy at extremes
    if (scrollLeft <= 15) {
      setActiveIndex(0);
      return;
    }
    if (scrollLeft >= scrollWidth - clientWidth - 25) {
      setActiveIndex(children.length - 1);
      return;
    }

    // Precise center-focal calculation: identify the card closest to the visible center
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const childRect = children[i].getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(childCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    setActiveIndex(closestIndex);
  }, []);

  const scrollToActivityIndex = (index) => {
    const container = activitiesScrollRef.current;
    if (!container) return;
    const children = container.children;
    if (children && children[index]) {
      children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setActiveIndex(index);
    }
  };

  const scrollActivities = (direction) => {
    const container = activitiesScrollRef.current;
    if (!container) return;
    const children = container.children;
    if (!children || children.length === 0) return;

    const targetIndex = direction === 'left'
      ? Math.max(0, activeIndex - 1)
      : Math.min(children.length - 1, activeIndex + 1);

    scrollToActivityIndex(targetIndex);
  };

  useEffect(() => {
    const el = activitiesScrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkActivitiesScroll, { passive: true });
      window.addEventListener('resize', checkActivitiesScroll);
      checkActivitiesScroll();
      return () => {
        el.removeEventListener('scroll', checkActivitiesScroll);
        window.removeEventListener('resize', checkActivitiesScroll);
      };
    }
  }, [checkActivitiesScroll]);

  // Date Plans Side-Scroll State & Handlers (same as Our Best Sellers)
  const datePlansScrollRef = useRef(null);
  const [activeDateIndex, setActiveDateIndex] = useState(0);

  const checkDatePlansScroll = React.useCallback(() => {
    const container = datePlansScrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const children = container.children;
    if (!children || children.length === 0) return;

    if (scrollLeft <= 15) {
      setActiveDateIndex(0);
      return;
    }
    if (scrollLeft >= scrollWidth - clientWidth - 25) {
      setActiveDateIndex(children.length - 1);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const childRect = children[i].getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(childCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    setActiveDateIndex(closestIndex);
  }, []);

  const scrollToDateIndex = (index) => {
    const container = datePlansScrollRef.current;
    if (!container) return;
    const children = container.children;
    if (children && children[index]) {
      children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setActiveDateIndex(index);
    }
  };

  const scrollDatePlans = (direction) => {
    const container = datePlansScrollRef.current;
    if (!container) return;
    const children = container.children;
    if (!children || children.length === 0) return;

    const targetIndex = direction === 'left'
      ? Math.max(0, activeDateIndex - 1)
      : Math.min(children.length - 1, activeDateIndex + 1);

    scrollToDateIndex(targetIndex);
  };

  useEffect(() => {
    const el = datePlansScrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkDatePlansScroll, { passive: true });
      window.addEventListener('resize', checkDatePlansScroll);
      checkDatePlansScroll();
      return () => {
        el.removeEventListener('scroll', checkDatePlansScroll);
        window.removeEventListener('resize', checkDatePlansScroll);
      };
    }
  }, [checkDatePlansScroll]);

  // Group Experiences Side-Scroll State & Handlers (same as Our Best Sellers)
  const groupScrollRef = useRef(null);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const checkGroupScroll = React.useCallback(() => {
    const container = groupScrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const children = container.children;
    if (!children || children.length === 0) return;

    if (scrollLeft <= 15) {
      setActiveGroupIndex(0);
      return;
    }
    if (scrollLeft >= scrollWidth - clientWidth - 25) {
      setActiveGroupIndex(children.length - 1);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const childRect = children[i].getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(childCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    setActiveGroupIndex(closestIndex);
  }, []);

  const scrollToGroupIndex = (index) => {
    const container = groupScrollRef.current;
    if (!container) return;
    const children = container.children;
    if (children && children[index]) {
      children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setActiveGroupIndex(index);
    }
  };

  const scrollGroupExperiences = (direction) => {
    const container = groupScrollRef.current;
    if (!container) return;
    const children = container.children;
    if (!children || children.length === 0) return;

    const targetIndex = direction === 'left'
      ? Math.max(0, activeGroupIndex - 1)
      : Math.min(children.length - 1, activeGroupIndex + 1);

    scrollToGroupIndex(targetIndex);
  };

  useEffect(() => {
    const el = groupScrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkGroupScroll, { passive: true });
      window.addEventListener('resize', checkGroupScroll);
      checkGroupScroll();
      return () => {
        el.removeEventListener('scroll', checkGroupScroll);
        window.removeEventListener('resize', checkGroupScroll);
      };
    }
  }, [checkGroupScroll]);

  // Food Items Side-Scroll State & Handlers
  const foodScrollRef = useRef(null);
  const [activeFoodIndex, setActiveFoodIndex] = useState(0);

  const checkFoodScroll = React.useCallback(() => {
    const container = foodScrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const children = container.children;
    if (!children || children.length === 0) return;

    if (scrollLeft <= 15) {
      setActiveFoodIndex(0);
      return;
    }
    if (scrollLeft >= scrollWidth - clientWidth - 25) {
      setActiveFoodIndex(children.length - 1);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const childRect = children[i].getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(childCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    setActiveFoodIndex(closestIndex);
  }, []);

  const scrollToFoodIndex = (index) => {
    const container = foodScrollRef.current;
    if (!container) return;
    const children = container.children;
    if (children && children[index]) {
      children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setActiveFoodIndex(index);
    }
  };

  const scrollFoodItems = (direction) => {
    const container = foodScrollRef.current;
    if (!container) return;
    const children = container.children;
    if (!children || children.length === 0) return;

    const targetIndex = direction === 'left'
      ? Math.max(0, activeFoodIndex - 1)
      : Math.min(children.length - 1, activeFoodIndex + 1);

    scrollToFoodIndex(targetIndex);
  };

  useEffect(() => {
    const el = foodScrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkFoodScroll, { passive: true });
      window.addEventListener('resize', checkFoodScroll);
      checkFoodScroll();
      return () => {
        el.removeEventListener('scroll', checkFoodScroll);
        window.removeEventListener('resize', checkFoodScroll);
      };
    }
  }, [checkFoodScroll]);

  useEffect(() => {
    if (isHeroPaused) return;
    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isHeroPaused]);

  const nextHeroSlide = () => {
    setHeroSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevHeroSlide = () => {
    setHeroSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
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
      <section className="relative py-14 sm:py-18 lg:py-20">
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
                <Link
                  to="/activities"
                  aria-label="Explore creative workshops and activities"
                  className="px-6 py-3.5 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] font-semibold text-sm rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 group hover:shadow-md active:scale-98"
                >
                  <span>Explore DIY Activities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/celebrations"
                  aria-label="View creative date ideas and celebration options"
                  className="px-6 py-3.5 bg-white hover:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-98"
                >
                  <Heart className="w-4 h-4 text-[#963E23]" />
                  <span>Date Ideas & Celebrations</span>
                </Link>
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
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
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

                  {/* Previous / Next Arrow Controls */}
                  <button
                    type="button"
                    onClick={prevHeroSlide}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 hover:bg-[#245449] text-[#242824] hover:text-white shadow-md backdrop-blur-xs flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextHeroSlide}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 hover:bg-[#245449] text-[#242824] hover:text-white shadow-md backdrop-blur-xs flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Pill Badge */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FAF7F0] border border-[#E2DDD0] text-xs font-semibold text-[#193B33] shadow-xs">
                  <span>SILIGURI'S HAPPY PLACE(ISH)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------
          2. TOP 10 BEST-SELLING ACTIVITIES — SIDE SCROLL REVEAL
          ------------------------------------------------------------- */}
      <section id="experiences" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header: Our Best Sellers */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
            Our Best Sellers
          </h2>
          <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
            The experiences everyone loves and the activities you'll want to try first!
          </p>
        </div>

        {/* Horizontal Side-Scroll Cards Track with Reveal Snap */}
        <div className="relative">
          <div
            ref={activitiesScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth"
          >
            {TOP_10_ACTIVITIES.map((activity) => (
              <article
                key={activity.id}
                className="w-[260px] sm:w-[300px] md:w-[320px] shrink-0 snap-center group rounded-3xl bg-white border border-[#E2DDD0] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* Visual Image with Duration Overlay */}
                <div className="relative aspect-4/3 bg-[#EAE5D9] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Duration Time Pill */}
                  <div className="absolute bottom-3 left-3 text-white text-[11px] font-semibold flex items-center gap-1.5 bg-black/55 backdrop-blur-xs px-2.5 py-1 rounded-lg shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-[#E9BF69]" />
                    <span>{activity.duration}</span>
                  </div>
                </div>

                {/* Content Section: Title, Price & Book Now button (No description/category) */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#242824] group-hover:text-[#245449] transition-colors leading-snug">
                    {activity.title}
                  </h3>

                  {/* Price Row & Book Action Button */}
                  <div className="pt-3 border-t border-[#F1ECE1] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#737A73] block">
                        Price
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif font-black text-xl sm:text-2xl text-[#245449]">
                          ₹{activity.price}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenEnquiry ? onOpenEnquiry(activity.title) : null}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#245449] hover:bg-[#193B33] text-white text-xs font-bold transition-all shadow-xs group-hover:shadow-md active:scale-95 cursor-pointer"
                    >
                      <span>Book Now</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Pagination Dots with Left/Right Arrows */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollActivities('left')}
              disabled={activeIndex === 0}
              aria-label="Previous activities"
              className="p-2 rounded-full border border-[#D5CEBF] bg-white text-[#245449] hover:bg-[#FAF7F0] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {TOP_10_ACTIVITIES.map((activity, idx) => (
                <button
                  key={activity.id}
                  type="button"
                  onClick={() => scrollToActivityIndex(idx)}
                  aria-label={`Go to activity ${idx + 1}: ${activity.title}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${activeIndex === idx
                    ? 'w-7 sm:w-8 h-2.5 bg-[#245449] shadow-xs'
                    : 'w-2.5 h-2.5 bg-[#D5CEBF] hover:bg-[#245449]/50 hover:scale-125'
                    }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollActivities('right')}
              disabled={activeIndex === TOP_10_ACTIVITIES.length - 1}
              aria-label="Next activities"
              className="p-2 rounded-full border border-[#D5CEBF] bg-white text-[#245449] hover:bg-[#FAF7F0] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Explore All Activities CTA Button */}
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/activities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] font-semibold text-sm sm:text-base transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
            >
              <span>Explore All Activities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------
          3. TOGETHERNESS / DATES & CELEBRATIONS SECTION
          ------------------------------------------------------------- */}
      <section id="together" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
              Date Plans, Sorted!
            </h2>
            <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
              Skip your usual plans and make your next date a little more memorable.
            </p>
          </div>

          {/* Horizontal Side-Scroll Date Cards Track with Reveal Snap */}
          <div className="relative">
            <div
              ref={datePlansScrollRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth"
            >
              {DATE_PLANS.map((plan) => (
                <article
                  key={plan.id}
                  className="w-[260px] sm:w-[300px] md:w-[320px] shrink-0 snap-center group rounded-3xl bg-white border border-[#E2DDD0] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
                >
                  {/* Image Placeholder Space (Reserved for future image upload) */}
                  <div className="relative aspect-4/3 bg-[#EAE5D9] overflow-hidden flex items-center justify-center">
                    {plan.image ? (
                      <img
                        src={plan.image}
                        alt={plan.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-[#8C8577] space-y-2 p-4 text-center select-none">
                        <div className="w-12 h-12 rounded-2xl bg-[#DFD8CA]/80 border border-[#D5CEBF] flex items-center justify-center text-[#963E23] shadow-2xs">
                          <Heart className="w-5 h-5 text-[#C86F50]" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#736C5F]">
                          Photo Coming Soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Section: Title, Short Description, Price & Book Action Button */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#242824] group-hover:text-[#245449] transition-colors leading-snug">
                        {plan.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#535953] leading-relaxed line-clamp-2">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Row & Book Action Button */}
                    <div className="pt-3 border-t border-[#F1ECE1] flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#737A73] block">
                          Price
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif font-black text-xl sm:text-2xl text-[#245449]">
                            ₹{plan.price}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onOpenEnquiry ? onOpenEnquiry('date', `${plan.title} (₹${plan.price})`) : null}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#245449] hover:bg-[#193B33] text-white text-xs font-bold transition-all shadow-xs group-hover:shadow-md active:scale-95 cursor-pointer"
                      >
                        <Heart className="w-3.5 h-3.5 text-[#E9BF69]" />
                        <span>Book Now</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Interactive Pagination Dots with Left/Right Arrows */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollDatePlans('left')}
                disabled={activeDateIndex === 0}
                aria-label="Previous date plan"
                className="p-2 rounded-full border border-[#D5CEBF] bg-white text-[#245449] hover:bg-[#FAF7F0] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {DATE_PLANS.map((plan, idx) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => scrollToDateIndex(idx)}
                    aria-label={`Go to date plan ${idx + 1}: ${plan.title}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${activeDateIndex === idx
                      ? 'w-7 sm:w-8 h-2.5 bg-[#245449] shadow-xs'
                      : 'w-2.5 h-2.5 bg-[#D5CEBF] hover:bg-[#245449]/50 hover:scale-125'
                      }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollDatePlans('right')}
                disabled={activeDateIndex === DATE_PLANS.length - 1}
                aria-label="Next date plan"
                className="p-2 rounded-full border border-[#D5CEBF] bg-white text-[#245449] hover:bg-[#FAF7F0] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Plan a Date or Anniversary CTA Button */}
            <div className="mt-8 sm:mt-10 text-center">
              <Link
                to="/celebrations#dates"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] font-semibold text-sm sm:text-base transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#E9BF69]" />
                <span>Plan a Date or Anniversary</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------
          3B. PLANNING, GROUP, EXPERIENCE? — SIDE SCROLL REVEAL (10 Cards)
          ------------------------------------------------------------- */}
      <section id="group-experiences" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
            Planning a Group Experience?
          </h2>
          <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
            From birthday parties and bridal showers to team outings & reunions, we'll help you bring everyone together for memorable time at Kasaa.
          </p>
        </div>

        {/* Horizontal Side-Scroll 10 Cards Track with Reveal Snap (Same as Our Best Sellers) */}
        <div className="relative">
          <div
            ref={groupScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth"
          >
            {GROUP_EXPERIENCES.map((exp) => (
              <article
                key={exp.id}
                className="w-[260px] sm:w-[300px] md:w-[320px] shrink-0 snap-center group rounded-3xl bg-white border border-[#E2DDD0] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* Image Placeholder Space (Reserved for future image upload) */}
                <div className="relative aspect-4/3 bg-[#EAE5D9] overflow-hidden flex items-center justify-center">
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-[#8C8577] space-y-2 p-4 text-center select-none">
                      <div className="w-12 h-12 rounded-2xl bg-[#DFD8CA]/80 border border-[#D5CEBF] flex items-center justify-center text-[#245449] shadow-2xs">
                        <Users className="w-5 h-5 text-[#245449]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#736C5F]">
                        Photo Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section: Title & Description */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start space-y-2">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#242824] group-hover:text-[#245449] transition-colors leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#535953] leading-relaxed line-clamp-3">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Pagination Dots with Left/Right Arrows */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollGroupExperiences('left')}
              disabled={activeGroupIndex === 0}
              aria-label="Previous group experience"
              className="p-2 rounded-full border border-[#D5CEBF] bg-white text-[#245449] hover:bg-[#FAF7F0] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {GROUP_EXPERIENCES.map((exp, idx) => (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => scrollToGroupIndex(idx)}
                  aria-label={`Go to group experience ${idx + 1}: ${exp.title}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${activeGroupIndex === idx
                    ? 'w-7 sm:w-8 h-2.5 bg-[#245449] shadow-xs'
                    : 'w-2.5 h-2.5 bg-[#D5CEBF] hover:bg-[#245449]/50 hover:scale-125'
                    }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollGroupExperiences('right')}
              disabled={activeGroupIndex === GROUP_EXPERIENCES.length - 1}
              aria-label="Next group experience"
              className="p-2 rounded-full border border-[#D5CEBF] bg-white text-[#245449] hover:bg-[#FAF7F0] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Plan Your Celebration CTA Button */}
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/celebrations"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] font-semibold text-sm sm:text-base transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
            >
              <Users className="w-4 h-4 text-[#E9BF69]" />
              <span>Plan Your Celebration with us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------
          4. FOOD MENU PREVIEW — YES, WE SERVE FOOD TOO!
          ------------------------------------------------------------- */}
      <section id="menu-preview" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
            Yes, We Serve Food Too!
          </h2>

          <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
            While you spin clay or paint a canvas, our kitchen serves up hot momos, grilled sandwiches, delicious pizzas, ramen bowls and refreshing beverages to keep you fuelled through all the fun.
          </p>
        </div>

        {/* Horizontal Side-Scroll Food Cards Track with Reveal Snap */}
        <div className="relative space-y-4">
          {/* Centered Badges: Food is our Love Language & Our Best Sellers in matching design */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 px-1 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9BF69]/20 text-[#7D5B18] text-xs font-bold tracking-wider border border-[#E9BF69]/30">
              <Utensils className="w-3.5 h-3.5 text-[#B37B15]" />
              <span>Food is our Love Language</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9BF69]/20 text-[#7D5B18] text-xs font-bold tracking-wider border border-[#E9BF69]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#B37B15]" />
              <span>Our Best Sellers</span>
            </div>
          </div>

          <div
            ref={foodScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth"
          >
            {FEATURED_FOOD_ITEMS.map((dish) => (
              <article
                key={dish.id}
                className="w-[240px] sm:w-[280px] md:w-[300px] shrink-0 snap-center group rounded-3xl bg-white border border-[#E2DDD0] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* Image Placeholder Space (Reserved for future image upload) */}
                <div className="relative aspect-4/3 bg-[#EAE5D9] overflow-hidden flex items-center justify-center">
                  {dish.image ? (
                    <img
                      src={dish.image}
                      alt={dish.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-[#8C8577] space-y-2 p-4 text-center select-none">
                      <div className="w-12 h-12 rounded-2xl bg-[#DFD8CA]/80 border border-[#D5CEBF] flex items-center justify-center text-[#245449] shadow-2xs">
                        <Utensils className="w-5 h-5 text-[#245449]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#736C5F]">
                        Photo Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section: Title & Price */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#242824] group-hover:text-[#245449] transition-colors leading-snug">
                    {dish.title}
                  </h3>

                  {/* Price Row */}
                  <div className="pt-3 border-t border-[#F1ECE1]">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#737A73] block">
                      Price
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif font-black text-xl sm:text-2xl text-[#245449]">
                        ₹{dish.price}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Pagination Dots with Left/Right Arrows */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollFoodItems('left')}
              disabled={activeFoodIndex === 0}
              aria-label="Previous food item"
              className="p-2 rounded-full border border-[#D5CEBF] bg-white text-[#245449] hover:bg-[#FAF7F0] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {FEATURED_FOOD_ITEMS.map((dish, idx) => (
                <button
                  key={dish.id}
                  type="button"
                  onClick={() => scrollToFoodIndex(idx)}
                  aria-label={`Go to food item ${idx + 1}: ${dish.title}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${activeFoodIndex === idx
                    ? 'w-7 sm:w-8 h-2.5 bg-[#245449] shadow-xs'
                    : 'w-2.5 h-2.5 bg-[#D5CEBF] hover:bg-[#245449]/50 hover:scale-125'
                    }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollFoodItems('right')}
              disabled={activeFoodIndex === FEATURED_FOOD_ITEMS.length - 1}
              aria-label="Next food item"
              className="p-2 rounded-full border border-[#D5CEBF] bg-white text-[#245449] hover:bg-[#FAF7F0] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Explore Our Food Menu CTA Button */}
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] font-semibold text-sm sm:text-base transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
            >
              <Utensils className="w-4 h-4 text-[#E9BF69]" />
              <span>Explore Our Food Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------
          5. INSTAGRAM REELS (8 REELS PLACEHOLDERS)
          ------------------------------------------------------------- */}
      <section id="reels" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9BF69]/15 border border-[#E9BF69]/40 text-[#7A5813] text-xs font-bold tracking-wide">
            <Film className="w-3.5 h-3.5 text-[#B37B15]" />
            <span>STUDIO REELS & STORIES</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
            Watch KaSaa in Action
          </h2>
          <p className="text-sm sm:text-base text-[#4D534D] max-w-xl mx-auto leading-relaxed">
            Real workshops, joyful celebrations, and creative moments at Vega Circle Mall. Tap any reel to watch on Instagram.
          </p>
        </div>

        {/* 8 Instagram Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_REELS.map((reel) => (
            <a
              key={reel.id}
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch reel: ${reel.title} on Instagram`}
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 border border-[#E2DDD0] bg-neutral-900 hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Thumbnail image if available, else curated background gradient */}
              {reel.thumbnail ? (
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
              )}

              {/* Decorative dark gradient vignette for readable text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none" />

              {/* Top Header: Instagram Reel Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold shadow-xs">
                  <svg
                    className="w-3.5 h-3.5 text-[#E1306C]"
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
                  <span>Reel</span>
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-[#E9BF69] group-hover:text-[#193B33] group-hover:border-[#E9BF69] transition-all duration-300">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-current" />
                </div>
              </div>

              {/* Bottom Details & Meta */}
              <div className="relative z-10 space-y-1.5 text-left">
                <h3 className="text-white font-serif font-bold text-sm sm:text-base leading-snug group-hover:text-[#E9BF69] transition-colors line-clamp-2">
                  {reel.title}
                </h3>
                <p className="text-white/75 text-xs line-clamp-1">
                  {reel.caption}
                </p>
                <div className="pt-1 flex items-center gap-1 text-[11px] font-bold text-[#E9BF69] group-hover:underline">
                  <span>Watch on Instagram</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Social Link */}
        <div className="mt-10 text-center">
          <a
            href={siteConfig.social?.instagram || 'https://www.instagram.com/kasaa.experiences/'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] font-semibold text-sm rounded-2xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 group"
          >
            <svg
              className="w-4 h-4 text-[#E1306C] group-hover:scale-110 transition-transform"
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
            <span>Follow Us on Instagram @kasaa.experiences</span>
            <ArrowRight className="w-4 h-4 text-[#4D534D] group-hover:translate-x-1 transition-transform ml-0.5" />
          </a>
        </div>
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------
          5. CUSTOMER REVIEWS + COMPACT BOOKING EXPLAINER
          ------------------------------------------------------------- */}
      <section id="reviews" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Reviews Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
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

      <SectionDivider />

      {/* -------------------------------------------------------------
          6. FAQS ACCORDION (Side-by-side on desktop)
          ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
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

      <SectionDivider />

      {/* -------------------------------------------------------------
          7. VISIT US SECTION
          ------------------------------------------------------------- */}
      <section id="visit" className="py-16 lg:py-20">
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
